//11/08/2026
import {test,expect} from '@playwright/test'
//import facebookLogin from '../test-data/loginCred.json'   //one way
import facebookLogin from 'E:/Playwright/test-data/loginCred.json'  // other way

test("login using xpath",async({page})=>{
    await page.goto("https://www.facebook.com/")

    await page.locator('//input[@name="email"]').fill(facebookLogin.useremail)
    await page.locator('//input[@type="password"]').fill(facebookLogin.password)

   await page.locator('//div[@aria-label="Log in"]').click()  
   await page.pause()
})
