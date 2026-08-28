# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: assertion.spec.js >> assertion
- Location: tests\assertion.spec.js:4:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://testautomationpractice.blogspot.co/"
Received: "https://testautomationpractice.blogspot.com/"
Timeout:  5000ms

Call log:
  - Expect "soft toHaveURL" with timeout 5000ms
    13 × locator resolved to <html dir="ltr" lang="en" class="v2">…</html>
       - unexpected value "https://testautomationpractice.blogspot.com/"

```

```yaml
- banner:
  - heading "Automation Testing Practice" [level=1]
  - paragraph: For Selenium, Cypress & Playwright
- list:
  - listitem:
    - link "Home":
      - /url: http://testautomationpractice.blogspot.com/
  - listitem:
    - link "Udemy Courses":
      - /url: https://www.pavanonlinetrainings.com/#udemy
  - listitem:
    - link "Online Trainings":
      - /url: https://www.pavanonlinetrainings.com/
  - listitem:
    - link "Blog":
      - /url: https://www.pavantestingtools.com/
  - listitem:
    - link "PlaywrightPractice":
      - /url: https://testautomationpractice.blogspot.com/p/playwrightpractice.html
- heading "Data Entry Form" [level=3]:
  - link "Data Entry Form":
    - /url: https://testautomationpractice.blogspot.com/2018/09/automation-form.html
- text: "Name:"
- textbox "Enter Name"
- text: "Email:"
- textbox "Enter EMail"
- text: "Phone:"
- textbox "Enter Phone"
- text: "Address:"
- textbox "Address:"
- text: "Gender:"
- radio "Male"
- text: Male
- radio "Female"
- text: "Female Days:"
- checkbox "Sunday"
- text: Sunday
- checkbox "Monday"
- text: Monday
- checkbox "Tuesday"
- text: Tuesday
- checkbox "Wednesday"
- text: Wednesday
- checkbox "Thursday"
- text: Thursday
- checkbox "Friday"
- text: Friday
- checkbox "Saturday"
- text: "Saturday Country:"
- combobox "Country:":
  - option "United States" [selected]
  - option "Canada"
  - option "United Kingdom"
  - option "Germany"
  - option "France"
  - option "Australia"
  - option "Japan"
  - option "China"
  - option "Brazil"
  - option "India"
- text: "Colors:"
- listbox "Colors:":
  - option "Red"
  - option "Blue"
  - option "Green"
  - option "Yellow"
  - option "Red"
  - option "White"
  - option "Green"
- text: "Sorted List:"
- listbox "Sorted List:":
  - option "Cat"
  - option "Cheetah"
  - option "Deer"
  - option "Dog"
  - option "Elephant"
  - option "Fox"
  - option "Giraffe"
  - option "Lion"
  - option "Rabbit"
  - option "Zebra"
- paragraph:
  - text: "Date Picker 1 (mm/dd/yyyy):"
  - textbox
- paragraph:
  - text: "Date Picker 2 (dd/mm/yyyy) :"
  - textbox
- text: "Date Picker 3: (Select a Date Range)"
- textbox:
  - /placeholder: Start Date
- text: to
- textbox:
  - /placeholder: End Date
- button "Submit"
- link "Home":
  - /url: https://testautomationpractice.blogspot.com/
- text: "Subscribe to:"
- link "Posts (Atom)":
  - /url: https://testautomationpractice.blogspot.com/feeds/posts/default
- heading "Upload Files" [level=2]
- button "Choose File"
- button "Upload Single File"
- paragraph
- button "Choose File"
- button "Upload Multiple Files"
- paragraph
- heading "Static Web Table" [level=2]
- table:
  - rowgroup:
    - row "BookName Author Subject Price":
      - columnheader "BookName"
      - columnheader "Author"
      - columnheader "Subject"
      - columnheader "Price"
    - row "Learn Selenium Amit Selenium 300":
      - cell "Learn Selenium"
      - cell "Amit"
      - cell "Selenium"
      - cell "300"
    - row "Learn Java Mukesh Java 500":
      - cell "Learn Java"
      - cell "Mukesh"
      - cell "Java"
      - cell "500"
    - row "Learn JS Animesh Javascript 300":
      - cell "Learn JS"
      - cell "Animesh"
      - cell "Javascript"
      - cell "300"
    - row "Master In Selenium Mukesh Selenium 3000":
      - cell "Master In Selenium"
      - cell "Mukesh"
      - cell "Selenium"
      - cell "3000"
    - row "Master In Java Amod JAVA 2000":
      - cell "Master In Java"
      - cell "Amod"
      - cell "JAVA"
      - cell "2000"
    - row "Master In JS Amit Javascript 1000":
      - cell "Master In JS"
      - cell "Amit"
      - cell "Javascript"
      - cell "1000"
