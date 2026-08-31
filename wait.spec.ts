
import {test,chromium, expect} from '@playwright/test'
// Auto waiting process
//Actions: click,fill,check,hover....->automatically wait for the elements
//Actionability check:
//Attached to Dom
//Visible on the page
//Stable (not animating)
//Enabled
//All events are also completed
test('wait test', async({page})=>
{
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
await page.getByRole('button', { name: 'Continue' }).click();

//wait for 5000ms or 5 sec
 await expect(page.getByText('First Name must be between 1 and 32 characters!',{exact:true})).toBeVisible();
//2.wait for url:

await page.waitForURL(/route=accoun\/register/);

//3. wait for event: dialog,filechoose,download,page

//4. static wait :pause for 5sec
//await page.waitForTimeout(5000);

//5.wait for the element : explicilitly wait for the element
//waitforselector: its legacy method 

await page.locator('#input-firstname').waitFor({state:'visible'});
await page.locator('#input-firstname').fill('preethi');

await page.waitForTimeout(5000);

})