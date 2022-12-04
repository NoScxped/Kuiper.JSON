**Apollo's JSON Data Handler**

*Getting started with Kupier.JSON*


**Documentation:**

```js
    const data = require('kuiper.json');
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

**Interims**

*Interims are **Kuiper.JSON's** way of temporarily storing JSON data without saving it to a file! Think of an **"Interim"** as an unsaved JSON file being edited.*

```js
    //data.interimWrite(interim, key, value)

    data.interimWrite("myNewInterim", "myCoolKey", "myCoolValue");

    //This will add the Key and Value to the Interim.
    //If the Interim does not exist, one will be created.
```

```js
    //data.interimSave(interim, path)

    data.interimSave("myNewInterim", "interim.JSON");

    //This will save the Interim to the specified path.
    //If the Interim does not exist, Kuiper.JSON will throw an error
```

```js
    //data.interimImport(path, interim)

    data.interimImport("interim.JSON", "myNewInterim");

    //Reads an entire JSON file and saves it to an Interim, creating a new one if need be.
    //If a Interim name is not provided, Kuiper.JSON will throw an error.
    //If a Path is not provided, Kuiper.JSON will throw an error.

```

```js
    //data.interimRead(interim, key)

    data.interimRead("myNewInterim", "myCoolKey");

    //This will return the value of the specified Key from the specified Interim.
    //If no Key is provided, the entire Interim will be returned.
    //If the Interim does not exist, Kuiper.JSON will throw an error
    //If the Key does not exist, Kuiper.JSON will return Undefined
```

```js
    //data.interimDelete(interim, key)

    data.interimDelete("myNewInterim", "myCoolkey");

    //This will remove the Key from the specified Interim.
    //If the Interim does not exist, Kuiper.JSON will throw an error
    //If the Key is not specified, the entire Interim will be deleted.
```

*DISCLAIMER: The files do **NOT** have to have the .json extension to be treated like JSON files.*