- heading "Dynamic Web Table" [level=2]
- table:
  - rowgroup:
    - row "Name Disk (MB/s) CPU (%) Network (Mbps) Memory (MB)":
      - columnheader "Name"
      - columnheader "Disk (MB/s)"
      - columnheader "CPU (%)"
      - columnheader "Network (Mbps)"
      - columnheader "Memory (MB)"
  - rowgroup:
    - row "Chrome 0.74 MB/s 5.6% 0.7 Mbps 53.9 MB":
      - cell "Chrome"
      - cell "0.74 MB/s"
      - cell "5.6%"
      - cell "0.7 Mbps"
      - cell "53.9 MB"
    - row "System 0.80 MB/s 0.6% 1.2 Mbps 87.7 MB":
      - cell "System"
      - cell "0.80 MB/s"
      - cell "0.6%"
      - cell "1.2 Mbps"
      - cell "87.7 MB"
    - row "Firefox 0.03 MB/s 1.8% 9.3 Mbps 55.8 MB":
      - cell "Firefox"
      - cell "0.03 MB/s"
      - cell "1.8%"
      - cell "9.3 Mbps"
      - cell "55.8 MB"
    - row "Internet Explorer 0.83 MB/s 9.6% 5.0 Mbps 84.9 MB":
      - cell "Internet Explorer"
      - cell "0.83 MB/s"
      - cell "9.6%"
      - cell "5.0 Mbps"
      - cell "84.9 MB"
- paragraph:
  - text: "CPU load of Chrome process:"
  - strong: 5.6%
- paragraph:
  - text: "Memory Size of Firefox process:"
  - strong: 55.8 MB
- paragraph:
  - text: "Network speed of Chrome process:"
  - strong: 0.7 Mbps
- paragraph:
  - text: "Disk space of Firefox process:"
  - strong: 0.03 MB/s
- heading "Pagination Web Table" [level=2]
- table:
  - rowgroup:
    - row "ID Name Price Select":
      - columnheader "ID"
      - columnheader "Name"
      - columnheader "Price"
      - columnheader "Select"
  - rowgroup:
    - row "1 Smartphone $10.99":
      - cell "1"
      - cell "Smartphone"
      - cell "$10.99"
      - cell:
        - checkbox
    - row "2 Laptop $19.99":
      - cell "2"
      - cell "Laptop"
      - cell "$19.99"
      - cell:
        - checkbox
    - row "3 Tablet $5.99":
      - cell "3"
      - cell "Tablet"
      - cell "$5.99"
      - cell:
        - checkbox
    - row "4 Smartwatch $7.99":
      - cell "4"
      - cell "Smartwatch"
      - cell "$7.99"
      - cell:
        - checkbox
    - row "5 Wireless Earbuds $8.99":
      - cell "5"
      - cell "Wireless Earbuds"
      - cell "$8.99"
      - cell:
        - checkbox
- list:
  - listitem:
    - link "1":
      - /url: "#"
  - listitem:
    - link "2":
      - /url: "#"
  - listitem:
    - link "3":
      - /url: "#"
  - listitem:
    - link "4":
      - /url: "#"
- complementary
- complementary:
  - heading "Tabs" [level=2]
  - link:
    - /url: https://wikipedia.org/wiki/
    - img
  - textbox
  - button "Submit"
  - heading "Dynamic Button" [level=2]
  - button "START"
  - heading "Alerts & Popups" [level=2]
  - button "Simple Alert"
  - button "Confirmation Alert"
  - button "Prompt Alert"
  - paragraph
  - button "New Tab"
  - button "Popup Windows"
  - heading "Mouse Hover" [level=2]
  - paragraph: Move the mouse over the button to open the dropdown menu.
  - button "Point Me"
  - heading "Double Click" [level=2]
  - text: "Field1:"
  - textbox: Hello World!
  - text: "Field2:"
  - textbox
  - button "Copy Text"
  - paragraph: Double click on button, the text from Field1 will be copied into Field2.
  - heading "Drag and Drop" [level=2]
  - paragraph: Drag me to my target
  - paragraph: Drop here
  - heading "Slider" [level=2]
  - paragraph:
    - text: "Price range:"
    - textbox "Price range:": $75 - $300
  - heading "SVG Elements" [level=2]
  - img
  - img
  - img
  - heading "Scrolling DropDown" [level=2]
  - textbox "Select an item"
  - heading "Labels And Links" [level=2]
  - heading "Mobile Labels" [level=4]
  - text: Samsung Real Me Moto
  - heading "Laptop Links" [level=4]
  - link "Apple":
    - /url: https://www.apple.com/
  - link "Lenovo":
    - /url: https://www.lenovo.com/
  - link "Dell":
    - /url: https://www.dell.com/
  - heading "Broken Links" [level=4]
  - link "Errorcode 400":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=400
  - link "Errorcode 401":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=401
  - link "Errorcode 403":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=403
  - link "Errorcode 404":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=404
  - link "Errorcode 408":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=408
  - link "Errorcode 500":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=500
  - link "Errorcode 502":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=502
  - link "Errorcode 503":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=503
  - heading "Visitors" [level=2]
  - img "A chart."
  - table:
    - rowgroup:
      - row:
        - columnheader
        - columnheader
    - rowgroup:
      - row "0 72":
        - cell "0"
        - cell "72"
      - row "1 63":
        - cell "1"
        - cell "63"
      - row "2 57":
        - cell "2"
        - cell "57"
      - row "3 86":
        - cell "3"
        - cell "86"
      - row "4 88":
        - cell "4"
        - cell "88"
      - row "5 100":
        - cell "5"
        - cell "100"
      - row "6 88":
        - cell "6"
        - cell "88"
      - row "7 86":
        - cell "7"
        - cell "86"
      - row "8 70":
        - cell "8"
        - cell "70"
      - row "9 60":
        - cell "9"
        - cell "60"
      - row "10 88":
        - cell "10"
        - cell "88"
      - row "11 98":
        - cell "11"
        - cell "98"
      - row "12 94":
        - cell "12"
        - cell "94"
      - row "13 85":
        - cell "13"
        - cell "85"
      - row "14 84":
        - cell "14"
        - cell "84"
      - row "15 61":
        - cell "15"
        - cell "61"
      - row "16 47":
        - cell "16"
        - cell "47"
      - row "17 86":
        - cell "17"
        - cell "86"
      - row "18 91":
        - cell "18"
        - cell "91"
      - row "19 80":
        - cell "19"
        - cell "80"
      - row "20 97":
        - cell "20"
        - cell "97"
      - row "21 75":
        - cell "21"
        - cell "75"
      - row "22 56":
        - cell "22"
        - cell "56"
      - row "23 60":
        - cell "23"
        - cell "60"
      - row "24 80":
        - cell "24"
        - cell "80"
      - row "25 91":
        - cell "25"
        - cell "91"
      - row "26 76":
        - cell "26"
        - cell "76"
      - row "27 89":
        - cell "27"
        - cell "89"
      - row "28 69":
        - cell "28"
        - cell "69"
      - row "29 18":
        - cell "29"
        - cell "18"
  - text: 8,576,411
