# CommonJS module system
- Synchronous file loading.
- cjs imports are not hoisted.
- Top level await is not allowed.
- Only one value can be exported in cjs.
- File extension optional.
- If we give full file path then we can load any file using cjs.
- It is a convention to add cjs in the file extension
- It is optional to set "type": "commonjs" in `package.json` because it is default to the nodejs.
- In cjs this keyword points to module.exports by default.

# CommonJS module system
- Asynchronous file loading.
- mjs imports are hoisted.
- Top level await is allowed.
- Multiple value can be exported is cjs.
- File extension mandatory.
- We can not load any file, only `js` and `mjs` files are allowed.
- It is a convention to add mjs in the file extension.
- We have to set "type": "module" in `package.json`.
- In mjs this keyword is undefined.