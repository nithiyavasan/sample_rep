# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> login using built-in locators
- Location: tests\login.spec.js:23:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByAltText('company-branding')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByAltText('company-branding')

```

# Test source

```ts
  1   | //10 July 26
  2   | import {test,expect} from '@playwright/test'
  3   | 
  4   | test("login using css",async({page})=>{
  5   |     await page.goto("https://www.facebook.com/")
  6   | 
  7   |     await page.locator("#_R_1h6kqsqppb6amH1_").fill("example@gmail.com")
  8   |     await page.locator('[type="password"]').fill("Password123")
  9   | 
  10  |     await page.locator('[aria-label="Log in"]').click()    
  11  | })
  12  | //task
  13  | test("login using css test",async({page})=>{
  14  |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  15  |   
  16  |     await page.locator('[name="username"]').fill("Admin")
  17  |     await page.locator('[placeholder="Password"]').fill("admin123")
  18  | 
  19  |     await page.locator('[type="submit"]').click()    
  20  | })    
  21  | 
  22  | //14 July 2026  
  23  | test("login using built-in locators",async({page})=>{
  24  |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  25  |     
> 26  |     await  expect(page.getByAltText("company-branding")).toBeVisible()
      |                                                          ^ Error: expect(locator).toBeVisible() failed
  27  | 
  28  |     await page.getByPlaceholder("Username").fill("Admin")    
  29  |     await page.getByPlaceholder("Password").fill("admin123")
  30  | 
  31  |     await page.getByRole("button",{name:' Login '}).click()
  32  | 
  33  | }) 
  34  | 
  35  | //15 July 2026
  36  | test("login using xpath",async({page})=>{
  37  |     await page.goto("https://www.facebook.com/")
  38  | 
  39  |     await page.locator('//input[@name="email"]').fill("example@gmail.com")
  40  |     await page.locator('//input[@type="password"]').fill("Password123")
  41  | 
  42  |    await page.locator('//div[@aria-label="Log in"]').click()  
  43  | })
  44  | //task
  45  | test("login using dynamic xpath",async({page})=>{
  46  |     await page.goto("https://testautomationpractice.blogspot.com/")
  47  | 
  48  |     await page.locator('//input[@class="form-control"][@placeholder="Enter Name"]')
  49  |     await page.locator('//input[@class="form-control" and @placeholder="Enter EMail"]')
  50  |     await page.locator('//input[@class="form-control" or @placeholder="Enter Phone"]')
  51  |     await page.locator('//input[contains(@placeholder,"Adress")]')
  52  | 
  53  |    await page.pause()  
  54  | })
  55  | 
  56  | test("login using dynamic xpath1",async({page})=>{
  57  |     await page.goto("https://www.timeanddate.com/calendar/")
  58  | 
  59  |     await page.locator('//span[@class="co2"]')
  60  |     await page.locator('//span[@class="co2" or "@class=co1"]')
  61  | 
  62  |    await page.pause()  
  63  | })
  64  | 
  65  | //16 July 2026
  66  | test("login using dynamic xpath2",async({page})=>{
  67  |     await page.goto("https://testautomationpractice.blogspot.com/")
  68  | 
  69  |     await page.locator('//span[text()="For Selenium, Cypress & Playwright]')
  70  |     await page.locator('//span[contains(test(),"Playwright")]')
  71  |     await page.locator('(//input[@class="form-control"])[3]')
  72  | 
  73  | 
  74  |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  75  | 
  76  |     await page.locator('//button[normalize-space(text()="Login")]')
  77  |    await page.pause()  
  78  | })
  79  | 
  80  | test("login using xpath axes",async({page})=>{
  81  |     await page.goto("https://testautomationpractice.blogspot.com/")
  82  | 
  83  |     await page.locator('//label[text()="Name:"]/following-sibling::input[@id="name"]')
  84  | 
  85  |     await page.locator('//label[text()="Email:"]/preceding-sibling::input[@id="name"]')
  86  | 
  87  |     await page.locator('//div[@class="form-group"]/child::input[@id="name"]')
  88  | 
  89  |     await page.locator('//div[@class="post-body entry-content"]/descendant::input[@id="name"]')
  90  | })
  91  | 
  92  | test("login using xpath axes1",async({page})=>{
  93  |     await page.goto("https://www.flipkart.com/search?q=iphone&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
  94  | 
  95  |     await page.locator('//span[text()="Add to Compare"]')
  96  |     ////span[text()="Add to Compare"]/child::div/ancestor::div[]/child::span
  97  |     //img[@alt="Apple iPhone 17 (Lavender,256 GB)"]/parent::div/parent::div/parent::div/following-sibling::div/descendant::span[text()="Add to Compare"]
  98  |     await page.pause()
  99  | })
  100 | 
  101 | test("login using xpath axes2",async({page})=>{
  102 |     await page.goto("https://www.google.com/")
  103 | 
  104 |     await page.locator('//div[@class="FPdoLc T14B5e iThwld"]/descendant::input[@class="RNmpXc"]')
  105 | //18 July 2026
  106 |     await page.locator('//div[@class="FPdoLc T14B5e iThwld"]/child::center/child::input[@aria-label="Im Feeling Lucky"]')
  107 |     await page.locator('//center/following::input[@aria-label="Im Feeling Lucky"]')
  108 |     await page.pause()
  109 | })
```