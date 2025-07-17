const fs=require("fs")
let users=[
    {
        id:1,
        name:"puru"
        ,age:"24"
    },
     {
        id:2,
        name:"yaman"
        ,age:"18"
    },
]
fs.writeFile("../users2.txt",JSON.stringify(users),function(err){
    if(err) return  console.log(err);
    console.log("users written")
})