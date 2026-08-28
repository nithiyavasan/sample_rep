//10/08/2026
//task
import {test,expect} from '@playwright/test' 
/*test("sauce task",async({page})=>{
   await page.goto("https://www.saucedemo.com/")  

    await page.locator('//input[@id="user-name"]').fill("standard_user")  
    await page.locator('//input[@id="password"]').fill("secret_sauce")
    await page.locator('//input[@id="login-button"]').click()    

    div[text()="Sauce Labs Fleece Jacket"]
    div[text()="Test.allTheThings() T-Shirt (Red)"]
})

test("user two",async({page})=>{
    await page.locator('//input[@id="user-name"]').fill("problem_user")  //user two signs
    await page.locator('//input[@id="password"]').fill("secret_sauce")
    await page.locator('//input[@id="login-button"]').click()    
})

test("user three",async({page})=>{
    await page.locator('//input[@id="user-name"]').fill("performance_glitch_user") //user three signs
    await page.locator('//input[@id="password"]').fill("secret_sauce")
    await page.locator('//input[@id="login-button"]').click()    
})

test.afterEach("logout",async({page})=>{
    await page.locator('//button[@id="react-burger-menu-btn"]').click() //  logout 
    await page.locator('//a[@id="logout_sidebar_link"]').click()    
})*/
//10/08/2026
test("test one @reg",()=>{
    console.log("test one executed sucessfully");
})

test("test two @smoke",()=>{
    console.log("test two executed sucessfully");
})

test("test three @smoke",()=>{
    console.log("test three executed sucessfully");
})

test("test four @reg @smoke",()=>{
    console.log("test four executed sucessfully");
})

test("test five @reg",()=>{   //"@fail"  runs the tag named test
    console.log("test five executed sucessfully");
})
// --grep "reg" code runs the tag named reg ,  --grep-invert "reg" runs the other test expect reg
