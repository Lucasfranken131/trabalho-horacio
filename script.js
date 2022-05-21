var verifica=Boolean(false)
function verificar(){
    var email=document.getElementById("email").value
    var list=email.split("")
    for(var i=0;i<=list.length;i++){
        if(list[i]=="@"){
            document.getElementById("verificado").innerHTML="Email valido"
            var la=i
            verifica=Boolean(true)
        }
        if(list[la]!="@"){
            document.getElementById("verificado").innerHTML="Email invalido"
            verifica=Boolean(false)
        }
    }
}
function mandar(){
    if(verifica==true){
        document.getElementById("nome").value=""
        document.getElementById("email").value=""
        document.getElementById("verificado").innerHTML="Email enviado"
    }else{
        document.getElementById("verificado").innerHTML=""
        setTimeout(time, 10);
        return
    }
}

function time(){
    document.getElementById("verificado").innerHTML="Insira um email válido"
}

/* mudar as imagens anuncio */
setInterval(mudar, 5000)
var alternar=Boolean(false)
function mudar(){
    
    if(alternar==false){
        let img=document.querySelector(".bottom")
        img.classList.add("aparecer")
        img.classList.remove("sumir")
        alternar=(true)
    }else{
        let img=document.querySelector(".bottom")
        img.classList.remove("aparecer")
        img.classList.add("sumir")
        alternar=(false)
    }
    
}