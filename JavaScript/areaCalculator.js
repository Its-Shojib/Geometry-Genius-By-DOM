function getInput(idName) {
    let inputField = document.getElementById(idName);
    let inputString = inputField.value;
    let inputNumber = parseFloat(inputString);
    inputField.value = "";
    return inputNumber;
}

function validateAndPrint(input1, input2) {
    if (isNaN(input1) || isNaN(input2) || input1 < 0 || input2 < 0)
        return false;
}

function addToCalculationArea(areaType,area){
    let calculationEntry = document.getElementById("calculation");
    let count = calculationEntry.childElementCount;
    let p = document.createElement("p");
    p.innerHTML =`${count + 1}.&nbsp;&nbsp;&nbsp;${areaType}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${area} cm<sup>2</sup>&nbsp;&nbsp;&nbsp;&nbsp; <button class="btn btn-success btn-sm">Convert to Meter</button>`
    calculationEntry.appendChild(p);
}

function getTriangleArea() {
    let base = getInput("triangleBase");
    let height = getInput("triangleHeight");
    if (validateAndPrint(base, height) == false) {
        alert("Please Enter valid Numbers");
    }
    else {
        let area = (base * height) / 2;
        // console.log(area + " cm2");
        addToCalculationArea("Tryangle",area);
    }
}
function getRectangleArea() {
    let width = getInput("rectangleWidth");
    let lenth = getInput("rectangleLenth");
    if (validateAndPrint(width, lenth) == false) {
        alert("Please Enter valid Numbers");
    }
    else {
        let area = (width * lenth);
        // console.log(area + " cm2");
        addToCalculationArea("Rectangle",area);
    }
}
function getParallelogramArea() {
    let base = getInput("parallelogramBase");
    let height = getInput("parallelogramHeight");
    if (validateAndPrint(base, height) == false) {
        alert("Please Enter valid Numbers");
    }
    else {
        let area = (base * height);
        // console.log(area + " cm2");
        addToCalculationArea("Parallelogram",area);
    }
}
function getRhombusArea() {
    let D1 = getInput("RhombusD1");
    let D2 = getInput("RhombusD2");
    if (validateAndPrint(D1, D2) == false) {
        alert("Please Enter valid Numbers");
    }
    else {
        let area = (D1 * D2) / 2;
        // console.log(area + " cm2");
        addToCalculationArea("Rhombus",area);
    }
}
function getPentagonArea() {
    let p = getInput("PentagonP");
    let b = getInput("PentagonB");
    if (validateAndPrint(p, b) == false) {
        alert("Please Enter valid Numbers");
    }
    else {
        let area = (p * b) / 2;
        // console.log(area + " cm2");
        addToCalculationArea("Pentagon",area);
    }
}
function getEllipseArea() {
    let PI = 3.1416;
    let a = getInput("EllipseA");
    let b = getInput("EllipseB");
    if (validateAndPrint(a, b) == false) {
        alert("Please Enter valid Numbers");
    }
    else {
        let area = (PI * a * b);
        // console.log(area + " cm2");
        addToCalculationArea("Ellipse",area);
    }
}