//find an element by id:
var myBtn = document.getElementById('myBtn');

function btnClicked(){
  var num1 = document.getElementById('num1');
  var num2 = document.getElementById('num2');
  
  var x = Number(num1.value);
  var y = Number(num2.value);

  alert(x + y);
  
}

                      //event name, function
myBtn.addEventListener('click', btnClicked);


// myBtn.addEventListener('click', function(){
//   alert('You clicked me');
// });

// function getRandomColor(){
//     var letters = '0123456789abcdef';
//     var arr = letters.split('');


//     var color = '#';
//     for(var i = 0; i < 6; i++){
//       var rand = Math.random()*16;
//       var randIndex  = Math.floor(rand);
//       color = color + arr[randIndex];
//     }

//     return color;
// }

// var c = getRandomColor();
// //find an element by it's ID
// var myParagraph = document.getElementById('myParagraph');

// myParagraph.style.color = c;



// function add(){
//   var sum = 0;
//   for(var i = 0; i < arguments.length; i++){
//       sum += arguments[i];
//   }
//   return sum;
// }

// var result = add(3," ", 5);

// myParagraph.innerHTML += result;
 

//  function sayHello(param1){

//  }

/*
//find an element by id
<p id="myParagraph">Hello</p>
var myParagraph = document.getElementById('myParagraph');

//change some html:
myParagraph.innerHTML += result;


//change the style:
myParagraph.style.color = '#0f0f0f';
 */


