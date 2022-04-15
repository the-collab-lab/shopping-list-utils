const { minify } = require("terser");
const fs = require("fs");
const path = require("path");

function getAllFiles(dirPath, arrayOfFiles) {
  let files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, "/", file));
    }
  });

  return arrayOfFiles.filter((el) => path.extname(el) === ".js");
}

function minifyFiles(filePaths) {
  filePaths.forEach(async (filePath) => {
    const result = await minify(fs.readFileSync(filePath, "utf8"));
    fs.writeFileSync(filePath, result.code);
  });
}

const files = getAllFiles("./dist");
minifyFiles(files);
