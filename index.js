const fs = require('fs')
var interim = {}
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
//create a new interim/append data to an interim
exports.poke = function(intr, key, value){

    if(interim[intr]){
        if(key && value){

            var obj = interim[intr]

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

        interim[intr] = obj

    } else {
        throw new Error('Expected key and value')
    }

    } else {

        interim[intr] =  JSON.parse(`{"${key}": "${value}"}`)

    }

}
//save an interim to file
exports.save = function(intr, path){

    if(!interim[intr]){throw new Error('Interim ' + iintr + ' does not exist.')}
    try {
        fs.writeFileSync(path, JSON.stringify(interim[intr], null, 1), 'utf-8')
    } catch(err) {
        console.log(err)
    }

}
//delete a interim
exports.pinch = function(intr, key){

    if(interim[intr]){

        if(key){

        var obj = interim[intr]
        var res = ''
        
        for(var i in obj){

            if (i = key){

                res = i

            }

        }

        if(obj[res] != undefined){

            delete obj[res]
            interim[intr] = obj

        }
    } else {
        delete interim[intr]
    }

    } else {
        throw new Error ('The Interim ' + intr + ' does not exist.')
    }

}
exports.grab = function(intr, key){

        if(interim[intr]){
            if(key){
    
            var obj = interim[intr]
            var res = ''
    
    
        for(var i in obj){
    
            if (i = key){
    
                res = i
    
            }
    
        }

        return obj[res]
    
        } else {
    
        var text = JSON.stringify(interim[intr], null, 1)
        return text
    
    }
    
        } else {
    
            throw new Error ('The Interim ' + intr + ' does not exist.')
    
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