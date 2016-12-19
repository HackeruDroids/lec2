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











function Person(firstName, phone){
    this.firstName = firstName;
    this.phone = phone;
    this.dispDetails = function(){
        alert(this.firstName + " " + this.phone);
    }
}

var p1 = new Person("Tomer", "050-7123012");
var p2 = new Person("Moshe", "050-7123012");

p2.dispDetails();

// p1.firstName = "Tomer";
// //alert("Name: " + p1.firstName + " Phone: " + p1.phone);


// alert(p1["firstName"]);

// //this is a function
// function myfun() {

// }