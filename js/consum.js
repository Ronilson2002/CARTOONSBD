// Ler arquivo json


document.getElementsByClassName("btnModal")[0].onclick = function (){Carregar(0);}
document.getElementsByClassName("linkModal")[0].onclick = function (){Carregar(0);}

document.getElementsByClassName("btnModal")[1].onclick = function (){Carregar(1);}
document.getElementsByClassName("linkModal")[1].onclick = function (){Carregar(1);}

document.getElementsByClassName("btnModal")[2].onclick = function (){Carregar(2);}
document.getElementsByClassName("linkModal")[2].onclick = function (){Carregar(2);}

document.getElementsByClassName("btnModal")[3].onclick = function (){Carregar(3);}
document.getElementsByClassName("linkModal")[3].onclick = function (){Carregar(3);}

document.getElementsByClassName("btnModal")[4].onclick = function (){Carregar(4);}
document.getElementsByClassName("linkModal")[4].onclick = function (){Carregar(4);}

document.getElementsByClassName("btnModal")[5].onclick = function (){Carregar(5);}
document.getElementsByClassName("linkModal")[5].onclick = function (){Carregar(5);}

document.getElementsByClassName("btnModal")[6].onclick = function (){Carregar(6);}
document.getElementsByClassName("linkModal")[6].onclick = function (){Carregar(6);}

document.getElementsByClassName("btnModal")[7].onclick = function (){Carregar(7);}
document.getElementsByClassName("linkModal")[7].onclick = function (){Carregar(7);}

document.getElementsByClassName("btnModal")[8].onclick = function (){Carregar(8);}
document.getElementsByClassName("linkModal")[8].onclick = function (){Carregar(8);}

document.getElementsByClassName("btnModal")[9].onclick = function (){Carregar(9);}
document.getElementsByClassName("linkModal")[9].onclick = function (){Carregar(9);}

document.getElementsByClassName("btnModal")[10].onclick = function (){Carregar(10);}
document.getElementsByClassName("linkModal")[10].onclick = function (){Carregar(10);}


document.getElementById("rony").onclick = function(){Abrir(); }

for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function(){ div.style.display = "none"; }, 600);
    }
}

function Abrir() {
    document.getElementsByClassName("alerta")[0].style.display = "block";
    
}

/*function Carregar(ind) {

    // var requestURL = https://github.com/Ronilson2002/CARTOONSBD/blob/main/dados.json
    // var request = new XMLHttpRequest();
    // request.open('GET', requestURL);
    // request.responseType = 'json';
    // request.send();
    // request.onload = function() {
    //     var myObj = request.response;
    // }

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {


        var myObj = JSON.parse(this.responseText);
        document.getElementById("modalTitle").innerHTML = myObj.cartoons[ind].modalTitle        
        document.getElementById("tamanhoArquivo").innerHTML = myObj.cartoons[ind].tamanhoArquivo        
        document.getElementById("roteirista").innerHTML = myObj.cartoons[ind].roteirista        
        document.getElementById("genero").innerHTML = myObj.cartoons[ind].genero        
        document.getElementById("paginas").innerHTML = myObj.cartoons[ind].paginas        
        document.getElementById("paginas").innerHTML = myObj.cartoons[ind].desenhista        
        document.getElementById("editora").innerHTML = myObj.cartoons[ind].editora        
        document.getElementById("recomendacao").innerHTML = myObj.cartoons[ind].recomendacao        
        document.getElementById("colorista").innerHTML = myObj.cartoons[ind].colorista        
        document.getElementById("avaliacao").innerHTML = myObj.cartoons[ind].avaliacao        
        document.getElementById("dataPub").innerHTML = myObj.cartoons[ind].dataPub        
        document.getElementById("sinopse").innerHTML = myObj.cartoons[ind].sinopse        
        

    }
        };
    xmlhttp.open("GET", "../dados.json", true);
    xmlhttp.send();
}*/

function Carregar(ind){
    var request = new XMLHttpRequest();
request.open('GET', './dados.json');
request.responseType = 'json';

request.onload = function() {
    if (request.status === 200) {
        var myObj = request.response;
        document.getElementById("modalTitle").innerHTML = myObj.cartoons[ind].modalTitle        
        document.getElementById("tamanhoArquivo").innerHTML = myObj.cartoons[ind].tamanhoArquivo        
        document.getElementById("roteirista").innerHTML = myObj.cartoons[ind].roteirista        
        document.getElementById("genero").innerHTML = myObj.cartoons[ind].genero        
        document.getElementById("paginas").innerHTML = myObj.cartoons[ind].paginas        
        document.getElementById("paginas").innerHTML = myObj.cartoons[ind].desenhista        
        document.getElementById("editora").innerHTML = myObj.cartoons[ind].editora        
        document.getElementById("recomendacao").innerHTML = myObj.cartoons[ind].recomendacao        
        document.getElementById("colorista").innerHTML = myObj.cartoons[ind].colorista        
        document.getElementById("avaliacao").innerHTML = myObj.cartoons[ind].avaliacao        
        document.getElementById("dataPub").innerHTML = myObj.cartoons[ind].dataPub        
        document.getElementById("sinopse").innerHTML = myObj.cartoons[ind].sinopse   
    } else {
        console.log('Network request for dados.json failed with response' + request.status + ':' + request.statusText);
    }
}

request.send();
}