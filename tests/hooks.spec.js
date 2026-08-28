//10/08/2026
import {test,expect} from '@playwright/test'

test.beforeAll("initiate",()=>{
    console.log("test started sucessfully");  //started
})

test.beforeEach("navigate",async({page})=>{
    await page.goto("https://www.saucedemo.com/")  //moves this website
})

test("user one",async({page})=>{
    await page.locator('//input[@id="user-name"]').fill("standard_user")  // user one signs
    await page.locator('//input[@id="password"]').fill("secret_sauce")
    await page.locator('//input[@id="login-button"]').click()    
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
})

test.afterAll("end",()=>{   //stops 
    console.log("test executed sucessfully");
})
