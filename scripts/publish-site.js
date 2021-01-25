var fs = require("fs-extra");

var source = 'dist'
var destination = 'docs'

// copy source folder to destination
fs.copy(source, destination, function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Site copied to /docs. Publish ready!')
});
