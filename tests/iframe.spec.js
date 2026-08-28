//27/07/2026
import {test,expect} from '@playwright/test'

test("iframe",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    //await page.locator('(//a[text()="Courses"])[1]').click()   //click action can't perform because locator is in frame    
    const fram=await page.frames()
    console.log("Count:",await fram.length);

    for(let i of fram){
        console.log("Frame URL:",i.url());
    }
    //frame  | name  |   url   |
    //framelocator    |   locator    |

    //const frame=await page.frame({name:"iframe-name"})
    //const frame=await page.frame({url:"https://legacy.rahulshettyacademy.com/"})
    const frame=await page.frameLocator('//iframe[@id="courses-iframe"]')

    await frame.locator('(//a[text()="Courses"])[1]').click()
    await page.pause()   
})
//task
test("iframe task",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")    //single frame web 1
    await page.locator('//a[@href="#Single"]').click()
    const fram=await page.frames()
    console.log("Count:",await fram.length);
    for(let i of fram){
        console.log("Frame URL:",i.url());
    }  
    const fram1=await page.frame({name:"SingleFrame"})
    await expect(fram1.locator('//h5[text()="iFrame Demo"]')).toBeVisible()

    const frame = page.frameLocator('#singleframe');
    await frame.locator('input[type="text"]').fill('Hello Playwright');   

    await page.goto("https://letcode.in/frame")   //single frame web 2
    const fram2=await page.frames()
    console.log("Count:",await fram2.length);
    for(let i of fram2){
        console.log("Frame URL:",i.url());
    }  
    const fram4=await page.frame({name:"firstFr"})
    await fram4.locator('//input[@name="fname"]').fill("Nithiya")
    await fram4.locator('//input[@name="lname"]').fill("Seenivasan")
})
//28/07/2026    
test("nested frame",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")    
    await page.locator('//a[text()="Iframe with in an Iframe"]').click()
    //const frame=await page.frame({url:"https://demo.automationtesting.in/MultipleFrames.html"})
    //const child=await frame.childFrames()[0]    // should not locate based index

    const frame=await page.frameLocator('//div[@id="Multiple"]/child::iframe')
    const child=await frame.frameLocator('//h5[text()="Nested iFrames"]/following-sibling::iframe')
    await child.locator('//input[@type="text"]').fill("Playwright")
    await page.pause()
})
//task
test("nested task",async({page})=>{
    await page.goto("https://letcode.in/frame")   //multiple frame web 2  
    const frame=await page.frame({url:"https://letcode.in/innerframe"})
    await frame.locator('//input[@name="email"]').fill('example@gmail.com')
    
    await frame.locator('//div[@class="google-anno-skip goog-rentry"][1]').click()
    await frame.locator('//div[@class="google-anno-skip goog-rentry"][2]').click()
    await page.pause()
})