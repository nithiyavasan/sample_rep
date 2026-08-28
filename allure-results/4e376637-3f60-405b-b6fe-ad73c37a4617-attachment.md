# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: FileUpload.spec.js >> file download
- Location: tests\FileUpload.spec.js:25:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForEvent: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for event "download"
============================================================
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e5] [cursor=pointer]
    - generic [ref=e7]:
      - heading "File Downloader" [level=3] [ref=e8]
      - link "image2.png" [ref=e9] [cursor=pointer]:
        - /url: download/image2.png
      - link "test_upload_file.txt" [ref=e10] [cursor=pointer]:
        - /url: download/test_upload_file.txt
      - link "checkup-1786770421-7dlp.txt" [ref=e11] [cursor=pointer]:
        - /url: download/checkup-1786770421-7dlp.txt
      - link "upload-test-1786780386517581000.txt" [ref=e12] [cursor=pointer]:
        - /url: download/upload-test-1786780386517581000.txt
      - link "upload-test-1786779738432899000.txt" [ref=e13] [cursor=pointer]:
        - /url: download/upload-test-1786779738432899000.txt
      - link "some-file.txt" [ref=e14] [cursor=pointer]:
        - /url: download/some-file.txt
      - link "upload-test-1786779514864511000.txt" [ref=e15] [cursor=pointer]:
        - /url: download/upload-test-1786779514864511000.txt
      - link "upload-test-639223787722646810.txt" [ref=e16] [cursor=pointer]:
        - /url: download/upload-test-639223787722646810.txt
      - link "upload-test-639223743540345250.txt" [ref=e17] [cursor=pointer]:
        - /url: download/upload-test-639223743540345250.txt
      - link "testUpload.json" [ref=e18] [cursor=pointer]:
        - /url: download/testUpload.json
      - link "tmp_guw3r9q.txt" [ref=e19] [cursor=pointer]:
        - /url: download/tmp_guw3r9q.txt
      - link "78b04e4b-c666-4c21-bb6a-c20f2f35e687.txt" [ref=e20] [cursor=pointer]:
        - /url: download/78b04e4b-c666-4c21-bb6a-c20f2f35e687.txt
      - link "test-upload.txt" [ref=e21] [cursor=pointer]:
        - /url: download/test-upload.txt
      - link "d16d4141-9323-4891-903f-01e2ab923740.txt" [ref=e22] [cursor=pointer]:
        - /url: download/d16d4141-9323-4891-903f-01e2ab923740.txt
      - link "auth.json" [ref=e23] [cursor=pointer]:
        - /url: download/auth.json
      - link "tmp3g8zl_c1.txt" [ref=e24] [cursor=pointer]:
        - /url: download/tmp3g8zl_c1.txt
      - link "tmp5r7jcl3c.txt" [ref=e25] [cursor=pointer]:
        - /url: download/tmp5r7jcl3c.txt
      - link "hello.json" [ref=e26] [cursor=pointer]:
        - /url: download/hello.json
      - link "sign .jpg" [ref=e27] [cursor=pointer]:
        - /url: download/sign .jpg
      - link "Images.txt" [ref=e28] [cursor=pointer]:
        - /url: download/Images.txt
      - link "Screenshot 2026-03-23 134102.png" [ref=e29] [cursor=pointer]:
        - /url: download/Screenshot 2026-03-23 134102.png
      - link "tmpm_dgzek2.txt" [ref=e30] [cursor=pointer]:
        - /url: download/tmpm_dgzek2.txt
      - link "7203.jpg" [ref=e31] [cursor=pointer]:
        - /url: download/7203.jpg
      - link "upload-test-1786779807637157000.txt" [ref=e32] [cursor=pointer]:
        - /url: download/upload-test-1786779807637157000.txt
      - link "tmpuxnw_dtp.txt" [ref=e33] [cursor=pointer]:
        - /url: download/tmpuxnw_dtp.txt
      - link "tmpa1j_kk_p.txt" [ref=e34] [cursor=pointer]:
        - /url: download/tmpa1j_kk_p.txt
      - link "tmpz1wq0ix5.txt" [ref=e35] [cursor=pointer]:
        - /url: download/tmpz1wq0ix5.txt
      - link "AccentureApplication.txt" [ref=e36] [cursor=pointer]:
        - /url: download/AccentureApplication.txt
      - link "88efd1e7-22ce-47eb-b0ea-2a12c171c133.txt" [ref=e37] [cursor=pointer]:
        - /url: download/88efd1e7-22ce-47eb-b0ea-2a12c171c133.txt
      - link "test.txt" [ref=e38] [cursor=pointer]:
        - /url: download/test.txt
      - link "2c03566a-6448-48aa-8c84-d6995a3db326.txt" [ref=e39] [cursor=pointer]:
        - /url: download/2c03566a-6448-48aa-8c84-d6995a3db326.txt
      - link "upload-test-1786779883640047000.txt" [ref=e40] [cursor=pointer]:
        - /url: download/upload-test-1786779883640047000.txt
      - link "gauntlet.txt" [ref=e41] [cursor=pointer]:
        - /url: download/gauntlet.txt
      - link "tmppfuo5zu1.txt" [ref=e42] [cursor=pointer]:
        - /url: download/tmppfuo5zu1.txt
      - link "rf_upload_6ndq754s.txt" [ref=e43] [cursor=pointer]:
        - /url: download/rf_upload_6ndq754s.txt
      - link "playwright-demo-1786782299739.txt" [ref=e44] [cursor=pointer]:
        - /url: download/playwright-demo-1786782299739.txt
      - link "random_data_18.txt" [ref=e45] [cursor=pointer]:
        - /url: download/random_data_18.txt
      - link "hello.txt" [ref=e46] [cursor=pointer]:
        - /url: download/hello.txt
      - link "Rohit.pdf" [ref=e47] [cursor=pointer]:
        - /url: download/Rohit.pdf
      - link "tmp8kj7_t2u.txt" [ref=e48] [cursor=pointer]:
        - /url: download/tmp8kj7_t2u.txt
      - link "tmpxj_hvpl1.txt" [ref=e49] [cursor=pointer]:
        - /url: download/tmpxj_hvpl1.txt
      - link "1.2_AI_Fluency_Summary_16x9.pdf" [ref=e50] [cursor=pointer]:
        - /url: download/1.2_AI_Fluency_Summary_16x9.pdf
      - link "random_data.txt" [ref=e51] [cursor=pointer]:
        - /url: download/random_data.txt
      - link "Automation_Test_Lead.pdf" [ref=e52] [cursor=pointer]:
        - /url: download/Automation_Test_Lead.pdf
      - link "Manjunath.pdf" [ref=e53] [cursor=pointer]:
        - /url: download/Manjunath.pdf
      - link "d2b13140-454b-4f2f-8265-ec1ba11d8b2a.txt" [ref=e54] [cursor=pointer]:
        - /url: download/d2b13140-454b-4f2f-8265-ec1ba11d8b2a.txt
      - link "pdf-1mb.pdf" [ref=e55] [cursor=pointer]:
        - /url: download/pdf-1mb.pdf
      - link "upload-test-1786778847615866000.txt" [ref=e56] [cursor=pointer]:
        - /url: download/upload-test-1786778847615866000.txt
      - link "tmpm8hheqsg.txt" [ref=e57] [cursor=pointer]:
        - /url: download/tmpm8hheqsg.txt
      - link "7c4c8404-ab99-4381-82d2-2dcb6cbe4455.txt" [ref=e58] [cursor=pointer]:
        - /url: download/7c4c8404-ab99-4381-82d2-2dcb6cbe4455.txt
      - link "rf_upload_bikusctm.txt" [ref=e59] [cursor=pointer]:
        - /url: download/rf_upload_bikusctm.txt
      - link "b8e80bfa-9798-4223-bbe8-3454e7ab3a59.txt" [ref=e60] [cursor=pointer]:
        - /url: download/b8e80bfa-9798-4223-bbe8-3454e7ab3a59.txt
      - link "7f91cf44-c840-4da5-90d2-83878999ee79.txt" [ref=e61] [cursor=pointer]:
        - /url: download/7f91cf44-c840-4da5-90d2-83878999ee79.txt
      - link "rf_upload_rhllerr_.txt" [ref=e62] [cursor=pointer]:
        - /url: download/rf_upload_rhllerr_.txt
      - link "sample-upload.txt" [ref=e63] [cursor=pointer]:
        - /url: download/sample-upload.txt
      - link "tmpv_t9ms4_.txt" [ref=e64] [cursor=pointer]:
        - /url: download/tmpv_t9ms4_.txt
      - link "20260311_152124.gif" [ref=e65] [cursor=pointer]:
        - /url: download/20260311_152124.gif
      - link "c6d1a815-104e-4668-84a6-8e85c912e9f2.txt" [ref=e66] [cursor=pointer]:
        - /url: download/c6d1a815-104e-4668-84a6-8e85c912e9f2.txt
      - link "test_upload.txt" [ref=e67] [cursor=pointer]:
        - /url: download/test_upload.txt
      - link "RenameFilebyMasaid.pdf" [ref=e68] [cursor=pointer]:
        - /url: download/RenameFilebyMasaid.pdf
      - link "browser-upload-probe.txt" [ref=e69] [cursor=pointer]:
        - /url: download/browser-upload-probe.txt
      - link "tmpdqc16eq1.txt" [ref=e70] [cursor=pointer]:
        - /url: download/tmpdqc16eq1.txt
      - link "upload-test-639223771555222550.txt" [ref=e71] [cursor=pointer]:
        - /url: download/upload-test-639223771555222550.txt
      - link "upload-test-1786779002307881000.txt" [ref=e72] [cursor=pointer]:
        - /url: download/upload-test-1786779002307881000.txt
      - link "6e1fc457-3f50-4f9e-b86b-3fb29dc847ef.txt" [ref=e73] [cursor=pointer]:
        - /url: download/6e1fc457-3f50-4f9e-b86b-3fb29dc847ef.txt
      - link "selenium-snapshot.png" [ref=e74] [cursor=pointer]:
        - /url: download/selenium-snapshot.png
      - link "bf229bc9-8b4c-49aa-bf66-b92cf7da6611.txt" [ref=e75] [cursor=pointer]:
        - /url: download/bf229bc9-8b4c-49aa-bf66-b92cf7da6611.txt
      - link "upload-test-1786779140313357000.txt" [ref=e76] [cursor=pointer]:
        - /url: download/upload-test-1786779140313357000.txt
      - link "tmpuny5z9og.txt" [ref=e77] [cursor=pointer]:
        - /url: download/tmpuny5z9og.txt
      - link "99cee463-4fca-4db4-8cb4-025e0473a125.txt" [ref=e78] [cursor=pointer]:
        - /url: download/99cee463-4fca-4db4-8cb4-025e0473a125.txt
      - link "upload-test-1786781997284389000.txt" [ref=e79] [cursor=pointer]:
        - /url: download/upload-test-1786781997284389000.txt
      - link "upload-test-1786779345521570000.txt" [ref=e80] [cursor=pointer]:
        - /url: download/upload-test-1786779345521570000.txt
      - link "upload-test-639223746603301670.txt" [ref=e81] [cursor=pointer]:
        - /url: download/upload-test-639223746603301670.txt
      - link "tmp9fze26n_.txt" [ref=e82] [cursor=pointer]:
        - /url: download/tmp9fze26n_.txt
      - link "tmp9ed7ri5r.txt" [ref=e83] [cursor=pointer]:
        - /url: download/tmp9ed7ri5r.txt
      - link "Application Scrutiny (1).csv" [ref=e84] [cursor=pointer]:
        - /url: download/Application Scrutiny (1).csv
      - link "Resume.pdf" [ref=e85] [cursor=pointer]:
        - /url: download/Resume.pdf
      - link "sampleFile.txt" [ref=e86] [cursor=pointer]:
        - /url: download/sampleFile.txt
      - link "output.txt" [ref=e87] [cursor=pointer]:
        - /url: download/output.txt
      - link "Screenshot (1).png" [ref=e88] [cursor=pointer]:
        - /url: download/Screenshot (1).png
      - link "Screenshot 2026-03-25 225909.png" [ref=e89] [cursor=pointer]:
        - /url: download/Screenshot 2026-03-25 225909.png
  - generic [ref=e91]:
    - separator [ref=e92]
    - generic [ref=e93]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e94] [cursor=pointer]:
        - /url: http://elementalselenium.com/
