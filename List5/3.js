const readline = require("readline")

 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
 })
function randomnum(){
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber
}
var y = randomnum();
console.log(y)
 function ask(question) {
     rl.question(question, (answer) => {
        if (answer == y){
            rl.write(`Congrats my number is indeed ${answer}!\n`)
            process.exit(1)
        }
        if (answer < y){
            rl.write('Think higher\n')
            ask(question)}
        if (answer > y){
            rl.write('Think lower\n')
            ask(question)
        }})}

         //ask(question)



 ask("Guess what number I have on my mind:")
