# clampHTMLString

## Usage

```ts
const html = "<h1>hi mom</h1><p>lol</p><p>kek</p>";

const clampedHTML = clampHTMLString(html, 1);
console.log(clampedHTML); // <h1>hi mom</h1>

const _clampedHTML = clampHTMLString(html, 2);
console.log(_clampedHTML); // <h1>hi mom</h1><p>lol</p>
```
