const fs = require("fs");
const path = require("path");

const PATHS = process.env.PATH.split(":");

function findInPath(command) {
  for (const dir of PATHS) {
    const fullPath = path.join(dir, command);
    if(fs.existsSync(fullPath)) {
      return fullPath;
    }
  }
  return null;
}

module.exports = findInPath;