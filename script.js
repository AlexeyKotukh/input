function checkText() {
    let inputText = document.getElementById("inputText").value;
    if (inputText === "Hello") {
        document.body.style.backgroundColor = "#9DC08B";
    } else if (inputText === "World") {
        document.body.style.backgroundColor = "#569DAA";
    } else {
        document.body.style.backgroundColor = "#FF8787";
    }
}