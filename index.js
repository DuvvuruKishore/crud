const express=require('express');

const app=express();
const path=require('path');
//const rout=require('./routes/members');

/*app.get('/',function(req,res){
    res.send("get request from users");
});
*/
app.use(express.json());
//app.use(express.urlencoded({extended:false}));

//static folder
app.use(express.static(path.join(__dirname,'public')));
//members api route
app.use('/api/members',require('./routes/members'));


const port=process.env.PORT ||5000;
app.listen(port,()=>console.log(`Server started on port ${port}`));