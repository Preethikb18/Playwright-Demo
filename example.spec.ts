import { test, expect, chromium, Browser ,Page, firefox, webkit} from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('multiple browser testing', async()=>
{

 //let browser:Browser=  await chromium.launch({headless:false});
 //let browser :Browser = await chromium.launch({headless:false, channel: 'msedge'})
 //let browser:Browser = await firefox.launch({headless:false});
 let browser:Browser =await webkit.launch({headless:false});
 let page1 :Page= await browser.newPage();
   await page1.goto('https://www.google.com');
   let title = await page1.title();
   console.log(title);
   let appUrl =page1.url()
console.log('Page url is', appUrl);

})