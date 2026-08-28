// 29/7/2026 task
import{test,expect} from '@playwright/test'

test("DatePicker",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('[id="datepicker"]').click()         //method 1
    const expectedMonth ="December";
    const expectedyear="2025";

    while(true){
        const curmon=await page.locator('[class="ui-datepicker-month"]').textContent();
        const curyear=await page.locator('[class="ui-datepicker-year"]').textContent();
            if(curmon == expectedMonth && curyear == expectedyear){
                break;
            }
            await page.locator('//a[@title="Prev"]').click()
    }
    await page.locator('//a[@data-date="15"]').click()  //method 2
    await page.locator('//input[@id="txtDate"]').click()
    await page.locator('//select[@class="ui-datepicker-month"]').selectOption("Aug")
    await page.locator('//select[@class="ui-datepicker-year"]').selectOption({value:"2028"})
    await page.locator('//a[@data-date="11"]').click()

    await page.locator('[id="datepicker"]').fill("04/08/2026")   //method 3
    await page.pause()
})