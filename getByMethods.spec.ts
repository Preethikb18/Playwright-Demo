import { Page,chromium,test,expect } from "@playwright/test" ;

test('test', async({page})=>
{
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

//it will work only for inputs fields
await page.getByLabel('E-Mail Address').fill('preethi.ischool@gmail.com');
await page.getByLabel('Password').fill('Petsure123');


//text fields
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
await page.getByPlaceholder('First Name').fill('Preethi');
await page.getByPlaceholder('Telephone').fill('9986681299');

//alt fields for images
//await page.getByAltText('naveenopencart').highlight();
await page.getByRole('img',{name: 'naveenopencart'}).click();


await page.waitForTimeout(15000);




})