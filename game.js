const Itens = [
    { "id": 1, "nome": "Papel", "vida": 150, "xp_gain": 1, },
    { "id": 2, "nome": "Cartolina", "vida": 300, "xp_gain": 8, },
    { "id": 3, "nome": "Papelão", "vida": 450, "xp_gain": 15, },
    { "id": 4, "nome": "Tecido de algodão", "vida": 600, "xp_gain": 22, },
    { "id": 5, "nome": "Corda de sisal", "vida": 750, "xp_gain": 29, },
    { "id": 6, "nome": "Fio de lã", "vida": 900, "xp_gain": 36, },
    { "id": 7, "nome": "Madeira leve", "vida": 1050, "xp_gain": 43, },
    { "id": 8, "nome": "Galho seco", "vida": 1200, "xp_gain": 50, },
    { "id": 9, "nome": "Folha de árvore", "vida": 1350, "xp_gain": 57, },
    { "id": 10, "nome": "Cascalho", "vida": 1500, "xp_gain": 64, },
    { "id": 11, "nome": "Jornal reciclado", "vida": 1650, "xp_gain": 71, },
    { "id": 12, "nome": "Plástico leve", "vida": 1800, "xp_gain": 78, },
    { "id": 13, "nome": "Caixa de papelão", "vida": 1950, "xp_gain": 85, },
    { "id": 14, "nome": "Papel de seda", "vida": 2100, "xp_gain": 92, },
    { "id": 15, "nome": "Palitos de madeira", "vida": 2250, "xp_gain": 99, },
    { "id": 16, "nome": "Seda vegetal", "vida": 2400, "xp_gain": 106, },
    { "id": 17, "nome": "Couro sintético", "vida": 2550, "xp_gain": 113, },
    { "id": 18, "nome": "Folhas de banana", "vida": 2700, "xp_gain": 120, },
    { "id": 19, "nome": "Fita adesiva", "vida": 2850, "xp_gain": 127, },
    { "id": 20, "nome": "Garrafa de plástico", "vida": 3000, "xp_gain": 134, },
    { "id": 21, "nome": "Concha do mar", "vida": 3200, "xp_gain": 141, },
    { "id": 22, "nome": "Coral", "vida": 3450, "xp_gain": 148, },
    { "id": 23, "nome": "Frutas variadas", "vida": 3700, "xp_gain": 155, },
    { "id": 24, "nome": "Vegetais frescos", "vida": 3950, "xp_gain": 162, },
    { "id": 25, "nome": "Insetos comuns", "vida": 4200, "xp_gain": 169, },
    { "id": 26, "nome": "Borboletas", "vida": 4450, "xp_gain": 176, },
    { "id": 27, "nome": "Pedras preciosas", "vida": 4700, "xp_gain": 183, },
    { "id": 28, "nome": "Minerais raros", "vida": 4950, "xp_gain": 190, },
    { "id": 29, "nome": "Flores silvestres", "vida": 5200, "xp_gain": 197, },
    { "id": 30, "nome": "Musgo", "vida": 5450, "xp_gain": 204, },
    { "id": 31, "nome": "Escamas de peixe", "vida": 5700, "xp_gain": 211, },
    { "id": 32, "nome": "Pena de pássaro", "vida": 5950, "xp_gain": 218, },
    { "id": 33, "nome": "Cera de abelha", "vida": 6200, "xp_gain": 225, },
    { "id": 34, "nome": "Frutas desidratadas", "vida": 6450, "xp_gain": 232, },
    { "id": 35, "nome": "Amuleto de semente", "vida": 6700, "xp_gain": 239, },
    { "id": 36, "nome": "Tecido de bambu", "vida": 6950, "xp_gain": 246, },
    { "id": 37, "nome": "Pele de animal", "vida": 7200, "xp_gain": 253, },
    { "id": 38, "nome": "Penas de pavão", "vida": 7450, "xp_gain": 260, },
    { "id": 39, "nome": "Mel de abelha", "vida": 7700, "xp_gain": 267, },
    { "id": 40, "nome": "Terra rara", "vida": 7950, "xp_gain": 274, },
    { "id": 41, "nome": "Estrela pequena", "vida": 8450, "xp_gain": 281, },
    { "id": 42, "nome": "Exoplaneta distante", "vida": 8950, "xp_gain": 288, },
    { "id": 43, "nome": "Lua rochosa", "vida": 9450, "xp_gain": 295, },
    { "id": 44, "nome": "Raios cósmicos", "vida": 9950, "xp_gain": 302, },
    { "id": 45, "nome": "Partículas subatômicas", "vida": 10450, "xp_gain": 309, },
    { "id": 46, "nome": "Poeira estelar", "vida": 10950, "xp_gain": 316, },
    { "id": 47, "nome": "Micrometeoritos", "vida": 11450, "xp_gain": 323, },
    { "id": 48, "nome": "Átomos exóticos", "vida": 11950, "xp_gain": 330, },
    { "id": 49, "nome": "Gás interestelar", "vida": 12450, "xp_gain": 337, },
    { "id": 50, "nome": "Energia quântica", "vida": 12950, "xp_gain": 344, },
    { "id": 51, "nome": "Água lunar", "vida": 13450, "xp_gain": 351, },
    { "id": 52, "nome": "Atmosfera marciana", "vida": 13950, "xp_gain": 358, },
    { "id": 53, "nome": "Lágrimas de estrela", "vida": 14450, "xp_gain": 365, },
    { "id": 54, "nome": "Anomalia quântica", "vida": 14950, "xp_gain": 372, },
    { "id": 55, "nome": "Gás nobre exótico", "vida": 15450, "xp_gain": 379, },
    { "id": 56, "nome": "Areia interestelar", "vida": 15950, "xp_gain": 386, },
    { "id": 57, "nome": "Cristal de plasma", "vida": 16450, "xp_gain": 393, },
    { "id": 58, "nome": "Energia de buraco negro", "vida": 16950, "xp_gain": 400, },
    { "id": 59, "nome": "Neutrinos solares", "vida": 17450, "xp_gain": 407, },
    { "id": 60, "nome": "Magnetar pulsante", "vida": 17950, "xp_gain": 414, },
    { "id": 61, "nome": "Buraco de minhoca", "vida": 18500, "xp_gain": 421, },
    { "id": 62, "nome": "Pontos de singularidade", "vida": 19150, "xp_gain": 428, },
    { "id": 63, "nome": "Andrômeda", "vida": 19800, "xp_gain": 435, },
    { "id": 64, "nome": "Antimatéria", "vida": 20450, "xp_gain": 442, },
    { "id": 65, "nome": "Energia escura", "vida": 21100, "xp_gain": 449, },
    { "id": 66, "nome": "Anel planetário", "vida": 21750, "xp_gain": 456, },
    { "id": 67, "nome": "Nebulosa colorida", "vida": 22400, "xp_gain": 463, },
    { "id": 68, "nome": "Planetóide errante", "vida": 23050, "xp_gain": 470, },
    { "id": 69, "nome": "Chamas solares", "vida": 23700, "xp_gain": 477, },
    { "id": 70, "nome": "Cometas brilhantes", "vida": 24350, "xp_gain": 484, },
    { "id": 71, "nome": "Vórtice de energia estelar", "vida": 25000, "xp_gain": 491, },
    { "id": 72, "nome": "Nuvem interestelar", "vida": 25650, "xp_gain": 498, },
    { "id": 73, "nome": "Estrutura de galáxia", "vida": 26300, "xp_gain": 505, },
    { "id": 74, "nome": "Compressão temporal", "vida": 26950, "xp_gain": 512, },
    { "id": 75, "nome": "Explosão de supernova", "vida": 27600, "xp_gain": 519, },
    { "id": 76, "nome": "Corda cósmica", "vida": 28250, "xp_gain": 526, },
    { "id": 77, "nome": "Filamento galáctico", "vida": 28900, "xp_gain": 533, },
    { "id": 78, "nome": "Onda gravitacional", "vida": 29550, "xp_gain": 540, },
    { "id": 79, "nome": "Ocaso de universo", "vida": 30200, "xp_gain": 547, },
    { "id": 80, "nome": "Quasar em colapso", "vida": 30850, "xp_gain": 554, },
    { "id": 81, "nome": "Universo paralelo", "vida": 31750, "xp_gain": 561, },
    { "id": 82, "nome": "Realidade alternativa", "vida": 32650, "xp_gain": 568, },
    { "id": 83, "nome": "Conceito de tempo", "vida": 33550, "xp_gain": 575, },
    { "id": 84, "nome": "Mente coletiva", "vida": 34450, "xp_gain": 582, },
    { "id": 85, "nome": "Padrões quânticos", "vida": 35350, "xp_gain": 589, },
    { "id": 86, "nome": "Além da existência", "vida": 36250, "xp_gain": 596, },
    { "id": 87, "nome": "Multiverso em expansão", "vida": 37150, "xp_gain": 603, },
    { "id": 88, "nome": "Pensamento abstrato", "vida": 38050, "xp_gain": 610, },
    { "id": 89, "nome": "Infinito e além", "vida": 38950, "xp_gain": 617, },
    { "id": 90, "nome": "Universo quântico", "vida": 39850, "xp_gain": 624, },
    { "id": 91, "nome": "Hiperespaço desgastado", "vida": 40750, "xp_gain": 631, },
    { "id": 92, "nome": "Brilho cósmico", "vida": 41650, "xp_gain": 638, },
    { "id": 93, "nome": "Fonte de matéria escura", "vida": 42550, "xp_gain": 645, },
    { "id": 94, "nome": "Fragmento de universo primordial", "vida": 43450, "xp_gain": 652, },
    { "id": 95, "nome": "Holograma quântico", "vida": 44350, "xp_gain": 659, },
    { "id": 96, "nome": "Onda cósmica", "vida": 45250, "xp_gain": 666, },
    { "id": 97, "nome": "Orbe da criação", "vida": 46150, "xp_gain": 673, },
    { "id": 98, "nome": "Recipiente do infinito", "vida": 47050, "xp_gain": 680, },
    { "id": 99, "nome": "Vazio quântico", "vida": 47950, "xp_gain": 687, },
    { "id": 100, "nome": "Chave da realidade", "vida": 48850, "xp_gain": 694, },
    { "id": 101, "nome": "Memórias Universais", "vida": 50350, "xp_gain": 701, },
    { "id": 102, "nome": "Sons da Criação", "vida": 51850, "xp_gain": 708, },
    { "id": 103, "nome": "Pulsares Eternos", "vida": 53350, "xp_gain": 715, },
    { "id": 104, "nome": "Matriz de Probabilidade", "vida": 54850, "xp_gain": 722, },
    { "id": 105, "nome": "Essência Quântica", "vida": 56350, "xp_gain": 729, },
    { "id": 106, "nome": "Anéis de Tempo", "vida": 57850, "xp_gain": 736, },
    { "id": 107, "nome": "Vórtice Dimensional", "vida": 59350, "xp_gain": 743, },
    { "id": 108, "nome": "Núcleo do Caos", "vida": 60850, "xp_gain": 750, },
    { "id": 109, "nome": "Centelha Primordial", "vida": 62350, "xp_gain": 757, },
    { "id": 110, "nome": "Alma do Cosmos", "vida": 63850, "xp_gain": 764, }
];



