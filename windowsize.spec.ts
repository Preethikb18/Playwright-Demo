import { Page,chromium,test,expect, selectors } from "@playwright/test" ;
test.use({viewport: {width: 440, height : 956}});

test('test window size', async({page})=>{

//page.setViewportSize({width: 400, height: 956})
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

await page.pause();

}

)

test('test window size test', async({page})=>{

page.setViewportSize({width: 1000, height: 800})
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

await page.pause();

}

)