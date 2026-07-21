import {Page,Browser,BrowserContext,expect,test,chromium,Expect,firefox,webkit} from '@playwright/test';

test.use({storageState: './opencartstate.json' });

test('launch cart page without login', async({page})=>
{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart');
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/account');
    await page.pause();
});