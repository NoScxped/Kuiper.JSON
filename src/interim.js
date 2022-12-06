const fs = require('fs')
var kuiperInterim = {}
//create a new interim/append data to an interim
exports.write = function(intr, key, value){

    if(kuiperInterim[intr]){
        if(key && value){

            var obj = kuiperInterim[intr]

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

        kuiperInterim[intr] = obj

    } else {
        throw new Error('Expected key and value')
    }

    } else {

        kuiperInterim[intr] =  JSON.parse(`{"${key}": "${value}"}`)

    }

}
//save an interim to file
exports.save = function(intr, path){

    if(!kuiperInterim[intr]){throw new Error('Interim ' + intr + ' does not exist.')}
    try {
        fs.writeFileSync(path, JSON.stringify(kuiperInterim[intr], null, 1), 'utf-8')
    } catch(err) {
        console.log(err)
    }

}
//delete a interim
exports.delete = function(intr, key){

    if(kuiperInterim[intr]){

        if(key){

        var obj = kuiperInterim[intr]
        var res = ''
        
        for(var i in obj){

            if (i = key){

                res = i

            }

        }

        if(obj[res] != undefined){

            delete obj[res]
            kuiperInterim[intr] = obj

        }
    } else {
        delete kuiperInterim[intr]
    }

    } else {
        throw new Error ('The Interim ' + intr + ' does not exist.')
    }

}
//grab an interim
exports.read = function(intr, key){

        if(kuiperInterim[intr]){
            if(key){
    
            var obj = kuiperInterim[intr]
            var res = ''
    
    
        for(var i in obj){
    
            if (i = key){
    
                res = i
    
            }
    
        }

        return obj[res]
    
        } else {
    
        var text = JSON.stringify(kuiperInterim[intr], null, 1)
        return text
    
    }
    
        } else {
    
            throw new Error ('The Interim ' + intr + ' does not exist.')
    
        }

}
//pull a file
exports.import = function(path, intr) {

    if(!intr){throw new Error ('Interim Name Needed.')}
    if(!path){throw new Error('Path Needed.')}

    if(fs.existsSync(path)){

        try {
            var obj = JSON.parse(fs.readFileSync(path, `utf-8`))
            kuiperInterim[intr] = obj
            return kuiperInterim[intr]
        } catch(err){
            console.log(err)
        }

    } else {

        throw new Error ('File not found: ' + path)

    }

}