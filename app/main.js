const { exit } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Uncomment this block to pass the first stage

function startREPL(){

  rl.question("$ ", (answer) => {
    if(answer == "exit"){
      rl.close();
      return;
    }

    console.log(`${answer}: command not found`);
    startREPL();
    
  });

}

startREPL();

