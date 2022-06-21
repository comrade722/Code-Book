const express=require('express');
const app=express();
const port=3000;

//Use express router 
app.use('/',require('./routes'));





app.listen(port,()=>{
    console.log(`server starts on port ${port}`);
});