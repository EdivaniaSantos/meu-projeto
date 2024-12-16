
Feature: Realize a busca de um produto

Scenario: 1. Validar inclusão de produtos no carrinho com sucesso 
   Given que acesse o site de Advantage Online Shopping
   When realize busca por categoria tablet
   And adicione o produto desejado no carrinho de compras
   Then o produto é adicionado ao carrinho com sucesso 

Scenario: 2.Validar inclusão de produtos diferentes no carrinho com sucesso 
  Given que acesse o site de Advantage Online Shopping
  When incluir produtos diferentes no carrinho de compras 
  Then os produtos aparecem no carrinho com sucesso

Scenario: 3.Validar inclusão do mesmo produto mais de uma vez no carrinho com sucesso 
  Given que acesse o site de Advantage Online Shopping
  When incluir o mesmo produto mais de uma vez no carrinho de compras 
  Then é apresentado a quantidade de produto incluso no carrinho com sucesso

Scenario: 4.Validar que não é possível incluir mais produtos que o limite disponível por itens 
  Given que acesse o site de Advantage Online Shopping
  When tentar adicionar quantidade indisponiel de produto
  Then apresenta mensagem de erro 

Scenario: 5.Validar que não é possível incluir produtos esgotado no carrinho 
  Given que acesse o site de Advantage Online Shopping
  When selecionar produto esgotado
  Then apresenta a palavra esgotado na descrição 








