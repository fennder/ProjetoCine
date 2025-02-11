const produtos = [
    {nome: "Produto 1", preco: 10.00, imagem: "produto1.jpg"},
    {nome: "Produto 2", preco: 15.00, imagem: "produto2.jpg"},
    {nome: "Produto 3", preco: 25.00, imagem: "produto3.png"}
];

const produtosDiv = document.getElementById("produtos");
const carrinhoLista = document.getElementById("carrinho");
const totalSpan = document.getElementById("total");

let carrinho = [];

//Função para exibir os produtos na Tela
function exibirProdutos(){
    produtos.forEach(produto => {
        const produtoDiv = document.createElement("div");
        produtosDiv.classList.add("produto");
        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <button onclik="adicionarAoCarrinho('${produto.nome}', ${produto.preco})">Adicionar ao Carrinho</button>
        `;
        produtoDiv.appendChild(produtoDiv);
    });
}

//Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nome, preco){
    carrinho.push({nome, preco});
    atualizarCarrinho();
}

function removerDoCarrinho(index){
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

//Função pra atualizar a exibição do carrinho e o total
function atualizarCarrinho(){
    carrinhoLista.innerHTML = "";
    let total = 0;
    carrinho.forEach((item, index ) => {
        const itemLista = document.createElement("li");
        itemLista.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)}
        <button onclick="removerDoCarrinho(${index})">Remover</button>`;
        carrinhoLista.appendChild(itemLista);
        total += item.preco;
    });
    totalSpan.textContent = `Total: R$ ${total.toFixed(2)}`;
}

//Inicializa a exibição dos produtos
exibirProdutos();