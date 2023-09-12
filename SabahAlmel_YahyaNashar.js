// Exercise 1  :

// var keys = parseInt(prompt("enter the number of keys"));
//  switch (keys){
//     case 0 :
//         console.log("We sank together");
//         break;
//     case 30000 :
//         alert("We made it")
//         break;
//     default :
//         console.log("We need to swim a little bit more!");
//         break ; 

//  }

// we are basically switching the value of keys by 0 or 30000 , if it's any other number we have the default value set...


// Exercise 4:

// const arr = prompt("enter an array separated by comma:");
// const arr1 = arr.split(",");
// for (let i =0 ; i < arr1.length ; i++){
//     for (let j =0 ; j<arr1.length ; j++){
//         if (parseInt(arr1[i])<parseInt(arr1[i+1])){
//             console.log("the biggest number is "+arr1[i+1])
//         }
//     }
// }

// 2 for loops one to iterate through the array and one to compare each number from the first loop with all other numbers in the array , the greatest number is printed.

// Exercise 5:

// function GiveMeNumber(num){
//     var num = parseInt(prompt("enter a number"));
//     return alert("num*num");
// }
// GiveMeNumber();

// GiveMeNumber function takes the num from the user and returns the square of it



// Exercise 6:

// // // //  rewriting Exercise 1:

// function CheckKeys(){
//     var keys = parseInt(prompt("enter the number of keys"));
//     switch (keys){
//        case 0 :
//            console.log("We sank together");
//            break;
//        case 30000 :
//            alert("We made it")
//            break;
//        default :
//            console.log("We need to swim a little bit more!");
//            break ; 
//     }
// }
// CheckKeys();

// // // // rewriting Exercise 2:

// function FindMaxMin(array){

//     var array,min,max;
// var array=prompt("enter an array like (1,6,2,3)");
// array=array.split(",")
// min=max=array[0]
// for(let i=0;i<array.length;i++){
//     switch(true){
//         case (parseInt(array[i])>max):max=array[i];break;
//         case (parseInt(array[i])<min):min=array[i];break
//     }
// }
// console.log("minimum is :"+min)
// console.log("max is:"+max)
// }
// FindMaxMin();


// // // Exercise 3:

// var nb=prompt("enter a number");
// Nested(nb);
// function Nested(nb){
    
// ex2 
// we ask the user to input an array (just number separated by comman)
// then we assign each of max and min to the first element in this array
// then a loop to see if we passed an element greater than the max ..then the max it will be this nb
// and if this value is less than the min so we replace the min by this value
var array,min,max;
var array=prompt("enter an array like (1,6,2,3)");
array=array.split(",")
console.log(array)
min=max=array[0]
for(let i=0;i<array.length;i++){
    switch(true){
        case (parseInt(array[i])>max):max=array[i];break;
        case (parseInt(array[i])<min):min=array[i];break
    }
}
console.log("minimum is :"+min)
console.log("max is:"+max)


// ex3
// i asked the user to enter a number then i put this number in the first loop to loop it
// here (i is the nb of row) and (j is the nb of column)
// then for the second loop i put it j<=i because i need to do a triangle
// j=0;j<=0 yes so it goes and print * and finished the second loop then go to first one and go to new line
// j=0;j<=1 yeas so print ** then go to first loop and go to new line etc...

// let nb=prompt("enter a number")
// for(let i=0;i<nb;i++){
//     for(let j=0;j<=i;j++){
//         console.log("*")
//     }
//     console.log("\n");
// }
// }

// // // Exercise 4 :

const arr = prompt("enter an array separated by comma:");
NestedLoop(arr);
function NestedLoop(arr){

const arr1 = arr.split(",");
for (let i =0 ; i < arr1.length ; i++){
    for (let j =0 ; j<arr1.length ; j++){
        if (parseInt(arr1[i])<parseInt(arr1[i+1])){
            console.log("the biggest number is "+arr1[i+1])
        }
    }
}
}




// // // Exercise 5 && Exercise 6 are already fcts.


