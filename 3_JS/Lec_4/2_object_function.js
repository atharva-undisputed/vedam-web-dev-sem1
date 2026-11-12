let cap={
    firstName:"Steve",
    lastName:"Rogers",
    isAvenger:false,
    address:{
        country:"US",
        state:"New York",
        city:"Manhatten",
    },
    enemies:["hydra","iron man","thanos","ultron"],
    greet:function(){
        console.log("cap says hi");
    }
}

console.log("city",cap.address.city);

console.log("last enemy",cap.enemies[cap.enemies.length-1]);

cap.greet();

delete cap.lastName;

console.log(cap);