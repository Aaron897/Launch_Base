//APOSENTADORIA

const nome = "Sandra";
const sexo = "F";
const idade = 44;
const contribuicao = 35;

const Calc_aposentadoria = idade + contribuicao;



if (sexo === "F" && ( contribuicao >= 30 || Calc_aposentadoria >= 85)) {
    console.log(`${nome} você pode se aposentar`);
}else if (sexo == "M" && (contribuicao >= 35 || Calc_aposentadoria >= 95)) {
    console.log(`${nome} você pode se aposentar`);
}else {
    console.log(`${nome} infelizmente você ainda não pode se aposentar`);
}