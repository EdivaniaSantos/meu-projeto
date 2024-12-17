import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

// 1. Validar que produtos inclusos no carrinho aparece corretamente na tela de pagamento
Given("que acesse o site de Advantage Online Shopping", () => {
    cy.visit("https://advantageonlineshopping.com/#/");
    cy.get('body').should('be.visible');
});

And("inclua produtos incluídos no carrinho", () => {
    cy.get('#mobileSearch > #menuSearch').click();
    cy.get('#mobileSearch > .roboto-medium').type('Tablet{enter}') 
    cy.get(':nth-child(1) > :nth-child(4) > .productName').click()
    cy.contains('HP ELITEPAD 1000 G2 TABLET').should('be.visible')
    cy.get('.e-sec-plus-minus > :nth-child(2) > .ng-pristine').type(1)
    cy.get('.fixedBtn > .roboto-medium').click(); // adicionar ao carrinho
});

When("acessar a tela de pagamentos", () => {
    cy.get('#shoppingCartLink').click();
    cy.contains('HP ELITEPAD 1000 G2 TABLET').should('be.visible')
    cy.get(':nth-child(5) > .ng-binding').and('contain',1) // campo quantidade contem o numero 2
    cy.get('#checkOutButton').click();
    
});
Then("os produtos do carrinho são exibidos com sucesso na tela de pagamento", () => {
    cy.get('#userCart > #toolTipCart > :nth-child(1) > table > tbody > #product > :nth-child(2) > a > :nth-child(2)').and('contain',1) 
});


// 2. Validar que não é possível realizar compra sem uma conta criada
Given("que acesse o site de Advantage Online Shopping", () => {
    cy.visit("https://advantageonlineshopping.com/#/");
    cy.get('body').should('be.visible');
});

And("inclua produtos incluídos no carrinho", () => {
    cy.get('#mobileSearch > #menuSearch').click();
    cy.get('#mobileSearch > .roboto-medium').type('Tablet{enter}') 
    cy.get(':nth-child(1) > :nth-child(4) > .productName').click()
    cy.contains('HP ELITEPAD 1000 G2 TABLET').should('be.visible')
    cy.get('.e-sec-plus-minus > :nth-child(2) > .ng-pristine').type(1)
    cy.get('.fixedBtn > .roboto-medium').click(); // adicionar ao carrinho
});

When("acessar a tela de pagamentos", () => {
    cy.get('#shoppingCartLink').click();
    cy.contains('HP ELITEPAD 1000 G2 TABLET').should('be.visible')
    cy.get(':nth-child(5) > .ng-binding').and('contain',1) // campo quantidade contem o numero 2
    cy.get('#checkOutButton').click();   
});


Then("é apresentado opção para “registration” do usuário ou login no site", () => {
    cy.get('#userCart > #toolTipCart > :nth-child(1) > table > tbody > #product > :nth-child(2) > a > :nth-child(2)').and('contain',1) 
    cy.get('p.ng-scope').and('contain',"Create your account to track your order") 
});
