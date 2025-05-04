const { exit } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Uncomment this block to pass the first stage

function startREPL(){

  rl.question("$ ", (answer) => {
    if(answer == "exit 0"){
      rl.close();
      return;
    }

    if(answer.startsWith("echo")){
      const output = answer.split(" ").slice(1).join(" ");
      console.log(output);
    } else{
      console.log(`${answer}: command not found`);
    }

    startREPL();
    
  });

}

startREPL();

