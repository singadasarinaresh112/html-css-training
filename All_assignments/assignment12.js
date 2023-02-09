const d = new Date("2023-02-07")
const days = ['monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let day = days[d.getDay()];
 document.getElementById('demo').innerHTML = "Today is : " + day;

 var hour = d.getHours();
 var minute = d.getMinutes();
 var second = d.getSeconds();
 var prepand = (hour >= 12)? " PM ":" AM ";
 hour = (hour >= 12)? hour - 12: hour;
 if (hour===0 && prepand===' PM ') 
 { 
 if (minute===0 && second===0)
 { 
 hour=12;
 prepand=' Noon';
 } 
 else
 { 
 hour=12;
 prepand=' PM';
 } 
 } 
 if (hour===0 && prepand===' AM ') 
 { 
 if (minute===0 && second===0)
 { 
 hour=12;
 prepand=' Midnight';
 } 
 else
 { 
 hour=12;
 prepand=' AM';
 } 
 } 
document.getElementById('demo1').innerHTML = "Current Time : "+hour + prepand + " : " + minute + " : " + second;









// const student = {
//     firstName: "Naresh",
//     lastName:"Singadasari",
//     age: 24,
//     Education: "Masters",
//     phoneNo: 9876543210,
//     email: "nareshsingadasari@gmail.com",
//     fullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
//   }
//   document.getElementById('demo').innerHTML = student.fullName() + '<br>' + student.age + '<br>' + student.Education
//   + '<br>' + student.phoneNo + '<br>' + student.email;



// let today = new Date();
// const dd = today.getDate();
// const mm = today.getMonth() + 1;
// const yyyy = today.getFullYear();

// today = mm + '-' + dd + '-' + yyyy;
// document.getElementById('demo').innerHTML =today;



// Example
// function functionName(){
//     let test;
//     for(let i=0; i < CanvasRenderingContext2D.length ; i++){

//     }

//     var arr = [];
//     arr.forEach(function(a,b){
        
//     });
// }


