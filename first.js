console.log("chceking");

//let, var and const
//public or global
var number1=9;
var number2=7;
//inside scope or private
//let allows u to decleare varibale within particular scope
{
    let number1=90;
    let number2=60;
    console.log(number1+number2,"inside");
}


console.log(number1+number2,"outside");
let a=12,
b="Vivek",
c=34.5,

d=false,
e=null,
f=[1,2,3,4]
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
let fname='vivek'
let lname='mandake'
let sentence1=' "where there is a "will" ,there is a way" '
console.log(sentence1)
let sentence2=`hello,"how are u"`
console.log(sentence2)
