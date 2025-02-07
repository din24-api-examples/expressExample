const express = require('express'); const port = 3000;
const app = express(); app.listen(port, function(){ 
    console.log("Express example running on port " + port); 
});


app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

app.get('/', function(request, response){ 
    response.send("MY Express API example  running on port " + port); 
});

app.get('/second',function(request,response){
    console.log("endpoint second called");
    response.send("This is second endpoint");
    //response.json("This is second endpoint");
});

//middleware is a function which is called automatically
//you can regognize it from the word use 
app.use(function(request, request, next){
    console.log("Middleware executed");
    next();
});

//fname is mandatory
app.get('/hello/:fname',function(request,response){
    response.send("Hello "+request.params.fname);
});

//fname is not mandatory
app.get('/hello2/:fname?',function(request, response){
    if(request.params.fname){
        response.send("Hello "+request.params.fname);
    }
    else{
        response.send("Hello Quest");
    }
});

//post example
app.post('/book',function(request,response){
    console.log(request.body.author);
    response.json(request.body);
});

module.exports = app; 