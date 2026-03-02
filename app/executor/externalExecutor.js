const { spawn } = require("child_process");
const findInPath = require("../system/pathResolver");

function runExternal(command, args, callback) {
  const execPath = findInPath(command);

  if (!execPath) {
    console.log(`${command}: command not found`);
    callback();
    return;
  }

  const child = spawn(execPath, args, {
    stdio: "inherit",
    argv0: command,
  });

  child.on("exit", callback);
}

module.exports = runExternal;