module.exports = function exitCommand(args, rl) {
  // Match original behavior exactly
  if (args.length === 1 && args[0] === "0") {
    rl.close();
    return true; 
  }

  return false;
};