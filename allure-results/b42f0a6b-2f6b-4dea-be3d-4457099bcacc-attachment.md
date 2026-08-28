# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tabs.spec.js >> facebook task
- Location: tests\tabs.spec.js:38:5

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e12]:
  - generic [ref=e14]:
    - generic [ref=e15]: Explore the things you love.
    - generic [ref=e35]:
      - generic [ref=e36]: Log in to Facebook
      - generic [ref=e47]:
        - generic [ref=e51]:
          - textbox "Email address or mobile number" [active] [ref=e52]: example@gmail.com
          - generic: Email address or mobile number
        - generic [ref=e56]:
          - textbox "Password" [ref=e57]
          - generic: Password
        - button "Log in" [ref=e60] [cursor=pointer]
        - link "Forgotten password?" [ref=e66] [cursor=pointer]:
          - /url: /recover/initiate/?privacy_mutation_token=eyJ0eXBlIjo1LCJjcmVhdGlvbl90aW1lIjoxNzg2Nzg2OTM3fQ%3D%3D&ars=facebook_login
        - link "Create new account" [ref=e72] [cursor=pointer]:
          - /url: /reg/?entry_point=login&next=
        - img "Meta logo" [ref=e77]
  - separator [ref=e85]
  - main [ref=e91]:
    - separator [ref=e93]
    - generic [ref=e98]:
      - generic [ref=e100]:
        - generic [ref=e101]: English (UK)
        - link "മലയാളം" [ref=e105] [cursor=pointer]:
          - /url: "#"
        - link "தமிழ்" [ref=e108] [cursor=pointer]:
          - /url: "#"
        - link "ಕನ್ನಡ" [ref=e111] [cursor=pointer]:
          - /url: "#"
        - link "हिन्दी" [ref=e114] [cursor=pointer]:
          - /url: "#"
        - link "اردو" [ref=e117] [cursor=pointer]:
          - /url: "#"
        - link "বাংলা" [ref=e120] [cursor=pointer]:
          - /url: "#"
        - link "More languages…" [ref=e123] [cursor=pointer]:
          - /url: "#"
      - generic [ref=e126]:
        - link "Sign up" [ref=e129] [cursor=pointer]:
          - /url: https://www.facebook.com/reg/
        - link "Log in" [ref=e132] [cursor=pointer]:
          - /url: https://www.facebook.com/login/
        - link "Messenger" [ref=e135] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fmessenger.com%2F&h=AUAQZyoTdpypoKNkz_bZEJL5GeO2NzUpfHzJ8dt29LOoqk2nweFqxtbT45u2CbVmu-jv1lMX5AetLCPacncOWqKEacaL3eageoFBrvwmU9JC-hE6E0zhrtdzHDKmSPrBifoPc_sXu1x8RbSjHwoagA
        - link "Facebook Lite" [ref=e138] [cursor=pointer]:
          - /url: https://www.facebook.com/lite/
        - link "Video" [ref=e141] [cursor=pointer]:
          - /url: https://www.facebook.com/watch/
        - link "Meta Pay" [ref=e144] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fabout.meta.com%2Ftechnologies%2Fmeta-pay&h=AUAQZyoTdpypoKNkz_bZEJL5GeO2NzUpfHzJ8dt29LOoqk2nweFqxtbT45u2CbVmu-jv1lMX5AetLCPacncOWqKEacaL3eageoFBrvwmU9JC-hE6E0zhrtdzHDKmSPrBifoPc_sXu1x8RbSjHwoagA
        - link "Meta Store" [ref=e147] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2F&h=AUAQZyoTdpypoKNkz_bZEJL5GeO2NzUpfHzJ8dt29LOoqk2nweFqxtbT45u2CbVmu-jv1lMX5AetLCPacncOWqKEacaL3eageoFBrvwmU9JC-hE6E0zhrtdzHDKmSPrBifoPc_sXu1x8RbSjHwoagA
        - link "Meta Quest" [ref=e150] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2Fquest%2F&h=AUAQZyoTdpypoKNkz_bZEJL5GeO2NzUpfHzJ8dt29LOoqk2nweFqxtbT45u2CbVmu-jv1lMX5AetLCPacncOWqKEacaL3eageoFBrvwmU9JC-hE6E0zhrtdzHDKmSPrBifoPc_sXu1x8RbSjHwoagA
        - link "Ray-Ban Meta" [ref=e153] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2Fai-glasses%2Fray-ban-meta%2F&h=AUAQZyoTdpypoKNkz_bZEJL5GeO2NzUpfHzJ8dt29LOoqk2nweFqxtbT45u2CbVmu-jv1lMX5AetLCPacncOWqKEacaL3eageoFBrvwmU9JC-hE6E0zhrtdzHDKmSPrBifoPc_sXu1x8RbSjHwoagA
        - link "Meta AI" [ref=e156] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.ai%2F&h=AUAQZyoTdpypoKNkz_bZEJL5GeO2NzUpfHzJ8dt29LOoqk2nweFqxtbT45u2CbVmu-jv1lMX5AetLCPacncOWqKEacaL3eageoFBrvwmU9JC-hE6E0zhrtdzHDKmSPrBifoPc_sXu1x8RbSjHwoagA
        - link "Instagram" [ref=e159] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F&h=AUAQZyoTdpypoKNkz_bZEJL5GeO2NzUpfHzJ8dt29LOoqk2nweFqxtbT45u2CbVmu-jv1lMX5AetLCPacncOWqKEacaL3eageoFBrvwmU9JC-hE6E0zhrtdzHDKmSPrBifoPc_sXu1x8RbSjHwoagA
        - link "Threads" [ref=e162] [cursor=pointer]:
          - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.threads.com%2F&h=AUAQZyoTdpypoKNkz_bZEJL5GeO2NzUpfHzJ8dt29LOoqk2nweFqxtbT45u2CbVmu-jv1lMX5AetLCPacncOWqKEacaL3eageoFBrvwmU9JC-hE6E0zhrtdzHDKmSPrBifoPc_sXu1x8RbSjHwoagA
        - link "Privacy Policy" [ref=e165] [cursor=pointer]:
          - /url: https://www.facebook.com/privacy/policy/?entry_point=facebook_page_footer
        - link "Privacy Centre" [ref=e168] [cursor=pointer]:
          - /url: https://www.facebook.com/privacy/center/?entry_point=facebook_page_footer
        - link "About" [ref=e171] [cursor=pointer]:
          - /url: https://www.facebook.com/about/
        - link "Create ad" [ref=e174] [cursor=pointer]:
          - /url: https://www.facebook.com/ad_campaign/landing.php?placement=pflo&campaign_id=402047449186&nav_source=unknown&extra_1=auto
        - link "Create Page" [ref=e177] [cursor=pointer]:
          - /url: https://www.facebook.com/pages/create/?ref_type=site_footer
        - link "Developers" [ref=e180] [cursor=pointer]:
          - /url: https://developers.facebook.com/?ref=pf
        - link "Careers" [ref=e183] [cursor=pointer]:
          - /url: https://www.facebook.com/careers/?ref=pf
        - link "Cookies" [ref=e186] [cursor=pointer]:
          - /url: https://www.facebook.com/policies/cookies/
        - link "AdChoices" [ref=e189] [cursor=pointer]:
          - /url: https://www.facebook.com/help/568137493302217
        - link "Terms" [ref=e192] [cursor=pointer]:
          - /url: https://www.facebook.com/policies?ref=pf
        - link "Help" [ref=e195] [cursor=pointer]:
          - /url: https://www.facebook.com/help/?ref=pf
        - link "Contact uploading and non-users" [ref=e198] [cursor=pointer]:
          - /url: https://www.facebook.com/help/637205020878504
      - generic [ref=e199]: Meta © 2026
```