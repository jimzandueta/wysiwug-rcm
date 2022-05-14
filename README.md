# Developer Test #2 - WYSIWYG Text Editor

https://jimzandueta.github.io/wysiwug-rcm/
 
---

## Project Installation
1. Clone the project repository.
```sh
$ git clone https://github.com/jimzandueta/wysiwug-rcm.git
$ cd wysiwug-rcm
```
2. Install the project dependencies.
```sh
$ npm install
```
3. Run the application
```sh
$ npm run serve

# Navigate to http://localhost:8080/ using your favorite browser.
```

## Project Dependencies

```json
{
    "dependencies": {
    "buefy": "^0.9.20",
    "core-js": "^3.8.3",
    "register-service-worker": "^1.7.2",
    "vue": "^2.6.14",
    "vue-router": "^3.5.1",
    "vuex": "^3.6.2"
}
```

## Resources:
1. **Range and Selection** - http://www.javascriptkit.com/javatutors/copytoclipboard.shtml
2. **Document execCommand** - https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand

## Improvements:
- Toggle button display when formatting is enabled (ie. bold, italics, etc)
- Change font on selected text only
- Design improvements. Make it more responsive to better work in mobile.