let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")

const uScore=document.querySelector("#user-score")
const cScore=document.querySelector("#comp-score")



const drawGame=()=>{
    console.log("It's a Draw")
    msg.innerText=("game was draw.play again.")
    msg.style.backgroundColor="black"
}


const genCompChoice=()=>{
    const options=["rock","paper","scissors"]
    const randId= Math.floor(Math.random()*3)
    return options[randId]
}


const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++
        uScore.innerText=userScore
        console.log("you win")
        msg.innerText=`you win! ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green"
    }else{
        compScore++
        cScore.innerText=compScore
        console.log("you lose")
        msg.innerText=`you lose !${compChoice} beats ${userChoice}`
        msg.style.backgroundColor="red"
}
}

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice)
    const compChoice=genCompChoice()
    console.log("comp choice= ",compChoice)





    if(userChoice===compChoice){
        drawGame()
    }
    else {
        let userWin = true 
        if(userChoice==="rock"){
            userWin=compChoice ==="paper"?false:true
    }else if(userChoice === "paper"){
        userWin=compChoice === "scissors"?false:true}
    // }else (userChoice = "scissors"){
        else{
        userWin=compChoice === "rock"?false:true
    }
    showWinner(userWin, userChoice, compChoice)
       
            
        
    
}
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice)
    })
})

