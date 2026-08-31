//assertions ---expect() method
//soft and hard assertions
//in built assertions
//default timeout :5 sec


//expected vs actual result : checkpoint, validation 

import { Page,chromium,test,expect, selectors } from "@playwright/test" ;

test('expect ASSERTION TEST', async({page})=>
{
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
//expect(100).toBe(100);
expect(page.url()).toContain('account/register');
let header = await page.getByRole('heading', {name: 'Register Account',level: 1});
await expect (header).toBeVisible();

//Register account
await expect.soft(header).toHaveText('Register Account');

await expect(page.locator('#column-right a.list-group-item')).toHaveCount(13);

await page.getByRole('textbox',{name: '* First Name'}).fill('Preethi');
await expect(page.getByRole('textbox',{name: '* First Name'})).toHaveValue('Preethi');

await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html');
await expect(page.getByTestId('country-select').locator('option')).toHaveCount(6);

await page.getByTestId('country-select').selectOption('India');
await expect(page.getByTestId('country-select')).toHaveValue('in');

console.log('End......');

console.log('End......');

console.log('End......');

}
)


test('assertion for different element test', async({page})=>
{
await page.goto('https://naveenautomationlabs.com/opencart/ui/elementstate.html');

await expect(page.getByRole('button',{name:'Create Account'})).toBeDisabled();
await expect(page.getByRole('textbox',{name: 'FIRST NAME'})).toBeEmpty();
await expect(page.getByRole('textbox',{name: 'Email'})).toBeEmpty();

await expect(page.getByRole('textbox',{name: 'FIRST NAME'})).toBeEditable();
await expect(page.getByRole('textbox',{name: 'Email'})).toBeEditable();

await expect(page.getByRole('textbox',{name: 'USERNAME (read-only, auto-generated)'})).not.toBeEditable();

await page.getByRole('checkbox',{name:'I AGREE TO THE TERMS OF SERVICE AND PRIVACY POLICY'}).check();

await expect(page.getByRole('checkbox',{name:'I AGREE TO THE TERMS OF SERVICE AND PRIVACY POLICY'})).toBeChecked();

await expect(page.getByRole('button',{name:'Create Account'})).toBeEnabled();

await page.getByRole('checkbox',{name:'I AGREE TO THE TERMS OF SERVICE AND PRIVACY POLICY'}).uncheck();

await expect(page.getByRole('button',{name:'Create Account'})).toBeDisabled();

await expect(page.getByRole('textbox',{name: 'FIRST NAME'})).toHaveAttribute('type','text');

await expect(page.getByRole('textbox',{name: 'FIRST NAME'})).toHaveAttribute('placeholder','Enter first name');

await expect(page.getByRole('textbox',{name: 'USERNAME (read-only, auto-generated)'})).toHaveAttribute('readonly','');


console.log('End......');

console.log('End......');

console.log('End......');

}
)

test('expect timeeoue test', async({page})=>
{
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
//default timeout : 5 sec or 5000 ms
expect(page.url()).toContain('account/register');
let header = await page.getByRole('heading', {name: 'Register Account',level: 1});

//Register account
await expect.soft(header).toHaveText('Register Account123');



console.log('End......');

console.log('End......');

console.log('End......');

}
)


///AAA pattern: Arrange act assert
//test case -> only 1 hard assertions
//test case ---> multiple soft assertion
