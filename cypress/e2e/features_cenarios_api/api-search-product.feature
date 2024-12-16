//Somente o Gherkin
Feature: Realize a busca de um produto na api

Scenario: Validar que é possível filtrar os produtos pela categoria especifica com sucesso 
    Given que eu tenha o endpoint da API
    When envio uma requisição GET com o com nome do produto
    Then devo receber uma lista de produtos contendo o termo de busca 


    
