//alert('Hello');

var x = 10.1; //Number
var s = "This is a string"; //String
var b = true; //boolean


var p1 = {
    firstName: "Moshe",
    phone: "050-7123012",
    hasegPratim: function () {
        alert(this.firstName);
    },
    sayHello: function(bracha){
        alert(bracha + " " + this.firstName);
    }
};

//p1.hasegPratim();
p1.sayHello('Shalom');


// p1.firstName = "Tomer";
// //alert("Name: " + p1.firstName + " Phone: " + p1.phone);


// alert(p1["firstName"]);

// //this is a function
// function myfun() {

// }