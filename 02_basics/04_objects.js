// const tinderUser=new Object();
const tinderUser={}
tinderUser.id="abc123"
tinderUser.name="sam"
tinderUser.isLoggedin=false

// console.log(tinderUser);

const regulerUser={
    email:"sam123@gmail.com",
    fullname:{
        userfullname:{
            firstname:"samsul",
            lastname:"alam"
        }
    }
}
// console.log(regulerUser.fullname.userfullname);
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
// console.log(obj3);
const users=[
     {
        id:1,
        email:"sam123@gmail.com"
   },
   {
    id:1,
    email:"sam123@gmail.com"
   },
   {
    id:1,
    email:"sam123@gmail.com"
   },
]
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));