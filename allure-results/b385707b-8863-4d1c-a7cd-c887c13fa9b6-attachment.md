# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: POM.spec.js >> login using POM
- Location: tests\POM.spec.js:6:5

# Error details

```
TypeError: _OH.default is not a constructor
```

# Test source

```ts
  1  | //11/08/2026
  2  | import {test,expect} from '@playwright/test'
  3  | import Orange from '../pages/hrm'
  4  | import cred from '../test-data/OH.json'
  5  | 
  6  | test("login using POM",async({page})=>{
  7  |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  8  | 
  9  |     let hrmLogin=new Orange(page)
  10 |     // await hrmLogin.login("Admin","admin123")
> 11 |     let cre=new cred(page)
     |             ^ TypeError: _OH.default is not a constructor
  12 |     await cre.login(cred.name,cred.pass)
  13 |     await hrmLogin.product()
  14 |     await hrmLogin.checkout()
  15 |     await page.pause()
  16 | })
  17 |    // await page.setViewportSize({width:375,height:667})
  18 | 
```