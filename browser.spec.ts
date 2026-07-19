import {test,expect,Page} from '@playwright/test';

test('test func' , async({page}) =>
{
await page.goto('https://www.google.com');
let title= await page.title();
console.log(title);
let pageUrl =page.url();
console.log(pageUrl);
page.pause();
})