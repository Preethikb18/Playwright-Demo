import { Page,chromium,test,expect } from "@playwright/test" ;

test('test', async({page})=>
{
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

let header = await page.getByText('Register Account',{exact: true}).textContent();
console.log('header');

let headertext = await page.getByRole('heading',{name: 'Register Account',exact: true}).textContent();
console.log('headertext');

await page.waitForTimeout(15000);




})