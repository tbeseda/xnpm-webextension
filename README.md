# xnpm

Adds a link to view npm packages on [npmx.dev](https://npmx.dev) directly from npmjs.com package pages.

![Screenshot](screenshot.png)

[Firefox Install](#) <!-- TODO: Add link when published -->

[Chrome Install](#) <!-- TODO: Add link when published -->

## Development

Load the extension unpacked in your browser:
- **Chrome**: `chrome://extensions/` → Enable Developer mode → Load unpacked
- **Firefox**: `about:debugging#/runtime/this-firefox` → Load Temporary Add-on

## Release

```sh
npm run release
```

Creates `xnpm.zip` with `assets/`, `manifest.json`, and `content.js`.

Submit to [Chrome Web Store](https://chrome.google.com/webstore/devconsole/).
Submit to [Firefox Add-ons](https://addons.mozilla.org/en-US/developers/).
