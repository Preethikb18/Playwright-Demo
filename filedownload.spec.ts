import { Page,chromium,test,expect, selectors } from "@playwright/test" ;
import fs from 'fs';

test('test file upload', async({page})=>{
await page.goto('https://the-internet.herokuapp.com/download');

let [download] = await Promise.all([
    page.waitForEvent('download'),
     page.getByRole('link',{name: 'resume.txt'}).click()
]);

//during the downloading,make sure there is no failure downloading 
expect(await download.failure()).toBeNull();


//get the file name
console.log('file name: ', download.suggestedFilename());

//save to a specific path:
let filePath = './downloads/'+ download.suggestedFilename();


//verify the file exists
expect(fs.existSync(filePath)).toBeTruthy();
    
await page.pause();

}

)