function sayMyName(){
    console.log("s");
    console.log("a");
    console.log("m");
}
// sayMyName()
function addTwoNum(num1, num2){
   let result=num1+num2;
   return result
}
const result = addTwoNum(1,2)
// console.log("Result :", result);

function addCartPrice(...num1){
   return num1
}
// console.log(addCartPrice(200,300,500))
const user={
 username:"samsul",
 price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:"samsul",
    price:299
})
const myNewArray=[200,400,600,800]
function returnValue(getArray){
    return getArray[1]
}
console.log(returnValue(myNewArray))