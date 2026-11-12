let user = {
    firstName : "Atharva",
    lastName : "Singh",
    campus : "Sushant University",
    email : "abc@gmail.com",
    age:19,
    mobile:123456789,
    hobbies:["reading","sports","music"],
    isadult:true,
};

console.log("obj",user);

let firstName=prompt(firstName)
console.log("firstname",user.firstName);
console.log("age",user.age);
console.log("hobby",user.hobbies[1]);
console.log("`````````````````");

// for(let key in user){
//     console.log("key:",key,"|| vaulue:",user[key];)
// }