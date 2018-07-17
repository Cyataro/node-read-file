
const fs = require('fs');

function read(){
    fs.readFile("test", 'utf8', function(err, data){
        if (err) {
            return err;
        } else {
            console.log(data);
        }
    });
}

read();
