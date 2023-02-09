function person(firstname, LastName, age) {
    return {
        firstname: firstname,
        LastName: LastName,
        age: age,
        fullname: function(){
            return this.firstName + this.lastName;
        }
    }
}
function person1(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age
    this.fullname= function(){
        return this.firstName + this.lastName;
    }
}
const p1 = new person("Naresh", "Singadasari", 25)
const p2 = new person("varun", "singadasari", 24)
console.log(p1.firstName)
console.log(p2.fullname)