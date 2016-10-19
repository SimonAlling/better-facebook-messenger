# Better Facebook Messenger

Hides those disturbing GIFs unless hovered upon. Works on both Messenger.com and Facebook.com.

[**Install**][bfm-raw]


## Try it (without installing)

*It's generally a good idea to be careful about running unknown code. If you don't understand JavaScript, you might want to ask someone who does to verify that the script is harmless.*

1. Copy the entire code from [`better-facebook-messenger.user.js`][bfm-raw].
2. Go to [Messenger][messenger].
3. Open the developer console (`F12`, `Ctrl + Shift + I`, `Cmd + Alt + I` or similar).
4. Go to the *Console* tab.
5. Paste the code in the console and press Enter.


## How to install

Permanent installation requires **userscript** support, either natively in the browser or through an extension:

* Chrome: [Tampermonkey][tampermonkey]
* Firefox: [Greasemonkey][greasemonkey]
* iOS: [Userscripts Loader][userscripts-loader]

With some browsers and/or extensions, a userscript can be installed by simply [opening the `.user.js` file][bfm-raw] and confirming the installation.

If that does not work, please refer to the documentation for your browser and/or extension.


## Technical details

The extension is purely CSS-powered. JavaScript is only used for injecting the CSS into the page, by appending a `<style id="Better_Facebook_Messenger">` element to `<head>`.


## It doesn't work!

It could be because Facebook has changed something in the code of its site(s), so that the code used to detect and hide GIFs is no longer compatible. This is unfortunately expected to happen every once in a while, and can only be counteracted by updating the extension.

[messenger]: https://messenger.com
[tampermonkey]: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en
[greasemonkey]: https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/
[userscripts-loader]: http://moreinfo.thebigboss.org/moreinfo/depiction.php?file=userscriptsloaderDp
[bfm-raw]: https://raw.githubusercontent.com/SimonAlling/better-facebook-messenger/master/better-facebook-messenger.user.js
