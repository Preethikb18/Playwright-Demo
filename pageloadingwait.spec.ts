import {Page,Browser,BrowserContext,expect,test} from '@playwright/test';

test('Page loading wait until test', async({page})=>
{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home',
        {waitUntil: 'load'}
    );

})

//networkidle : In the last 500 ms all the api network calls are settled or completed
//documentloaded: Elements are loaded in the DOM of the page but there is no gurantee that elements are vivible on the page
// commit: Elements are in the dom , and css/images/js are still pending to be visible on the page
//load: DOM is loaded, cc/js/images are loaded, elements are visiblle on the page and page is ready now