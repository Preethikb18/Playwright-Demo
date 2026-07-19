import { Page,Browser,BrowserContext,test,expect,chromium } from "@playwright/test";


test('multi user test', async({browser})=>
{

    let ctx1:BrowserContext = await browser.newContext();
    let ctx2:BrowserContext = await browser.newContext();
    let ctx3:BrowserContext = await browser.newContext();

    let page1 = await ctx1.newPage();
    let page2 = await ctx2.newPage();
    let page3 = await ctx3.newPage();

    page1.goto('http://localhost:3000/');
    page2.goto('http://localhost:3000/');
    page3.goto('http://localhost:3000/');


    await page1.locator('#usernameInput').fill('Sunny');
    await page1.locator('#joinBtn').click();
    await page1.locator('#messageInput').fill('Hello josh how are you?');
    await page1.locator('#sendBtn').click();

    await page2.locator('#usernameInput').fill('Josh');
    await page2.locator('#joinBtn').click();
    await page2.locator('#messageInput').fill('Hello sunny I am good, thanks');
    await page2.locator('#sendBtn').click();

    await page3.locator('#usernameInput').fill('Josh');
    await page3.locator('#joinBtn').click();
    await page3.locator('#messageInput').fill('Hello sunny I am good, thanks');
    await page3.locator('#sendBtn').click();

    await page1.pause();
    await page2.pause();
    await page3.pause();
})