let Mineradores = [
    { "id": 0, "nome": "Sonda de Siltito S-6000", "dano_segundo": 0.1, "gold_segundo": 0.1, "qt_compradas": 0, "valor": 15, "incremento": 3, "max": 5059 },
    { "id": 1, "nome": "Catadora de Calcário C-1200", "dano_segundo": 1, "gold_segundo": 1, "qt_compradas": 0, "valor": 100, "incremento": 15, "max": 5047 },
    { "id": 2, "nome": "Escavador de Ébano E-900", "dano_segundo": 8, "gold_segundo": 8, "qt_compradas": 0, "valor": 1100, "incremento": 165, "max": 5028 },
    { "id": 3, "nome": "Perfuratriz de Pedras Preciosas", "dano_segundo": 47, "gold_segundo": 47, "qt_compradas": 0, "valor": 12000, "incremento": 1800, "max": 5011 },
    { "id": 4, "nome": "Broca de Benefícios B-800", "dano_segundo": 260, "gold_segundo": 260, "qt_compradas": 0, "valor": 130000, "incremento": 19500, "max": 4996 },
    { "id": 5, "nome": "Lapidador de Lava L-1500", "dano_segundo": 1400, "gold_segundo": 1400, "qt_compradas": 0, "valor": 1400000, "incremento": 210000, "max": 4977 },
    { "id": 6, "nome": "Sugador de Safira S-2000", "dano_segundo": 7800, "gold_segundo": 7800, "qt_compradas": 0, "valor": 20000000, "incremento": 3000000, "max": 4958 },
    { "id": 7, "nome": "Perfuratriz de Precisão P-500", "dano_segundo": 44000, "gold_segundo": 44000, "qt_compradas": 0, "valor": 330000000, "incremento": 49500000, "max": 4938 },
    { "id": 8, "nome": "Mina Mecânica M-360", "dano_segundo": 260000, "gold_segundo": 260000, "qt_compradas": 0, "valor": 5100000000, "incremento": 765000000, "max": 4918 },
    { "id": 9, "nome": "Máquina de Mineração Modular", "dano_segundo": 1600000, "gold_segundo": 1600000, "qt_compradas": 0, "valor": 75000000000, "incremento": 11250000000, "max": 4899 },
    { "id": 10, "nome": "Triturador Termodinâmico T-2000", "dano_segundo": 10000000, "gold_segundo": 10000000, "qt_compradas": 0, "valor": 1000000000000, "incremento": 150000000000, "max": 4880 },
    { "id": 11, "nome": "Máquina de Perfuração Mineral", "dano_segundo": 65000000, "gold_segundo": 65000000, "qt_compradas": 0, "valor": 14000000000000, "incremento": 2100000000000, "max": 4861 },
    { "id": 12, "nome": "Sugador de Sedimentos S-400", "dano_segundo": 430000000, "gold_segundo": 430000000, "qt_compradas": 0, "valor": 170000000000000, "incremento": 25500000000000, "max": 4844 },
    { "id": 13, "nome": "Escavadora de Reservas", "dano_segundo": 2900000000, "gold_segundo": 2900000000, "qt_compradas": 0, "valor": 2100000000000000, "incremento": 315000000000000, "max": 4826 },
    { "id": 14, "nome": "Draga de Extração Profunda", "dano_segundo": 21000000000, "gold_segundo": 21000000000, "qt_compradas": 0, "valor": 26000000000000000, "incremento": 3900000000000000, "max": 4808 },
    { "id": 15, "nome": "Jato de Jazida JX-700", "dano_segundo": 150000000000, "gold_segundo": 150000000000, "qt_compradas": 0, "valor": 310000000000000000, "incremento": 46500000000000000, "max": 4790 },
    { "id": 16, "nome": "Diamante Digger D-2200", "dano_segundo": 1100000000000, "gold_segundo": 1100000000000, "qt_compradas": 0, "valor": 71000000000000000000, "incremento": 10650000000000000000, "max": 4751 },
    { "id": 17, "nome": "Unidade de Mineração", "dano_segundo": 8300000000000, "gold_segundo": 8300000000000, "qt_compradas": 0, "valor": 12000000000000000000000, "incremento": 1800000000000000000000, "max": 4714 },
    { "id": 18, "nome": "Sonda Geotécnica Série-X", "dano_segundo": 64000000000000, "gold_segundo": 64000000000000, "qt_compradas": 0, "valor": 1900000000000000000000000, "incremento": 284999999999999997902848, "max": 4678 },
    { "id": 19, "nome": "Broca de Mineração Avançada", "dano_segundo": 510000000000000, "gold_segundo": 510000000000000, "qt_compradas": 0, "valor": 540000000000000000000000000, "incremento": 81000000000000000251658240, "max": 4638 },
]

