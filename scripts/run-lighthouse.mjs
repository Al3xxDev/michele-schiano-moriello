import fs from 'fs';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { createStaticServer } from './serve.mjs';

const CHROME_PATH = '/home/alex/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome';
process.env.CHROME_PATH = CHROME_PATH;

const URL = 'http://localhost:4321';

async function runAudit(isDesktop = false) {
  const flags = {
    logLevel: 'error',
    output: 'json',
    chromePath: CHROME_PATH,
    chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  };

  const config = isDesktop
    ? {
        extends: 'lighthouse:default',
        settings: {
          formFactor: 'desktop',
          screenEmulation: {
            mobile: false,
            width: 1350,
            height: 940,
            deviceScaleFactor: 1,
            disabled: false,
          },
          throttling: {
            rttMs: 40,
            throughputKbps: 10 * 1024,
            cpuSlowdownMultiplier: 1,
            requestLatencyMs: 0,
            downloadThroughputKbps: 0,
            uploadThroughputKbps: 0,
          },
        },
      }
    : {
        extends: 'lighthouse:default',
        settings: {
          formFactor: 'mobile',
        },
      };

  console.log(`\nRunning Lighthouse audit for: ${isDesktop ? 'DESKTOP' : 'MOBILE'}...`);
  const chrome = await chromeLauncher.launch({
    chromePath: CHROME_PATH,
    chromeFlags: flags.chromeFlags,
  });

  flags.port = chrome.port;

  const runnerResult = await lighthouse(URL, flags, config);
  await chrome.kill();

  const report = JSON.parse(runnerResult.report);
  const categories = report.categories;

  const scores = {
    performance: Math.round((categories.performance?.score || 0) * 100),
    accessibility: Math.round((categories.accessibility?.score || 0) * 100),
    bestPractices: Math.round((categories['best-practices']?.score || 0) * 100),
    seo: Math.round((categories.seo?.score || 0) * 100),
  };

  const audits = report.audits;
  const metrics = {
    lcp: audits['largest-contentful-paint']?.displayValue,
    cls: audits['cumulative-layout-shift']?.displayValue,
    tbt: audits['total-blocking-time']?.displayValue,
    fcp: audits['first-contentful-paint']?.displayValue,
    speedIndex: audits['speed-index']?.displayValue,
  };

  return { scores, metrics };
}

async function main() {
  console.log('Starting static production server for Lighthouse audit...');
  const server = await createStaticServer(4321);
  console.log('Server started on port 4321.');

  try {
    // 1. Mobile Audit
    const mobile = await runAudit(false);
    console.log('\n======================================');
    console.log('📱 LIGHTHOUSE MOBILE RESULTS:');
    console.log('======================================');
    console.table(mobile.scores);
    console.log('Core Web Vitals & Metrics (Mobile):', mobile.metrics);
    fs.writeFileSync('lighthouse-mobile.json', JSON.stringify({ scores: mobile.scores, metrics: mobile.metrics }, null, 2));

    // 2. Desktop Audit
    const desktop = await runAudit(true);
    console.log('\n======================================');
    console.log('💻 LIGHTHOUSE DESKTOP RESULTS:');
    console.log('======================================');
    console.table(desktop.scores);
    console.log('Core Web Vitals & Metrics (Desktop):', desktop.metrics);
    fs.writeFileSync('lighthouse-desktop.json', JSON.stringify({ scores: desktop.scores, metrics: desktop.metrics }, null, 2));

  } finally {
    server.close();
    console.log('\nStatic server closed.');
  }
}

main().catch((err) => {
  console.error('Lighthouse runner failed:', err);
  process.exit(1);
});
