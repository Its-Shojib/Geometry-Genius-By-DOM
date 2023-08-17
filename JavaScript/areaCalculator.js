function getInput(idName) {
    let inputField = document.getElementById(idName);
    let inputString = inputField.value;
    let inputNumber = parseFloat(inputString);
    inputField.value = "";
    if(isNaN(inputNumber)){
        alert("Please Enter valid Number");
        return 0;
    }
    else{
        return inputNumber;
    }
    //    console.log(inputNumber);
    
    
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
function getRhombusArea() {
    let D1 = getInput("RhombusD1");
    let D2 = getInput("RhombusD2");
    let area = (D1 * D2)/2;
    console.log(area +" cm2");
}
function getPentagonArea() {
    let p = getInput("PentagonP");
    let b = getInput("PentagonB");
    let area = (p * b)/2;
    console.log(area +" cm2");
}
function getEllipseArea() {
    let PI =3.1416;
    let a = getInput("EllipseA");
    let b = getInput("EllipseB");
    let area = (PI * a * b);
    console.log(area +" cm2");
}