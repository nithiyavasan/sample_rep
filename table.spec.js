//30/07/2026
import {test,expect} from '@playwright/test'
//textcontent alltextcontent google example
test("table",async({page})=>{
//<table>    <thead>     <tr>    <th></th>  <th></th>    </tr>
//<tbody>     <tr>    <td></td>   </tr>   </tbody>    </thead>    </table>

    await page.goto("https://testautomationpractice.blogspot.com/")
    const column=await page.locator('//table[@id="productTable"]/thead/tr/th')
    const row=await page.locator('//table[@id="productTable"]/tbody/tr')

    console.log("column count:",await column.count());
    console.log("rows count:",await row.count());
    //single checkbox //method 1
    //await page.locator('//table[@id="productTable"]//td[text()="Laptop"]/following-sibling::td/child::input[@type="checkbox"]').check()
    //method 2
    const laptop=await row.filter({
        has:page.locator('td'),
        hasText:"Laptop"
    })
    //await laptop.locator('//input[@type="checkbox"]').check()
    await page.pause()
//31/07/2026
//multiple checkbox   //method 1
  let electronic=["Laptop","Smartwatch","Smartphone"]
  for(let i of electronic){
    //await page.locator(`//table[@id="productTable"]//td[text()="${i}"]/following-sibling::td/child::input[@type="checkbox"]`).check()
    //tooks long time to locates
  }   //method 2
  const multiple=await row.filter({
    has:page.locator('td'),
    hasText:/Laptop|Smartwatch|Smartphone/
  })
  //await multiple.locator('//input[@type="checkbox"]').check()
  const arr=await multiple.all()      //method3
  for(let i of arr){
    await i.locator('//input[@type="checkbox"]').check()
  }
  await page.pause()
})

//task
test("table task page 2",async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/")
  const totpag = await page.locator('//div//ul//li//a[@href="#"]').count();
  await page.locator('//div//ul//li//a[text()="1"]').click();
  
  const row=await page.locator('//table[@id="productTable"]/tbody/tr')
  const multiple=await row.filter({
    has:page.locator('td'),
  })

  for (let i = 1; i <= totpag; i++) {
    await page.locator(`//div//ul//li//a[text()="${i}"]`).click();
    const arr=await multiple.all()      
    for(let ii of arr){
      await ii.locator('//input[@type="checkbox"]').check()
    }
  await page.pause()
  }
})