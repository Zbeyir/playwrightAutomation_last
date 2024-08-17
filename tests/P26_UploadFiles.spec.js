// Upload files
//https://playwright.dev/docs/input#upload-files

const{test, expect} = require('@playwright/test');

test('Single File', async({page}) => {

    await page.goto('https://www.foundit.in/')

    await page.waitForSelector('locato edilmis web elementi yaz');
    await page.locator('locato edilmis web elementi yaz').click()

    // file in path i ni copy yapiyoruz ---> copy Realitive Path
    await page.locator('dosya yüklemek icin bir form aciliyor onu locate et').setInputFiles('tests/uploadFilese/testfile1.pdf')

    await page.waitForTimeout(5000)

    // ben siteye dosaya yükleme yerini bulamaddim onun icin sadece ckodu yazdim sadece  
    

})

// 26. video da kaldim
 
// buraya test.only ==> yazdik yani sadece bu test calsiacak digerleri ignore olacak

test.only('Multiple File', async({page}) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    // ([]) ==> Array actik iki tane dosya yazdik siray ile aralarinda , virgül var
    await page.locator('#filesToUpload')
    .setInputFiles(['tests/uploadFilese/testfile1.pdf',
    'tests/uploadFilese/testfile2.pdf'])

    await page.waitForTimeout(3000)

    expect (await page.locator('#fileList li:nth-child(1)')).toHaveText('testfile1.pdf')

    expect (await page.locator('#fileList li:nth-child(2)')).toHaveText('testfile2.pdf')

    // Removing files

    // // ([]) ==> yine Array actik ve icini bos biraktik ve bu sefer de silmis olduk
    await page.locator('#filesToUpload').setInputFiles([])
    await page.waitForTimeout(3000)

    expect (await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')

})

// P26_UploadFiles.spec.js
// npx playwright test tests/P26_UploadFiles.spec.js --project=chromium --headed