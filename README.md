# Minha Loja - goob foob Lanchonete

Aluno(a): Tarcísio de Freitas Albuquerque - 202612010030

Como executar: node loja.js

Funcionalidades:
listarProdutos(lista):
imprime todos os elementos da lista informada
(no programa, usada pra imprimir todos os produtos do array `produtos`)

cadastrarProduto(lista, nome, categoria, preco, quantidade):
adiciona um objeto com os atributos informado (e um atributo `vendidos` iniciado em 0) na lista informada e retorna o tamanho da lista após a adição do objeto
(no programa, adiciona um produto ao array `produtos` e retorna a quantidade total de produtos apos a adicao)

calcularValorEstoque(lista):
retorna o somatorio de (`preco` * `quantidade`) pra todos os objetos da lista informada
(no programa, retorna o valor total atual na loja)

buscarProduto(lista, termo):
retorna uma copia do primeiro objeto da lista informada cujo nome contem o termo informado (nao e case-sensitive). caso nao encontre, retorna `null`
(no programa, retorna o primeiro produto do array `produtos` cujo nome contem o termo informado, ou `null`)

produtosEmFalta(lista, minimo):
retorna um array de objetos da lista informada cujo atributo `quantidade` é menor do que o minimo informado
(no programa, retorna um array com os produtos onde a condicao acima é verdadeira)

aplicarDesconto(lista, categoria, percentual):
modifica o atributo `preco` de todos os objetos na lista informada cujo atributo `categoria` é igual à categoria informada (nao e case-sensitive) para o valor `preco` - (`preco` - percentual / 100), e retorna a quantidade de objetos modificados
(no programa, aplica o desconto do percentual informado nos produtos de `produtos` onde a condicao acima e verdadeira (e retorna quantos produtos foram 'descontados'))

registrarVenda(lista, nome, quantidade):
checa se o objeto com o nome informado existe na lista informada, e se o seu atributo `quantidade` é maior ou igual à quantidade informada. se sim, o atributo `quantidade` é subtraido da quantidade informada, o atributo `vendidos` é adicionado da quantidade informada, e a funcao retorna `true`. caso nao, a funcao apenas retorna `false`
(no programa, checa se o produto existe em `produtos` usando a condicao acima. caso sim, registra a venda dos produtos e retorna `true`. caso nao, apenas retorna `false`)

formatarNome(texto):
retorna o texto informado sem espaços no inicio ou no final da string, e com apenas a primeira letra maiuscula, sendo as outras minúsculas
(no programa, usado para formatar o nome dos produtos na funcao `cadastrarProduto`)

converterParaJSON(lista):
retorna a lista informada convertida para uma string JSON.

lerJSON(texto):
retorna uma lista dos objetos guardados na string JSON informada

gerarRelatorio(nome, lista)
imprime um relatorio da loja com o nome informado, mostrando quantos produtos estao cadastrados na lista informada, o valor total dos itens em estoque, e uma lista dos produtos que estao com um estoque menor que 5.
