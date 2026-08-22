//01/08/2026
import {test,expect} from '@playwright/test'

test("screenshot",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //await page.screenshot({path:"E:/Playwright/screenshot/"+"automation.png"}) // to take specific place 
    //await page.screenshot({path:"E:/Playwright/screenshot/"+"fulpag.png",fullPage:true})  //to take full page  
    await page.locator('//div[@id="HTML12"]').screenshot({path:"E:/Playwright/screenshot/"+"dynamictab.png"})//to take using locator
})