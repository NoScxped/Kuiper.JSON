<div align="center" style='border: 3px solid transparent;border-radius: 10px;border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);border-image-slice: 1;margin: auto;display: flex;flex-direction: column;background-image: url("https://noscxped.github.io/solace/background.png");text-align: center;align-items: center;align-self: center;margin-top: 25px;margin-bottom: 25px;animation:scroll 175s linear infinite;'>

<h1 style='margin:10px;user-select: none;font-size:50px;text-align:center;color:white'>Kuiper.JSON</h1>
<h2 style='margin:10px;user-select: none;font-size:30px;text-align:center;color:white'>JSON Data Storage made easy!</h2>

<style>
@keyframes scroll {
from {background-position: bottom left;
}
to {
background-position: top right;
}
}
</style>
</div>
*Getting started with Kupier.JSON*


**Documentation:**

```js
    const kuiper = require('kuiper.json');
```

```js
    //kuiper.write(path, key, value)

    kuiper.write("./text/file.json", "myNewKey", "myNewValue");

    //This will add the Key and Value to the file specified by Path.
    //If the file does not exist, it will be created.
```

```js
    //kuiper.read(path, key)

    kuiper.read("./text/file.json", "myNewKey");

    //This will return "myNewValue", the Value we wrote from xero.write().
    //If no key is specified, the entire file is returned as a string.
```

```js
    //kuiper.delete(path, key)

    kuiper.delete("./text/file.json", "myNewKey");

    //This will delete the Key "myNewKey" and its Value.
    //If no key is specified, the entire file is deleted.
```

```js
    //kuiper.exists(path)

    kuiper.exists("./text/file.json") || data.exists("./text/file.json", 'myNewKey')

    //If the file/key exists, this function will return true.
    //Otherwise, this function will return false
```

```js
    //kuiper.readDir(path)

    kuiper.readDir("./text/")

    //Returns all files in the provided directory as an Array.
    //If the path is not a directory, it will throw an error
```

**Interims**

*Interims are **Kuiper.JSON's** way of temporarily storing JSON data without saving it to a file! Think of an **"Interim"** as an unsaved JSON file being edited.*

```js
    const interim = require('kuiper.json');
```

```js
    //interim.write(interim, key, value)

    interim.write("myNewInterim", "myCoolKey", "myCoolValue");

    //This will add the Key and Value to the Interim.
    //If the Interim does not exist, one will be created.
```

```js
    //interim.save(interim, path)

    interim.save("interim.JSON", "myNewInterim");

    //This will save the Interim to the specified path.
    //If the Interim does not exist, Kuiper.JSON will throw an error
```

```js
    //interim.import(path, interim)

    interim.import("interim.JSON", "myNewInterim");

    //Reads an entire JSON file and saves it to an Interim, creating a new one if need be.
    //If a Interim name is not provided, Kuiper.JSON will throw an error.
    //If a Path is not provided, Kuiper.JSON will throw an error.

```

```js
    //interim.read(interim, key)

    interim.read("myNewInterim", "myCoolKey");

    //This will return the value of the specified Key from the specified Interim.
    //If no Key is provided, the entire Interim will be returned.
    //If the Interim does not exist, Kuiper.JSON will throw an error
    //If the Key does not exist, Kuiper.JSON will return Undefined
```

```js
    //interim.delete(interim, key)

    interim.delete("myNewInterim", "myCoolkey");

    //This will remove the Key from the specified Interim.
    //If the Interim does not exist, Kuiper.JSON will throw an error
    //If the Key is not specified, the entire Interim will be deleted.
```

```js
    //interim.all()

    interim.all()

    //This function will return all interims currently loaded.
```

*DISCLAIMER: The files do **NOT** have to have the .json extension to be treated like JSON files.*