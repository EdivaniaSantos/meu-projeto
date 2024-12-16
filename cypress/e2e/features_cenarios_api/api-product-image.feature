//Somente o Gherkin
Funcionalidade: Atualização de Imagem de Produto

 Scenario: Atualizar a imagem de um produto
    Given que eu tenha um token de autenticação válido
    And eu tenha um ID de usuário ADMIN
    When eu faço uma requisição POST com a nova imagem
    Then a resposta deve retornar um ID de imagem atualizado