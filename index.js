
//Initialize the count as 0
let count = 0

//listen for clicks on the counter button

//increment the count variable when the button is clicked

//change the count in HTML to reflect the new count

function increment() {
    count = count + 1 
    document.getElementById("count-el").innerText = count
}

// let sum = ""

function save() {
    let  result = count + " - "
    // sum = sum + result
    document.getElementById("save-el").innerHTML = (document.getElementById("save-el").innerHTML + result)
    count = 0
    document.getElementById("count-el").innerText = count
}




