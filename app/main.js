const { exit } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Uncomment this block to pass the first stage
const shellBuiltins = ["echo", "exit", "type"];

function startREPL(){

  rl.question("$ ", (answer) => {
    if(answer == "exit 0"){
      rl.close();
      return;
    }

    const [command, ...args] = answer.trim().split(/\s+/);
    console.log(command);
    console.log(args);

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
            console.log(`${arg}: not found`);
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

