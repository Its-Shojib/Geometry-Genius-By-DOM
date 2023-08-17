function getInput(idName) {
    let inputField = document.getElementById(idName);
    let inputString = inputField.value;
    let inputNumber = parseFloat(inputString);
    //    console.log(inputNumber);
    inputField.value = "";
    return inputNumber;
}

function getTriangleArea() {
    let base = getInput("triangleBase");
    let height = getInput("triangleHeight");
    let area = (base * height) / 2;
    console.log(area +" cm2");
}
function getRectangleArea() {
    let width = getInput("rectangleWidth");
    let lenth = getInput("rectangleLenth");
    let area = (width * lenth) ;
    console.log(area +" cm2");
}
function getParallelogramArea() {
    let base = getInput("parallelogramBase");
    let height = getInput("parallelogramHeight");
    let area = (base * height);
    console.log(area +" cm2");
}