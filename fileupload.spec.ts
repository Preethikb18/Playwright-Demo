import { Page,chromium,test,expect, selectors } from "@playwright/test" ;

test('test file upload', async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');
await page.locator('#single-file').setInputFiles('/Users/anilk/OneDrive/Documents/Preethi/sql cheat sheet.jpg');//upload the file
await page.waitForTimeout(2000);
await page.locator('#single-file').setInputFiles([]);//remove the file
await page.pause();
}

)

test('test multiple file upload', async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');
await page.locator('#multi-file').setInputFiles(['/Users/anilk/OneDrive/Documents/Preethi/sql cheat sheet.jpg','/Users/anilk/Downloads/Scan 8 Aug 2026.pdf']);//upload the file
await page.waitForTimeout(5000);
await page.locator('#multi-file').setInputFiles([]);//remove the file
await page.pause();
}

)

test('file upload when type file is not present test', async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

let [fileUpload]=await Promise.all([page.waitForEvent('filechooser'),
    page.locator('#custom-upload-btn').click()
]);

await fileUpload.setFiles(['/Users/anilk/OneDrive/Documents/Preethi/sql cheat sheet.jpg','/Users/anilk/Downloads/Scan 8 Aug 2026.pdf']);//upload the file
await page.waitForTimeout(5000);

await page.pause();
}

)

