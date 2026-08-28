//20 July 2026
import {test,expect} from '@playwright/test'

test("assertion",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")
    await expect.soft(page).toHaveURL("https://testautomationpractice.blogspot.co/")
    
    await expect(page).toHaveTitle("Automation Testing Practice")
    await expect.soft(page).toHaveTitle("Automation Testing Pract")
    
    await expect(page.locator('//h1[@class="title"]')).toBeVisible()
    await expect.soft(page.locator('//h1[@class="title]')).toBeVisible()

    await expect(page.locator('//p[@class="description"]/child::span')).toHaveText("For Selenium, Cypress & Playwright")
    await expect.soft(page.locator('//p[@class="description"]/child::spa')).toHaveText("For Selenium, Cypress & Playwright")
    
    await expect(page.locator('//p[@class="description"]/child::span')).toContainText("Playwright")
    await expect.soft(page.locator('//p[@class="description"]/child::span')).toContainText("Playht")
//21 July 2026  hard stops when the code is incorrect and soft assertions highlights to incorrect code & continue to next
    
    const uname='//input[@id="name"]'
    await expect(page.locator(uname)).toBeEmpty()
    await expect.soft(page.locator(uname)).toBeEmpty()

    await page.locator(uname).fill("Playwright")
    
    await expect(page.locator(uname)).toHaveValue("Playwright")
    await expect.soft(page.locator(uname)).toHaveValue("Playwht")

    await expect(page.locator(uname)).toBeEmpty()
    await expect.soft(page.locator(uname)).toBeEmpty()
})
//task 20/07/2026
test("assertion task login",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await expect(page.locator('//input[@id="username"]').fill("student"))
    await expect(page.locator('//input[@name="password"]').fill("Password123"))

    await page.pause()
    await expect(page.locator('//button[@id="submit"]').click())

    await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/")
    
    await expect(page.locator('[class="has-text-align-center wp-block-paragraph"]')).toHaveText("Congratulations student. You successfully logged in!")
    await expect(page.locator('.wp-block-button__link')).toBeVisible();    
})

test("assertion task incorect username",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await expect(page.locator('//input[@id="username"]').fill("stud"))
    await expect(page.locator('//input[@name="password"]').fill("Password123"))
    await page.pause()
    await expect(page.locator('//button[@id="submit"]').click())
    await expect(page.locator('//div[@id="error"]')).toBeVisible()
    await expect(page.locator('//div[@id="error"]')).toContainText("Your username is invalid!")
})

test("assertion task incorect password",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await expect(page.locator('//input[@id="username"]').fill("student"))
    await page.pause()
    await expect(page.locator('//input[@name="password"]').fill("Pa"))
    await page.pause()
    await expect(page.locator('//button[@id="submit"]').click())
    await expect(page.locator('//div[@class="show"]')).toBeVisible()
    await expect(page.locator('//div[@class="show"]')).toContainText("Your password is invalid!")
})