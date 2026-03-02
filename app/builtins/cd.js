const path = require("path");

module.exports = (args) => {
  const dir = args[0];

  if (!dir) {
    console.log("cd: missing operand");
    return;
  }

  let targetPath;

  if(dir === "~") {
    targetPath = process.env.HOME || process.env.USERPROFILE;
  } else if (dir.startsWith("~/")) {
    const home = process.env.HOME || process.env.USERPROFILE;
    targetPath = path.join(home, dir.slice(2));
  } else {
    targetPath = path.resolve(process.cwd(), dir);
  }

  try {
    process.chdir(targetPath);
  } catch {
    console.log(`cd: ${dir}: No such file or directory`);
  }
};