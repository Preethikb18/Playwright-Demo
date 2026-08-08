//parent > child
import { Page,chromium,test,expect, selectors,Locator } from "@playwright/test" ;

test('chain locator', async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

//await page.locator('form').getByRole('textbox',{name: 'First Name'})

await page
          .locator('form')
          .getByRole('textbox',{name: 'First Name'})
          .fill('Preethi');

await page.waitForTimeout(2000);


await page
.locator('#column-right')
.getByRole('link',{name: 'Forgotten Password'})
.click();


await page.pause();
}
)

test('Web table handling test', async({page})=>{
await page.goto('https://qavbox.github.io/demo/webtable/');

//await page.locator('form').getByRole('textbox',{name: 'First Name'})

await page.locator('#table01')
.locator('tr').filter({hasText : 'GUI'})
.getByRole('checkbox')
.click()

await page.locator('#table01').locator('tr').filter({hasText: 'GUI'}).getByRole('button',{name: 'Delete'}).click();

let officename =await page.locator('#table02').locator('tr').filter({hasText:'Ashton Cox'}).locator('td').nth(2).innerText();

console.log(officename);

let headercount = await page.locator('#table02').locator('tr').locator('th').count()-1;
console.log(headercount);

await page.pause();
}
)