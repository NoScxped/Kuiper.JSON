const fs = require('fs')
//write a file
exports.write = function(path, key, value){

    if(fs.existsSync(path)){
        if(key && value){

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

        fs.writeFileSync(path, JSON.stringify(obj, null, 1))
    } else {
        throw new Error('Expected key and value')
    }

    } else {

        fs.writeFileSync(path, `{"${key}": "${value}"}`)

    }

}
//read a file
exports.read = function(path, key) {

    if(fs.existsSync(path)){
        if(key){

        var obj = JSON.parse(fs.readFileSync(path, `utf-8`))
        var res = ''


    for(var i in obj){

        if (i = key){

            res = i

        }

    }

    return obj[res]

    } else {

    var text = fs.readFileSync(path, `utf-8`)
    return text

}

    } else {

        throw new Error ('File not found: ' + path)

    }

}
//delete a key/file
exports.delete = function (path, key){

    if(fs.existsSync(path)){

        if(key){

        

        var obj = JSON.parse(fs.readFileSync(path, `utf-8`))
        var res = ''
        
        for(var i in obj){

            if (i = key){

                res = i

            }

        }

        if(obj[res] != undefined){

            delete obj[res]
            fs.writeFileSync(path, JSON.stringify(obj))

        }
    } else {
        fs.unlinkSync(path)
    }

    } else {
        throw new Error ('File not found: ' + path)
    }
}
//check if a file exists
exports.exists = function(path, key, value){

    if(fs.existsSync(path)){

        if(key){


            var obj = JSON.parse(fs.readFileSync(path, `utf-8`))
            var res = ''
    
    
        for(var i in obj){
    
            if (i = key){
    
                res = i
    
            }
    
        }

        if(!obj[res]){return false } else {return true}
    
        } else {
    
            return true

        }
    
    } else {
        return false
    }

        
}



//Get each file in a directory
exports.readDir = function(path){

    if(fs.existsSync(path)){

        if(fs.statSync(path).isDirectory()){

            var arr = []

            var files = fs.readdirSync(path)

            for(var i in files){

                arr.push(files[i])

            }
            
            if(arr.length === 0){ return undefined } else { return arr }

        } else {
            throw new Error ('Not a Directory')
        }

    } else {
        throw new Error ('Directory not found')
    }

}