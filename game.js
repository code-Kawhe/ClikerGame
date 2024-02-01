const Itens =
{
    "fases": [
        {
            "numero": 1,
            "nome": "Materiais Iniciais",
            "itens": [
                { "nome": "Papel comum", "nivel": 1, "valor": 5, "image": "/images/itens/F-1/PAPEL.png" },
                { "nome": "Cartolina", "nivel": 1, "valor": 7, "image": "/images/itens/F-1/CARTOLINA.png" },
                { "nome": "Papelão", "nivel": 1, "valor": 7, "image": "" },
                { "nome": "Tecido de algodão", "nivel": 1, "valor": 7, "image": "" },
                { "nome": "Corda de sisal", "nivel": 1, "valor": 7, "image": "" },
                { "nome": "Fio de lã", "nivel": 1, "valor": 7, "image": "" },
                { "nome": "Madeira leve", "nivel": 1, "valor": 7, "image": "" },
                { "nome": "Galho seco", "nivel": 1, "valor": 7, "image": "" },
                { "nome": "Folha de árvore", "nivel": 1, "valor": 7, "image": "" },
                { "nome": "Cascalho", "nivel": 1, "valor": 7, "image": "" },
                { "nome": "Jornal reciclado", "nivel": 1, "valor": 7, "image": "" },
                { "nome": "Plástico leve", "nivel": 1, "valor": 7, "image": "" },
                { "nome": "Caixa de papelão ondulado", "nivel": 1, "valor": 7, "image": "" },
                { "nome": "Papel de seda", "nivel": 1, "valor": 7, "image": "" },
                { "nome": "Palitos de madeira", "nivel": 1, "valor": 7, "image": "" },
                { "nome": "Seda vegetal", "nivel": 1, "valor": 7, "image": "" },
                { "nome": "Couro sintético", "nivel": 1, "valor": 7, "image": "" },
                { "nome": "Folhas de bananeira", "nivel": 1, "valor": 7, "image": "" },
                { "nome": "Fita adesiva", "nivel": 1, "valor": 7, "image": "" },
                { "nome": "Garrafa de plástico", "nivel": 1, "valor": 7, "image": "" }
            ]
        },
        {
            "numero": 2,
            "nome": "Materiais Naturais",
            "itens": [
                { "nome": "Concha do mar", "nivel": 2, "valor": 15, "image": "" },
                { "nome": "Coral", "nivel": 2, "valor": 20, "image": "" }
            ]
        },
        {
            "numero": 3,
            "nome": "Materiais Cósmicos",
            "itens": [
                { "nome": "Estrela pequena", "nivel": 3, "valor": 50, "image": "" },
                { "nome": "Exoplaneta distante", "nivel": 3, "valor": 60, "image": "" }
            ]
        },
        {
            "numero": 4,
            "nome": "Escala Cósmica",
            "itens": [
                { "nome": "Buraco de minhoca", "nivel": 4, "valor": 150, "image": "" },
                { "nome": "Pontos de singularidade", "nivel": 4, "valor": 180, "image": "" }
            ]
        },
        {
            "numero": 5,
            "nome": "Escala Épica",
            "itens": [
                { "nome": "Universo paralelo", "nivel": 5, "valor": 500, "image": "" },
                { "nome": "Realidade alternativa", "nivel": 5, "valor": 600, "image": "" }
            ]
        },
        {
            "numero": 6,
            "nome": "Ascensão Infinita",
            "itens": [
                { "nome": "Memórias Universais", "nivel": 6, "valor": 1000, "image": "" },
                { "nome": "Sons da Criação", "nivel": 6, "valor": 1200, "image": "" }
            ]
        }
    ]
}

console.log(Itens.fases[0])

let itenAtual = 0
let faseAtual = 1
let itenMaximo = 5


const AddBtn = document.getElementById("AvançarIten")
const RemoveBtn = document.getElementById("RetrocederIten")


AddBtn.addEventListener("click", () => {
    if (itenAtual + 1 > !itenMaximo) {
        itenAtual = + 1
        MostraIten()
    } else {
        console.error("iten nao liberado")
    }
})

RemoveBtn.addEventListener("click", () => {
    if (itenAtual - 1 < !0) {
        itenAtual = - 1
        MostraIten()
    } else {
        return
    }
})

function MostraIten() {

    const NomeItem = document.getElementById("NomeItem")
    const CardIten = document.querySelector(".CardItem")
    const img = document.createElement("img")

    CardIten.innerHTML = "";

    img.setAttribute("src", "/images/itens/F-" + faseAtual + "/" + Itens.fases[0].itens[itenAtual].nome + ".png")
    img.setAttribute("class", "FotoItenAtual")
    img.setAttribute('alt', 'Foto item');

    CardIten.appendChild(img)

    NomeItem.innerText = Itens.fases[faseAtual - 1].itens[itenAtual].nome
}
MostraIten()