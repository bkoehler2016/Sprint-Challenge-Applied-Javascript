// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    mainHead = document.createElement('div');
    spanDate = document.createElement('span');
    headContent = document.createElement('h1');
    spanTemp = document.createElement('span');

    // Adding the Classes
    mainHead.classList.add('header');
    spanDate.classList.add('date');
    spanTemp.classList.add('temp');

    // Set Content 
    spanDate.textContent = 'MARCH 28, 2019';
    headContent.textContent = 'Lambda Times';
    spanTemp.textContent = "77°";

    // adding to DOM
    mainHead.appendChild(spanDate);
    mainHead.appendChild(headContent);
    mainHead.appendChild(spanTemp);

    return mainHead;
}

const headContainer = document.querySelector('header-container');
headContainer.appendChild(Header());