// ex2 
// we ask the user to input an array (just number separated by comman)
// then we assign each of max and min to the first element in this array
// then a loop to see if we passed an element greater than the max ..then the max it will be this nb
// and if this value is less than the min so we replace the min by this value
var array,min,max;
var array=prompt("enter an array like (1,6,2,3)");
array=array.split(",")
min=max=array[0]
for(let i=0;i<array.length;i++){
    switch(true){
        case (array[i]>max):max=array[i];break;
        case (array[i]<min):min=array[i];break
    }
}
console.log("minimum is :"+min)
console.log("max is:"+max)