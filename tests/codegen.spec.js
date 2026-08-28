//14/08/2026 codegen uses auto generate code while running 
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
  await page.getByRole('img', { name: 'company-branding' }).click();
  await page.locator('div').filter({ hasText: /^Password$/ }).nth(2).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByText('© 2005 - 2026 OrangeHRM, Inc').click();
  const page1 = await page1Promise;
  await page.getByText('OrangeHRM OS').click();
  await page.getByRole('button', { name: 'Login' }).click();
});