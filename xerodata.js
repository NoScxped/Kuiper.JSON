const fs = require('fs')
//write a file
exports.write = function(path, key, value){

    if(fs.existsSync(path)){

        var obj = JSON.parse(fs.readFileSync(path, `utf-8`))

        Object.keys(obj).forEach((jsonKey) => {

            if(jsonKey === key){

                if(key in obj){

                    obj[jsonKey] = value

                }

            }

        })

        if(key in obj === false){

            obj[key] = value

        }

        fs.writeFileSync(path, JSON.stringify(obj))

    } else {

        fs.writeFileSync(path, `{"${key}": "${value}"}`)

    }
}
//read a file
exports.read = function(path, key) {

    if(fs.existsSync(path)){

        var obj = JSON.parse(fs.readFileSync(path, `utf-8`))
        var res = ''

        if(!key){

            var text = fs.readFileSync(path, `utf-8`)

            return text
        
    }

    for(var i in obj){

        if (i = key){

            res = i

        }

    }

    if(obj[res] === undefined){

        throw new Error ('Key not found: ' + key)

        } else {

            return obj[res]

    }
    } else {
        throw new Error ('File not found: ' + path)
    }
}
//delete a key/file
exports.delete = function (path, key){

    if(fs.existsSync(path)){

        var obj = JSON.parse(fs.readFileSync(path, `utf-8`))
        var res = ''
        if(!key){
            fs.unlinkSync(path)
        }
        for(var i in obj){

            if (i = key){

                res = i

            }

        }

        if(obj[res] === undefined){

            throw new Error ('Key not found: ' + key)

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
