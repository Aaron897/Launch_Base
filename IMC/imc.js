// CALCULO DE IMC 

const nome = "Kaio";
const peso = 100;
const altura = 1.78;

const imc = 100 / (altura*altura);

if ( imc => 30 ) {
    console.log(`${nome} você está acima do peso`);
}else{
    console.log(`${nome} você não está acima do peso`);
}