- contentinfo:
  - table:
    - rowgroup:
      - row "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files ShadowDOM Mobiles Laptops Blog Choose File Youtube":
        - cell "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files":
          - heading "Form" [level=2]
          - heading "Section 1" [level=4]
          - paragraph: This is a paragraph in Section 1.
          - textbox
          - button "Submit"
          - heading "Section 2" [level=4]
          - paragraph: This is a paragraph in Section 2.
          - textbox
          - button "Submit"
          - heading "Section 3" [level=4]
          - paragraph: This is a paragraph in Section 3.
          - textbox
          - button "Submit"
          - heading "Footer Links" [level=2]
          - list:
            - listitem:
              - link "Home":
                - /url: http://testautomationpractice.blogspot.com/
            - listitem:
              - link "Hidden Elements & AJAX":
                - /url: https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html
            - listitem:
              - link "Download Files":
                - /url: https://testautomationpractice.blogspot.com/p/download-files_25.html
        - cell "ShadowDOM Mobiles Laptops Blog Choose File Youtube":
          - heading "ShadowDOM" [level=2]
          - text: Mobiles Laptops
          - link "Blog":
            - /url: https://www.pavantestingtools.com/
          - textbox
          - checkbox
          - button "Choose File"
          - link "Youtube":
            - /url: https://www.youtube.com/@sdetpavan/videos
  - text: Theme images by
  - link "merrymoonmary":
    - /url: http://www.istockphoto.com/portfolio/merrymoonmary?platform=blogger
  - text: . Powered by
  - link "Blogger":
    - /url: https://www.blogger.com
  - text: .
```

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Automation Testing Pract"
Received: "Automation Testing Practice"
Timeout:  5000ms

Call log:
  - Expect "soft toHaveTitle" with timeout 5000ms
    13 × locator resolved to <html dir="ltr" lang="en" class="v2">…</html>
       - unexpected value "Automation Testing Practice"

```

