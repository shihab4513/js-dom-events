// const button=document.querySelector('button');

// function toggle(){
//     button.classList.toggle('altColor');
// }

// toggle();

// button.addEventListener('click',toggle);

function firstAction(){
    console.log('I am the first action');
   

}

function secondAction(){
    console.log('I am the second Action');
}

setTimeout(firstAction,5000);
secondAction();