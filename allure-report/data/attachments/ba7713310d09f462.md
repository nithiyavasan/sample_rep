# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: assertion.spec.js >> assertion task login
- Location: tests\assertion.spec.js:36:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://practicetestautomation.com/logged-in-successfully/"
Received: "https://practicetestautomation.com/practice-test-login/"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × locator resolved to <html lang="en-US">…</html>
       - unexpected value "https://practicetestautomation.com/practice-test-login/"

```

```yaml
- link "Press \"Enter\" to skip to content":
  - /url: "#main-container"
- banner:
  - navigation
  - link "Practice Test Automation":
    - /url: https://practicetestautomation.com/
    - img "Practice Test Automation"
  - navigation:
    - navigation:
      - list:
        - listitem:
          - link "Home":
            - /url: https://practicetestautomation.com/
        - listitem:
          - link "Practice":
            - /url: https://practicetestautomation.com/practice/
        - listitem:
          - link "Courses":
            - /url: https://practicetestautomation.com/courses/
        - listitem:
          - link "AI Workshop":
            - /url: https://practicetestautomation.com/workshop
        - listitem:
          - link "Blog":
            - /url: https://practicetestautomation.com/blog/
        - listitem:
          - link "Contact":
            - /url: https://practicetestautomation.com/contact/
- main:
  - heading "Test login" [level=2]
  - list:
    - listitem: This is a simple Login page. Students can use this page to practice writing simple positive and negative LogIn tests. Login functionality is something that most of the test automation engineers need to automate.
    - listitem: "Use next credentials to execute Login: Username: student Password: Password123"
  - text: Username
  - textbox "Username"
  - text: Password
  - textbox "Password"
  - button "Submit"
  - text: Your username is invalid!
  - separator
  - 'heading "Test case 1: Positive LogIn test" [level=5]'
  - list:
    - listitem: Open page
    - listitem: Type username student into Username field
    - listitem: Type password Password123 into Password field
    - listitem: Push Submit button
    - listitem: Verify new page URL contains practicetestautomation.com/logged-in-successfully/
    - listitem: Verify new page contains expected text ('Congratulations' or 'successfully logged in')
    - listitem: Verify button Log out is displayed on the new page
  - separator
  - 'heading "Test case 2: Negative username test" [level=5]'
  - list:
    - listitem: Open page
    - listitem: Type username incorrectUser into Username field
    - listitem: Type password Password123 into Password field
    - listitem: Push Submit button
    - listitem: Verify error message is displayed
    - listitem: Verify error message text is Your username is invalid!
  - separator
  - 'heading "Test case 3: Negative password test" [level=5]'
  - list:
    - listitem: Open page
    - listitem: Type username student into Username field
    - listitem: Type password incorrectPassword into Password field
    - listitem: Push Submit button
    - listitem: Verify error message is displayed
    - listitem: Verify error message text is Your password is invalid!
- contentinfo:
  - text: © Copyright 2020
  - link "Practice Test Automation.":
    - /url: https://practicetestautomation.com/
  - text: All rights reserved |
  - link "Privacy Policy":
    - /url: https://practicetestautomation.com/privacy-policy/
```

# Test source

```ts
  1  | //20 July 2026
  2  | import {test,expect} from '@playwright/test'
  3  | 
  4  | test("assertion",async({page})=>{
  5  |     await page.goto("https://testautomationpractice.blogspot.com/")
  6  | 
  7  |     await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")
  8  |     await expect.soft(page).toHaveURL("https://testautomationpractice.blogspot.co/")
  9  |     
  10 |     await expect(page).toHaveTitle("Automation Testing Practice")
  11 |     await expect.soft(page).toHaveTitle("Automation Testing Pract")
  12 |     
  13 |     await expect(page.locator('//h1[@class="title"]')).toBeVisible()
  14 |     await expect.soft(page.locator('//h1[@class="title]')).toBeVisible()
  15 | 
  16 |     await expect(page.locator('//p[@class="description"]/child::span')).toHaveText("For Selenium, Cypress & Playwright")
  17 |     await expect.soft(page.locator('//p[@class="description"]/child::spa')).toHaveText("For Selenium, Cypress & Playwright")
  18 |     
  19 |     await expect(page.locator('//p[@class="description"]/child::span')).toContainText("Playwright")
  20 |     await expect.soft(page.locator('//p[@class="description"]/child::span')).toContainText("Playht")
  21 | //21 July 2026  hard stops when the code is incorrect and soft assertions highlights to incorrect code & continue to next
  22 |     
  23 |     const uname='//input[@id="name"]'
  24 |     await expect(page.locator(uname)).toBeEmpty()
  25 |     await expect.soft(page.locator(uname)).toBeEmpty()
  26 | 
  27 |     await page.locator(uname).fill("Playwright")
  28 |     
  29 |     await expect(page.locator(uname)).toHaveValue("Playwright")
  30 |     await expect.soft(page.locator(uname)).toHaveValue("Playwht")
  31 | 
  32 |     await expect(page.locator(uname)).toBeEmpty()
  33 |     await expect.soft(page.locator(uname)).toBeEmpty()
  34 | })
  35 | //task 20/07/2026
  36 | test("assertion task login",async({page})=>{
  37 |     await page.goto("https://practicetestautomation.com/practice-test-login/")
  38 | 
  39 |     await expect(page.locator('//input[@id="username"]').fill("student"))
  40 |     await expect(page.locator('//input[@name="password"]').fill("Password123"))
  41 | 
  42 |     await page.pause()
  43 |     await expect(page.locator('//button[@id="submit"]').click())
  44 | 
> 45 |     await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/")
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  46 |     
  47 |     await expect(page.locator('[class="has-text-align-center wp-block-paragraph"]')).toHaveText("Congratulations student. You successfully logged in!")
  48 |     await expect(page.locator('.wp-block-button__link')).toBeVisible();    
  49 | })
  50 | 
  51 | test("assertion task incorect username",async({page})=>{
  52 |     await page.goto("https://practicetestautomation.com/practice-test-login/")
  53 | 
  54 |     await expect(page.locator('//input[@id="username"]').fill("stud"))
  55 |     await expect(page.locator('//input[@name="password"]').fill("Password123"))
  56 |     await page.pause()
  57 |     await expect(page.locator('//button[@id="submit"]').click())
  58 |     await expect(page.locator('//div[@id="error"]')).toBeVisible()
  59 |     await expect(page.locator('//div[@id="error"]')).toContainText("Your username is invalid!")
  60 | })
  61 | 
  62 | test("assertion task incorect password",async({page})=>{
  63 |     await page.goto("https://practicetestautomation.com/practice-test-login/")
  64 | 
  65 |     await expect(page.locator('//input[@id="username"]').fill("student"))
  66 |     await page.pause()
  67 |     await expect(page.locator('//input[@name="password"]').fill("Pa"))
  68 |     await page.pause()
  69 |     await expect(page.locator('//button[@id="submit"]').click())
  70 |     await expect(page.locator('//div[@class="show"]')).toBeVisible()
  71 |     await expect(page.locator('//div[@class="show"]')).toContainText("Your password is invalid!")
  72 | })
```