```yaml
- banner:
  - heading "Automation Testing Practice" [level=1]
  - paragraph: For Selenium, Cypress & Playwright
- list:
  - listitem:
    - link "Home":
      - /url: http://testautomationpractice.blogspot.com/
  - listitem:
    - link "Udemy Courses":
      - /url: https://www.pavanonlinetrainings.com/#udemy
  - listitem:
    - link "Online Trainings":
      - /url: https://www.pavanonlinetrainings.com/
  - listitem:
    - link "Blog":
      - /url: https://www.pavantestingtools.com/
  - listitem:
    - link "PlaywrightPractice":
      - /url: https://testautomationpractice.blogspot.com/p/playwrightpractice.html
- heading "Data Entry Form" [level=3]:
  - link "Data Entry Form":
    - /url: https://testautomationpractice.blogspot.com/2018/09/automation-form.html
- text: "Name:"
- textbox "Enter Name"
- text: "Email:"
- textbox "Enter EMail"
- text: "Phone:"
- textbox "Enter Phone"
- text: "Address:"
- textbox "Address:"
- text: "Gender:"
- radio "Male"
- text: Male
- radio "Female"
- text: "Female Days:"
- checkbox "Sunday"
- text: Sunday
- checkbox "Monday"
- text: Monday
- checkbox "Tuesday"
- text: Tuesday
- checkbox "Wednesday"
- text: Wednesday
- checkbox "Thursday"
- text: Thursday
- checkbox "Friday"
- text: Friday
- checkbox "Saturday"
- text: "Saturday Country:"
- combobox "Country:":
  - option "United States" [selected]
  - option "Canada"
  - option "United Kingdom"
  - option "Germany"
  - option "France"
  - option "Australia"
  - option "Japan"
  - option "China"
  - option "Brazil"
  - option "India"
- text: "Colors:"
- listbox "Colors:":
  - option "Red"
  - option "Blue"
  - option "Green"
  - option "Yellow"
  - option "Red"
  - option "White"
  - option "Green"
- text: "Sorted List:"
- listbox "Sorted List:":
  - option "Cat"
  - option "Cheetah"
  - option "Deer"
  - option "Dog"
  - option "Elephant"
  - option "Fox"
  - option "Giraffe"
  - option "Lion"
  - option "Rabbit"
  - option "Zebra"
- paragraph:
  - text: "Date Picker 1 (mm/dd/yyyy):"
  - textbox
- paragraph:
  - text: "Date Picker 2 (dd/mm/yyyy) :"
  - textbox
- text: "Date Picker 3: (Select a Date Range)"
- textbox:
  - /placeholder: Start Date
- text: to
- textbox:
  - /placeholder: End Date
- button "Submit"
- link "Home":
  - /url: https://testautomationpractice.blogspot.com/
- text: "Subscribe to:"
- link "Posts (Atom)":
  - /url: https://testautomationpractice.blogspot.com/feeds/posts/default
- heading "Upload Files" [level=2]
- button "Choose File"
- button "Upload Single File"
- paragraph
- button "Choose File"
- button "Upload Multiple Files"
- paragraph
- heading "Static Web Table" [level=2]
- table:
  - rowgroup:
    - row "BookName Author Subject Price":
      - columnheader "BookName"
      - columnheader "Author"
      - columnheader "Subject"
      - columnheader "Price"
    - row "Learn Selenium Amit Selenium 300":
      - cell "Learn Selenium"
      - cell "Amit"
      - cell "Selenium"
      - cell "300"
    - row "Learn Java Mukesh Java 500":
      - cell "Learn Java"
      - cell "Mukesh"
      - cell "Java"
      - cell "500"
    - row "Learn JS Animesh Javascript 300":
      - cell "Learn JS"
      - cell "Animesh"
      - cell "Javascript"
      - cell "300"
    - row "Master In Selenium Mukesh Selenium 3000":
      - cell "Master In Selenium"
      - cell "Mukesh"
      - cell "Selenium"
      - cell "3000"
    - row "Master In Java Amod JAVA 2000":
      - cell "Master In Java"
      - cell "Amod"
      - cell "JAVA"
      - cell "2000"
    - row "Master In JS Amit Javascript 1000":
      - cell "Master In JS"
      - cell "Amit"
      - cell "Javascript"
      - cell "1000"
- heading "Dynamic Web Table" [level=2]
- table:
  - rowgroup:
    - row "Name Disk (MB/s) CPU (%) Network (Mbps) Memory (MB)":
      - columnheader "Name"
      - columnheader "Disk (MB/s)"
      - columnheader "CPU (%)"
      - columnheader "Network (Mbps)"
      - columnheader "Memory (MB)"
  - rowgroup:
    - row "Chrome 0.74 MB/s 5.6% 0.7 Mbps 53.9 MB":
      - cell "Chrome"
      - cell "0.74 MB/s"
      - cell "5.6%"
      - cell "0.7 Mbps"
      - cell "53.9 MB"
    - row "System 0.80 MB/s 0.6% 1.2 Mbps 87.7 MB":
      - cell "System"
      - cell "0.80 MB/s"
      - cell "0.6%"
      - cell "1.2 Mbps"
      - cell "87.7 MB"
    - row "Firefox 0.03 MB/s 1.8% 9.3 Mbps 55.8 MB":
      - cell "Firefox"
      - cell "0.03 MB/s"
      - cell "1.8%"
      - cell "9.3 Mbps"
      - cell "55.8 MB"
    - row "Internet Explorer 0.83 MB/s 9.6% 5.0 Mbps 84.9 MB":
      - cell "Internet Explorer"
      - cell "0.83 MB/s"
      - cell "9.6%"
      - cell "5.0 Mbps"
      - cell "84.9 MB"
- paragraph:
  - text: "CPU load of Chrome process:"
  - strong: 5.6%
- paragraph:
  - text: "Memory Size of Firefox process:"
  - strong: 55.8 MB
- paragraph:
  - text: "Network speed of Chrome process:"
  - strong: 0.7 Mbps
- paragraph:
  - text: "Disk space of Firefox process:"
  - strong: 0.03 MB/s
- heading "Pagination Web Table" [level=2]
- table:
  - rowgroup:
    - row "ID Name Price Select":
      - columnheader "ID"
      - columnheader "Name"
      - columnheader "Price"
      - columnheader "Select"
  - rowgroup:
    - row "1 Smartphone $10.99":
      - cell "1"
      - cell "Smartphone"
      - cell "$10.99"
      - cell:
        - checkbox
    - row "2 Laptop $19.99":
      - cell "2"
      - cell "Laptop"
      - cell "$19.99"
      - cell:
        - checkbox
    - row "3 Tablet $5.99":
      - cell "3"
      - cell "Tablet"
      - cell "$5.99"
      - cell:
        - checkbox
    - row "4 Smartwatch $7.99":
      - cell "4"
      - cell "Smartwatch"
      - cell "$7.99"
      - cell:
        - checkbox
    - row "5 Wireless Earbuds $8.99":
      - cell "5"
      - cell "Wireless Earbuds"
      - cell "$8.99"
      - cell:
        - checkbox
- list:
  - listitem:
    - link "1":
      - /url: "#"
  - listitem:
    - link "2":
      - /url: "#"
  - listitem:
    - link "3":
      - /url: "#"
  - listitem:
    - link "4":
      - /url: "#"
- complementary
- complementary:
  - heading "Tabs" [level=2]
  - link:
    - /url: https://wikipedia.org/wiki/
    - img
  - textbox
  - button "Submit"
  - heading "Dynamic Button" [level=2]
  - button "START"
  - heading "Alerts & Popups" [level=2]
  - button "Simple Alert"
  - button "Confirmation Alert"
  - button "Prompt Alert"
  - paragraph
  - button "New Tab"
  - button "Popup Windows"
  - heading "Mouse Hover" [level=2]
  - paragraph: Move the mouse over the button to open the dropdown menu.
  - button "Point Me"
  - heading "Double Click" [level=2]
  - text: "Field1:"
  - textbox: Hello World!
  - text: "Field2:"
  - textbox
  - button "Copy Text"
  - paragraph: Double click on button, the text from Field1 will be copied into Field2.
  - heading "Drag and Drop" [level=2]
  - paragraph: Drag me to my target
  - paragraph: Drop here
  - heading "Slider" [level=2]
  - paragraph:
    - text: "Price range:"
    - textbox "Price range:": $75 - $300
  - heading "SVG Elements" [level=2]
  - img
  - img
  - img
  - heading "Scrolling DropDown" [level=2]
  - textbox "Select an item"
  - heading "Labels And Links" [level=2]
  - heading "Mobile Labels" [level=4]
  - text: Samsung Real Me Moto
  - heading "Laptop Links" [level=4]
  - link "Apple":
    - /url: https://www.apple.com/
  - link "Lenovo":
    - /url: https://www.lenovo.com/
  - link "Dell":
    - /url: https://www.dell.com/
  - heading "Broken Links" [level=4]
  - link "Errorcode 400":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=400
  - link "Errorcode 401":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=401
  - link "Errorcode 403":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=403
  - link "Errorcode 404":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=404
  - link "Errorcode 408":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=408
  - link "Errorcode 500":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=500
  - link "Errorcode 502":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=502
  - link "Errorcode 503":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=503
  - heading "Visitors" [level=2]
  - img "A chart."
  - table:
    - rowgroup:
      - row:
        - columnheader
        - columnheader
    - rowgroup:
      - row "0 72":
        - cell "0"
        - cell "72"
      - row "1 63":
        - cell "1"
        - cell "63"
      - row "2 57":
        - cell "2"
        - cell "57"
      - row "3 86":
        - cell "3"
        - cell "86"
      - row "4 88":
        - cell "4"
        - cell "88"
      - row "5 100":
        - cell "5"
        - cell "100"
      - row "6 88":
        - cell "6"
        - cell "88"
      - row "7 86":
        - cell "7"
        - cell "86"
      - row "8 70":
        - cell "8"
        - cell "70"
      - row "9 60":
        - cell "9"
        - cell "60"
      - row "10 88":
        - cell "10"
        - cell "88"
      - row "11 98":
        - cell "11"
        - cell "98"
      - row "12 94":
        - cell "12"
        - cell "94"
      - row "13 85":
        - cell "13"
        - cell "85"
      - row "14 84":
        - cell "14"
        - cell "84"
      - row "15 61":
        - cell "15"
        - cell "61"
      - row "16 47":
        - cell "16"
        - cell "47"
      - row "17 86":
        - cell "17"
        - cell "86"
      - row "18 91":
        - cell "18"
        - cell "91"
      - row "19 80":
        - cell "19"
        - cell "80"
      - row "20 97":
        - cell "20"
        - cell "97"
      - row "21 75":
        - cell "21"
        - cell "75"
      - row "22 56":
        - cell "22"
        - cell "56"
      - row "23 60":
        - cell "23"
        - cell "60"
      - row "24 80":
        - cell "24"
        - cell "80"
      - row "25 91":
        - cell "25"
        - cell "91"
      - row "26 76":
        - cell "26"
        - cell "76"
      - row "27 89":
        - cell "27"
        - cell "89"
      - row "28 69":
        - cell "28"
        - cell "69"
      - row "29 18":
        - cell "29"
        - cell "18"
  - text: 8,576,411
- contentinfo:
  - table:
    - rowgroup:
      - row "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files ShadowDOM Mobiles Laptops Blog Choose File Youtube":
        - cell "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files":
          - heading "Form" [level=2]
          - heading "Section 1" [level=4]
          - paragraph: This is a paragraph in Section 1.
          - textbox
          - button "Submit"
          - heading "Section 2" [level=4]
          - paragraph: This is a paragraph in Section 2.
          - textbox
          - button "Submit"
          - heading "Section 3" [level=4]
          - paragraph: This is a paragraph in Section 3.
          - textbox
          - button "Submit"
          - heading "Footer Links" [level=2]
          - list:
            - listitem:
              - link "Home":
                - /url: http://testautomationpractice.blogspot.com/
            - listitem:
              - link "Hidden Elements & AJAX":
                - /url: https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html
            - listitem:
              - link "Download Files":
                - /url: https://testautomationpractice.blogspot.com/p/download-files_25.html
        - cell "ShadowDOM Mobiles Laptops Blog Choose File Youtube":
          - heading "ShadowDOM" [level=2]
          - text: Mobiles Laptops
          - link "Blog":
            - /url: https://www.pavantestingtools.com/
          - textbox
          - checkbox
          - button "Choose File"
          - link "Youtube":
            - /url: https://www.youtube.com/@sdetpavan/videos
  - text: Theme images by
  - link "merrymoonmary":
    - /url: http://www.istockphoto.com/portfolio/merrymoonmary?platform=blogger
  - text: . Powered by
  - link "Blogger":
    - /url: https://www.blogger.com
  - text: .
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//h1[@class="title]')
Expected: visible
Error: SyntaxError: Failed to execute 'evaluate' on 'Document': The string '//h1[@class="title]' is not a valid XPath expression.
    at Object.queryAll (<anonymous>:6296:25)
    at InjectedScript._queryEngineAll (<anonymous>:6969:49)
    at InjectedScript.querySelectorAll (<anonymous>:6956:30)
    at callMatchedElements (eval at evaluate (:311:30), <anonymous>:2:29)
    at UtilityScript.evaluate (<anonymous>:313:16)
    at UtilityScript.<anonymous> (<anonymous>:1:44)

Call log:
  - Expect "soft toBeVisible" with timeout 5000ms
  - waiting for locator('//h1[@class="title]')

```

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('//p[@class="description"]/child::spa')
Expected: "For Selenium, Cypress & Playwright"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "soft toHaveText" with timeout 5000ms
  - waiting for locator('//p[@class="description"]/child::spa')

