# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: action.spec.js >> hover task
- Location: tests\action.spec.js:34:5

# Error details

```
Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.myntra.com/
Call log:
  - navigating to "https://www.myntra.com/", waiting until "load"

```

# Test source

```ts
  1  | //06/08/2026
  2  | import {test,expect} from '@playwright/test'
  3  | 
  4  | test("keyboard action",async({page})=>{
  5  |     await page.goto("https://gotranscript.com/text-compare")
  6  | 
  7  |     await page.fill('//textarea[@name="text1"]',"playwright")
  8  |     await page.keyboard.press("Control+A")
  9  |     await page.keyboard.press("Control+C")
  10 |     await page.keyboard.press('Tab')
  11 |     await page.keyboard.press("Control+V")
  12 |     
  13 |     await expect(page.locator('//textarea[@name="text2"]')).toHaveValue("playwright")
  14 |     await page.click('//button[@id="recaptcha"]')
  15 |     await page.pause()
  16 | })
  17 | 
  18 | test("hover",async({page})=>{
  19 |     await page.goto("https://testautomationpractice.blogspot.com/")
  20 |     await page.locator('//button[@class="dropbtn"]').hover()
  21 |     await page.pause()
  22 | })
  23 | 
  24 | test("right click",async({page})=>{
  25 |     await page.goto("https://vinothqaacademy.com/mouse-event/")
  26 |     await page.locator('//button[@id="rightBtn"]').click({button:"right"})
  27 |     await expect(page.locator('//span[@id="rightStatus"]')).toHaveText("Menu opened ✅")
  28 |     
  29 |     await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")
  30 |     await page.locator('//span[text()="right click me"]').click({button:"right"})
  31 |     await page.pause()
  32 | })
  33 | //task
  34 | test("hover task",async({page})=>{
> 35 |     await page.goto("https://www.myntra.com/")
     |                ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.myntra.com/
  36 |     await page.locator('//a[@data-group="men"]').hover()
  37 |     await page.locator('//a[@data-group="women"]').hover()
  38 |     await page.locator('//a[@data-group="kids"]').hover()
  39 |     await page.locator('//a[@data-group="home"]').hover()
  40 |     await page.locator('//a[@data-group="beauty"]').hover()
  41 |     await page.locator('//a[@data-group="genz"]').hover()
  42 |     await page.locator('//a[@data-group="studio"]').hover()
  43 |     await page.pause()
  44 | })
  45 | //07/08/2026
  46 | test("double click",async({page})=>{
  47 |     await page.goto("https://testautomationpractice.blogspot.com/")
  48 |     await page.fill('//input[@id="field1"]',"playwright")
  49 |     await page.locator('//button[text()="Copy Text"]').dblclick()
  50 |     await expect(page.locator('//input[@id="field1"]')).toHaveValue("playwright")
  51 |     await page.pause()
  52 | })
  53 | 
  54 | test("scroll",async({page})=>{
  55 |     await page.goto("https://testautomationpractice.blogspot.com/")
  56 |     await page.mouse.wheel(0,3000)   // method 1: pixel wise scroll
  57 |     await page.pause()
  58 | 
  59 |     await page.mouse.wheel(0,-3000)
  60 |     await page.mouse.wheel(2000,0)
  61 |     await page.mouse.wheel(-2000,0)
  62 |     await page.pause()
  63 |     await page.locator('//div[@id="HTML8"]').scrollIntoViewIfNeeded()  // method 2: locator used scroll action
  64 |     await page.pause()
  65 | })
  66 | 
  67 | test("drag and drop",async({page})=>{
  68 |     await page.goto("https://testautomationpractice.blogspot.com/")
  69 |     //const source=page.locator('//div[@id="draggable"]')
  70 |     //const target=page.locator('//div[@id="droppable"]')
  71 |     //await source.dragTo(target)           // method 1 using variable
  72 |     await page.locator('//div[@id="draggable"]').dragTo(page.locator('//div[@id="droppable"]'))  // method 2 using locator
  73 |     await page.pause()
  74 | })
  75 | 
  76 | 
```