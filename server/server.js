//* PART 1 Import (require) path and fs.
const fs = require("fs"),
path = require("path");

//* Create an array consisting of at least 5 chirp objects
let chirps = [
    {
        name: "Chris",
        message: "He is practicing NodeJS 1"
    },
    {
        name: "Chris",
        message: "He is practicing NodeJS 2"
    },
    {
        name: "Chris",
        message: "He is practicing NodeJS 3"
    },
    {
        name: "Chris",
        message: "He is practicing NodeJS 4"
    },
    {
        name: "Chris",
        message: "He is practicing NodeJS 5"
    }
]

//* Write the array to a file in the root of the project called chirps.json.
let writePath = path.join(__dirname, "../chirps.json");
chirps = JSON.stringify(chirps);
//* or fs.writeFile(writePath, JSON.stringify(chirps));
fs.writeFile(writePath, chirps, () => {
    //* Add code to server.js that reads the file and outputs the chirps to the console
    fs.readFile(writePath, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(JSON.parse(data));
        }
    });
});
