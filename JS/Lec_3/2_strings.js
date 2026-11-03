let str="hi im a string";
let str1='hi ima string';
console.log("str->",str);
console.log("str1->",str1);

let mystr=1+" "+2+" "+3;
console.log(mystr);

let template=`it is also a string 
it should have something`;
console.log("template",template);




let query=" Find places near SushantLok";
console.log("q" ,query);
let trimmedQuery=query.trim();
console.log("q" ,trimmedQuery);
let wordsArr=trimmedQuery.split(" ");
console.log("wordsArr" ,wordsArr);
let outcome=wordsArr.join("+");
console.log("outcome str", outcome);