```

```yaml
- banner:
  - heading "Automation Testing Practice" [level=1]
  - paragraph: For Selenium, Cypress & Playwright
- list:
  - listitem:
    - link "Home":
      - /url: http://testautomationpractice.blogspot.com/
  - listitem:
    - link "Udemy Courses":
      - /url: https://www.pavanonlinetrainings.com/#udemy
  - listitem:
    - link "Online Trainings":
      - /url: https://www.pavanonlinetrainings.com/
  - listitem:
    - link "Blog":
      - /url: https://www.pavantestingtools.com/
  - listitem:
    - link "PlaywrightPractice":
      - /url: https://testautomationpractice.blogspot.com/p/playwrightpractice.html
- heading "Data Entry Form" [level=3]:
  - link "Data Entry Form":
    - /url: https://testautomationpractice.blogspot.com/2018/09/automation-form.html
- text: "Name:"
- textbox "Enter Name"
- text: "Email:"
- textbox "Enter EMail"
- text: "Phone:"
- textbox "Enter Phone"
- text: "Address:"
- textbox "Address:"
- text: "Gender:"
- radio "Male"
- text: Male
- radio "Female"
- text: "Female Days:"
- checkbox "Sunday"
- text: Sunday
- checkbox "Monday"
- text: Monday
- checkbox "Tuesday"
- text: Tuesday
- checkbox "Wednesday"
- text: Wednesday
- checkbox "Thursday"
- text: Thursday
- checkbox "Friday"
- text: Friday
- checkbox "Saturday"
- text: "Saturday Country:"
- combobox "Country:":
  - option "United States" [selected]
  - option "Canada"
  - option "United Kingdom"
  - option "Germany"
  - option "France"
  - option "Australia"
  - option "Japan"
  - option "China"
  - option "Brazil"
  - option "India"