```

# Test source

```ts
  1  | //05/08/2026
  2  | import {test,expect} from '@playwright/test'
  3  | 
  4  | test("single file upload",async({page})=>{
  5  |     await page.goto("https://testautomationpractice.blogspot.com/")
  6  |     await page.locator('//input[@id="singleFileInput"]').setInputFiles('E:/Playwright/screenshot/automation.png')
  7  | 
  8  |     await page.locator('//button[text()="Upload Single File"]').click()
  9  | 
  10 |     await expect(page.locator('//p[@id="singleFileStatus"]')).toContainText("Single file selected: automation.png")
  11 |     await page.pause()
  12 | })
  13 | 
  14 | test("multiple file upload",async({page})=>{
  15 |     await page.goto("https://testautomationpractice.blogspot.com/")
  16 |     
  17 |     await page.locator('//input[@id="multipleFilesInput"]').setInputFiles(['E:/Playwright/screenshot/automation.png','E:/Playwright/screenshot/dynamictab.png'])
  18 |     await page.locator('//button[text()="Upload Multiple Files"]').click()
  19 |     await expect(page.locator('//p[@id="multipleFilesStatus"]')).toContainText("Multiple files selected:")
  20 |     await page.pause()
  21 |     await page.locator('//input[@id="multipleFilesInput"]').setInputFiles([])
  22 |     await page.pause()
  23 | })
  24 | 
  25 | test("file download",async({page})=>{
  26 |     await page.goto("https://the-internet.herokuapp.com/download")
  27 |     const[download]=await Promise.all([
> 28 |         page.waitForEvent('download'),
     |              ^ Error: page.waitForEvent: Test timeout of 30000ms exceeded.
  29 |         page.locator('//a[text()="test-file.txt"]').click()
  30 |     ])
  31 |     const filePath="E:/Playwright/screenshot/test_file.txt";
  32 |     await download.saveAs(filePath)
  33 |     await page.pause(5000)
  34 | })
```