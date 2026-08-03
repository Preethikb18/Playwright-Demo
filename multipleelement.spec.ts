

import { Page,chromium,test,expect, selectors,Locator } from "@playwright/test" ;

test('get the text of textbox value test', async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
let linkurls : Locator[]= await page.locator('a[href]').all();
console.log('Total links:', linkurls.length);

let totalLinks = await page.locator('a[href]').count();
console.log('Total links', totalLinks);

let linkscount = await page.locator('link').count();
console.log('Links total', linkscount);
}

)

test('Fetch all  links text test', async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
let linkurls : Locator[]= await page.locator('a[href]').all();
console.log('Total links:', linkurls.length);

for(let ele of  linkurls)
{
   let text = await ele.textContent();
   let href = await ele.getAttribute('href');
   console.log('link text', text);
   console.log('link url', href);
}
}

)

test('Fetch all  images text test', async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
let allImages : Locator[]= await page.locator('img').all();
console.log('Total links:', allImages.length);
for(let ele of allImages)
{
    let alttext = await ele.getAttribute('alt');
    console.log(alttext);
}

}

)
