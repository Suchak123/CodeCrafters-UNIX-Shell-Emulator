const echo = require("../builtins/echo");
const cd = require("../builtins/cd");
const pwd = require("../builtins/pwd");
const type = require("../builtins/type");
const exitCmd = require("../builtins/exit");

const builtins = {
  echo,
  cd,
  pwd,
  type,
};

function runBuiltin(command, args, rl) {
  if (command === "exit") {
    return exitCmd(args, rl);
  }

  builtins[command]?.(args);
  return false;
}

module.exports = runBuiltin;