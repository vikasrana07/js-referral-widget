# Referral Popup Widget

This JavaScript widget adds a floating referral popup button to any website. Users can customize its placement, text, colors, icon, and redirect URL by adding a single script tag to their website.

## Features
✅ One-line script integration  
✅ Works on all pages automatically  
✅ Fully customizable (position, text, colors, icon, border, and URL)  
✅ Lightweight and loads asynchronously  
✅ Clickable button redirects users to a custom URL  

## Installation
To add the referral popup to your website, insert the following script tag inside the `<head>` section:

```html
<script type="text/javascript" defer src="referralPopup.js"
     data-placement="right"
     data-text="Refer And Earn"
     data-text-color="#ffffff"
     data-icon-src="https://example.com/icon.png"
     data-bg-color="#2f80ed"
     data-border-radius="25px"
     data-redirect-url="https://example.com/referral">
</script>
```

## Customization Options
You can modify the following attributes to customize the popup:

| Attribute         | Description                                      | Default Value  |
|------------------|--------------------------------------------------|---------------|
| `data-placement` | Position of the popup (`left` or `right`)       | `right`       |
| `data-text`      | Text displayed in the popup                     | `Refer And Earn` |
| `data-text-color`| Color of the text                               | `#ffffff`     |
| `data-icon-src`  | URL of the icon image                           | `""` (empty)  |
| `data-bg-color`  | Background color of the popup                   | `#2f80ed`     |
| `data-border-radius` | Border radius for rounded corners           | `25px`        |
| `data-redirect-url` | URL to open when the popup is clicked        | `#` (empty)   |

## How It Works
1. **Loads Automatically:** When the script is added to a webpage, the popup appears at the defined position.
2. **Customizable Appearance:** The popup's text, colors, and shape can be modified using `data-` attributes.
3. **Redirect on Click:** Clicking the popup redirects users to the provided `data-redirect-url`.

## Troubleshooting
If the widget does not appear:
- Ensure the script tag is correctly placed inside `<head>`.
- Check that `data-bg-color` and `data-text-color` have valid color values.
- Verify that the image URL for `data-icon-src` is accessible.

## License
This widget is free to use and modify. Feel free to customize it to match your brand.

## Contact
For support or customization requests, please contact **rana.vikas22@gmail.com**.
