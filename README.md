
## Descrição do Projeto
Este projeto utiliza as seguintes tecnologias:
  
   •	Linguagem de Programação: JavaScript
   
   •	Framework Web: Cypress com Cucumber 
   
   •	Para a Escrita de Cenários Web e API: Gherkin (Cucumber)
   
   •	Framework para APIs: Cypress

## Pré-Requisitos
Ferramentas instaladas:

  1.	Node.js e npm
  2.	Git
  3.	Editor de código: Recomendado usar o Visual Studio Code ou outro editor de sua escolha

## Passos para Instalação

 ## 1. Clonar o Repositório
 Clone o repositório do projeto para a sua máquina local:

   git clone https://github.com/EdivaniaSantos/meu-projeto.git
 
 ## 2. Navegar até o Diretório do Projeto
 Entre na pasta do projeto:

   cd meu-projeto
 
 ## 3. Instalar as Dependências
 Instale as dependências necessárias, incluindo o Cypress e o Cucumber Preprocessor:

   npm install

 ## 4. Instalar Configuração do Cypress com Cucumber
 Instale o cypress e cucumber

   npm install cypress --save-dev
   
   npm install cypress-cucumber-preprocessor --save-dev

##  Executar os teste no cypress

executar cypress na interface, use o comando:

    npx cypress open
  
 selecionar as opçoes: E2E testing/ chrome/ start E2E Testing in Chrome/ selecionar a pasta que deseja executar


##  Rodar os testes no modo sem interface gráfica:
Se preferir rodar os testes sem a interface gráfica, use o comando:

    npx cypress run

## 2. Rodar Testes Específicos
Para rodar testes específicos de um arquivo .feature/arquivo.cy.js ou de um cenário específico, use a opção --spec:

    npx cypress run --spec cypress/e2e/step_definitions/buscar_web.feature
    
Isso executará apenas o arquivo buscar_web.feature

     npx cypress run --spec cypress/e2e/step_definitions/ api-authentication-admin.cy.js
     
Isso executará apenas o arquivo api-authentication-admin.cy.js

## Links úteis
Documentação do Cypress: https://docs.cypress.io/




