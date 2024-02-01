const Itens = [
    {"id":1, "nome": "Papel", "vida": 150, "xp_gain": 10, "image": "" },
    {"id":2, "nome": "Cartolina colorida", "vida": 300, "xp_gain": 10, "image": "" },
    {"id":3, "nome": "Papelão", "vida": 450, "xp_gain": 10, "image": "" },
    {"id":4, "nome": "Tecido de algodão", "vida": 600, "xp_gain": 10, "image": "" },
    {"id":5, "nome": "Corda de sisal", "vida": 750, "xp_gain": 10, "image": "" },
    {"id":6, "nome": "Fio de lã", "vida": 900, "xp_gain": 10, "image": "" },
    {"id":7, "nome": "Madeira leve", "vida": 1050, "xp_gain": 10, "image": "" },
    {"id":8, "nome": "Galho seco", "vida": 1200, "xp_gain": 10, "image": "" },
    {"id":9, "nome": "Folha de árvore", "vida": 1350, "xp_gain": 10, "image": "" },
    {"id":10, "nome": "Cascalho", "vida": 1500, "xp_gain": 10, "image": "" },
    {"id":11, "nome": "Jornal reciclado", "vida": 1650, "xp_gain": 10, "image": "" },
    {"id":12, "nome": "Plástico leve", "vida": 1800, "xp_gain": 10, "image": "" },
    {"id":13, "nome": "Caixa de papelão ondulado", "vida": 1950, "xp_gain": 10, "image": "" },
    {"id":14, "nome": "Papel de seda", "vida": 2100, "xp_gain": 10, "image": "" },
    {"id":15, "nome": "Palitos de madeira", "vida": 2250, "xp_gain": 10, "image": "" },
    {"id":16, "nome": "Seda vegetal", "vida": 2400, "xp_gain": 10, "image": "" },
    {"id":17, "nome": "Couro sintético", "vida": 2550, "xp_gain": 10, "image": "" },
    {"id":18, "nome": "Folhas de bananeira", "vida": 2700, "xp_gain": 10, "image": "" },
    {"id":19, "nome": "Fita adesiva", "vida": 2850, "xp_gain": 10, "image": "" },
    {"id":20, "nome": "Garrafa de plástico", "vida": 3000, "xp_gain": 10, "image": "" },
    {"id":21, "nome": "Concha do mar", "vida": 3200, "xp_gain": 10, "image": "" },
    {"id":22, "nome": "Coral", "vida": 3450, "xp_gain": 10, "image": "" },
    {"id":23, "nome": "Frutas variadas", "vida": 3700, "xp_gain": 10, "image": "" },
    {"id":24, "nome": "Vegetais frescos", "vida": 3950, "xp_gain": 10, "image": "" },
    {"id":25, "nome": "Insetos comuns", "vida": 4200, "xp_gain": 10, "image": "" },
    {"id":26, "nome": "Borboletas coloridas", "vida": 4450, "xp_gain": 10, "image": "" },
    {"id":27, "nome": "Pedras preciosas", "vida": 4700, "xp_gain": 10, "image": "" },
    {"id":28, "nome": "Minerais raros", "vida": 4950, "xp_gain": 10, "image": "" },
    {"id":29, "nome": "Flores silvestres", "vida": 5200, "xp_gain": 10, "image": "" },
    {"id":30, "nome": "Musgo", "vida": 5450, "xp_gain": 10, "image": "" },
    {"id":31, "nome": "Escamas de peixe", "vida": 5700, "xp_gain": 10, "image": "" },
    {"id":32, "nome": "Pena de pássaro", "vida": 5950, "xp_gain": 10, "image": "" },
    {"id":33, "nome": "Cera de abelha", "vida": 6200, "xp_gain": 10, "image": "" },
    {"id":34, "nome": "Frutas desidratadas", "vida": 6450, "xp_gain": 10, "image": "" },
    {"id":35, "nome": "Amuleto de semente", "vida": 6700, "xp_gain": 10, "image": "" },
    {"id":36, "nome": "Tecido de bambu", "vida": 6950, "xp_gain": 10, "image": "" },
    {"id":37, "nome": "Pele de animal", "vida": 7200, "xp_gain": 10, "image": "" },
    {"id":38, "nome": "Penas de pavão", "vida": 7450, "xp_gain": 10, "image": "" },
    {"id":39, "nome": "Mel de abelha", "vida": 7700, "xp_gain": 10, "image": "" },
    {"id":40, "nome": "Terra rara", "vida": 7950, "xp_gain": 10, "image": "" },
    {"id":41, "nome": "Estrela pequena", "vida": 8450, "xp_gain": 10, "image": "" },
    {"id":42, "nome": "Exoplaneta distante", "vida": 8950, "xp_gain": 10, "image": "" },
    {"id":43, "nome": "Lua rochosa", "vida": 9450, "xp_gain": 10, "image": "" },
    {"id":44, "nome": "Raios cósmicos", "vida": 9950, "xp_gain": 10, "image": "" },
    {"id":45, "nome": "Partículas subatômicas", "vida": 10450, "xp_gain": 10, "image": "" },
    {"id":46, "nome": "Poeira estelar", "vida": 10950, "xp_gain": 10, "image": "" },
    {"id":47, "nome": "Micrometeoritos", "vida": 11450, "xp_gain": 10, "image": "" },
    {"id":48, "nome": "Átomos exóticos", "vida": 11950, "xp_gain": 10, "image": "" },
    {"id":49, "nome": "Gás interestelar", "vida": 12450, "xp_gain": 10, "image": "" },
    {"id":50, "nome": "Energia quântica", "vida": 12950, "xp_gain": 10, "image": "" },
    {"id":51, "nome": "Água lunar", "vida": 13450, "xp_gain": 10, "image": "" },
    {"id":52, "nome": "Atmosfera marciana", "vida": 13950, "xp_gain": 10, "image": "" },
    {"id":53, "nome": "Lágrimas de estrela", "vida": 14450, "xp_gain": 10, "image": "" },
    {"id":54, "nome": "Anomalia quântica", "vida": 14950, "xp_gain": 10, "image": "" },
    {"id":55, "nome": "Gás nobre exótico", "vida": 15450, "xp_gain": 10, "image": "" },
    {"id":56, "nome": "Areia interestelar", "vida": 15950, "xp_gain": 10, "image": "" },
    {"id":57, "nome": "Cristal de plasma", "vida": 16450, "xp_gain": 10, "image": "" },
    {"id":58, "nome": "Energia de buraco negro", "vida": 16950, "xp_gain": 10, "image": "" },
    {"id":59, "nome": "Neutrinos solares", "vida": 17450, "xp_gain": 10, "image": "" },
    {"id":60, "nome": "Magnetar pulsante", "vida": 17950, "xp_gain": 10, "image": "" },
    {"id":61, "nome": "Buraco de minhoca", "vida": 18500, "xp_gain": 10, "image": "" },
    {"id":62, "nome": "Pontos de singularidade", "vida": 19150, "xp_gain": 10, "image": "" },
    {"id":63, "nome": "Constelação famosa", "vida": 19800, "xp_gain": 10, "image": "" },
    {"id":64, "nome": "Antimatéria", "vida": 20450, "xp_gain": 10, "image": "" },
    {"id":65, "nome": "Energia escura", "vida": 21100, "xp_gain": 10, "image": "" },
    {"id":66, "nome": "Anel planetário", "vida": 21750, "xp_gain": 10, "image": "" },
    {"id":67, "nome": "Nebulosa colorida", "vida": 22400, "xp_gain": 10, "image": "" },
    {"id":68, "nome": "Planetóide errante", "vida": 23050, "xp_gain": 10, "image": "" },
    {"id":69, "nome": "Chamas solares", "vida": 23700, "xp_gain": 10, "image": "" },
    {"id":70, "nome": "Cometas brilhantes", "vida": 24350, "xp_gain": 10, "image": "" },
    {"id":71, "nome": "Vórtice de energia estelar", "vida": 25000, "xp_gain": 10, "image": "" },
    {"id":72, "nome": "Nuvem interestelar", "vida": 25650, "xp_gain": 10, "image": "" },
    {"id":73, "nome": "Estrutura de galáxia", "vida": 26300, "xp_gain": 10, "image": "" },
    {"id":74, "nome": "Compressão temporal", "vida": 26950, "xp_gain": 10, "image": "" },
    {"id":75, "nome": "Explosão de supernova", "vida": 27600, "xp_gain": 10, "image": "" },
    {"id":76, "nome": "Corda cósmica", "vida": 28250, "xp_gain": 10, "image": "" },
    {"id":77, "nome": "Filamento galáctico", "vida": 28900, "xp_gain": 10, "image": "" },
    {"id":78, "nome": "Onda gravitacional", "vida": 29550, "xp_gain": 10, "image": "" },
    {"id":79, "nome": "Ocaso de universo", "vida": 30200, "xp_gain": 10, "image": "" },
    {"id":80, "nome": "Quasar em colapso", "vida": 30850, "xp_gain": 10, "image": "" },
    {"id":81, "nome": "Universo paralelo", "vida": 31750, "xp_gain": 10, "image": "" },
    {"id":82, "nome": "Realidade alternativa", "vida": 32650, "xp_gain": 10, "image": "" },
    {"id":83, "nome": "Conceito de tempo", "vida": 33550, "xp_gain": 10, "image": "" },
    {"id":84, "nome": "Mente coletiva", "vida": 34450, "xp_gain": 10, "image": "" },
    {"id":85, "nome": "Padrões quânticos", "vida": 35350, "xp_gain": 10, "image": "" },
    {"id":86, "nome": "Além da existência", "vida": 36250, "xp_gain": 10, "image": "" },
    {"id":87, "nome": "Multiverso em expansão", "vida": 37150, "xp_gain": 10, "image": "" },
    {"id":88, "nome": "Pensamento abstrato", "vida": 38050, "xp_gain": 10, "image": "" },
    {"id":89, "nome": "Infinito e além", "vida": 38950, "xp_gain": 10, "image": "" },
    {"id":90, "nome": "Universo quântico", "vida": 39850, "xp_gain": 10, "image": "" },
    {"id":91, "nome": "Hiperespaço desgastado", "vida": 40750, "xp_gain": 10, "image": "" },
    {"id":92, "nome": "Brilho cósmico", "vida": 41650, "xp_gain": 10, "image": "" },
    {"id":93, "nome": "Fonte de matéria escura", "vida": 42550, "xp_gain": 10, "image": "" },
    {"id":94, "nome": "Fragmento de universo primordial", "vida": 43450, "xp_gain": 10, "image": "" },
    {"id":95, "nome": "Holograma quântico", "vida": 44350, "xp_gain": 10, "image": "" },
    {"id":96, "nome": "Onda cósmica", "vida": 45250, "xp_gain": 10, "image": "" },
    {"id":97, "nome": "Orbe da criação", "vida": 46150, "xp_gain": 10, "image": "" },
    {"id":98, "nome": "Recipiente do infinito", "vida": 47050, "xp_gain": 10, "image": "" },
    {"id":99, "nome": "Vazio quântico", "vida": 47950, "xp_gain": 10, "image": "" },
    {"id":100, "nome": "Chave da realidade", "vida": 48850, "xp_gain": 10, "image": "" },
    {"id":101, "nome": "Memórias Universais", "vida": 50350, "xp_gain": 10, "image": "" },
    {"id":102, "nome": "Sons da Criação", "vida": 51850, "xp_gain": 10, "image": "" },
    {"id":103, "nome": "Pulsares Eternos", "vida": 53350, "xp_gain": 10, "image": "" },
    {"id":104, "nome": "Matriz de Probabilidade", "vida": 54850, "xp_gain": 10, "image": "" },
    {"id":105, "nome": "Essência Quântica", "vida": 56350, "xp_gain": 10, "image": "" },
    {"id":106, "nome": "Anéis de Wormhole", "vida": 57850, "xp_gain": 10, "image": "" },
    {"id":107, "nome": "Constelações da Mente", "vida": 59350, "xp_gain": 10, "image": "" },
    {"id":108, "nome": "Fluxo Temporal", "vida": 60850, "xp_gain": 10, "image": "" },
    {"id":109, "nome": "Névoa da Eternidade", "vida": 62350, "xp_gain": 10, "image": "" },
    {"id":110, "nome": "Chave da Omnisciência", "vida": 63850, "xp_gain": 10, "image": "" },
]

console.log(Itens[0].nome)

//{{{{{{{{{{{{{{{{{{{{{{{{{{{ VARIAVEL GLOBAIS }}}}}}}}}}}}}}}}}}}}}}}}}}}

let gold = 0
let xp = 0
let nivel = 0

//{{{{{{{{{{{{{{{{{{{{{{{{{{{ VARIAVEL GLOBAIS }}}}}}}}}}}}}}}}}}}}}}}}}}}

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_----

//variaveis para DesenharItens() ________________

//botoes de ação para trocar o iten
const Btn_add = document.getElementById("")
const Btn_Return = document.getElementById()

// display do item


//_______________________________________________

//eventos do DesenharItens() ________________

//_______________________________________________

// desenha os itens na tela ________________
function DesenharItens() {

}
//_______________________________________________

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_----