//{{{{{{{{{{{{{{{{{{{{{{{{{{{ VARIAVEL GLOBAIS }}}}}}}}}}}}}}}}}}}}}}}}}}}

let gold = 0
let nivel = 1
let xp = 0

let DanoMult = 1
let goldUpMult = 1
let xpUpMult = 1

let item_sendo_minerado = 0

let vida_do_item = Itens[item_sendo_minerado].vida

let dano_picareta = 1
let valor_money_picareta = 1

let JogoSalvoCarregado = false
let SalvamentoAutomatico = true

const LevelDisplay = document.getElementById("Level")
const Money = document.getElementById("Money")
const VidaItem = document.getElementById("VidaItem")
const Title = document.getElementById("Title")
const ProgresLevel = document.getElementById("ProgresLevel")

//{{{{{{{{{{{{{{{{{{{{{{{{{{{ VARIAVEL GLOBAIS }}}}}}}}}}}}}}}}}}}}}}}}}}}


// Faz sempre que o jogo abre____________________________________________

window.addEventListener("DOMContentLoaded", () => {
    item_sendo_minerado = nivel - 1
    vida_do_item = Itens[item_sendo_minerado].vida
    VidaItem.value = vida_do_item
    VidaItem.max = vida_do_item
    DesenharItens()
    GotoUp()
    MostraMiners()

    Title.innerText = (`${gold} Cliker Game`)

    if (localStorage.getItem("Salvo") === "sim") {
        Carrega()
        GotoLoja()
        JogoSalvoCarregado = true
    } else {
        Salva()
    }
    GotoLoja()


    ProgresLevel.max = Itens[nivel - 1].vida * 2.5
    ProgresLevel.value = xp

    localStorage.setItem("Entrou_Time", Date())
})

