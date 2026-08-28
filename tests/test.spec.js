import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('heading', { name: 'Automation Testing Practice' }).click();
  await page.getByText('For Selenium, Cypress &').click();
  await page.locator('#PageList2').getByRole('link', { name: 'Home' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('heading', { name: 'Tabs' }).click();
  await page.getByRole('heading', { name: 'Dynamic Button' }).click();
  await page.getByRole('heading', { name: 'Alerts & Popups' }).click();
  await page.getByRole('button', { name: 'START' }).click();
  await expect(page.getByRole('banner')).toMatchAriaSnapshot(`
    - heading "Automation Testing Practice" [level=1]
    - paragraph: For Selenium, Cypress & Playwright
    `);
  await page.getByRole('heading', { name: 'Upload Files' }).click();
  await page.locator('#singleFileInput').setInputFiles('example.spec.ts');
  await page.locator('#singleFileInput').click();
  await page.locator('#draggable').click();
  await page.locator('#droppable').click();
});