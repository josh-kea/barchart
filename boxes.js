window.addEventListener("load", createBoxes);

function createBox() {
    const clone = document.querySelector('#boxtemplate').content.cloneNode(true);
    
    const box = clone.querySelector('#box');

    let height = getRandomNumber() + "px";

    box.style.height = height;

    document.querySelector('#container').appendChild(clone);
}

function getRandomNumber(){
    let num = Math.random() * 100;
    return num;
    
}

let counter = 0;

let fakeArray = [];

function fillArray () {
    
}

function createBoxes(){
    createBox();

    counter++
    console.log("counter added");
    if (counter > 40){
        //stop
    } else {
        createBoxes();
    }
}
function scrollBoxes(){
    createBox();

    // remove the first one
    document.querySelector('#box').remove();
    console.log("removed");
}