// Faz sempre que o jogo abre____________________________________________

window.onbeforeunload = saida;

function saida() {
    alert('ok1')
    var sair = confirm("Deseja salvar antes de sair?");

    if (sair == true) {
        alert('ok2')
        Salva()
    } else {
        alert('ok3')
        window.close();
    }

}
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_----

//variaveis para DesenharItens() ________________

//botoes de ação para trocar o iten
const Btn_add = document.getElementById("AvançarIten")
const Btn_Return = document.getElementById("RetrocederIten")

//display de texto/imagem
const NomeItem = document.getElementById("NomeItem")
const CardIten = document.querySelector(".Item")
const image_div = document.createElement("img")

//_______________________________________________

//eventos do DesenharItens() ________________
Btn_add.addEventListener("click", () => {
    if (item_sendo_minerado + 1 > nivel - 1) {
        return
    } else {
        item_sendo_minerado += 1
        vida_do_item = Itens[item_sendo_minerado].vida
        VidaItem.value = vida_do_item
        VidaItem.max = vida_do_item
        DesenharItens()
    }
})

Btn_Return.addEventListener("click", () => {
    item_sendo_minerado -= 1
    vida_do_item = Itens[item_sendo_minerado].vida
    VidaItem.value = vida_do_item
    VidaItem.max = vida_do_item
    DesenharItens()
})
//_______________________________________________

// desenha os itens na tela ________________
function DesenharItens() {
    // CardIten.innerHTML = "";
    image_div.remove();
    image_div.setAttribute("src", "/images/itens/" + Itens[item_sendo_minerado].nome + ".png")
    image_div.setAttribute("class", "FotoItenAtual")
    image_div.setAttribute('alt', 'Foto item');
    image_div.setAttribute('onclick', 'ClickDetectorOnImg(event)');
    Item.appendChild(image_div)
    NomeItem.innerText = Itens[item_sendo_minerado].nome
    Money.innerText = gold.toFixed(2)
    LevelDisplay.innerText = nivel
}
//_______________________________________________

// Minerando ____________________________________

const FotoItenAtual = document.getElementsByClassName("FotoItenAtual")

function ClickDetectorOnImg(e) {
    vida_do_item -= dano_picareta * DanoMult
    gold += valor_money_picareta * Itens[item_sendo_minerado].xp_gain * goldUpMult
    VidaItem.value -= dano_picareta * DanoMult
    if (vida_do_item <= 0) {
        vida_do_item = Itens[item_sendo_minerado].vida
        gold += Itens[item_sendo_minerado].vida / 2
        xp += Itens[item_sendo_minerado].xp_gain * xpUpMult
        VidaItem.value = vida_do_item
        AddNivel()
    }
    Money.innerText = gold.toFixed(2)


    const x = e.clientX;
    const y = e.clientY - 60;
    const valorVariavel = valor_money_picareta * Itens[item_sendo_minerado].xp_gain * goldUpMult; // Implemente sua lógica de cálculo aqui
    const danoVariavel = dano_picareta * DanoMult; // Implemente sua lógica de cálculo aqui
    criarMoneyText(x, y, valorVariavel, danoVariavel);
}

let nextId = 1; // Variável para gerar IDs únicos
let lastClickTime = 0; // Variável para controlar o último tempo de clique
const clickInterval = 35; // Intervalo mínimo entre cliques em milissegundos

function criarMoneyText(x, y, valor, dano) {
    const currentTime = new Date().getTime();

    // Verifica se o tempo desde o último clique é maior que o intervalo mínimo
    if (currentTime - lastClickTime < clickInterval) {
        return; // Impede a criação de novas divs se o intervalo mínimo não foi atingido
    }

    lastClickTime = currentTime; // Atualiza o tempo do último clique

    const currentId = nextId++; // Gera um novo ID e incrementa o contador
    const moneyTextId = `money-text-${currentId}`;

    let moneyText = document.getElementById(moneyTextId);

    if (!moneyText) {
        moneyText = document.createElement('div');
        moneyText.id = moneyTextId;
        moneyText.classList.add('money-text');
        moneyText.style.left = x + 'px';
        moneyText.style.top = y + 'px';
        document.body.appendChild(moneyText);
    }

    moneyText.innerHTML = `
        <div class="popup">
            <span><i class="fa-solid fa-dollar-sign"></i>${valor}</span>
            <span><img src="/images/picareta/picareta.png" alt="pk" class="placeholderquebra">${dano}</span>
        </div>
    `;

    let yOffset = 0;
    const totalDuration = 2000; // Duração total em milissegundos
    const intervalDuration = 30; // Intervalo em milissegundos

    let steps = totalDuration / intervalDuration;

    const interval = setInterval(() => {
        moneyText.style.top = y - yOffset + 'px';
        moneyText.style.opacity = 1 - yOffset / 50;
        yOffset += 2;

        if (--steps <= 0) {
            clearInterval(interval);
            moneyText.style.opacity = 0;

            setTimeout(() => {
                const elementToRemove = document.getElementById(moneyTextId);
                if (elementToRemove && elementToRemove.parentNode) {
                    elementToRemove.parentNode.removeChild(elementToRemove);
                }
            }, 1000);
        }
    }, intervalDuration);
}


