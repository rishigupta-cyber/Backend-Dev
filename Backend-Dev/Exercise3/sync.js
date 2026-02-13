const fs = require("fs");
const path = require("path");

const sourceDir = "./source";
const destDir = "./destination";

fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.log("Error reading source directory");
    return;
  }

  files.forEach((file) => {
    const srcPath = path.join(sourceDir, file);
    const destPath = path.join(destDir, file);

    fs.copyFile(srcPath, destPath, (err) => {
      if (err) {
        console.log("Error copying", file);
      } else {
        console.log(file, "synced successfully");
      }
    });
  });
});