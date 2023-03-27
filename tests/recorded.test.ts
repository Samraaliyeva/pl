import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/login');
  await page.locator('span').filter({ hasText: 'Elements' }).locator('span path').click();
  await page.getByText('Text Box').click();
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('samra');
  await page.getByRole('listitem').filter({ hasText: 'Check Box' }).click();
  await page.locator('#tree-node span').nth(1).click();
  await page.getByRole('listitem').filter({ hasText: 'Radio Button' }).click();
  await page.getByText('Impressive').click();
  await page.getByRole('listitem').filter({ hasText: 'Web Tables' }).click();
  await page.getByRole('row', { name: 'Kierra Gentry 29 kierra@example.com 2000 Legal Edit Delete' }).getByTitle('Delete').locator('path').click();
});