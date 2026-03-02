const readline = require("readline");
const parse = require("../parser/commandParser");
const runBuiltin = require("../executor/builtinExecutor");
const runExternal = require("../executor/externalExecutor");
const shellBuiltins = require("../constants/builtins");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function start() {
  rl.question("$ ", (input) => {
    const { command, args } = parse(input);

    if (shellBuiltins.includes(command)) {
      const shouldExit = runBuiltin(command, args, rl);

      if (!shouldExit) start();
      return;
    }

    runExternal(command, args, start);
  });
}

module.exports = start;