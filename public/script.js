const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));
const form = document.getElementById("form1")
var contato = document.getElementById("oi")
contato.addEventListener("click",function(){

    const Telefone = '35992308808';
const mensagem= 'Tenho interesse no seu trabalho';

const whatsappLink = `https://api.whatsapp.com/send?phone=${Telefone}&text=${encodeURIComponent(mensagem)}`;

window.open(whatsappLink,"_blank")

})

form.addEventListener("submit",function(){
    
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value

    if(name!=""&&email!=""&&name!=email)
    {
        document.forms["form1"].submit()
    }
    else{
        alert("Preencha os campos corretamente, por favor!")
    }
})