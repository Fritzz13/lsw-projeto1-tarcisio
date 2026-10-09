// ===== DADOS =====
const nomeLoja = "goob foob Lanchonete";
let produtos = [
  { nome: "Pastel", categoria: "Salgado", preco: 2.00, quantidade: 5, vendidos: 17 },
  { nome: "Coxinha", categoria: "Salgado", preco: 2.00, quantidade: 3, vendidos: 21 },
  { nome: "Caldo de cana", categoria: "Bebida", preco: 3.50, quantidade: 2, vendidos: 9 },
  { nome: "Suco de laranja", categoria: "Bebida", preco: 3.00, quantidade: 6, vendidos: 11 },
  { nome: "Suco de acerola", categoria: "Bebida", preco: 3.00, quantidade: 8, vendidos: 8 },
  { nome: "Esfirra", categoria: "Salgado", preco: 2.50, quantidade: 6, vendidos: 12 }
];

// ===== FUNCOES =====

function listarProdutos(lista) {
  const limite = lista.length;
  let i;
  
  for(i = 0; i < limite; i++) {
    console.log(`${i+1}. ${lista[i].nome} | ${lista[i].categoria} | R$ ${lista[i].preco} | ${lista[i].quantidade} un. | ${lista[i].vendidos} vendidos`);
  }
}


function cadastrarProduto(lista, nome, categoria, preco, quantidade) {
  let produto = { nome: formatarNome(nome), categoria: categoria, preco: preco, quantidade: quantidade, vendidos: 0 };
  lista.push(produto);
  return lista.length;
}


function calcularValorEstoque(lista) {
  const limite = lista.length;
  let valortotal = 0;
  let i;
  
  for(i = 0; i < limite; i++) {
    valortotal += (lista[i].preco * lista[i].quantidade);
  }
  
  return valortotal;
}


function buscarProduto(lista, termo) {
  const limite = lista. length;
  let i;
  
  for(i = 0; i < limite; i++) {
    if (lista[i].nome.toLowerCase().includes(termo.toLowerCase())) { return lista[i]; }
  }
  return null;
}


function produtosEmFalta(lista, minimo) {
  const limite = lista.length;
  let produtos = [];
  let i;
  
  for(i = 0; i < limite; i++) {
    if (lista[i].quantidade < minimo) { produtos.push(lista[i]); }
  }
  
  return produtos;
}


function aplicarDesconto(lista, categoria, percentual) {
  const limite = lista.length;
  let produtosalterados = 0;
  let i;
  
  for(i = 0; i < limite; i++) {
    if (lista[i].categoria.toLowerCase() === categoria.toLowerCase()) {
      lista[i].preco -= (lista[i].preco * percentual / 100.0);
      produtosalterados++;
    }
  }
  
  return produtosalterados;
}


function registrarVenda(lista, nome, quantidade) {
  let produto = buscarProduto(lista, nome);
  if (produto === null || produto.quantidade < quantidade) { return false; }
  else /* produto existe e tem estoque suficiente */ {
    lista.find(function (item) { return item.nome === produto.nome } ).quantidade -= quantidade;
    lista.find(function (item) { return item.nome === produto.nome } ).vendidos += quantidade;
    return true;
  }
}


function formatarNome(texto) {
  texto = texto.trim();
  let primeiraletra = texto.slice(0, 1);
  let resto = texto.slice(1, texto.length);
  primeiraletra = primeiraletra.toUpperCase();
  resto = resto.toLowerCase();
  texto = `${primeiraletra}${resto}`;
  return texto;
}


function converterParaJSON(lista) {
  let jasao = JSON.stringify(lista);
  if (typeof(jasao) === typeof("Claramente um texto")) { return jasao; }
}


function lerJSON(texto) {
  return JSON.parse(texto);
}


function gerarRelatorio(nome, lista) {
  const estoquebaixo = produtosEmFalta(lista, 5);
  const qtdestoquebaixo = estoquebaixo.length;
  let i;
  
  let relatorio = `===== RELATÓRIO: ${nome.toUpperCase()} =====\n`;
  relatorio = `${relatorio}Produtos cadastrados: ${lista.length}\n`;
  relatorio = `${relatorio}Valor total em estoque: R$ ${calcularValorEstoque(lista)}\n`;
  relatorio = `${relatorio}Produtos com estoque baixo: ${estoquebaixo.length}`;
  for(i = 0; i < qtdestoquebaixo; i++) {
    relatorio = `${relatorio}\n- ${estoquebaixo[i].nome} (${estoquebaixo[i].quantidade} un.)`;
  }
  console.log(`${relatorio}`);
}

// ===== PROGRAMA PRINCIPAL =====

console.log("\n --- Tarefa 2: Listar os produtos ---");
listarProdutos(produtos);

console.log("\n --- Tarefa 3: Cadastrar um produto ---");
let qtdprodutos = cadastrarProduto(produtos, "suco de abacaxi", "Bebida", 4.00, 3);
console.log(`Produto cadastrado! Agora a loja tem ${qtdprodutos} produtos.`);

console.log("\n --- Tarefa 4: Valor do estoque ---");
let valorestoque = calcularValorEstoque(produtos);
console.log(`Valor do estoque: R$ ${valorestoque}`);

console.log("\n --- Tarefa 5: Buscar um produto ---");
let produto = buscarProduto(produtos, "CALDO DE CANA");
if (produto !== null) { console.log(`Encontrado: ${produto.nome} - R$ ${produto.preco}`); }
produto = buscarProduto(produtos, "Salada de fruta");
if (produto === null) { console.log("Produto não encontrado."); }

console.log("\n --- Tarefa 6: Produtos em falta ---");
let produtosfalta = produtosEmFalta(produtos, 5);
console.log(`Produtos com menos de 5 unidades: ${produtosfalta.length}`);

console.log("\n --- Tarefa 7: Aplicar desconto ---");
let produtosdesconto = aplicarDesconto(produtos, "Bebida", 10);
console.log(`${produtosdesconto} produtos receberam desconto.`);
console.log(`Novo preço do caldo de cana: R$ ${buscarProduto(produtos, "CALDO DE CANA").preco}`);

console.log("\n --- Tarefa 8: Registrar uma venda ---");
produto = buscarProduto(produtos, "coxinha");
let venda = registrarVenda(produtos, produto.nome, 3);
if (venda === true) { console.log(`Venda realizada! ${produto.nome}: ${produto.quantidade} un. em estoque, ${produto.vendidos} vendidos.`); }
venda = registrarVenda(produtos, produto.nome, 3);
if (venda === false) { console.log("Venda não realizada: estoque insuficiente ou produto inexistente."); }

console.log("\n --- Tarefa 9: Padronizar nomes ---");
console.log(`${formatarNome("   bORRACHA branca  ")}`)

console.log("\n --- Tarefa 10: Salvar e recuperar em JSON ---");
produtos = converterParaJSON(produtos);
console.log(`${typeof(produtos)}`);
produtos = lerJSON(produtos);
console.log(`Itens recuperados: ${produtos.length} | Primeiro: ${produtos[0].nome}`);

console.log("\n --- Tarefa 11: Relatório final ---");
gerarRelatorio(nomeLoja, produtos);
