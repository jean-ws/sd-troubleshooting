import * as rede from "/problems/rede.js"

const problemsList = [
    "Problema de rede/internet",
    "problema com a senha"
]

function writeProblemsList(){
    console.log("writing problems list...")
    const problemsSelection = document.querySelector("select#problems")
    for (const problem in problemsList){
        var opt = document.createElement("option")
        opt.text = problemsList[problem]
        problemsSelection.appendChild(opt)
    }
}
window.addEventListener("load",writeProblemsList) //when the page is compleated loaded, calls the function 

function startTroubleshooting(){
    console.log("starting troubleshooting...")
    rede.isHomeOffice()

}
const startButton = document.querySelector("input#start-button")
startButton.addEventListener("click",startTroubleshooting)