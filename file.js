const f =require('fs');

//console.log(f);

//async method
f.readFile(__dirname+"/teacher.txt","utf-8",(error,data)=>{
    console.log(data)
})
console.log('hello gwalior')