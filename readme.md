Xero JSON Data Handler

Examples:

```js
    const xero = require('xerodata');
```

```js
    //xero.write(path, key, value)

    xero.write("./text/file.json", "myNewKey", "myNewValue");

    //This will add the Key and Value to the file specified by Path.
    //If the file does not exist, it will be created.
```

```js
    //xero.read(path, key)

    xero.read("./text/file.json", "myNewKey");

    //This will return "myNewValue", the Value we wrote from xero.write().
    //If no key is specified, the entire file is returned as a string.
```

```js
    //xero.delete(path, key)

    xero.delete("./text/file.json", "myNewKey");

    //This will delete the Key "myNewKey" and its Value.
    //If no key is specified, the entire file is deleted.
```

```js
    //xero.exists(path)

    xero.exists("./text/file.json")

    //If the file exists, this function will return true.
    //Otherwise, this function will return false
```

DISCLAIMER: The files do NOT have to have the .json extension to be treated like JSON files.