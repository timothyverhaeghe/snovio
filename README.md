# Snovio
NPM Package for Snov.io.

You'll find more information on [Official Snovio API](https://snov.io/api.html)


## 1. Use it
```bash
npm install snovio
```


## 2. Documenation
### 2.1. Domain lookup
Find all persons working for a specific company (by domain)
```js
const Snovio = require('snovio')(appId, appSecret);

Snovio.domainSearch('google.com', (err, data) => {
  if (err) console.log(err);
  if (data) {
    console.log(data);
  } else {
    console.log("we couldn't parse data from Snovio");
  }
});
```


## 3. Want to contribute?
Contact me at me@timothyverhaeghe.com to see how we can team up on this project.


## 4. Copyright
MIT License

Copyright (c) 2018 [Timothy Verhaeghe](https://github.com/timothyverhaeghe)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
