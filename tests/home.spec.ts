import { test, expect } from '@playwright/test';

test.describe('Home', () => {
  test('open homepage and verify title', async ({ page }) => {
    await page.goto('https://practice.automationbro.com/');
    await expect(page).toHaveTitle('Practice E-Commerce Site – Automation Bro');
  });

  test('open about and verify title', async ({ page }) => {
    await page.goto('https://practice.automationbro.com/about');
    await expect(page).toHaveTitle('About – Practice E-Commerce Site');
  });
});
