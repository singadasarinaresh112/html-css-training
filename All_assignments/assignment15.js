// Day 15: Assignment 
//1. Write a JavaScript program which accept a number 
//as input and insert dashes (-) between each two even numbers.
// For example if you accept 025468 the output should be 0-254-6-8

/*const num = window.prompt();
const str = num.toString();
const result = [str[0]];

for(let x=2; x<str.length; x++)
{
    if((str[x-1]%2 === 0 )&&(str[x]%2 === 0 ))
    {
        result.push('-',str[x])
    } 
    else
    {
        result.push(str[x]);
    }
}
document.getElementById('demo').innerHTML= result.join('');*/


//2. Write a JavaScript program to sort the items of an array.
//Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
//Don’t use inbuilt functions use for loop to get your output

/*var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
var arr2 = [];
var min=arr1[0];
var max=arr1[0];
var pos;
for (i=0; i<arr1.length; i++);
{
    if(max<arr1[i]) max=arr1[i];
}
for (var i=0; i<arr1.length; i++)
{
    for( var j=0; j<arr1.length; j++)
    {
        if(arr1[j]!="x")
        {
            if(min>arr1[j])
            {
                min=arr1[j];
                pos=j;
            }
        }
    }
    arr2[i]=min;
    arr1[pos]="x";
    min=max;
}
document.getElementById('demo').innerHTML= arr2;*/


//3.Write a JavaScript function to merge two arrays and removes all duplicates elements.
//Test data :
// var array1 = [1, 2, 3]; 
// var array2 = [2, 30, 1]; 
// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]

/*var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
function merge_array (array1, array2){
    var result_array = [];
    var arr = array1.concat(array2);
    var len = arr.length;
    var assoc = {};
    while (len--){
        var item = arr[len];
        if(!assoc[item]){
            result_array.unshift(item);
            assoc[item] = true;
        }
    }
    return result_array;
}

document.getElementById('demo').innerHTML = merge_array(array1,xarray2)*/


//4. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. 
// Sample object: 
// var student = { 
// name : "David Rayy", 
// sclass : "VI", 
// rollno : 12 };


/*var student = {
    name : 'David rayy',
    sclass : 'Vi',
    rollno : 12
};
document.getElementById('demo').innerHTML = student;
delete student.rollno;
document.getElementById('demo').innerHTML = student;*/


//5. Write a JavaScript program to get the width and height of the window (any time the window is resized).

/*document.getElementById("demo").innerHTML =
"Browser inner window width: " + window.innerWidth + "<br>" +
"Browser inner window height: " + window.innerHeight + "px";*/






