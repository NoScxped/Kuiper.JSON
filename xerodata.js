const fs = require('fs')
//write a file
exports.write = function(path, key, value){

    if(fs.existsSync(path)){

        var obj = JSON.parse(fs.readFileSync(path, `utf-8`))

        Object.keys(obj).forEach((jsonKey) => {

            if(jsonKey === string){

                if(string in obj){

                    obj[jsonKey] = value

                }

            }

        })

        if(string in obj === false){

            obj[string] = value

        }

        fs.writeFileSync(path, JSON.stringify(obj))

    } else {

        fs.writeFileSync(path, `{"${key}": "${value}"}`)

    }
}
//read a file
exports.read = function(path, key, value) {

    if(fs.existsSync(path)){

        var obj = JSON.parse(fs.readFileSync(path, `utf-8`))
        var res = ''

        if(!string){

            var text = fs.readFileSync(path, `utf-8`)

            if(text === undefined){

                throw new Error ('File not found: ' + path)

                } else {

                    return text

            }
        
    }

    for(var i in obj){

        if (i = key){

            res = i

        }

    }

    if(obj[res] === undefined){

        throw new Error ('File not found: ' + path)

        } else {

            return obj[res]

    }
}
}
//delete a key/file
exports.delete = function (path, key, value){

    if(fs.existsSync(path)){

        var obj = JSON.parse(fs.readFileSync(path, `utf-8`))
        var res = ''

        for(var i in obj){

            if (i = string){

                res = i

            }

        }

        if(obj[res] === undefined){

            return false

            } else {

                delete obj[res]
                fs.writeFileSync(path, JSON.stringify(obj))

        }
    } else {
        throw new Error ('File not found: ' + path)
    }
}
//check if a file exists
exports.exists = function(path, key, value){

    if(fs.existsSync(path)){

        return true

        } else {

            return false

        }

    }
