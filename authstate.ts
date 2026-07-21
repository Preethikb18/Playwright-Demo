//IIFE

import { Browser, chromium, expect} from '@playwright/test'

(async()=>
{
let browser:Browser =await chromium.launch({headless:false,channel:'chrome'});
let page =await browser.newPage();
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
await page.locator('#input-email').fill('preeethi.ischool@test.com');
await page.locator('#input-password').fill('pw123');
await page.locator("//input[@value ='Login']").click();

expect(await page.title()).toBe('My Account');

await page.context().storageState({ path: 'opencartstate.json'});


})();