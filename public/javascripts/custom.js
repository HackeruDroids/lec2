//alert('Hello');

var x = 10.1; //Number
var s = "This is a string"; //String
var b = true; //boolean


// var p1 = {
//     firstName: "Moshe",
//     phone: "050-7123012",
//     hasegPratim: function () {
//         alert(this.firstName);
//     },
//     sayHello: function(bracha){
//         alert(bracha + " " + this.firstName);
//     }
// };



// var p2 = {
//     firstName: "Tomer",
//     phone: "050-7123012",
//     hasegPratim: function () {
//         alert(this.firstName);
//     },
//     sayHello: function(bracha){
//         alert(bracha + " " + this.firstName);
//     }
// };

// //p1.hasegPratim();
// p1.sayHello('Shalom');









var div = document.getElementById("mydiv");













function add(x, y){
    //return x + y;
    alert(x + y);
}


function Person(firstName, phone, age){
    //save the data 
    this.firstName = firstName;
    this.phone = phone;
    this.age = age;
    //display the details of a specific person
    this.dispDetails = function(){
        alert(this.firstName + " " + this.phone + " " + this.age);
    }

    this.addYears = function(x){
        //this.age = this.age + x;
        this.age += x;
    }
}


var p1 = new Person("Tomer", "050-7123012", 18);
var p2 = new Person("Moshe", "050-7123012", 16);


var details = "";
for (var propertyName in p1) {
        var element = p1[propertyName];
        details+= element;
}
alert(details);

var q1 = "What's the prior name of Shimon Peres?";
var answers = ["Parnas", "Perszon", "Pertz", "Presky"];
var correctAnsIndex = 3;

function TriviaQuestion(question, answers, correctAnsIndex){
    this.question = question;
    this.answers = answers;
    this.correctAnsIndex = correctAnsIndex;
}


var question = new TriviaQuestion("1+1=?", ["1", "2", "3", "4"], 1);





//print all the even numbers between 0-100 ()
var arr = [];
for(var i = 0; i<= 100; i+=2){
    //add an item to the array:
    arr.push(i);
}

//print
for(var i = 0; i< arr.length; i++){
    console.log(arr[i]);
}

        //[0][1][2][3][4]
var arr = [1, 2, 3, 4, 5];
alert(arr[4]);

var arr2 = new Array();
arr2.push("1");
arr2.push(2);
console.log('Hello, Console');

//alert(arr[99]);














// p1.firstName = "Tomer";
// //alert("Name: " + p1.firstName + " Phone: " + p1.phone);


// alert(p1["firstName"]);

// //this is a function
// function myfun() {

// }