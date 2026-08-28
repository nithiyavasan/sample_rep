//24 July 2026
import {test,expect} from '@playwright/test'

test("simple alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com")
    await page.locator('//button[@id="alertBtn"]').click()
    page.on("dialog",async alert=>{
        console.log(alert.type());
        console.log(alert.message());
        expect(alert.message("I am an alert box!"))
        
        await alert.accept()
    })
    //await page.locator('//button[@id="alertBtn"]').click()
    await page.waitForTimeout(5000)
})

test("confirmation alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on("dialog",async alert=>{
        console.log(alert.type());
        console.log(alert.message());
        //await alert.accept()
        await alert.dismiss()
    })
    await page.locator('//button[@id="confirmBtn"]').click()

    //await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed OK!")
    await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed Cancel!")
    await page.pause()
})

test("prompt alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on("dialog",async alert=>{
        console.log(alert.type());
        console.log(alert.message());
        //await alert.accept("playwright")
        await alert.dismiss("playwright")
    })
    await page.locator('//button[@id="promptBtn"]').click()
    //await expect(page.locator('//p[@id="demo"]')).toHaveText("Hello playwright! How are you today?")
    await expect(page.locator('//p[@id="demo"]')).toHaveText("User cancelled the prompt.")
    await page.pause()
})
//task
test("simple ",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html")
    page.on("dialog",async alert=>{
        console.log(alert.type());
        console.log(alert.message());
        expect(alert.message("I am an alert box!"))
        
        await alert.accept()
    })
    await page.locator('//a[@href="#OKTab"]').click()
    await page.locator('//button[@onclick="alertbox()"]').click()
    await page.waitForTimeout(5000)
})

test("confirmation ",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html")
    page.on("dialog",async alert=>{
        console.log(alert.type());
        console.log(alert.message());
        //await alert.accept()
        await alert.dismiss()
    })
    await page.locator('//a[@href="#CancelTab"]').click()
    await page.locator('//button[@onclick="confirmbox()"]').click()

    //await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed Ok")
    await expect(page.locator('//p[@id="demo"]')).toHaveText("You Pressed Cancel")
    await page.pause()
})

test("prompt ",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html")
    page.on("dialog",async alert=>{
        console.log(alert.type());
        console.log(alert.message());
        //await alert.accept("Automation")
        await alert.dismiss()
    })
    await page.locator('//a[@href="#Textbox"]').click()
    await page.locator('//button[@onclick="promptbox()"]').click()
    //await expect(page.locator('//p[@id="demo1"]')).toHaveText("Hello Automation How are you today")
    await page.pause()
})