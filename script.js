
var casificacao = [
    {
        imc: "Abaixo do peso",

        tituloRec1: "Exercícios de resistência",
        descricao1: "Praticar exercícios de fortalecimento muscular para ajudar a ganhar massa muscular em vez de apenas gordura.",

        tituloRec2: "Alimentação balanceada e rica em nutrientes",
        descricao2: "Incluir proteínas magras, carboidratos complexos, gorduras saudáveis, frutas e vegetais.",

        tituloRec3: "Consulta com um nutricionista",
        descricao3: "Para avaliar a dieta atual e desenvolver um plano alimentar para ganho de peso saudável.",

    },
    {
        imc: "Peso normal",

        tituloRec1: "Manutenção de uma dieta equilibrada",
        descricao1: "Continuar com uma dieta variada e rica em nutrientes para manter o peso saudável.",

        tituloRec2: "Atividade física regular",
        descricao2: "Realizar exercícios aeróbicos e de fortalecimento muscular para manter a forma física e a saúde geral",

        tituloRec3: "Monitoramento de saúde regular",
        descricao3: " Fazer exames médicos periódicos para garantir que os níveis de colesterol, açúcar no sangue e outros indicadores de saúde estejam normais.",

    },
    {
        imc: "Sobrepeso",

        tituloRec1: "Ajuste na dieta",
        descricao1: " Reduzir a ingestão de calorias, especialmente de alimentos processados e ricos em açúcar e gordura, e aumentar o consumo de alimentos ricos em fibras.",

        tituloRec2: "Aumento da atividade física",
        descricao2: "Incorporar pelo menos 150 minutos de atividade física moderada por semana, como caminhadas, corridas leves ou natação.",

        tituloRec3: "Controle do estresse",
        descricao3: "Praticar técnicas de relaxamento e gerenciamento do estresse, como meditação e ioga, que podem ajudar a prevenir a alimentação emocional.",

    },
    {
        imc: "Obesidade grau I",

        tituloRec1: "Consulta com profissionais de saúde",
        descricao1: "Buscar orientação de um nutricionista e um médico para um plano de perda de peso personalizado e seguro.",

        tituloRec2: "Mudanças na alimentação",
        descricao2: "Adotar uma dieta pobre em calorias e rica em nutrientes, focando em alimentos integrais e evitando alimentos processados e açucarados.",

        tituloRec3: "Programa de exercícios",
        descricao3: "Seguir um programa de exercícios estruturado que inclua atividades aeróbicas e de resistência para ajudar na perda de peso e no fortalecimento muscular.",

    },
    {
        imc: "Obesidade grau II",

        tituloRec1: "Acompanhamento médico rigoroso",
        descricao1: " Trabalhar de perto com um médico para monitorar a saúde e avaliar a necessidade de tratamentos adicionais, como medicamentos para perda de peso.",

        tituloRec2: "Plano de dieta rigoroso",
        descricao2: " Implementar um plano alimentar supervisionado por um nutricionista, focando na redução calórica e na ingestão de alimentos nutritivos.",

        tituloRec3: "Exercícios regulares e seguros",
        descricao3: "Participar de um regime de exercícios adequado, adaptado para qualquer limitação física, com o acompanhamento de um profissional de educação física.",

    },
    {
        imc: "Obesidade grau III",

        tituloRec1: "Intervenção médica intensiva",
        descricao1: "Considerar a possibilidade de intervenções médicas, como cirurgia bariátrica, sob orientação de um especialista.",

        tituloRec2: "Suporte psicológico",
        descricao2: "Buscar apoio psicológico ou terapêutico para lidar com os desafios emocionais associados à obesidade mórbida.",

        tituloRec3: "Plano de saúde integral",
        descricao3: "Plano que inclua dieta, exercícios e monitoramento da saúde, com uma equipe multidisciplinar (médico, nutricionista, psicólogo e treinador físico).",

    }
]

