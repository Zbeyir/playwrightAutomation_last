import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'PIM' }).click();
  await page.locator('form i').nth(2).click();

   

  // !!!??--->Problem hidden elementi locate edemiyorum!!!!!?????ACHTUNG
// ben burada hidden dropdown elementini locate edemedim onun icin yapamadim bu tetsi 
// ama playrigth otomasyonda meslegi secebiliyorum ama tüm meslekleri yazdiramiyorum 



  

  await page.getByText('Chief Executive Officer').click();
 


  await page.waitForTimeout(3000);
});