- text: "Colors:"
- listbox "Colors:":
  - option "Red"
  - option "Blue"
  - option "Green"
  - option "Yellow"
  - option "Red"
  - option "White"
  - option "Green"
- text: "Sorted List:"
- listbox "Sorted List:":
  - option "Cat"
  - option "Cheetah"
  - option "Deer"
  - option "Dog"
  - option "Elephant"
  - option "Fox"
  - option "Giraffe"
  - option "Lion"
  - option "Rabbit"
  - option "Zebra"
- paragraph:
  - text: "Date Picker 1 (mm/dd/yyyy):"
  - textbox
- paragraph:
  - text: "Date Picker 2 (dd/mm/yyyy) :"
  - textbox
- text: "Date Picker 3: (Select a Date Range)"
- textbox:
  - /placeholder: Start Date
- text: to
- textbox:
  - /placeholder: End Date
- button "Submit"
- link "Home":
  - /url: https://testautomationpractice.blogspot.com/
- text: "Subscribe to:"
- link "Posts (Atom)":
  - /url: https://testautomationpractice.blogspot.com/feeds/posts/default
- heading "Upload Files" [level=2]
- button "Choose File"
- button "Upload Single File"
- paragraph
- button "Choose File"
- button "Upload Multiple Files"
- paragraph
- heading "Static Web Table" [level=2]
- table:
  - rowgroup:
    - row "BookName Author Subject Price":
      - columnheader "BookName"
      - columnheader "Author"
      - columnheader "Subject"
      - columnheader "Price"
    - row "Learn Selenium Amit Selenium 300":
      - cell "Learn Selenium"
      - cell "Amit"
      - cell "Selenium"
      - cell "300"
    - row "Learn Java Mukesh Java 500":
      - cell "Learn Java"
      - cell "Mukesh"
      - cell "Java"
      - cell "500"
    - row "Learn JS Animesh Javascript 300":
      - cell "Learn JS"
      - cell "Animesh"
      - cell "Javascript"
      - cell "300"
    - row "Master In Selenium Mukesh Selenium 3000":
      - cell "Master In Selenium"
      - cell "Mukesh"
      - cell "Selenium"
      - cell "3000"
    - row "Master In Java Amod JAVA 2000":
      - cell "Master In Java"
      - cell "Amod"
      - cell "JAVA"
      - cell "2000"
    - row "Master In JS Amit Javascript 1000":
      - cell "Master In JS"
      - cell "Amit"
      - cell "Javascript"
      - cell "1000"
