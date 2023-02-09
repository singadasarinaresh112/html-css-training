/*const posts = [
    {title: 'Post One',body:'This is post one'},
    {title: 'Post Two', body:'This is post two'}
];
function getPosts(){
    settimeout(() => {
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}
*/

// program to display a text using setTimeout method
/*function greet() {
    console.log('Hello world');
}

setTimeout(greet, 3000);
console.log('This message is shown first');*/


/*function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);


// Callback Function Example
function greet(name, myFunction) {
    console.log('Hello world');

    // callback function
    // executed only after the greet() is executed
    myFunction(name);
}

// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, 'John', sayName);*/