//_______________________________________________

// Avançando nivel _______________________________

function AddNivel() {
    if (xp >= Itens[nivel - 1].vida * 2.5) {
        nivel += 1
        xp = 0
        LevelDisplay.innerText = nivel
    }
}

//_______________________________________________

//{_{_{_{_{_{_{_{_{_{_{_--------salvando e carregando--------}_}_}_}_}_}_}_}_}_}_}

function Salva() {

    localStorage.setItem("gold", gold);
    localStorage.setItem("Salvo", "sim");
    localStorage.setItem("Salvo_Time", Date());
    localStorage.setItem("nivel", nivel);
    localStorage.setItem("xp", xp);
    localStorage.setItem("DanoMult", DanoMult);
    localStorage.setItem("goldUpMult", goldUpMult);
    localStorage.setItem("xpUpMult", xpUpMult);
    localStorage.setItem("dano_picareta", dano_picareta);
    localStorage.setItem("valor_money_picareta", valor_money_picareta);
    localStorage.setItem("Mineradores", JSON.stringify(Mineradores));
    localStorage.setItem("Salvamento_AUTO", SalvamentoAutomatico);

}

function Carrega() {
    JogoSalvoCarregado = true
    const Gl = localStorage.getItem("gold");
    const Nl = localStorage.getItem("nivel");
    const Xl = localStorage.getItem("xp");
    const DMl = localStorage.getItem("DanoMult");
    const GUMl = localStorage.getItem("goldUpMult");
    const XUMl = localStorage.getItem("xpUpMult");
    const DPl = localStorage.getItem("dano_picareta");
    const VMPl = localStorage.getItem("valor_money_picareta");
    var mineradoresRecuperados = JSON.parse(localStorage.getItem('Mineradores'));

    gold = parseInt(Gl)
    nivel = parseInt(Nl)
    xp = parseInt(Xl)
    DanoMult = parseInt(DMl)
    goldUpMult = parseInt(GUMl)
    xpUpMult = parseInt(XUMl)
    dano_picareta = parseInt(DPl)
    valor_money_picareta = parseInt(VMPl)
    Mineradores = mineradoresRecuperados

    item_sendo_minerado = nivel - 1
    vida_do_item = Itens[item_sendo_minerado].vida
    VidaItem.value = vida_do_item
    VidaItem.max = vida_do_item
    DesenharItens()

    Money.innerText = gold
    LevelDisplay.innerText = nivel

    Title.innerText = (`${gold} Cliker Game`)
    MostraMiners()
    GotoLoja()

}

function Deletar() {
    localStorage.clear()
    window.location.reload()
}

//{_{_{_{_{_{_{_{_{_{_{_--------salvando e carregando--------}_}_}_}_}_}_}_}_}_}_}


let s = 0

