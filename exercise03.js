const os = require("os");
const fs = require("fs");

setInterval(function () {
    const operatingSystem = os.platform();
    const cpuName = os.cpus()[0].model;
    const availableMemory = os.freemem();
    const maximumMemory = os.totalmem();

    const details =
        "Operating System: " + operatingSystem + "\n" +
        "CPU Model: " + cpuName + "\n" +
        "Available Memory: " + availableMemory + "\n" +
        "Total Memory: " + maximumMemory + "\n" +
        "------------------------------\n";

    fs.appendFile("systemInfo.txt", details, function (err) {
        if (err) {
            console.log("Failed to save system details");
        }
    });
}, 5000);