function adicionarSecao(){
    var corpo = document.querySelector("body")
    corpo.innerHTML += `
    
    <section class="resultado">
    <h1>Metabolimo basal</h1>

    <div>
      <h1>1968 cal</h1>
      <h3>Superávit calórico</h3>
    </div>
    <p>Você está em um processo de superávit calórico
      onde você consome mais calorias do que você gasta.</p>
  </section>

  <section class="resultado">
    <h1 >Índice de Massa Corporal </h1>

    <div>
      <h1 id="IMCR">27,6</h1>
      <h3 id="IMCC">Sobrepeso</h3>
    </div>
    <p>Pode estar associado a um maior risco de desenvolver doenças como diabetes tipo 2, hipertensão e doenças
      cardíacas.</p>
  </section>

  <section class="recomendacoes">
    <div class="titulo">
      <h1>RECOMENDAÇÕES</h1>
    </div>

    <div class="rec" id="rec1">
      <h2 id="tr1">Adotar hábitos alimentares saudáveis</h2>
      <p id="dr1">
        Reduza a ingestão de alimentos processados, açúcares e gorduras saturadas.
      </p>
    </div>

    <div class="rec" id="rec2">
      <h2 id="tr2">Adotar hábitos alimentares saudáveis</h2>
      <p id="dr2">
        Reduza a ingestão de alimentos processados, açúcares e gorduras saturadas.
      </p>
    </div>

    <div class="rec" id="rec3">
      <h2 id="tr3">Adotar hábitos alimentares saudáveis</h2>
      <p id="dr3">
        Seguir e monitoramento contínuo da saúde, com  de uma equipe multidisciplinar (médico, nutricionista, psicólogo e treinador físico).
      </p>
    </div>


  </section>
    
    `
}

var sexoFem = "n";
var mas = document.getElementById("mas")
var fem = document.getElementById("fem")
var start = document.getElementById("start")

fem.addEventListener("click", function () {
    sexoFem = true
    console.log(sexoFem)
});

mas.addEventListener("click", function () {
    sexoFem = false
    console.log(sexoFem)
})

console.log(sexoFem)



start.addEventListener("click", function () {

    //capturando os campos de peso e altura
    var peso = document.getElementById("peso")
    var altura = document.getElementById("altura")

//checando se o usuário inseriu os dados corretamentes
    if (sexoFem == "n") {
        alert("Informe seu sexo")

        return;
    }

    if (peso.value == "" || altura.value == "") {
        alert("preencha os campos")
        return;
    }

    //adiciona a seção do resultado
    adicionarSecao()  
    
    //leva o usuário para a seção criada
    var secao = document.querySelector(".resultado")
    secao.scrollIntoView({behavior:'smooth'})

    //calcuça o IMC
    var IMC = peso.value / (altura.value * altura.value)
    IMC = IMC.toFixed(1)
    console.log(IMC)

    if (sexoFem == true) {
        MT = peso.value * 0.9 * 24
        console.log(MT)
    } else {
        MT = peso.value * 24
        console.log(MT)
    }
    //zerando os valores dos campos
    sexoFem = "n"
    peso.value = ""
    altura.value = ""






    console.log(IMC, MT)

    //IMC no front
    //capturndo os elementos do DOM
    var IMCR = document.getElementById("IMCR")
    var IMCC = document.getElementById("IMCC")
    
    var tr1 = document.getElementById("tr1")
    var tr2 = document.getElementById("tr2")
    var tr3 = document.getElementById("tr3")

    var dr1 = document.getElementById("dr1")
    var dr2 = document.getElementById("dr2")
    var dr3 = document.getElementById("dr3")




    if (IMC < 18.5) {
       i=0
    }else if(IMC > 18.5 && IMC < 24.9){
      i=1
    }else if(IMC > 25 && IMC < 29.9){
       i=2
    }else if(IMC > 30 && IMC < 34.9){
       i=3
    }else if(IMC > 35 && IMC < 39.9 ){
       i=4
    }else if(IMC >= 40){
       i=5
    }

console.log(IMCC,IMCR)
IMCC.textContent = casificacao[i].imc
IMCR.textContent = IMC

tr1.textContent = casificacao[i].tituloRec1
tr2.textContent = casificacao[i].tituloRec2
tr3.textContent = casificacao[i].tituloRec3

dr1.textContent = casificacao[i].descricao1
dr2.textContent = casificacao[i].descricao2
dr3.textContent = casificacao[i].descricao3



})

