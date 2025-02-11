const produtos = [
    {nome: "Produto 1", preco: 10.00, imagem: "/image/produto1.jpg"},
    {nome: "Produto 2", preco: 15.00, imagem: "/image/produto2.jpg"},
    {nome: "Produto 3", preco: 25.00, imagem: "/image/produto3.png"}
];

const carrinho = [];

const produtosDiv = document.getElementById("produtos");
const carrinhoLista = document.getElementById("carrinho");
const totalSpan = document.getElementById("total");

//Função para exibir os produtos na Tela
function exibirProdutos(){
    produtos.forEach(produto => {
        const produtoDiv = document.createElement("div");
        produtosDiv.classList.add("produto");
        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <button onclik="adicionarAoCarrinho('${produto.nome}', ${produto.preco})">
        `;
        produtoDiv.appendChild(produtoDiv);
    });
}

//Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nome, preco){
    carrinho.push({nome, preco});
    atualizarCarrinho();
}

//Função pra atualizar a exibição do carrinho e o total
function atualizarCarrinho(){
    carrinhoLista.innerHTML = "";
    let total = 0;
    carrinho.forEach(item =>{
        const itemLista = document.createElement("li");
        
    });
}