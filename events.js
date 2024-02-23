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