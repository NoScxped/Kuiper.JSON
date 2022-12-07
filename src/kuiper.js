const fs = require('fs')
function scan(path, key, returnFullObj){
    if(fs.existsSync(path)){
        var obj = JSON.parse(fs.readFileSync(path, `utf-8`))
        var res = ''
        for(var i in obj){
            if (i = key){
                res = i
            }
        }
    if(returnFullObj){return obj} else {return obj[res]};
} else {
    throw new Error ('File not found: ' + path)
}};
//write to a file
exports.write = function(path, key, value){
        if(key && value){

            var obj = scan(path,key,true)

            obj[key] = value
            fs.writeFileSync(path, JSON.stringify(obj, null, 1))

    } else {
      fs.writeFileSync(path, `{"${key}": "${value}"}`)
    }

}
//read a file
exports.read = function(path, key) {

    var val = scan(path, key, false)
    if(!val){return fs.readFileSync(path, `utf-8`);
} else {
        return val
    }

}
//delete a key/file
exports.delete = function (path, key){

        if(key){

        var obj = scan(path,key,true)

        if(obj[key] != undefined){

            delete obj[key]
            fs.writeFileSync(path, JSON.stringify(obj, null, 1))

        }
    } else {
        fs.unlinkSync(path)
    }
}
//check if a file exists
exports.exists = function(path, key, value){

    if(fs.existsSync(path)){
        if(key){

            var obj = scan(path,key,true)
            if(!obj[key]){return false} else {return true}
    
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