const resposta = document.getElementById("resposta");
const image = document.querySelector ("img");
const button = document.getElementById("button");
const tempo = document.getElementById("tempo")

const numeroAleatorio = Math.floor(Math.random()*10);
let timer =0 
setInterval(() => {
   tempo.innerText = timer;
   timer++
}, 1000);



const verifica = () => {

   resposta.innerText = "processando...";
   image.src = "./img/nazare.jfif"


   const numeroDigitado = document.querySelector("input").value;
   
   setTimeout(() => {
      if (Number(numeroDigitado) === numeroAleatorio){
         resposta.innerText = `parabes voce acertou o numero ${numeroAleatorio}`;
         resposta.style.color="green"
         image.src = "./img/parabes.jfif"

         alert(`seu tempo foi de: ${timer} segundos`)

         setTimeout(() => {
            window.location.reload();
         }, 5000);

        }else {
        
         if ((Number(numeroDigitado) < numeroAleatorio) && (numeroDigitado >=0)) {
             resposta.innerText = "digite um numero maior";
             resposta.style.color="goldenrod"
     
            image.src = "./img/um pouco MAIS.png";
         } else if ((Number(numeroDigitado) > numeroAleatorio) && (numeroDigitado <= 11)){
            resposta.innerText = "digite um numero MENOR"
            resposta.style.color= "red"
     
            image.src = "./img/um pouco MENOS.png";
     
           
         } else {
           resposta.innerText = "numero de 0 a 10"
           resposta.style.color="darkred"
         }
        } 
   },2000)
};

button.addEventListener("click", verifica);