- heading "Dynamic Web Table" [level=2]
- table:
  - rowgroup:
    - row "Name Disk (MB/s) CPU (%) Network (Mbps) Memory (MB)":
      - columnheader "Name"
      - columnheader "Disk (MB/s)"
      - columnheader "CPU (%)"
      - columnheader "Network (Mbps)"
      - columnheader "Memory (MB)"
  - rowgroup:
    - row "Chrome 0.74 MB/s 5.6% 0.7 Mbps 53.9 MB":
      - cell "Chrome"
      - cell "0.74 MB/s"
      - cell "5.6%"
      - cell "0.7 Mbps"
      - cell "53.9 MB"
    - row "System 0.80 MB/s 0.6% 1.2 Mbps 87.7 MB":
      - cell "System"
      - cell "0.80 MB/s"
      - cell "0.6%"
      - cell "1.2 Mbps"
      - cell "87.7 MB"
    - row "Firefox 0.03 MB/s 1.8% 9.3 Mbps 55.8 MB":
      - cell "Firefox"
      - cell "0.03 MB/s"
      - cell "1.8%"
      - cell "9.3 Mbps"
      - cell "55.8 MB"
    - row "Internet Explorer 0.83 MB/s 9.6% 5.0 Mbps 84.9 MB":
      - cell "Internet Explorer"
      - cell "0.83 MB/s"
      - cell "9.6%"
      - cell "5.0 Mbps"
      - cell "84.9 MB"
- paragraph:
  - text: "CPU load of Chrome process:"
  - strong: 5.6%
- paragraph:
  - text: "Memory Size of Firefox process:"
  - strong: 55.8 MB
- paragraph:
  - text: "Network speed of Chrome process:"
  - strong: 0.7 Mbps
- paragraph:
  - text: "Disk space of Firefox process:"
  - strong: 0.03 MB/s
- heading "Pagination Web Table" [level=2]
- table:
  - rowgroup:
    - row "ID Name Price Select":
      - columnheader "ID"
      - columnheader "Name"
      - columnheader "Price"
      - columnheader "Select"
  - rowgroup:
    - row "1 Smartphone $10.99":
      - cell "1"
      - cell "Smartphone"
      - cell "$10.99"
      - cell:
        - checkbox
    - row "2 Laptop $19.99":
      - cell "2"
      - cell "Laptop"
      - cell "$19.99"
      - cell:
        - checkbox
    - row "3 Tablet $5.99":
      - cell "3"
      - cell "Tablet"
      - cell "$5.99"
      - cell:
        - checkbox
    - row "4 Smartwatch $7.99":
      - cell "4"
      - cell "Smartwatch"
      - cell "$7.99"
      - cell:
        - checkbox
    - row "5 Wireless Earbuds $8.99":
      - cell "5"
      - cell "Wireless Earbuds"
      - cell "$8.99"
      - cell:
        - checkbox
- list:
  - listitem:
    - link "1":
      - /url: "#"
  - listitem:
    - link "2":
      - /url: "#"
  - listitem:
    - link "3":
      - /url: "#"
  - listitem:
    - link "4":
      - /url: "#"
