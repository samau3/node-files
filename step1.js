"use strict";
const fsP = require('fs/promises')
const path = process.argv[2];

async function cat(file) {
    try {
        let contents = await fsP.readFile(file, "utf8");
    } catch (err) {
        console.error(`Error reading ${file}: ${err}`);
        process.exit(1);
    }
    console.log(contents);
}

cat(path)