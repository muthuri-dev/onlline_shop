const express=require('express');
const mongoose=require('mongoose');
const ejs=require('ejs');
const bodyParser=require('body-parser');
const multer=require('multer');
const app=express();
const PORT=8081;
const mongoUrl='mongodb://localhost/onlineShop';

//CONNECTING TO THE DATABASE
app.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(function(error){
    if(error){
        console.warn('Database not connected');
    }else{
        console.info('Database connected');
    }
});


//setting view engine
app.set('view engine','ejs');

//setting middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//setting public files
app.use(express.static('public'));
app.use(express.static('uploads'));

//Routes
app.get('/',function(req,res){
    res.render('home',{
        title:'Home Page'
    });
});

app.listen(PORT,function(error){
    if(error){
        console.warn('App encounted error',error);
    }else{
        console.info(`App connected to port ${PORT}`);
    }
})