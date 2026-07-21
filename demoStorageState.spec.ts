import { Page,Browser,test,expect,chromium,firefox,webkit } from '@playwright/test' ;


test.use({storageState: './saucedemocart.json'});


test('Launch demo sauce cart' , async({page})=>
{
await page.goto('https://www.saucedemo.com/cart.html');
await page.goto('https://www.saucedemo.com/inventory.html');
await page.pause();

})