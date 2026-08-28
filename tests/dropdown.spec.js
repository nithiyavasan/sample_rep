//23 July 2026
//import{test,expect} from '@playwright/test'
const {test,expect}=require('@playwright/test')

test("dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//select[@id="country"]').selectOption("India")
    await page.locator('//select[@id="country"]').selectOption({value:"uk"})
    await page.locator('//select[@id="country"]').selectOption({index:4})

    const text=await page.locator('//select[@id="country"]').textContent()
    console.log(text);

    const countryCount=await page.locator('//select[@id="country"]/option').count()
    console.log("Count :",countryCount);

    await page.pause()
})

test("multi-select dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//select[@id="colors"]').selectOption(["Red","Green","White"])

    await page.pause()
})
//task
test("dropdown task",async({page})=>{
    await page.goto("https://letcode.in/dropdowns/")

    await page.locator('//select[@id="fruits"]').selectOption("Apple")
    await expect(page.locator('text=You have selected Apple')).toBeVisible();
    await page.pause()
 
    await page.locator('//select[@id="superheros"]').selectOption(["Aquaman","Batman","Captain America","Thor"])
    await expect(page.locator('text=You have selected Aquaman, Batman, Captain America, Thor')).toBeVisible();
 
    await page.locator('//select[@id="lang"]').selectOption({index:4})
    const text=await page.locator('//select[@id="lang"]').textContent()
    console.log(text);

    await page.locator('//select[@id="country"]').selectOption({value:"India"})
    const text1=await page.locator('//select[@id="country"]').inputValue();
    console.log(text1);
    await page.pause()
})
