window.addEventListener("load", init);

function init () {
    createBoxes();
}

function createBox() {
    const clone = document.querySelector('#boxtemplate').content.cloneNode(true);
    const box = clone.querySelector('#box');
    let height = getRandomNumber() + "px";
    box.style.height = height;
    document.querySelector('#container').appendChild(clone);
    

}

function getRandomNumber(){
    let num = Math.floor(Math.random() * 36); 
    return num;
    
}

let counter = 0;

let fakeArray = [];

function createBoxes(){ 
    counter++;
    createBox();
    fakeArray[counter] = getRandomNumber();

    if (fakeArray.length > 40){
        //stop
        fakeArray.pop();
        counter--;

    } else {
        setTimeout(createBoxes, 100)
    }
}

function scrollBoxes(){
    createBoxes();

    // remove the first one
    document.querySelector('#box').remove();
    console.log("removed");
}

