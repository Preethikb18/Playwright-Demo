
import { Page,chromium,test,expect, selectors } from "@playwright/test" ;

test('select single dropdown text', async({page})=>{
await page.goto('https://orangehrm.com/contact-sales');

//let  selectValue : string[] = await page.getByRole('combobox',{name:'Country'}).selectOption('India'); //directly drop down value
//console.log(selectValue);

//await page.getByRole('combobox',{name:'Country'}).selectOption({label:'Australia'});

let selectVal = await page.getByRole('combobox', {name: 'Country'}).selectOption({value: 'Australia' });
console.log(selectVal);


let multiVal = await page.getByRole('combobox',{name: 'Country'}).inputValue();
console.log(multiVal);
await page.pause();

}
)
test('Learn select single dropdown text', async({page})=>{
await page.goto('https://orangehrm.com/contact-sales');

await page.getByRole('combobox',{name: 'NoOfEmployees'}).selectOption({value:'11 - 50'});

let selectdropdownval = await page.getByRole('combobox',{name: 'NoOfEmployees'}).inputValue();
console.log(selectdropdownval);
await page.pause();
}
)

test('multiple selction dropdown text', async({page})=>{
await page.goto('https://selenium08.blogspot.com/2019/11/dropdown.html');

//let  selectValue : string[] = await page.getByRole('combobox',{name:'Country'}).selectOption('India'); //directly drop down value
//console.log(selectValue);

//await page.getByRole('combobox',{name:'Country'}).selectOption({label:'Australia'});

let montharray = await page.locator(('[name="Month"]')).selectOption(["April","August","November"]);
let selectedValue = await page.locator('[name="Month"]').inputValue();
console.log(selectedValue);
 let heading = await page.getByRole('heading',{name: 'Country Dropdown List',level:2}).innerText();
 console.log(heading);
await page.pause();
}
)