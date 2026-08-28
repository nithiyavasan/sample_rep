//11/08/2026
import {test,expect} from '@playwright/test'
import Orange from '../pages/hrm'
import cred from '../test-data/OH.json'

test("login using POM",async({page})=>{
    //14/08/2026 only  await page.setViewportSize({width:375,height:667})
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    
    let hrmLogin=new Orange(page)
    // await hrmLogin.login("Admin","admin123") one way
    await hrmLogin.login(cred.name,cred.pass)  // other way
    await hrmLogin.product()
    await hrmLogin.checkout()
    await page.pause()
}) 
