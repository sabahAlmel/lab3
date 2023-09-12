// ex2 
// we ask the user to input an array (just number separated by comman)
// then we assign each of max and min to the first element in this array
// then a loop to see if we passed an element greater than the max ..then the max it will be this nb
// and if this value is less than the min so we replace the min by this value
// var array,min,max;
// var array=prompt("enter an array like (1,6,2,3)");
// array=array.split(",")
// min=max=array[0]
// for(let i=0;i<array.length;i++){
//     switch(true){
//         case (array[i]>max):max=array[i];break;
//         case (array[i]<min):min=array[i];break
//     }
// }
// console.log("minimum is :"+min)
// console.log("max is:"+max)


// ex3
// i asked the user to enter a number then i put this number in the first loop to loop it
// here (i is the nb of row) and (j is the nb of column)
// then for the second loop i put it j<=i because i need to do a triangle
// j=0;j<=0 yes so it goes and print * and finished the second loop then go to first one and go to new line
// j=0;j<=1 yeas so print ** then go to first loop and go to new line etc...

let nb=prompt("enter a number")
for(let i=0;i<nb;i++){
    for(let j=0;j<=i;j++){
        console.log("*")
    }
    console.log("\n");
}
