Setup:
```bash
npm install

npm install netlify-cli -g
```

Works great:
```bash
netlify dev

netlify functions:invoke sample --no-identity --port=8000
```

Environment variables in `functions/sample/sample.js` are replaced with `undefined`:
```bash
netlify build

```
