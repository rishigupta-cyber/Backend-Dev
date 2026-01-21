const fs = require("fs");

fs.readFile("input.txt", "utf8", function (error, text) {
    if (error) {
        console.log("Input file not found");
        return;
    }

    let wordArray = text.split(" ");
    let totalWords = wordArray.length;

    fs.writeFile("output.txt", "Total number of words: " + totalWords, function (error) {
        if (error) {
            console.log("Unable to write to output file");
        } else {
            console.log("Word count successfully saved in output.txt");
        }
    });
});
