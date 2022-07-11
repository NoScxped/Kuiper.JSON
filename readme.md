Apollo's JSON Data Handler

Documentation:

```js
    const data = require('apollo.data');
```

```js
    //data.write(path, key, value)

    data.write("./text/file.json", "myNewKey", "myNewValue");

    //This will add the Key and Value to the file specified by Path.
    //If the file does not exist, it will be created.
```

```js
    //data.read(path, key)

    data.read("./text/file.json", "myNewKey");

    //This will return "myNewValue", the Value we wrote from xero.write().
    //If no key is specified, the entire file is returned as a string.
```

```js
    //data.delete(path, key)

    data.delete("./text/file.json", "myNewKey");

    //This will delete the Key "myNewKey" and its Value.
    //If no key is specified, the entire file is deleted.
```

```js
    //data.exists(path)

    data.exists("./text/file.json")

    //If the file exists, this function will return true.
    //Otherwise, this function will return false
```

```js
    //data.readDir(path)

    data.readDir("./text/")

    //Returns all files in the provided directory as an Array.
    //If the path is not a directory, it will throw an error
```

DISCLAIMER: The files do NOT have to have the .json extension to be treated like JSON files.