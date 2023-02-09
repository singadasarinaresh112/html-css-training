// // Create an object:
// const car = {type:"Fiat", model:"500", color:"white"};

// // Change a property:
// car.color = "red";

// // Add a property:
// car.owner = "Johnson";

// // Display the property:
// console.log("Car owner is " + car.model);

// var output = person(10,20,30)
//  function person(num1,num2,num3){
//     return num1+num2+num3+6
// //  }
// // console.log(output)
// const car = {
//     carName : 'BMW',
//     year: 2010,
//     model: 2006,
//     engine: 6.5
    
// }
// function car() {
//     return this.carName + " " + this.modelName;
// }


// var marks = 34;
// if(marks>70){
//     console.log('Grade A')
// } else if (marks> 35){
//     console.log('Grade B')
// } else{
//     console.log('Grade C')
// }

// let day;
// switch (new Date().getDate()){
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }
// console.log("Today is:" + day);

// var input = 0;
// for (var i=1; i<=10; i++){
//     input = input+i
// }
// console.log(input)

// const car = ['BMW','BENZ','FORD'];
// let text = "";
// for(let i=0; i < car.length; i++){
//     text += car[i]+ "<br>" ;
// }
// var input = 0;
// for (var i=1; i<=10; i++){

// }
// console.log(input)

// const data = [1,2,3,4,5]; 
// let x = "";
// data.forEach(myFunction);
//     function myFunction(value,index,array){
//         x += value + "<br>"
//     }
//     console.log(x)


// var out = 9;
//  while(out <= 10){
//    console.log(out)
//    out++;
//  }

//  let x = 0;
//  let text = "";
//  while(x >= 10){
    
//     x++;
//  }
//  console.log(text)

// const data = [1,2,3,45,];
// const output = data.map(
//     function(element){
//         return element+1
//     }
// )
// console.log(output)

// var data = [1,23,4,5,6];
// var output = data.filter(
//     function(element){
//         return element>4
//     }
// )
// console.log(output)

// const data = [1,2,3,4,5,6];
// var json = JSON.stringify(data);
// console.log(data)

// let x = 123;
// console.log(x.toString())

// // Pop()
// const Subject = ['Pharmacology','Forensic','Pathology'];
// const removedElement = Subject.pop();
// console.log(removedElement);
// console.log(Subject);

// unshift()
// const Subject = ['Pharmacology','Forensic','Pathology'];
// Subject.unshift('Anatomy');
// console.log(Subject)

//sort
// const Subject = ['Pharmacology','Forensic','Pathology'];
// console.log(Subject.sort());

//concat
// const Subject1 = ['Pharmacology','Forensic','Pathology'];
// const Subject2 = ['chemistry','biology','physics'];

// const final = Subject1.concat(Subject2);
// console.log(final);

//push()
// const Subject = ['Pharmacology','Forensic','Pathology'];
// Subject.push('Antonmy');
// console.log(Subject);

//shift()
// const Subject = ['Pharmacology','Forensic','Pathology','Antonmy'];
// Subject.shift();
// console.log(Subject);

//reverse()
// const Subject = ['Pharmacology','Forensic','Pathology'];
// const reversedSubjects = Subject.reverse();
// console.log(reversedSubjects)


// //join()
// const Subject = ['Pharmacology','Forensic','Pathology'];
// const telugu = Subject.join('Hello');
//  console.log(telugu);

//slice()
//  const Subject = ['Pharmacology','Forensic','Pathology','chemistry','Biology'];
// console.log(Subject.slice(0,5));


//Splice()
// const Subject = ['Pharmacology','Forensic','Pathology','chemistry','Biology'];
// Subject.splice(3,4,'telugu');
// console.log(Subject);


//Includes()
// const Subject = ['Pharmacology','Forensic','Pathology','chemistry','Biology'];
// console.log(Subject.includes('Forensic'));


//indexof()
// const Subject = ['Pharmacology','Forensic','Pathology','chemistry','Biology'];
// console.log(Subject.indexOf('Forensic'));

//tostring()
// const Subject = ['Pharmacology','Forensic','Pathology','chemistry','Biology'];
// console.log(Subject.toString());

//flat()
// const Subject = ['Pharmacology','Forensic',['Pathology','chemistry','Biology']];
// console.log(Subject.flat());

// const Subject1 = [1,2,3,[4,5,6,77,],8,9,[9,0,],00,];
// console.log(Subject1.flat());


// Get Date() methods
// const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday",];
// const d = new Date()
// let day = days[d.getDay()]
// console.log(day)

//Set Date method    Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.
// const d = new Date()
// console.log(d.getHours(22));

//Math.round()
// console.log(Math.round(4.6));// returns the nearest integer:
// console.log(Math.ceil(6.8));// returns the value of x rounded down to its nearest integer:
// console.log(Math.floor(-4.6)); //returns the value of x rounded down to its nearest integer:
// console.log(Math.trunc(2.6)); //returns the integer part of x:
// console.log(Math.min(100,89,300,76,54,80));
// console.log(Math.max(100,89,300,766,54,80));
// console.log(Math.random()) // returns a random number between 0 (inclusive), and 1 (exclusive):
// console.log(Math.random() * 20)


// Nullish Operator
// let data = null;
// let output = data ?? 'John';
// console.log(output)


// Opitional Chaining
// let pets = {
//     cat: {
//       name : 'Neo',
//     }
//   }
//   console.log((pets.cat?.name));

// conditional statement if and elseif 
// const time = new Date().getHours();
// let greetings;
// if(time < 10){
//     console.log(greeting = " Good morning");
// }
// else if (time < 13){
//     console.log(greeting = 'good day');
// }
// else{
//     console.log(greeting =  "Good evening");
// }


// switch statment
// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }

// console.log("Today is : " + day)
 

// loop condition
// const numbers = [1,23,4,45,9,6,8,3];
// let txt = '';
// numbers.forEach(element);
// function element(numbers){
//     txt += numbers;
// }
// console.log(txt);


//while loop
// let x = 0;
// while (x <= 10){
//     console.log(x)
//     x++;
// }


// Classes and creating constructor in using objects    
// class User{
//     constructor(msg){
//         this.msg = msg;
//     }
//     admin(){
//         console.log(this.msg)
//     }
// }
// const obj = new User('hello')
// const obj2 = new User('Welcome')
// obj2.admin();

//Regular Expression
// let text = " Im visting W3schools for learning javascript"
//   console.log(text.match(/[a-z]/i))

// let text = "Visit W3schools";
// let n = text.replace('W3schools','welcome')
// console.log(n);


// //Arrow function
// let myFunction = (a,b) => {return a*b;}
// console.log(myFunction(4,5))

//classes
// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//     age(){
//         let d = new Date();
//         return d.getFullYear() - this.year;
//     }
//   }
  
//   const myCar = new Car("Ford", 2014);
//   console.log("myCar is "  + myCar.age() +  " years old.");


let x = 15 * 5;

console.log(x)