- complementary
- complementary:
  - heading "Tabs" [level=2]
  - link:
    - /url: https://wikipedia.org/wiki/
    - img
  - textbox
  - button "Submit"
  - heading "Dynamic Button" [level=2]
  - button "START"
  - heading "Alerts & Popups" [level=2]
  - button "Simple Alert"
  - button "Confirmation Alert"
  - button "Prompt Alert"
  - paragraph
  - button "New Tab"
  - button "Popup Windows"
  - heading "Mouse Hover" [level=2]
  - paragraph: Move the mouse over the button to open the dropdown menu.
  - button "Point Me"
  - heading "Double Click" [level=2]
  - text: "Field1:"
  - textbox: Hello World!
  - text: "Field2:"
  - textbox
  - button "Copy Text"
  - paragraph: Double click on button, the text from Field1 will be copied into Field2.
  - heading "Drag and Drop" [level=2]
  - paragraph: Drag me to my target
  - paragraph: Drop here
  - heading "Slider" [level=2]
  - paragraph:
    - text: "Price range:"
    - textbox "Price range:": $75 - $300
  - heading "SVG Elements" [level=2]
  - img
  - img
  - img
  - heading "Scrolling DropDown" [level=2]
  - textbox "Select an item"
  - heading "Labels And Links" [level=2]
  - heading "Mobile Labels" [level=4]
  - text: Samsung Real Me Moto
  - heading "Laptop Links" [level=4]
  - link "Apple":
    - /url: https://www.apple.com/
  - link "Lenovo":
    - /url: https://www.lenovo.com/
  - link "Dell":
    - /url: https://www.dell.com/
  - heading "Broken Links" [level=4]
  - link "Errorcode 400":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=400
  - link "Errorcode 401":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=401
  - link "Errorcode 403":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=403
  - link "Errorcode 404":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=404
  - link "Errorcode 408":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=408
  - link "Errorcode 500":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=500
  - link "Errorcode 502":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=502
  - link "Errorcode 503":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=503
  - heading "Visitors" [level=2]
  - img "A chart."
  - table:
    - rowgroup:
      - row:
        - columnheader
        - columnheader
    - rowgroup:
      - row "0 72":
        - cell "0"
        - cell "72"
      - row "1 63":
        - cell "1"
        - cell "63"
      - row "2 57":
        - cell "2"
        - cell "57"
      - row "3 86":
        - cell "3"
        - cell "86"
      - row "4 88":
        - cell "4"
        - cell "88"
      - row "5 100":
        - cell "5"
        - cell "100"
      - row "6 88":
        - cell "6"
        - cell "88"
      - row "7 86":
        - cell "7"
        - cell "86"
      - row "8 70":
        - cell "8"
        - cell "70"
      - row "9 60":
        - cell "9"
        - cell "60"
      - row "10 88":
        - cell "10"
        - cell "88"
      - row "11 98":
        - cell "11"
        - cell "98"
      - row "12 94":
        - cell "12"
        - cell "94"
      - row "13 85":
        - cell "13"
        - cell "85"
      - row "14 84":
        - cell "14"
        - cell "84"
      - row "15 61":
        - cell "15"
        - cell "61"
      - row "16 47":
        - cell "16"
        - cell "47"
      - row "17 86":
        - cell "17"
        - cell "86"
      - row "18 91":
        - cell "18"
        - cell "91"
      - row "19 80":
        - cell "19"
        - cell "80"
      - row "20 97":
        - cell "20"
        - cell "97"
      - row "21 75":
        - cell "21"
        - cell "75"
      - row "22 56":
        - cell "22"
        - cell "56"
      - row "23 60":
        - cell "23"
        - cell "60"
      - row "24 80":
        - cell "24"
        - cell "80"
      - row "25 91":
        - cell "25"
        - cell "91"
      - row "26 76":
        - cell "26"
        - cell "76"
      - row "27 89":
        - cell "27"
        - cell "89"
      - row "28 69":
        - cell "28"
        - cell "69"
      - row "29 18":
        - cell "29"
        - cell "18"
  - text: 8,576,411
- contentinfo:
  - table:
    - rowgroup:
      - row "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files ShadowDOM Mobiles Laptops Blog Choose File Youtube":
        - cell "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files":
          - heading "Form" [level=2]
          - heading "Section 1" [level=4]
          - paragraph: This is a paragraph in Section 1.
          - textbox
          - button "Submit"
          - heading "Section 2" [level=4]
          - paragraph: This is a paragraph in Section 2.
          - textbox
          - button "Submit"
          - heading "Section 3" [level=4]
          - paragraph: This is a paragraph in Section 3.
          - textbox
          - button "Submit"
          - heading "Footer Links" [level=2]
          - list:
            - listitem:
              - link "Home":
                - /url: http://testautomationpractice.blogspot.com/
            - listitem:
              - link "Hidden Elements & AJAX":
                - /url: https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html
            - listitem:
              - link "Download Files":
                - /url: https://testautomationpractice.blogspot.com/p/download-files_25.html
        - cell "ShadowDOM Mobiles Laptops Blog Choose File Youtube":
          - heading "ShadowDOM" [level=2]
          - text: Mobiles Laptops
          - link "Blog":
            - /url: https://www.pavantestingtools.com/
          - textbox
          - checkbox
          - button "Choose File"
          - link "Youtube":
            - /url: https://www.youtube.com/@sdetpavan/videos
  - text: Theme images by
  - link "merrymoonmary":
    - /url: http://www.istockphoto.com/portfolio/merrymoonmary?platform=blogger
  - text: . Powered by
  - link "Blogger":
    - /url: https://www.blogger.com
  - text: .
```

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('//p[@class="description"]/child::span')
Expected substring: "Playht"
Received string:    "For Selenium, Cypress & Playwright"
Timeout: 5000ms

Call log:
  - Expect "soft toContainText" with timeout 5000ms
  - waiting for locator('//p[@class="description"]/child::span')
    14 × locator resolved to <span>For Selenium, Cypress & Playwright</span>
       - unexpected value "For Selenium, Cypress & Playwright"

```

```yaml
- text: For Selenium, Cypress & Playwright
```

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('//input[@id="name"]')
Expected: "Playwht"
Received: "Playwright"
Timeout:  5000ms

Call log:
  - Expect "soft toHaveValue" with timeout 5000ms
  - waiting for locator('//input[@id="name"]')
    14 × locator resolved to <input id="name" required="" type="text" maxlength="15" class="form-control" placeholder="Enter Name"/>
       - unexpected value "Playwright"

```

```yaml
- textbox "Enter Name": Playwright
```

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeEmpty() failed

Locator:  locator('//input[@id="name"]')
Expected: empty
Received: notEmpty

Call log:
  - Expect "toBeEmpty" with timeout 5000ms
  - waiting for locator('//input[@id="name"]')
    7 × locator resolved to <input id="name" required="" type="text" maxlength="15" class="form-control" placeholder="Enter Name"/>
      - unexpected value "notEmpty"
  - Test ended.

```

```yaml
- textbox "Enter Name": Playwright
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
> 32 |     await expect(page.locator(uname)).toBeEmpty()
     |                                       ^ Error: expect(locator).toBeEmpty() failed
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
  45 |     await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/")
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