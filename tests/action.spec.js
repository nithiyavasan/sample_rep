//06/08/2026
import {test,expect} from '@playwright/test'

test("keyboard action",async({page})=>{
    await page.goto("https://gotranscript.com/text-compare")

    await page.fill('//textarea[@name="text1"]',"playwright")
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
    await page.keyboard.press('Tab')
    await page.keyboard.press("Control+V")
    
    await expect(page.locator('//textarea[@name="text2"]')).toHaveValue("playwright")
    await page.click('//button[@id="recaptcha"]')
    await page.pause()
})

test("hover",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//button[@class="dropbtn"]').hover()
    await page.pause()
})

test("right click",async({page})=>{
    await page.goto("https://vinothqaacademy.com/mouse-event/")
    await page.locator('//button[@id="rightBtn"]').click({button:"right"})
    await expect(page.locator('//span[@id="rightStatus"]')).toHaveText("Menu opened ✅")
    
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")
    await page.locator('//span[text()="right click me"]').click({button:"right"})
    await page.pause()
})
//task
test("hover task",async({page})=>{
    await page.goto("https://www.myntra.com/")
    await page.locator('//a[@data-group="men"]').hover()
    await page.locator('//a[@data-group="women"]').hover()
    await page.locator('//a[@data-group="kids"]').hover()
    await page.locator('//a[@data-group="home"]').hover()
    await page.locator('//a[@data-group="beauty"]').hover()
    await page.locator('//a[@data-group="genz"]').hover()
    await page.locator('//a[@data-group="studio"]').hover()
    await page.pause()
})
//07/08/2026
test("double click",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.fill('//input[@id="field1"]',"playwright")
    await page.locator('//button[text()="Copy Text"]').dblclick()
    await expect(page.locator('//input[@id="field1"]')).toHaveValue("playwright")
    await page.pause()
})

test("scroll",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.mouse.wheel(0,3000)   // method 1: pixel wise scroll
    await page.pause()

    await page.mouse.wheel(0,-3000)
    await page.mouse.wheel(2000,0)
    await page.mouse.wheel(-2000,0)
    await page.pause()
    await page.locator('//div[@id="HTML8"]').scrollIntoViewIfNeeded()  // method 2: locator used scroll action
    await page.pause()
})

test("drag and drop",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //const source=page.locator('//div[@id="draggable"]')
    //const target=page.locator('//div[@id="droppable"]')
    //await source.dragTo(target)           // method 1 using variable
    await page.locator('//div[@id="draggable"]').dragTo(page.locator('//div[@id="droppable"]'))  // method 2 using locator
    await page.pause()
})

