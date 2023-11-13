
 const readline = require("readline")

 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
 })

 function ask(question) {
     rl.question(question, (answer) => {
         rl.write(`Hello ${answer}!\n`)

         //ask(question)
         process.exit(1)
     })
 }

 ask("What is your name: ")
