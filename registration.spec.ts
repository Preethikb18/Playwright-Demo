import { Page,chromium,test,expect } from "@playwright/test" ;

test('test', async({page})=>
{
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
await page.getByRole('textbox',{name: '* Password', exact: true}).fill('pw123');
await page.getByRole('link',{name: 'Forgotten Password'}).nth(1).click();





await page.waitForTimeout(5000);

})