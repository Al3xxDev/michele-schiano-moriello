import { defineConfig, devices } from '@playwright/test';

const PORT = process.env.PORT || '4321';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: 'on-first-retry',
    viewport: { width: 1280, height: 720 },
  },
  webServer: {
    command: 'node scripts/serve.mjs',
    url: `http://localhost:${PORT}`,
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
