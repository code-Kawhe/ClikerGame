const Itens = [
    { "id": 1, "nome": "Papel", "vida": 150, "xp_gain": 1, "image": "" },
    { "id": 2, "nome": "Cartolina", "vida": 300, "xp_gain": 8, "image": "" },
    { "id": 3, "nome": "Papelão", "vida": 450, "xp_gain": 15, "image": "" },
    { "id": 4, "nome": "Tecido de algodão", "vida": 600, "xp_gain": 22, "image": "" },
    { "id": 5, "nome": "Corda de sisal", "vida": 750, "xp_gain": 29, "image": "" },
    { "id": 6, "nome": "Fio de lã", "vida": 900, "xp_gain": 36, "image": "" },
    { "id": 7, "nome": "Madeira leve", "vida": 1050, "xp_gain": 43, "image": "" },
    { "id": 8, "nome": "Galho seco", "vida": 1200, "xp_gain": 50, "image": "" },
    { "id": 9, "nome": "Folha de árvore", "vida": 1350, "xp_gain": 57, "image": "" },
    { "id": 10, "nome": "Cascalho", "vida": 1500, "xp_gain": 64, "image": "" },
    { "id": 11, "nome": "Jornal reciclado", "vida": 1650, "xp_gain": 71, "image": "" },
    { "id": 12, "nome": "Plástico leve", "vida": 1800, "xp_gain": 78, "image": "" },
    { "id": 13, "nome": "Caixa de papelão", "vida": 1950, "xp_gain": 85, "image": "" },
    { "id": 14, "nome": "Papel de seda", "vida": 2100, "xp_gain": 92, "image": "" },
    { "id": 15, "nome": "Palitos de madeira", "vida": 2250, "xp_gain": 99, "image": "" },
    { "id": 16, "nome": "Seda vegetal", "vida": 2400, "xp_gain": 106, "image": "" },
    { "id": 17, "nome": "Couro sintético", "vida": 2550, "xp_gain": 113, "image": "" },
    { "id": 18, "nome": "Folhas de banana", "vida": 2700, "xp_gain": 120, "image": "" },
    { "id": 19, "nome": "Fita adesiva", "vida": 2850, "xp_gain": 127, "image": "" },
    { "id": 20, "nome": "Garrafa de plástico", "vida": 3000, "xp_gain": 134, "image": "" },
    { "id": 21, "nome": "Concha do mar", "vida": 3200, "xp_gain": 141, "image": "" },
    { "id": 22, "nome": "Coral", "vida": 3450, "xp_gain": 148, "image": "" },
    { "id": 23, "nome": "Frutas variadas", "vida": 3700, "xp_gain": 155, "image": "" },
    { "id": 24, "nome": "Vegetais frescos", "vida": 3950, "xp_gain": 162, "image": "" },
    { "id": 25, "nome": "Insetos comuns", "vida": 4200, "xp_gain": 169, "image": "" },
    { "id": 26, "nome": "Borboletas", "vida": 4450, "xp_gain": 176, "image": "" },
    { "id": 27, "nome": "Pedras preciosas", "vida": 4700, "xp_gain": 183, "image": "" },
    { "id": 28, "nome": "Minerais raros", "vida": 4950, "xp_gain": 190, "image": "" },
    { "id": 29, "nome": "Flores silvestres", "vida": 5200, "xp_gain": 197, "image": "" },
    { "id": 30, "nome": "Musgo", "vida": 5450, "xp_gain": 204, "image": "" },
    { "id": 31, "nome": "Escamas de peixe", "vida": 5700, "xp_gain": 211, "image": "" },
    { "id": 32, "nome": "Pena de pássaro", "vida": 5950, "xp_gain": 218, "image": "" },
    { "id": 33, "nome": "Cera de abelha", "vida": 6200, "xp_gain": 225, "image": "" },
    { "id": 34, "nome": "Frutas desidratadas", "vida": 6450, "xp_gain": 232, "image": "" },
    { "id": 35, "nome": "Amuleto de semente", "vida": 6700, "xp_gain": 239, "image": "" },
    { "id": 36, "nome": "Tecido de bambu", "vida": 6950, "xp_gain": 246, "image": "" },
    { "id": 37, "nome": "Pele de animal", "vida": 7200, "xp_gain": 253, "image": "" },
    { "id": 38, "nome": "Penas de pavão", "vida": 7450, "xp_gain": 260, "image": "" },
    { "id": 39, "nome": "Mel de abelha", "vida": 7700, "xp_gain": 267, "image": "" },
    { "id": 40, "nome": "Terra rara", "vida": 7950, "xp_gain": 274, "image": "" },
    { "id": 41, "nome": "Estrela pequena", "vida": 8450, "xp_gain": 281, "image": "" },
    { "id": 42, "nome": "Exoplaneta distante", "vida": 8950, "xp_gain": 288, "image": "" },
    { "id": 43, "nome": "Lua rochosa", "vida": 9450, "xp_gain": 295, "image": "" },
    { "id": 44, "nome": "Raios cósmicos", "vida": 9950, "xp_gain": 302, "image": "" },
    { "id": 45, "nome": "Partículas subatômicas", "vida": 10450, "xp_gain": 309, "image": "" },
    { "id": 46, "nome": "Poeira estelar", "vida": 10950, "xp_gain": 316, "image": "" },
    { "id": 47, "nome": "Micrometeoritos", "vida": 11450, "xp_gain": 323, "image": "" },
    { "id": 48, "nome": "Átomos exóticos", "vida": 11950, "xp_gain": 330, "image": "" },
    { "id": 49, "nome": "Gás interestelar", "vida": 12450, "xp_gain": 337, "image": "" },
    { "id": 50, "nome": "Energia quântica", "vida": 12950, "xp_gain": 344, "image": "" },
    { "id": 51, "nome": "Água lunar", "vida": 13450, "xp_gain": 351, "image": "" },
    { "id": 52, "nome": "Atmosfera marciana", "vida": 13950, "xp_gain": 358, "image": "" },
    { "id": 53, "nome": "Lágrimas de estrela", "vida": 14450, "xp_gain": 365, "image": "" },
    { "id": 54, "nome": "Anomalia quântica", "vida": 14950, "xp_gain": 372, "image": "" },
    { "id": 55, "nome": "Gás nobre exótico", "vida": 15450, "xp_gain": 379, "image": "" },
    { "id": 56, "nome": "Areia interestelar", "vida": 15950, "xp_gain": 386, "image": "" },
    { "id": 57, "nome": "Cristal de plasma", "vida": 16450, "xp_gain": 393, "image": "" },
    { "id": 58, "nome": "Energia de buraco negro", "vida": 16950, "xp_gain": 400, "image": "" },
    { "id": 59, "nome": "Neutrinos solares", "vida": 17450, "xp_gain": 407, "image": "" },
    { "id": 60, "nome": "Magnetar pulsante", "vida": 17950, "xp_gain": 414, "image": "" },
    { "id": 61, "nome": "Buraco de minhoca", "vida": 18500, "xp_gain": 421, "image": "" },
    { "id": 62, "nome": "Pontos de singularidade", "vida": 19150, "xp_gain": 428, "image": "" },
    { "id": 63, "nome": "Constelação famosa", "vida": 19800, "xp_gain": 435, "image": "" },
    { "id": 64, "nome": "Antimatéria", "vida": 20450, "xp_gain": 442, "image": "" },
    { "id": 65, "nome": "Energia escura", "vida": 21100, "xp_gain": 449, "image": "" },
    { "id": 66, "nome": "Anel planetário", "vida": 21750, "xp_gain": 456, "image": "" },
    { "id": 67, "nome": "Nebulosa colorida", "vida": 22400, "xp_gain": 463, "image": "" },
    { "id": 68, "nome": "Planetóide errante", "vida": 23050, "xp_gain": 470, "image": "" },
    { "id": 69, "nome": "Chamas solares", "vida": 23700, "xp_gain": 477, "image": "" },
    { "id": 70, "nome": "Cometas brilhantes", "vida": 24350, "xp_gain": 484, "image": "" },
    { "id": 71, "nome": "Vórtice de energia estelar", "vida": 25000, "xp_gain": 491, "image": "" },
    { "id": 72, "nome": "Nuvem interestelar", "vida": 25650, "xp_gain": 498, "image": "" },
    { "id": 73, "nome": "Estrutura de galáxia", "vida": 26300, "xp_gain": 505, "image": "" },
    { "id": 74, "nome": "Compressão temporal", "vida": 26950, "xp_gain": 512, "image": "" },
    { "id": 75, "nome": "Explosão de supernova", "vida": 27600, "xp_gain": 519, "image": "" },
    { "id": 76, "nome": "Corda cósmica", "vida": 28250, "xp_gain": 526, "image": "" },
    { "id": 77, "nome": "Filamento galáctico", "vida": 28900, "xp_gain": 533, "image": "" },
    { "id": 78, "nome": "Onda gravitacional", "vida": 29550, "xp_gain": 540, "image": "" },
    { "id": 79, "nome": "Ocaso de universo", "vida": 30200, "xp_gain": 547, "image": "" },
    { "id": 80, "nome": "Quasar em colapso", "vida": 30850, "xp_gain": 554, "image": "" },
    { "id": 81, "nome": "Universo paralelo", "vida": 31750, "xp_gain": 561, "image": "" },
    { "id": 82, "nome": "Realidade alternativa", "vida": 32650, "xp_gain": 568, "image": "" },
    { "id": 83, "nome": "Conceito de tempo", "vida": 33550, "xp_gain": 575, "image": "" },
    { "id": 84, "nome": "Mente coletiva", "vida": 34450, "xp_gain": 582, "image": "" },
    { "id": 85, "nome": "Padrões quânticos", "vida": 35350, "xp_gain": 589, "image": "" },
    { "id": 86, "nome": "Além da existência", "vida": 36250, "xp_gain": 596, "image": "" },
    { "id": 87, "nome": "Multiverso em expansão", "vida": 37150, "xp_gain": 603, "image": "" },
    { "id": 88, "nome": "Pensamento abstrato", "vida": 38050, "xp_gain": 610, "image": "" },
    { "id": 89, "nome": "Infinito e além", "vida": 38950, "xp_gain": 617, "image": "" },
    { "id": 90, "nome": "Universo quântico", "vida": 39850, "xp_gain": 624, "image": "" },
    { "id": 91, "nome": "Hiperespaço desgastado", "vida": 40750, "xp_gain": 631, "image": "" },
    { "id": 92, "nome": "Brilho cósmico", "vida": 41650, "xp_gain": 638, "image": "" },
    { "id": 93, "nome": "Fonte de matéria escura", "vida": 42550, "xp_gain": 645, "image": "" },
    { "id": 94, "nome": "Fragmento de universo primordial", "vida": 43450, "xp_gain": 652, "image": "" },
    { "id": 95, "nome": "Holograma quântico", "vida": 44350, "xp_gain": 659, "image": "" },
    { "id": 96, "nome": "Onda cósmica", "vida": 45250, "xp_gain": 666, "image": "" },
    { "id": 97, "nome": "Orbe da criação", "vida": 46150, "xp_gain": 673, "image": "" },
    { "id": 98, "nome": "Recipiente do infinito", "vida": 47050, "xp_gain": 680, "image": "" },
    { "id": 99, "nome": "Vazio quântico", "vida": 47950, "xp_gain": 687, "image": "" },
    { "id": 100, "nome": "Chave da realidade", "vida": 48850, "xp_gain": 694, "image": "" },
    { "id": 101, "nome": "Memórias Universais", "vida": 50350, "xp_gain": 701, "image": "" },
    { "id": 102, "nome": "Sons da Criação", "vida": 51850, "xp_gain": 708, "image": "" },
    { "id": 103, "nome": "Pulsares Eternos", "vida": 53350, "xp_gain": 715, "image": "" },
    { "id": 104, "nome": "Matriz de Probabilidade", "vida": 54850, "xp_gain": 722, "image": "" },
    { "id": 105, "nome": "Essência Quântica", "vida": 56350, "xp_gain": 729, "image": "" },
    { "id": 106, "nome": "Anéis de Tempo", "vida": 57850, "xp_gain": 736, "image": "" },
    { "id": 107, "nome": "Vórtice Dimensional", "vida": 59350, "xp_gain": 743, "image": "" },
    { "id": 108, "nome": "Núcleo do Caos", "vida": 60850, "xp_gain": 750, "image": "" },
    { "id": 109, "nome": "Centelha Primordial", "vida": 62350, "xp_gain": 757, "image": "" },
    { "id": 110, "nome": "Alma do Cosmos", "vida": 63850, "xp_gain": 764, "image": "" }
];



