function getInput(idName) {
    let inputField = document.getElementById(idName);
    let inputString = inputField.value;
    let inputNumber = parseFloat(inputString);
    //    console.log(inputNumber);
    inputField.value = "";
    return inputNumber;
}

function getTriangleAre() {
    let base = getInput("triangleBase");
    let height = getInput("triangleHeight");
    let area = (base * height) / 2;
    console.log(area +" cm2");

}