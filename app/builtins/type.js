const findInPath = require("../system/pathResolver");
const shellBuiltins = require("../constants/builtins");

module.exports = function typeCommand(args) {
  if (args.length === 0) {
    console.log("type: missing operand");
    return;
  }

  args.forEach((arg) => {
    if (shellBuiltins.includes(arg)) {
      console.log(`${arg} is a shell builtin`);
    } else {
      const foundPath = findInPath(arg);

      if (foundPath) {
        console.log(`${arg} is ${foundPath}`);
      } else {
        console.log(`${arg}: not found`);
      }
    }
  });
};