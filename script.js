

//player1 object definition
let player1 = {
    name: "Player 1",
    answer: false
}

//player2 object definition
let player2 = {
    name: "Player 2",
    answer: false
}

//** need to update later for each player
//show players turn by player variable 
let playerTurn = document.getElementById("playerTurn")
playerTurn.textContent = player1.name + `'s Turn!`

//disable buttons at start of round
document.getElementById("guessButton").disabled = true
document.getElementById("passButton").disabled = true
document.getElementById("nextButton").disabled = true

//leave all grid buttons enabled at start of round
document.getElementsByClassName(".card").disabled = false

//function for round 1
async function jeopardy() {
    
    let response = await fetch("placeholder/placeholder-questions.json")

    let placeHolder = await response.json()
    
    //return all div.category as a nodelist
    let categoryList = document.querySelectorAll("div.category")
    
    //convert nodelist into an Array
    let categoryListArray = Array.from(categoryList)

    //assign names to categories of grid from within Array
    //**took way longer than it should have but pretty pround of this loop idea
    for (let i = 0, j = 1; i < 6; i++, j++) {
        
        let categoryName = placeHolder.placeholderQuestions[j*9].category

        categoryListArray[i].textContent = categoryName    
    }


    //return all div.card as a nodelist
    let cardName = document.querySelectorAll("button.card")
    console.log(cardName)
    
    //convert nodelist into an Array
    let cardNameArray = Array.from(cardName)
    console.log(cardNameArray)
    

    //when a "card" is selected, it is replaced by a question
    cardNameArray.addEventListener("click", () => {

        //disable grid buttons after selection
        document.getElementsByClassName(".card").disabled = true

        //enable "submit" and "pass" buttons
        document.getElementById("guessButton").disabled = false
        document.getElementById("passButton").disabled = false

        //give random value to assign to index for "Nature"
        let randomPick = Math.floor(Math.random()*11)
        console.log(randomPick)

        //assign card return value to random question
        for (let i = 0; i < 10; i++ ) {

            let questionCat1 = placeHolder.placeholderQuestions[0].question

            cardNameArray.textContent = questionCat1
        }

    })
    






}
jeopardy()