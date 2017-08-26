# Better Facebook Messenger

Hides those disturbing GIFs unless hovered upon and prevents the page title from flashing annoyingly whenever something happens. Works on both Messenger.com and Facebook.com.

[**Install**][bfm-raw]


## Try it (without installing)

*It's generally a good idea to be careful about running unknown code. If you don't understand JavaScript, you might want to ask someone who does to verify that the script is harmless.*

1. Copy the entire code from [`better-facebook-messenger.user.js`][bfm-raw].
2. Go to [Messenger][messenger].
3. Open the developer console (`F12`, `Ctrl + Shift + I`, `Cmd + Alt + I` or similar).
4. Go to the *Console* tab.
5. Paste the code in the console and press Enter.


## How to install

### As a userscript

This method requires **userscript** support, either natively in the browser or through an extension:

* Chrome: [Tampermonkey][tampermonkey]
* Firefox: [Greasemonkey][greasemonkey]
* iOS: [Userscripts Loader][userscripts-loader]

With some browsers and/or extensions, a userscript can be installed by simply [opening the `.user.js` file][bfm-raw] and confirming the installation.

If that does not work, please refer to the documentation for your browser and/or extension.


### As a userstyle

A subset of BFM can be installed as a userstyle through a userstyle extension:

* Chrome: [Stylish][stylish-chrome]
* Firefox: [Stylish][stylish-firefox]

The drawbacks are that a userstyle cannot do everything that a userscript can, and that it won't auto-update.

To install BFM as a userstyle, copy the CSS code from [`better-facebook-messenger.css`][bfm-raw-css] and add it to Stylish.

Freezing the page title is not possible through CSS, and so works only if BFM is installed as a userscript.


## Technical details

Most of the functionality is purely CSS-powered. JavaScript is used for injecting the CSS into the page, by appending a `<style id="Better_Facebook_Messenger">` element to `<head>`.


## It doesn't work!

It could be because Facebook has changed something in the code of its site(s), so that the code used to detect and hide GIFs is no longer compatible. This is unfortunately expected to happen every once in a while, and can only be counteracted by updating the extension to match Facebook's changes.

[messenger]: https://messenger.com
[tampermonkey]: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en
[greasemonkey]: https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/
[userscripts-loader]: http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=userscriptsloaderDp
[stylish-chrome]: https://chrome.google.com/webstore/detail/stylish/fjnbnpbmkenffdnngjfgmeleoegfcffe?hl=en
[stylish-firefox]: https://addons.mozilla.org/en-US/firefox/addon/stylish/
[bfm-raw]: https://raw.githubusercontent.com/SimonAlling/better-facebook-messenger/master/better-facebook-messenger.user.js
[bfm-raw-css]: https://raw.githubusercontent.com/SimonAlling/better-facebook-messenger/master/better-facebook-messenger.css
