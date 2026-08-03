import { Page,chromium,test,expect, selectors } from "@playwright/test" ;

test('get the attribute value test', async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
let placeholder = await page.getByRole('textbox',{name : 'First Name'}).getAttribute('placeholder');
console.log(placeholder);

let hrefvalue = await page.getByRole('link', {name: 'Forgotten Password'}).getAttribute('href');
console.log(hrefvalue);


await page.pause();
}

)