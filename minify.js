/**
 * Minify our files after the module is built.
 *
 * NOTE: This could probably be more efficient. We can get rid of
 * the *sync methods from FS, and other optimizations as well.
 *
 * Recursively calling getAllFiles might be slow
 * but that probbably doesn't matter for a file tree this shallow.
 */

const { minify } = require("terser");
const fs = require("fs");
const path = require("path");

function getAllFiles(dirPath, accumulatedFiles = []) {
  let files = fs.readdirSync(dirPath);

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      accumulatedFiles = getAllFiles(dirPath + "/" + file, accumulatedFiles);
    } else {
      accumulatedFiles.push(path.join(__dirname, dirPath, "/", file));
    }
  });

  return accumulatedFiles.filter((el) => path.extname(el) === ".js");
}

function minifyFiles(filePaths) {
  filePaths.forEach(async (filePath) => {
    const result = await minify(fs.readFileSync(filePath, "utf8"), {
      mangle: {
        module: true,
      },
    });
    fs.writeFileSync(filePath, result.code);
  });
}

const files = getAllFiles("./dist");
minifyFiles(files);
