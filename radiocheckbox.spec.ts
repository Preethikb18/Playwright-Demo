import { Page,chromium,test,expect } from "@playwright/test" ;

test('test', async({page})=>
{
await page.goto('https://www.shapemyinterview.com/study/playwright-locator-playground.html?v=2026-07-26');
await page.getByRole('radio',{name: 'Ruby'}).click();
await page.getByRole('checkbox',{name: 'Cypress'}).click();
await page.getByRole('radio',{name: 'Male',exact:true}).click();
await page.getByRole('radio',{name: 'Female',exact:true}).click();
await page.getByRole('checkbox',{name: 'I agree to the Terms & Conditions',exact:true}).click();


await page.waitForTimeout(15000);

})