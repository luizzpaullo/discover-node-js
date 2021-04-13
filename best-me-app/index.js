const questions = [
    "O que aprendi hoje ?",
    "O que me deixou aborrecido? e O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
];

const ask = (index =0 ) => {
    process.stdout.write(questions[index] + " >")
}

ask()

// process.stdin.on("data", data => {
//     process.stdout.write(data.toString().trim())
//     process.exit() // desligar processo
// })

const answers= []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
})

process.on("exit", () => {
    console.log(`

    Seja bem vindo Sr,LuizzP!!

    O que vc aprendeu hoje ?
    ${answers[0]}

    O que me deixou aborrecido? e O que eu poderia fazer para melhorar?
    ${answers[1]}

    O que me deixou feliz hoje?
    ${answers[2]}


    Quantas pessoas ajudei hoje?
    ${answers[3]}


    
    `)
})