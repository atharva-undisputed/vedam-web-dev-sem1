function myfn(){
    console.log("reusable code");
}
console.log("before code");
myfn();
console.log("after code");

function fnwithparameter(var1,var2){
    console.log("var1",var1,"var2",var2);
}
console.log("before code");
fnwithparameter(20,30);
console.log("after code");

function rvalue(num){
    let even=num%2;
    return even;
}

console.log("before code");
rvalue(10);
console.log("after code");