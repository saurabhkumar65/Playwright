// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

// Importing project configuration files from their respective locations
// Each project configuration file is contained within the project folder itself

import componentConfig from './apps/insight-portal-tests/projects/component-tests/component-tests.config';
import uiConfig from './apps/insight-portal-tests/projects/ui-tests/ui-tests.config';
import e2eConfig from './apps/insight-portal-tests/projects/e2e-tests/e2e-tests.config';
import uwwbUIConfig from './apps/uwwb-portal-e2e/projects/ui-tests/ui-tests.config';
import uwwbe2eConfig from './apps/uwwb-portal-e2e/projects/e2e-tests/e2e-tests.config';
import dsDemoConfig from './apps/ds-demo-e2e/ds-demo-app.config';
import uwwbSanityDesktopConfig from './apps/uwwb-portal-e2e/projects/sanity-tests/uwwb-desktop.config';
import uwwbSanitySurfaceLandscapeConfig from './apps/uwwb-portal-e2e/projects/sanity-tests/uwwb-surface-pro-landscape.config';
import uwwbSanitySurfacePotraitConfig from './apps/uwwb-portal-e2e/projects/sanity-tests/uwwb-surface-pro-potrait.config';
import uwwbSitE2EConfig from './apps/uwwb-portal-e2e/projects/sit-e2e-tests/sit-e2e-tests.config';
import insightE2EConfig from './apps/uwwb-portal-e2e/projects/insight-submission/Insight-tests.config';

// This function serves as a helper to automate webserver startup without complicated logic or configuration
// by reading the arguments passed to playwright from the command line, specifically the name of the project
// and parses the output to extract the project name only to be reused in the getWebServerConfig() fn

const getProjectName = (): string | undefined => {
  const projectNameFlagIndex = process.argv.findIndex((arg) => arg.startsWith('--project='));
  if (projectNameFlagIndex !== -1) {
    const projectNameFlag = process.argv[projectNameFlagIndex];
    return projectNameFlag.split('=')[1];
  }
  return undefined;
};

// This function reuses the parsed project name which was called when running Playwright and selects
// the appropriate configuration settings for starting the web server via Playwrights webserver function
// in the project config object

function getWebServerConfig():
  | {
      command: string;
      url?: string;
      port?: number;
      timeout: number;
      reuseExistingServer: boolean;
    }
  | undefined {
  const projectName = getProjectName();
  if (projectName === 'component-tests') {
    return {
      command: 'npm run ui-storybook',
      port: 4400,
      timeout: 15 * 60000,
      reuseExistingServer: true,
    };
  } else if (projectName === 'ui-tests') {
    return {
      command: 'npm run start:test',
      port: 4200,
      timeout: 15 * 60000,
      reuseExistingServer: true,
    };
  } else if (projectName === 'ds-demo-tests') {
    return {
      command: 'npx nx run ds-demo:serve',
      port: 4200,
      timeout: 15 * 60000,
      reuseExistingServer: true,
    };
  }
  return undefined;
}

// Global Playwright Test config settings applied to all projects

const config: PlaywrightTestConfig = {
  testDir: 'apps/insight-portal-tests/projects/*/*/',
  // Skipping .only notated tests in CI
  // forbidOnly: !!process.env.PWCI,
  // Added 2 retries to CI runs to avoid flake
  retries: process.env.PWCI ? 2 : 0,
  // Using multiple workers in parallel on CI to speed up the run
  // Reduce worker number if tests fail to load 'domcontentloaded' event
  workers: process.env.PWCI ? '50%' : 2,
  // Fast fail feature for CI to avoid blocked builds and wasted resources
  maxFailures: process.env.PWCI ? 0 : undefined,
  reporter: process.env.PWCI
    ? [
        ['line'],
        ['blob', { outputFolder: 'blob-report' }],
        ['html', { open: 'never', outputFolder: 'playwright-report' }],
      ]
    : [
        ['list'],
        ['html', { open: 'never', outputFolder: 'playwright-report' }],
        ['./custom-reporter.ts'],
      ],

  webServer: getWebServerConfig(),

  // Global settings
  use: {
    viewport: { width: 1920, height: 1080 },
    ignoreHTTPSErrors: true,
    //browserName: 'chromium',
    channel: 'chrome',
    timezoneId: 'Europe/London',
    headless: true,
    actionTimeout: 30 * 1000,
  },
  timeout: 10 * 60 * 1000,
  expect: {
    timeout: 30 * 1000,
    toHaveScreenshot: { maxDiffPixels: 5000, maxDiffPixelRatio: 0.01 },
  },
  globalTimeout: 60 * 60 * 1000,
  // Extends Global settings

  projects: [
    componentConfig,
    uiConfig,
    e2eConfig,
    dsDemoConfig,
    uwwbUIConfig,
    uwwbe2eConfig,
    uwwbSanityDesktopConfig,
    uwwbSanitySurfaceLandscapeConfig,
    uwwbSanitySurfacePotraitConfig,
    uwwbSitE2EConfig,
    insightE2EConfig,
  ],
};
export default config;
