**Apollo's JSON Data Handler**

*Getting started with Kupier.JSON*

*Interims are **Kuiper.JSON's** way of temporarily storing JSON data without saving it to a file! Think of an **"Interim"** as an unsaved JSON file being edited.*


Documentation:

```js
    const data = require('kuiper.json');
```

```js
    //data.poke(interim, key, value)

    data.poke("myNewInterim", "myCoolKey", "myCoolValue");

    //This will add the Key and Value to the Interim.
    //If the Interim does not exist, one will be created.
```

```js
    //data.grab(interim, key)

    data.grab("myNewInterim", "myCoolKey");

    //This will return the value of the specified Key from the specified Interim.
    //If the Interim does not exist, Kuiper.JSON will throw an error
    //If the Key does not exist, Kuiper.JSON will return Undefined
```

```js
    //data.pinch(interim, key)

    data.save("myNewInterim", "myCoolkey");

    //This will remove the Key from the specified Interim.
    //If the Interim does not exist, Kuiper.JSON will throw an error
    //If the Key is not specified, the entire Interim will be deleted.
```

```js
    //data.save(interim, path)

    data.save("myNewInterim", "interim.JSON");

    //This will save the Interim to the specified path.
    //If the Interim does not exist, Kuiper.JSON will throw an error
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

    data.exists("./text/file.json") || data.exists("./text/file.json", 'myNewKey')

    //If the file/key exists, this function will return true.
    //Otherwise, this function will return false
```

```js
    //data.readDir(path)

    data.readDir("./text/")

    //Returns all files in the provided directory as an Array.
    //If the path is not a directory, it will throw an error
```

DISCLAIMER: The files do NOT have to have the .json extension to be treated like JSON files.