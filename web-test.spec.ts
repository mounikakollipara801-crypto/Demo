import { test, expect } from '@playwright/test';

test('EPAM Services to Client Work navigation', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  await page.getByRole('link', { name: 'Services' }).click();
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  await expect(page.getByText('Client Work')).toBeVisible();
});
