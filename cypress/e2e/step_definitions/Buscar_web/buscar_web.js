import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

//Scenario: 1. Validar a busca com sucesso de um produto disponível no site pelo nome
Given("que acesse o site de Advantage Online Shopping", () => {
    cy.visit("https://advantageonlineshopping.com/#/");
    cy.get('body').should('be.visible');
});

When("buscar pelo produto disponivel", () => {
    cy.get('#mobileSearch > #menuSearch').click();
    cy.get('#mobileSearch > .roboto-medium').type('Tablet{enter}')
});

Then("é apresentado as opções disponíveis para o produto", () => {
    cy.contains('HP ELITEPAD 1000 G2 TABLET').should('be.visible')
});

// Scenario: 2. Validar a busca com sucesso utilizando o nome incompleto do produto 
Given("que acesse o site de Advantage Online Shopping", () => {
    cy.visit("https://advantageonlineshopping.com/#/");
    cy.get('body').should('be.visible');
});

When("buscar pelo produto utilizando parte do nome", () => {
    cy.get('#mobileSearch > #menuSearch').click();
    cy.get('#mobileSearch > .roboto-medium').type('Tab{enter}')
});

Then("é apresentado as opções de produtos relacionados ao termo informado", () => {
    cy.contains('HP ELITEPAD 1000 G2 TABLET').should('be.visible')
});

//Scenario: 3.Validar mensagem de erro ao buscar produto indisponíveis ou inexistente no site 
Given("que acesse o site de Advantage Online Shopping", () => {
    cy.visit("https://advantageonlineshopping.com/#/");
    cy.get('body').should('be.visible');
});

When("buscar por produto inexistente no site", () => {
    cy.get('#mobileSearch > #menuSearch').click();
    cy.get('#mobileSearch > .roboto-medium').type('testexpto{enter}')

});

Then("é apresentado mensagem de erro", () => {
    cy.get('.noProducts > .ng-binding').contains('No results for "testexpto')
});


// Scenario: 4. Validar filtro por categoria ao buscar por categoria de produto 'LAPTOPS'
Given("que acesse o site de Advantage Online Shopping", () => {
    cy.visit("https://advantageonlineshopping.com/#/");
    cy.get('body').should('be.visible');
});

And("clicar no ícone da lupa", () => {
    cy.get('#mobileSearch > #menuSearch').click();

});

When("selecionar a opção de categoria desejada", () => {
    cy.contains('LAPTOPS', { timeout: 10000 }) // Procura pelo texto "LAPTOPS"
        .parent()
        .find('input[type="checkbox"]')
        .check();
    cy.log('Categoria "LAPTOPS" foi clicada com sucesso!');

});

Then('apresenta apenas opções da categoria selecionada', () => {
    Then('apresenta apenas opções da categoria selecionada', () => {
        cy.get('categoryName').each((categoria) => {
            // Verifica se todos os produtos têm 'LAPTOPS' como categoria
            cy.wrap(categoria).should('contain.text', 'LAPTOPS');
        });
    });

});