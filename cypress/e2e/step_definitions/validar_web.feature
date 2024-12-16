
Feature: Validar os produtos incluídos no carrinho na tela de pagamento

Scenario: 1. Validar que produtos inclusos no carrinho aparece corretamente na tela de pagamento
   Given que acesse o site de Advantage Online Shopping
   And inclua produtos incluídos no carrinho
   When acessar a tela de pagamentos
   Then os produtos do carrinho são exibidos com sucesso na tela de pagamento 

#@focus # testar cenatio especifico
Scenario: 2. Validar que não é possível realizar compra sem uma conta criada
  Given que acesse o site de Advantage Online Shopping
  And inclua produtos incluídos no carrinho
  When acessar a tela de pagamentos
  Then é apresentado opção para “registration” do usuário ou login no site 
