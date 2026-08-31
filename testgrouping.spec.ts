import {test, Browser,expect,Page} from '@playwright/test'


test.describe('Login related test cases', ()=>
{
    test('google title test',async({page})=>
{
await page.goto('https://www.google.com');
console.log(await page.title());

});

test('google URL test',async({page})=>
{
await page.goto('https://www.google.com');
console.log(page.url);
});

test('google random test',async({page})=>
{
await page.goto('https://www.google.com');

});
})
test.describe('Search related test cases', ()=>
{
    test('google title test',async({page})=>
{
await page.goto('https://www.google.com');
console.log(await page.title());

});

test('google URL test',async({page})=>
{
await page.goto('https://www.google.com');
console.log(page.url);
});

test('google random test',async({page})=>
{
await page.goto('https://www.google.com');

});
})


test.describe('Open cart related test cases', ()=>
{

    test.beforeAll(async()=>
        {
        console.log('connect to DB');
    });

    test.beforeEach(async()=>
    {
        console.log('create a user');
    });
    test.afterAll(async ()=>
    {
        console.log('disconnect to DB ');
    });
    test.afterEach(async () =>
    {
        console.log('Delete a user');
    })
    test('google title test',async({page})=>
{
await page.goto('https://www.google.com');
console.log(await page.title());

});

test('google URL test',async({page})=>
{
await page.goto('https://www.google.com');
console.log(page.url);
});

test('google random test',async({page})=>
{
await page.goto('https://www.google.com');
expect(100).toBe(200);

});
})

//test run in the sequential mode
test.describe.serial('User CRUD test cases', ()=>
{
    test('create a user  test',async()=>
{
console.log('user is created',1001);

});

test('get a user  test',async()=>
{
console.log('get user using Userid', 1001);
});

test('update a user test',async()=>
{
console.log('Update user using Userid', 1001);
});

test('Delete the user using user id',async()=>
{
    console.log('Delete the user by user id',1001);
})
})