// Atualiza todos os valores ________________________
function Redraw() {
    Title.innerText = (`${gold.toFixed(2)} Cliker Game`)
    MostraMiners()

    if (Mineradores[0].qt_compradas > 0) {
        vida_do_item -= Mineradores[0].dano_segundo * Mineradores[0].qt_compradas
        gold += Mineradores[0].gold_segundo * Mineradores[0].qt_compradas
        VidaItem.value -= Mineradores[0].dano_segundo * Mineradores[0].qt_compradas
        if (vida_do_item <= 0) {
            vida_do_item = Itens[item_sendo_minerado].vida
            gold += Itens[item_sendo_minerado].vida / 2
            xp += Itens[item_sendo_minerado].xp_gain * xpUpMult
            VidaItem.value = vida_do_item
            AddNivel()
        }
        Money.innerText = gold.toFixed(2)
    }

    if (Mineradores[1].qt_compradas > 0) {
        vida_do_item -= Mineradores[1].dano_segundo * Mineradores[1].qt_compradas
        gold += Mineradores[1].gold_segundo * Mineradores[1].qt_compradas
        VidaItem.value -= Mineradores[1].dano_segundo * Mineradores[1].qt_compradas
        if (vida_do_item <= 0) {
            vida_do_item = Itens[item_sendo_minerado].vida
            gold += Itens[item_sendo_minerado].vida / 2
            xp += Itens[item_sendo_minerado].xp_gain * xpUpMult
            VidaItem.value = vida_do_item
            AddNivel()
        }
        Money.innerText = gold.toFixed(2)
    }

    if (Mineradores[2].qt_compradas > 0) {
        vida_do_item -= Mineradores[2].dano_segundo * Mineradores[2].qt_compradas
        gold += Mineradores[2].gold_segundo * Mineradores[2].qt_compradas
        VidaItem.value -= Mineradores[2].dano_segundo * Mineradores[2].qt_compradas
        if (vida_do_item <= 0) {
            vida_do_item = Itens[item_sendo_minerado].vida
            gold += Itens[item_sendo_minerado].vida / 2
            xp += Itens[item_sendo_minerado].xp_gain * xpUpMult
            VidaItem.value = vida_do_item
            AddNivel()
        }
        Money.innerText = gold.toFixed(2)
    }

    if (Mineradores[3].qt_compradas > 0) {
        vida_do_item -= Mineradores[3].dano_segundo * Mineradores[3].qt_compradas
        gold += Mineradores[3].gold_segundo * Mineradores[3].qt_compradas
        VidaItem.value -= Mineradores[3].dano_segundo * Mineradores[3].qt_compradas
        if (vida_do_item <= 0) {
            vida_do_item = Itens[item_sendo_minerado].vida
            gold += Itens[item_sendo_minerado].vida / 2
            xp += Itens[item_sendo_minerado].xp_gain * xpUpMult
            VidaItem.value = vida_do_item
            AddNivel()
        }
        Money.innerText = gold.toFixed(2)
    }

    if (Mineradores[4].qt_compradas > 0) {
        vida_do_item -= Mineradores[4].dano_segundo * Mineradores[4].qt_compradas
        gold += Mineradores[4].gold_segundo * Mineradores[4].qt_compradas
        VidaItem.value -= Mineradores[4].dano_segundo * Mineradores[4].qt_compradas
        if (vida_do_item <= 0) {
            vida_do_item = Itens[item_sendo_minerado].vida
            gold += Itens[item_sendo_minerado].vida / 2
            xp += Itens[item_sendo_minerado].xp_gain * xpUpMult
            VidaItem.value = vida_do_item
            AddNivel()
        }
        Money.innerText = gold.toFixed(2)
    }

    if (Mineradores[5].qt_compradas > 0) {
        vida_do_item -= Mineradores[5].dano_segundo * Mineradores[5].qt_compradas
        gold += Mineradores[5].gold_segundo * Mineradores[5].qt_compradas
        VidaItem.value -= Mineradores[5].dano_segundo * Mineradores[5].qt_compradas
        if (vida_do_item <= 0) {
            vida_do_item = Itens[item_sendo_minerado].vida
            gold += Itens[item_sendo_minerado].vida / 2
            xp += Itens[item_sendo_minerado].xp_gain * xpUpMult
            VidaItem.value = vida_do_item
            AddNivel()
        }
        Money.innerText = gold.toFixed(2)
    }

    if (Mineradores[6].qt_compradas > 0) {
        vida_do_item -= Mineradores[6].dano_segundo * Mineradores[6].qt_compradas
        gold += Mineradores[6].gold_segundo * Mineradores[6].qt_compradas
        VidaItem.value -= Mineradores[6].dano_segundo * Mineradores[6].qt_compradas
        if (vida_do_item <= 0) {
            vida_do_item = Itens[item_sendo_minerado].vida
            gold += Itens[item_sendo_minerado].vida / 2
            xp += Itens[item_sendo_minerado].xp_gain * xpUpMult
            VidaItem.value = vida_do_item
            AddNivel()
        }
        Money.innerText = gold.toFixed(2)
    }

    if (Mineradores[7].qt_compradas > 0) {
        vida_do_item -= Mineradores[7].dano_segundo * Mineradores[7].qt_compradas
        gold += Mineradores[7].gold_segundo * Mineradores[7].qt_compradas
        VidaItem.value -= Mineradores[7].dano_segundo * Mineradores[7].qt_compradas
        if (vida_do_item <= 0) {
            vida_do_item = Itens[item_sendo_minerado].vida
            gold += Itens[item_sendo_minerado].vida / 2
            xp += Itens[item_sendo_minerado].xp_gain * xpUpMult
            VidaItem.value = vida_do_item
            AddNivel()
        }
        Money.innerText = gold.toFixed(2)
    }

    if (Mineradores[8].qt_compradas > 0) {
        vida_do_item -= Mineradores[8].dano_segundo * Mineradores[8].qt_compradas
        gold += Mineradores[8].gold_segundo * Mineradores[8].qt_compradas
        VidaItem.value -= Mineradores[8].dano_segundo * Mineradores[8].qt_compradas
        if (vida_do_item <= 0) {
            vida_do_item = Itens[item_sendo_minerado].vida
            gold += Itens[item_sendo_minerado].vida / 2
            xp += Itens[item_sendo_minerado].xp_gain * xpUpMult
            VidaItem.value = vida_do_item
            AddNivel()
        }
        Money.innerText = gold.toFixed(2)
    }

    if (Mineradores[9].qt_compradas > 0) {
        vida_do_item -= Mineradores[9].dano_segundo * Mineradores[9].qt_compradas
        gold += Mineradores[9].gold_segundo * Mineradores[9].qt_compradas
        VidaItem.value -= Mineradores[9].dano_segundo * Mineradores[9].qt_compradas
        if (vida_do_item <= 0) {
            vida_do_item = Itens[item_sendo_minerado].vida
            gold += Itens[item_sendo_minerado].vida / 2
            xp += Itens[item_sendo_minerado].xp_gain * xpUpMult
            VidaItem.value = vida_do_item
            AddNivel()
        }
        Money.innerText = gold.toFixed(2)
    }

    if (Mineradores[10].qt_compradas > 0) {
        vida_do_item -= Mineradores[10].dano_segundo * Mineradores[10].qt_compradas
        gold += Mineradores[10].gold_segundo * Mineradores[10].qt_compradas
        VidaItem.value -= Mineradores[10].dano_segundo * Mineradores[10].qt_compradas
        if (vida_do_item <= 0) {
            vida_do_item = Itens[item_sendo_minerado].vida
            gold += Itens[item_sendo_minerado].vida / 2
            xp += Itens[item_sendo_minerado].xp_gain * xpUpMult
            VidaItem.value = vida_do_item
            AddNivel()
        }
        Money.innerText = gold.toFixed(2)
    }

    if (Mineradores[11].qt_compradas > 0) {
        vida_do_item -= Mineradores[11].dano_segundo * Mineradores[11].qt_compradas
        gold += Mineradores[11].gold_segundo * Mineradores[11].qt_compradas
        VidaItem.value -= Mineradores[11].dano_segundo * Mineradores[11].qt_compradas
        if (vida_do_item <= 0) {
            vida_do_item = Itens[item_sendo_minerado].vida
            gold += Itens[item_sendo_minerado].vida / 2
            xp += Itens[item_sendo_minerado].xp_gain * xpUpMult
            VidaItem.value = vida_do_item
            AddNivel()
        }
        Money.innerText = gold.toFixed(2)
    }

    if (Mineradores[12].qt_compradas > 0) {
        vida_do_item -= Mineradores[12].dano_segundo * Mineradores[12].qt_compradas
        gold += Mineradores[12].gold_segundo * Mineradores[12].qt_compradas
        VidaItem.value -= Mineradores[12].dano_segundo * Mineradores[12].qt_compradas
        if (vida_do_item <= 0) {
            vida_do_item = Itens[item_sendo_minerado].vida
            gold += Itens[item_sendo_minerado].vida / 2
            xp += Itens[item_sendo_minerado].xp_gain * xpUpMult
            VidaItem.value = vida_do_item
            AddNivel()
        }
        Money.innerText = gold.toFixed(2)
    }

    if (Mineradores[13].qt_compradas > 0) {
        vida_do_item -= Mineradores[13].dano_segundo * Mineradores[13].qt_compradas
        gold += Mineradores[13].gold_segundo * Mineradores[13].qt_compradas
        VidaItem.value -= Mineradores[13].dano_segundo * Mineradores[13].qt_compradas
        if (vida_do_item <= 0) {
            vida_do_item = Itens[item_sendo_minerado].vida
            gold += Itens[item_sendo_minerado].vida / 2
            xp += Itens[item_sendo_minerado].xp_gain * xpUpMult
            VidaItem.value = vida_do_item
            AddNivel()
        }
        Money.innerText = gold.toFixed(2)
    }

    if (Mineradores[14].qt_compradas > 0) {
        vida_do_item -= Mineradores[14].dano_segundo * Mineradores[14].qt_compradas
        gold += Mineradores[14].gold_segundo * Mineradores[14].qt_compradas
        VidaItem.value -= Mineradores[14].dano_segundo * Mineradores[14].qt_compradas
        if (vida_do_item <= 0) {
            vida_do_item = Itens[item_sendo_minerado].vida
            gold += Itens[item_sendo_minerado].vida / 2
            xp += Itens[item_sendo_minerado].xp_gain * xpUpMult
            VidaItem.value = vida_do_item
            AddNivel()
        }
        Money.innerText = gold.toFixed(2)
    }

    if (Mineradores[15].qt_compradas > 0) {
        vida_do_item -= Mineradores[15].dano_segundo * Mineradores[15].qt_compradas
        gold += Mineradores[15].gold_segundo * Mineradores[15].qt_compradas
        VidaItem.value -= Mineradores[15].dano_segundo * Mineradores[15].qt_compradas
        if (vida_do_item <= 0) {
            vida_do_item = Itens[item_sendo_minerado].vida
            gold += Itens[item_sendo_minerado].vida / 2
            xp += Itens[item_sendo_minerado].xp_gain * xpUpMult
            VidaItem.value = vida_do_item
            AddNivel()
        }
        Money.innerText = gold.toFixed(2)
    }

    if (Mineradores[16].qt_compradas > 0) {
        vida_do_item -= Mineradores[16].dano_segundo * Mineradores[16].qt_compradas
        gold += Mineradores[16].gold_segundo * Mineradores[16].qt_compradas
        VidaItem.value -= Mineradores[16].dano_segundo * Mineradores[16].qt_compradas
        if (vida_do_item <= 0) {
            vida_do_item = Itens[item_sendo_minerado].vida
            gold += Itens[item_sendo_minerado].vida / 2
            xp += Itens[item_sendo_minerado].xp_gain * xpUpMult
            VidaItem.value = vida_do_item
            AddNivel()
        }
        Money.innerText = gold.toFixed(2)
    }

    if (Mineradores[17].qt_compradas > 0) {
        vida_do_item -= Mineradores[17].dano_segundo * Mineradores[17].qt_compradas
        gold += Mineradores[17].gold_segundo * Mineradores[17].qt_compradas
        VidaItem.value -= Mineradores[17].dano_segundo * Mineradores[17].qt_compradas
        if (vida_do_item <= 0) {
            vida_do_item = Itens[item_sendo_minerado].vida
            gold += Itens[item_sendo_minerado].vida / 2
            xp += Itens[item_sendo_minerado].xp_gain * xpUpMult
            VidaItem.value = vida_do_item
            AddNivel()
        }
        Money.innerText = gold.toFixed(2)
    }

    if (Mineradores[18].qt_compradas > 0) {
        vida_do_item -= Mineradores[18].dano_segundo * Mineradores[18].qt_compradas
        gold += Mineradores[18].gold_segundo * Mineradores[18].qt_compradas
        VidaItem.value -= Mineradores[18].dano_segundo * Mineradores[18].qt_compradas
        if (vida_do_item <= 0) {
            vida_do_item = Itens[item_sendo_minerado].vida
            gold += Itens[item_sendo_minerado].vida / 2
            xp += Itens[item_sendo_minerado].xp_gain * xpUpMult
            VidaItem.value = vida_do_item
            AddNivel()
        }
        Money.innerText = gold.toFixed(2)
    }

    if (Mineradores[19].qt_compradas > 0) {
        vida_do_item -= Mineradores[19].dano_segundo * Mineradores[19].qt_compradas
        gold += Mineradores[19].gold_segundo * Mineradores[19].qt_compradas
        VidaItem.value -= Mineradores[19].dano_segundo * Mineradores[19].qt_compradas
        if (vida_do_item <= 0) {
            vida_do_item = Itens[item_sendo_minerado].vida
            gold += Itens[item_sendo_minerado].vida / 2
            xp += Itens[item_sendo_minerado].xp_gain * xpUpMult
            VidaItem.value = vida_do_item
            AddNivel()
        }
        Money.innerText = gold.toFixed(2)
    }

    if (SalvamentoAutomatico) {
        Salva()
    }

    console.log(s)
    s++

    ProgresLevel.max = Itens[nivel - 1].vida * 2.5
    ProgresLevel.value = xp

}
setInterval(Redraw, 1000);

