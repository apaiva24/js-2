const nome = "Letícia";
const idade = 16;
const cidade = "Londrina";
const esporte = "volei"

const frase = `Meu nome é ${nome}, e tenho ${idade}, anos e moro em${cidade}`;

console.log(frase);

const IdadeEmDias = idade * 365;
const idadeEmMeses = idade * 12;
console.log("minha idade em dia é: " + IdadeEmDias)
console.log("minha idade em meses é: " + idadeEmMeses)

////////////// atividade ///////////
 
const precoUnit = 9;
const qtde = 12;
const subtotal = precoUnit * qtde;
const valorMinimoPraTerDesconto = 20;
const TemDesconto = subtotal > valorMinimoPraTerDesconto;

console.log(TemDesconto)

const cidadeAlerta = "Londrina"
const cidadeAraucaria = "Londrina"

const freteGratis = TemDesconto && (cidadeAlerta == cidadeAraucaria)

const resultado = subtotal: R$ $(subtotal)\n
tem desconto: $(TemDesconto)
frete gratis: $(freteGratis)

console.log(resultado)