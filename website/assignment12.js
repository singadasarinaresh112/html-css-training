// const d = new Date("2023-02-07")
// const days = ['monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// let day = days[d.getDay()];
// document.getElementById('demo').innerHTML = "Today is : " + day;




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



let today = new Date();
const dd = today.getDate();
const mm = today.getMonth() + 1; 
const yyyy = today.getFullYear();

today = mm + '-' + dd + '-' + yyyy;
document.getElementById('demo').innerHTML =today;
  

