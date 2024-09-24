const toDos = ["walk", "run", "eat"];
console.log(toDos);

const viewButton = document.getElementById('view-button')
console.log(viewButton)





// es5 syntax to create a function
// function {name of the function} () {}
function showTodos () {
    alert("the function has been called"
    );
}
showTodos();

//  first and secondNum are placeholders and parameters
function addValues (text, firstNum, secondNum) {
    // let firstNum =35;
    // let secondNum =8;

    let total= firstNum + secondNum;
    // console.log(text)
    console.log(text + total);
}

addValues("2 +5 = ", 2, 5); //2 and 5
addValues( 9, 8); //9 and 8
addValues(12,16); // 12 and 16


function squareValues  ( firstValue) {
    // let firstValue = 2

    let total = firstValue * firstValue;
    console.log(total);
}

squareValues(2);
squareValues(4);
squareValues(9);


// add a click event to
// viewButton.addEventListener('click', showTodos);