//Somente o Gherkin

Funcionalidade: Autenticação de um usuário ADMIN

 Scenario:  Validar autenticação com usuário ADMIN com sucesso
    Given que eu tenha um usuário ADMIN
    When eu faço uma requisição POST com as credenciais válidas
    Then a resposta deve retornar um token de autenticação válido