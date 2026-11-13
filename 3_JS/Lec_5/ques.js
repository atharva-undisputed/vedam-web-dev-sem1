let user ={
    name:"Aarav",
    age:20,
    course:"btech cse",
    subjects:["dsa","web dev","math"],
    isenrollled:true,
};

console.log("obj",user);

console.log("name",user.name);
console.log("age",user.age);
console.log("sec subject",user.subjects[1]);
let key="course";
console.log("course",[key]);

user.gradyear=2026;
console.log("obj",user);

user.isenrollled=false;
console.log("obj",user);

user.age=25;
console.log("obj",user);

delete user.name;
console.log("obj",user);