//{{{{{{{{{{{{{{{{{{{{{{{{{{{ VARIAVEL GLOBAIS }}}}}}}}}}}}}}}}}}}}}}}}}}}

let gold = 0
let nivel = 2
let xp = 0

let goldUpMult = 1
let xpUpMult = 1

let item_sendo_minerado = 0

let vida_do_item = Itens[item_sendo_minerado].vida

let dano_picareta = 1
let valor_money_picareta = 1

const LevelDisplay = document.getElementById("Level")
const Money = document.getElementById("Money")

//{{{{{{{{{{{{{{{{{{{{{{{{{{{ VARIAVEL GLOBAIS }}}}}}}}}}}}}}}}}}}}}}}}}}}

// Faz sempre que o jogo abre____________________________________________

window.addEventListener("DOMContentLoaded", () => {
    item_sendo_minerado = nivel-1
    DesenharItens()
})

// Faz sempre que o jogo abre____________________________________________

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_----

//variaveis para DesenharItens() ________________

//botoes de ação para trocar o iten
const Btn_add = document.getElementById("AvançarIten")
const Btn_Return = document.getElementById("RetrocederIten")

//display de texto/imagem
const NomeItem = document.getElementById("NomeItem")
const CardIten = document.querySelector(".CardItem")
const image_div = document.createElement("img")