// function S60() {
//     if (SalvamentoAutomatico) {
//             Salva()
//     }
//     console.log("tinha de Salva")
// }
// setInterval(S60, 60000)

function MostraMiners() {
    const MinersComprados = document.getElementById("MinersComprados")

    MinersComprados.innerHTML = ""

    Mineradores.map((i) => {
        if (i.qt_compradas > 0) {

            const DivMinerador = document.createElement("div")
            DivMinerador.setAttribute("id", `Minerador${i.id}DIV`)
            DivMinerador.setAttribute("class", "DivMinerador")

            const imgMine = document.createElement("img")
            imgMine.setAttribute("src", "/images/mineradores/imgExemplo.png")
            imgMine.setAttribute("alt", "img mine")
            imgMine.setAttribute("id", `Minerador${i.id}IMG`)
            imgMine.setAttribute("class", "imageMiner")

            const DivMC = document.createElement("div")
            DivMC.setAttribute("id", `Minerador${i.id}C`)
            DivMC.setAttribute("class", "DivMC")
            DivMC.innerHTML = `
            <div>${i.nome}</div>
            <div>
            <span>Dano: ${(i.dano_segundo * i.qt_compradas).toFixed(2)}</span>
            <span>Gold: ${(i.gold_segundo * i.qt_compradas).toFixed(2)}</span>
            </div>
            
            `

            const DivMR = document.createElement("div")
            DivMR.setAttribute("id", `Minerador${i.id}QT`)
            DivMR.setAttribute("class", "DivMR")
            DivMR.innerHTML = `
            <p>${i.qt_compradas}</p>
            `


            DivMinerador.append(DivMR)
            DivMinerador.append(DivMC)
            DivMinerador.append(imgMine)

            MinersComprados.append(DivMinerador)
        } else {
            return
        }
    })
}

