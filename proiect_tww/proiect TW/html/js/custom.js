
    $(document).ready(function () {
    if (screen.width > 1024) {
    AOS.init({
    easing: 'ease-in-out-sine',
    once: true,
    });
    }
    });
(new IntersectionObserver(function(e,o){
    if (e[0].intersectionRatio > 0){
        document.documentElement.removeAttribute('class');
    } else {
        document.documentElement.setAttribute('class','stuck');
    };
})).observe(document.querySelector('.trigger'));

function myFunc(){
    alert("you clicked me");
}

document.body.onload = addElement;

function addElement () {

  const newDiv = document.createElement("div");

  const newContent = document.createTextNode("Carse");

  newDiv.appendChild(newContent);

  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Campul trebuie sa contina ceva");
      return false;
    }
  }

  setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

clickCounter();

function clickCounter() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
  } else {
    localStorage.clickcount = 1;
  }
  document.getElementById("demo2").innerHTML = localStorage.clickcount;
}



function randomize() {
    document.getElementById('p1').style.color = randomColors();
  }
  
  function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }