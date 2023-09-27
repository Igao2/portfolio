const express = require("express")
const app = express()
const nodemailer = require('nodemailer');
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

const trasport = nodemailer.createTransport({
host: 'smtp.office365.com',
port: 587,
secure: false,
auth:
{
    user:'projetohelpy1@outlook.com',
    pass:'Cientista232@'
}
})

app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/index.html");
    
});

app.post("/",function(req,res){

    var email = req.body.email
    var mensagem = req.body.mensagem
    
    trasport.sendMail({
        from:'projetohelpy1@outlook.com',
        to:'igor.dasilvacosta8@gmail.com',
        subject:"Contato portfolio",
        text:"Email:"+email+"\n Mensagem:"+mensagem
    })
    .then((response)=>console.log("Sucesso"))

})

app.listen(5000);