//_______________________________________________

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_----

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_----


const loja = document.getElementById("loja")
const up = document.getElementById("up")
const st = document.getElementById("status")
const config = document.getElementById("config")

function GotoLoja() {
    const display = document.getElementById("ItensNav")
    display.innerHTML = ""

    const DivLoja = document.createElement("div")
    DivLoja.setAttribute("id", "DivLoja")
    DivLoja.setAttribute("class", "DivLoja")


    Mineradores.map((i, index) => {
        const DivMinerador = document.createElement("div")
        DivMinerador.setAttribute("id", `Minerador${i.id}DIV`)
        DivMinerador.setAttribute("class", "DivMinerador")
        DivMinerador.setAttribute("onclick", `compraMineradores(${index})`)

        const imgMine = document.createElement("img")
        imgMine.setAttribute("src", "/images/mineradores/imgExemplo.png")
        imgMine.setAttribute("alt", "img mine")
        imgMine.setAttribute("id", `Minerador${i.id}IMG`)
        imgMine.setAttribute("class", "imageMiner")

        const DivMC = document.createElement("div")
        DivMC.setAttribute("id", `Minerador${i.id}C`)
        DivMC.setAttribute("class", "DivMC")
        DivMC.innerHTML = `
        <div>${i.nome} Valor: ${i.valor.toFixed(2)}</div>
        <div>
        <span>Dano: ${i.dano_segundo}</span>
        <span>Gold: ${i.gold_segundo}</span>
        </div>
        
        `

        const DivMR = document.createElement("div")
        DivMR.setAttribute("id", `Minerador${i.id}QT Mineradores`)
        DivMR.setAttribute("class", "DivMR")
        DivMR.innerHTML = i.qt_compradas


        DivMinerador.append(DivMR)
        DivMinerador.append(DivMC)
        DivMinerador.append(imgMine)

        DivLoja.append(DivMinerador)
    })
    display.appendChild(DivLoja)
}

function compraMineradores(id) {
    if (gold < Mineradores[id].valor) {
        console.log("gold insuficiente")
    } else {
        gold -= Mineradores[id].valor
        Money.innerText = gold.toFixed(2)
        Mineradores[id].qt_compradas += 1
        Mineradores[id].valor += (Mineradores[id].valor * 1.10) - Mineradores[id].valor
        MostraMiners()
        Redraw()
        GotoLoja()
    }
}

loja.addEventListener("click", GotoLoja())

function GotoUp() {

}

up.addEventListener("click", GotoUp())


function GotoSt() {

}

st.addEventListener("click", GotoSt())

function GotoConfig() {

}

config.addEventListener("click", GotoConfig())

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_----
