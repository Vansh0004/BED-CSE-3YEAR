const fs = require("fs");

fs.readFile("../demo.txt", "ascii", function (err, data) {
    if (err) return console.log(err);
    console.log(data); 
});