const path = require("path");

module.exports = (args) => {
  const dir = args[0];

  if (!dir) {
    console.log("cd: missing operand");
    return;
  }

  try {
    process.chdir(path.resolve(process.cwd(), dir));
  } catch {
    console.log(`cd: ${dir}: No such file or directory`);
  }
};