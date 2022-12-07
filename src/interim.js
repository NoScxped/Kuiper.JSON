const fs = require('fs')
var kuiperInterim = {}
function scan(intrm, key, returnFullObj){
    if(kuiperInterim[intrm]){
        var obj = kuiperInterim[intrm]
        var res = ''
        for(var i in obj){
            if (i = key){
                res = i
            }
        }
    if(returnFullObj){return obj} else {return obj[res]};
} else {
    throw new Error ('Interim not found: ' + intrm)
}};
//create a new interim/append data to an interim
exports.write = function(intr, key, value){

    if(kuiperInterim[intr]){
        if(key && value){

            var intrm = kuiperInterim[intr]
            intrm[key] = value

    } else {
        throw new Error('Expected key and value')
    }
        } else {
            kuiperInterim[intr] =  JSON.parse(`{"${key}": "${value}"}`)
        }
}
//save an interim to file
exports.save = function(path, intr){

    if(!kuiperInterim[intr]){throw new Error('Interim ' + intr + ' does not exist.')}
    try {
        fs.writeFileSync(path, JSON.stringify(kuiperInterim[intr], null, 1), 'utf-8')
    } catch(err) {
        console.log(err)
    }

}
//delete a interim
exports.delete = function(intr, key){

        var intrm = scan(intr, key, true);

        if(key != undefined){

            if(intrm[key]){delete intrm[key]}

    }
     else {
        delete kuiperInterim[intr]
    }
}
//grab an interim
exports.read = function(intr, key){

        var obj = scan(intr, key, true)
  
        if(obj[key] === undefined) {

        return JSON.stringify(kuiperInterim[intr], null, 1);

    } else {return obj[key]}
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
exports.all = function(){return kuiperInterim}