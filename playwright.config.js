// @ts-check
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: '.',
  testMatch:[
    'tests/**/*.spec.js',
        'Francheis-test/**/*.spec.js'
  ],
timeout: 100*1000,
  expect:{timeout:100*1000},
  reporter:'html',
  workers: 1,
  //retries: 2,
  
  use: {
  
     browserName : 'chromium',
     screenshot : 'only-on-failure',
     trace: 'retain-on-failure',
     video: 'retain-on-failure'

  },
});

