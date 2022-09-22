const ask = () => {
   
  //alert('Hola!');

    let answer = magicBall();

    const questionInput = document.getElementById('question') ;
    const answerInput = document.getElementById('answer') ;
    
   if(questionInput.value !== ""){
      //respuesta al preguntar
        let answer = magicBall();
        //resultado
        answerInput.value = answer;}
    else{
      answerInput.value = "Preguta algo";      
    }

};

//Función de la bola Mágica
const magicBall = () =>{
    

let eightBall = '';
let randomNumber = Math.floor(Math.random() * 8);


switch (randomNumber){
  case 0:
    eightBall = "No eres nada";
  break;
  case 1:
    eightBall = "Chapulin";
  break;
  case 2:
    eightBall = "Caracol";
  break;
  case 3:
    eightBall = "Abeja";
  break;
  case 4:
  eightBall = "Cucaracha";
  break;
  case 5:
  eightBall ="Araña";//TOdAS
  break;
  case 6:
  eightBall = "Mosquito";
  break;
  case 7:
  eightBall ="Pulga";
  break;
  case 8:
  eightBall = "Escorpion";
  break;
};
  return eightBall;

}