let userInput = document.getElementById("inputBox")

userInput.addEventListener("change", nameEntered)

function nameEntered(){

    localStorage.setItem("name", userInput.value)
}