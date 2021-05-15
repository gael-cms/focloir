# ![](chrome/images/icon48.png)oclóir

A web browser extension that performs a unified search of Irish dictionaries and glossaries.

Download the extension [here](https://chrome.google.com/webstore/detail/focloir/lobkeheepafffkjbafikdmcjbapggmce) for Chrome,
and [here](https://addons.mozilla.org/ga-IE/firefox/addon/focl%C3%B3ir/)) for Firefox.

## Testing Your Changes

### Chrome

To test local changes to the extension, go to `chrome://extensions/` in your browser.

Click 'Load Unpacked', navigate to the `Gaeilgeoir/chrome` directory and hit 'Select' (Developer Mode most be enabled in the top right of the screen).

To pick up changes you've made locally you must hit the refresh/reload button on the extension card in `chrome://extensions/`.

### Firefox

Zip your files so that symbolically linked files are resolved: e.g. `cd firefox/ &&  zip -r firefox.zip * `

Go to `about:debugging#/runtime/this-firefox` in your browser.

Click `Load Temporary Add-on...`, navigate to your zip file directory and hit 'Open'.

To pick up changes you've made locally you must hit the 'Reload' button on the bottom of extension card in `about:debugging#/runtime/this-firefox`.
