let userInput = document.getElementById("inputBox")

userInput.addEventListener("change", nameEntered)

function nameEntered(){

    localStorage.setItem("nameInput", userInput.value)
}