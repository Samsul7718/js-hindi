// singleton

// object literals
const JsUser={
    name:"samsul",
    age:18,
    location:"bengaluru",
    email:"samsul@gmail.com",
    isLoggedIn:"false"
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
JsUser.email="samsul3434@gmail.com"
// console.log(JsUser);
// Object.freeze(JsUser);
// JsUser.email="samsul3333@gmail.com"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("hello world");
}


JsUser.greetingTwo=function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());