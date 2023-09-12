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
    
// for(let i=0;i<nb;i++){
//     for(let j=0;j<=i;j++){
//         console.log("*")
//     }
//     console.log("\n");
// }
// }

// // // Exercise 4 :





// // // Exercise 5 && Exercise 6 are already fcts.


