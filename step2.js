"use strict";
const fsP = require('fs/promises');
const axios = require("axios");
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

async function webcat(url) {
    try {
        let contents = await axios.get(url);
    } catch (err) {
        console.error(`Error fetching ${url}: ${err}`);
        process.exit(1);
    }
    console.log(contents);

}

if (path.startsWith('http')) {
    webcat(path);
} else {
    cat(path);
}