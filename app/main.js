const { exit } = require("process");
const readline = require("readline");
const fs = require("fs");
const path = require("path");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Uncomment this block to pass the first stage
const shellBuiltins = ["echo", "exit", "type"];
const PATHS = ["/bin", "/usr/bin", "/usr/local/bin"]

function findInPath(command) {
  for (const dir of PATHS) {
    const fullPath = path.join(dir, command);
    if(fs.existsSync(fullPath)) {
      return fullPath;
    }
  }
  return null;
}

function startREPL(){

  rl.question("$ ", (answer) => {
    if(answer == "exit 0"){
      rl.close();
      return;
    }

    const [command, ...args] = answer.trim().split(/\s+/);

    if(command === "echo"){
      console.log(args.join(" "));
    }
    else if(command === "type"){
      if(args.length === 0) {
        console.log("type: missing operand");
      } else{
        args.forEach((arg) => {
          if (shellBuiltins.includes(arg)) {
            console.log(`${arg} is a shell builtin`);
          } else{
            const foundPAth = findInPath(arg);

            if(foundPAth) {
              console.log(`${arg} is ${foundPAth}`);
            } else {
              console.log(`${arg}: not found`);
            }
          }
        });
      }
    }

    else {
      console.log(`${command}: command not found`);
    }

    startREPL();
    
  });
}

startREPL();

