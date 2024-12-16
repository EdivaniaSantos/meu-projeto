
## Descrição do Projeto

Este projeto utiliza as seguintes tecnologias:
   •	Linguagem de Programação: JavaScript
   •	Framework Web: Cypress com Cucumber 
   •	Para a Escrita de Cenários Web e API: Gherkin (Cucumber)
   •	Framework para APIs: Cypress

## Pré-Requisitos
Certifique-se de ter as seguintes ferramentas instaladas no seu sistema:
  1.	Node.js e npm
  2.	Git
  3.	Editor de código: Recomendado usar o Visual Studio Code ou outro editor de sua escolha

## Passos para Instalação

## 1. Clonar o Repositório
Clone o repositório do projeto para a sua máquina local:
git clone https://github.com/usuario/nome-do-repositorio.git
 
 2. Navegar até o Diretório do Projeto
Entre na pasta do projeto:
cd nome-do-repositorio

3. Instalar as Dependências
Instale as dependências necessárias, incluindo o Cypress e o Cucumber Preprocessor:
npm install


## 4. Configuração do Cypress com Cucumber
## Configuração do Cypress
Abra o Cypress para inicializar e verificar se tudo está funcionando corretamente:
npx cypress open


## Configuração do Cucumber
O Cypress com Cucumber é configurado usando o Cypress Cucumber Preprocessor. Para garantir que o Cucumber esteja configurado corretamente, 

comando abaixo para instalá-lo:
    npm install --save-dev @badeball/cypress-cucumber-preprocessor

## Como Executar os Testes
## 1. Executar os Testes de Web
Para rodar os testes de interface web utilizando Cypress com Cucumber:
    npx cypress open

##  Rodar os testes no modo sem interface gráfica:
Se você quiser rodar os testes sem a interface gráfica, use o comando:
    npx cypress run

## 2. Rodar Testes Específicos
Para rodar testes específicos de um arquivo .feature/arquivo.cy.js ou de um cenário específico, use a opção --spec:
    npx cypress run --spec cypress/e2e/step_definitions/buscar_web.feature
Isso executará apenas o arquivo buscar_web.feature

     npx cypress run --spec cypress/e2e/step_definitions/ api-authentication-admin.cy.js
Isso executará apenas o arquivo api-authentication-admin.cy.js

## Links úteis
Documentação do Cypress: https://docs.cypress.io/