//_______________________________________________

//eventos do DesenharItens() ________________
Btn_add.addEventListener("click", () => {
    if (item_sendo_minerado + 1 > nivel - 1) {
        return
    } else {
        item_sendo_minerado += 1
        vida_do_item = Itens[item_sendo_minerado].vida
        DesenharItens()
    }
})

Btn_Return.addEventListener("click", () => {
    item_sendo_minerado -= 1
    vida_do_item = Itens[item_sendo_minerado].vida
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
    CardItem.appendChild(image_div)
    NomeItem.innerText = Itens[item_sendo_minerado].nome
    Money.innerText = gold
    LevelDisplay.innerText = nivel
}
//_______________________________________________

// Minerando ____________________________________

const FotoItenAtual = document.getElementsByClassName("FotoItenAtual")
const VidaItem = document.getElementById("VidaItem")

console.log(VidaItem)

function ClickDetectorOnImg(e) {
    vida_do_item -= dano_picareta
    gold += valor_money_picareta * Itens[item_sendo_minerado].xp_gain * goldUpMult
    if (vida_do_item <= 0) {
        vida_do_item = Itens[item_sendo_minerado].vida
        gold += Itens[item_sendo_minerado].vida / 2
        xp += Itens[item_sendo_minerado].xp_gain * xpUpMult
        AddNivel()
    }
    Money.innerText = gold
    console.log("VIDA: " + vida_do_item)
    console.log("XP: " + xp)
    console.log("NIVEL: " + nivel)
    
    const x = e.clientX;
    const y = e.clientY - 50;
    const valorVariavel = valor_money_picareta * Itens[item_sendo_minerado].xp_gain; // Implemente sua lógica de cálculo aqui
    criarMoneyText(x, y, valorVariavel);
}

let nextId = 1; // Variável para gerar IDs únicos

function criarMoneyText(x, y, valor) {
    const moneyText = document.createElement('div');
    const currentId = nextId++; // Gera um novo ID e incrementa o contador
    moneyText.id = `money-text-${currentId}`;
    moneyText.classList.add('money-text');
    moneyText.style.left = x + 'px';
    moneyText.style.top = y + 'px';
    moneyText.innerText = `+${valor}`;
    document.body.appendChild(moneyText);

    let yOffset = 0;
    const totalDuration = 2000; // Duração total em milissegundos
    const intervalDuration = 30; // Intervalo em milissegundos

    let steps = totalDuration / intervalDuration; // Alteração para 'let'

    const interval = setInterval(() => {
        moneyText.style.top = y - yOffset + 'px';
        moneyText.style.opacity = 1 - yOffset / 50; // Ajuste conforme necessário
        yOffset += 2; // Ajuste conforme necessário

        if (--steps <= 0) {
            clearInterval(interval);
            moneyText.style.opacity = 0;

            // Remove a div após 1 segundo (1000 milissegundos) usando o ID
            setTimeout(() => {
                const elementToRemove = document.getElementById(`money-text-${currentId}`);
                // Verifica se o elemento ainda existe antes de tentar removê-lo
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

// Atualiza todos os valores ________________________
function Redraw() {
    DesenharItens()
    GotoUp()
}
setInterval(Redraw(), 1000)
//_______________________________________________

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_----

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_----

const loja = document.getElementById("loja")
const up = document.getElementById("up")
const st = document.getElementById("status")
const config = document.getElementById("config")

function GotoLoja() {

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

console.log("VIDA: " + vida_do_item)
console.log("XP: " + xp)
console.log("NIVEL: " + nivel)