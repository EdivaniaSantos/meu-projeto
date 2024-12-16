
Feature: Realize a busca de um produto

Scenario: 1. Validar a busca com sucesso de um produto disponível no site pelo nome
   Given que acesse o site de Advantage Online Shopping
   When  buscar pelo produto disponivel
   Then  é apresentado as opções disponíveis para o produto 


Scenario: 2. Validar a busca com sucesso utilizando o nome incompleto do produto 
   Given que acesse o site de Advantage Online Shopping
   When  buscar pelo produto utilizando parte do nome
   Then  é apresentado as opções de produtos relacionados ao termo informado


Scenario: 3.Validar mensagem de erro ao buscar produto indisponíveis ou inexistente no site 
   Given que acesse o site de Advantage Online Shopping
   When buscar por produto inexistente no site
   Then é apresentado mensagem de erro 


Scenario: 4. Validar filtro por categoria ao buscar por categoria especifica de produto
  Given que acesse o site de Advantage Online Shopping
  And clicar no ícone da lupa
  When selecionar a opção de categoria desejada
  Then apresenta apenas opções da categoria selecionada


