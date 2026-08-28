//03/08/2026
import {test,expect,chromium} from '@playwright/test'

test("tabs handling",async()=>{
    const browser=await chromium.launch()   //launch chrome
    const context=await browser.newContext()
    
    const pageOne=await context.newPage()
    await pageOne.goto("https://www.facebook.com/")
    console.log(await pageOne.title());
    await pageOne.locator('//input[@name="email"]').fill("example@gmail.com")
    await pageOne.waitForTimeout(3000)

    const pageTwo=await context.newPage()
    await pageTwo.goto("https://testautomationpractice.blogspot.com/")
    console.log(await pageTwo.title());
    await pageTwo.locator('//input[@id="name"]').fill("playwright")
    await pageOne.waitForTimeout(3000)
})

test("handling multiple tabs",async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(2000)
    console.log(await page.title());
    await page.locator('//input[@name="username"]').fill("Admin")

    const [newTab]=await Promise.all([
        context.waitForEvent('page'),
        page.locator('//a[text()="OrangeHRM, Inc"]').click()
    ])
    await newTab.waitForLoadState()
    console.log(await newTab.title());
})
//task
test("facebook task",async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()

    await page.goto("https://www.flipkart.com/")
    await page.waitForTimeout(2000)
    console.log(await page.title());
    await page.locator('//form//input[@class="nw1UBF v1zwn25"]').fill("Apple mobile")
    await page.locator('//div//button[@type="submit"]').click()

    const [newTab]=await Promise.all([
        context.waitForEvent('page'),
        page.locator('//div[text()="Apple iPhone 15 (Black, 128 GB)"]').click()
    ])
    await expect(page.locator('//div[text()="Apple iPhone 15 (Black, 128 GB)"]')).toHaveText("Apple iPhone 15 (Black, 128 GB)" )
    await newTab.waitForLoadState()
    console.log(await newTab.title());
})
//04/08/2026
test("page navigation",async({page})=>{
    await page.goto("https://www.facebook.com/")
    await page.waitForTimeout(3000)
 
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000)
  
    await page.goBack()
    await page.waitForTimeout(3000)
  
    await page.goForward()
    await page.reload()
})
//task
test("tabs task",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(2000)
 
    await page.locator('[name="username"]').fill("Admin")
    await page.locator('[placeholder="Password"]').fill("admin123")

    await page.locator('[type="submit"]').click()    

    await page.goBack()
    await page.waitForTimeout(3000)
  
    await page.goForward()
    await page.reload()
})    
