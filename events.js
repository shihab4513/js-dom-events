console.log('This is separate js files');
// option 2
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
// We got access of the blue button by its id and printed in the console
const makeBlueButton = document.getElementById('make-blue');
// console.log(makeBlueButton);
// Another way to do onclick function 
makeBlueButton.onclick = makeBlue;

// option 4
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})

// option 4 final.We will use this most of the time
// Important
document.getElementById('make-golden').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})
