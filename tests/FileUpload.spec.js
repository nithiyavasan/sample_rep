//05/08/2026
import {test,expect} from '@playwright/test'

test("single file upload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@id="singleFileInput"]').setInputFiles('E:/Playwright/screenshot/automation.png')

    await page.locator('//button[text()="Upload Single File"]').click()

    await expect(page.locator('//p[@id="singleFileStatus"]')).toContainText("Single file selected: automation.png")
    await page.pause()
})

test("multiple file upload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    
    await page.locator('//input[@id="multipleFilesInput"]').setInputFiles(['E:/Playwright/screenshot/automation.png','E:/Playwright/screenshot/dynamictab.png'])
    await page.locator('//button[text()="Upload Multiple Files"]').click()
    await expect(page.locator('//p[@id="multipleFilesStatus"]')).toContainText("Multiple files selected:")
    await page.pause()
    await page.locator('//input[@id="multipleFilesInput"]').setInputFiles([])
    await page.pause()
})

test("file download",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/download")
    const[download]=await Promise.all([
        page.waitForEvent('download'),
        page.locator('//a[text()="test-file.txt"]').click()
    ])
    const filePath="E:/Playwright/screenshot/test_file.txt";
    await download.saveAs(filePath)
    await page.pause(5000)
})