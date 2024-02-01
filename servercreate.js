const h =require('http')

//console.log(h)

const server =h.createServer(function(req,res){
    res.write('welcome node js');
    res.write('hello gwalior shivani')
    res.end();
}).listen(3000,()=>console.log('server is running localhost:3000'))

//localhost:3000