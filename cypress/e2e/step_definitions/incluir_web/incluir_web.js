import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


// Scenario: 1 Validar inclusão de produtos no carrinho com sucesso 
Given("que acesse o site de Advantage Online Shopping", () => {
    cy.visit("https://advantageonlineshopping.com/#/");
});
When("realize busca por categoria tablet", () => {
    cy.get('#mobileSearch > #menuSearch').click();
    cy.get('#mobileSearch > .roboto-medium').type('Tablet{enter}')
});

And("adicione o produto desejado no carrinho de compras", () => {
    cy.get(':nth-child(1) > :nth-child(4) > .productName').click()
});

Then("o produto é adicionado ao carrinho com sucesso", () => {
    cy.contains('HP ELITEPAD 1000 G2 TABLET').should('be.visible')
    cy.get('.fixedBtn > .roboto-medium').click();
    cy.get('#shoppingCartLink').click();
    cy.contains('HP ELITEPAD 1000 G2 TABLET').should('be.visible')
});

//Scenario: 2.Validar inclusão de produtos diferentes no carrinho com sucesso 
Given("que acesse o site de Advantage Online Shopping", () => {
    cy.visit("https://advantageonlineshopping.com/#/");
    
});
When("incluir produtos diferentes no carrinho de compras", () => {
    cy.get('#mobileSearch > #menuSearch').click();
    cy.get('#mobileSearch > .roboto-medium').type('Tablet{enter}')
    cy.get(':nth-child(1) > :nth-child(4) > .productName').click()
    cy.contains('HP ELITEPAD 1000 G2 TABLET').should('be.visible')
    cy.get('.fixedBtn > .roboto-medium').click();
    cy.get('.pages > .ng-scope').click();
    cy.get('#mobileSearch > .roboto-medium').type('MICE{enter}')
    cy.get(':nth-child(1) > :nth-child(4) > .productName').wait(700).click()
    cy.get('.fixedBtn > .roboto-medium').click()

});
Then("os produtos aparecem no carrinho com sucesso", () => {
    cy.get('#shoppingCartLink').click();
    cy.contains('HP ELITEPAD 1000 G2 TABLET').should('be.visible')
    cy.contains('HP USB 3 BUTTON OPTICAL MOUSE').should('be.visible')
});

//Scenario: 3. Validar inclusão do mesmo produto mais de uma vez no carrinho com sucesso 
Given("que acesse o site de Advantage Online Shopping", () => {
    cy.visit("https://advantageonlineshopping.com/#/");
});
When("incluir o mesmo produto mais de uma vez no carrinho de compras", () => {
    cy.get('#mobileSearch > #menuSearch').click();
    cy.get('#mobileSearch > .roboto-medium').type('Tablet{enter}')
    cy.get(':nth-child(1) > :nth-child(4) > .productName').click()
    cy.contains('HP ELITEPAD 1000 G2 TABLET').should('be.visible')
    cy.get('.e-sec-plus-minus > :nth-child(2) > .ng-pristine').type(2)
    cy.get('.fixedBtn > .roboto-medium').click(); // adicionar ao carrinho

});
Then("é apresentado a quantidade de produto incluso no carrinho com sucesso", () => {
    cy.get('#shoppingCartLink').click();
    cy.contains('HP ELITEPAD 1000 G2 TABLET').should('be.visible')
    cy.get(':nth-child(5) > .ng-binding').and('contain', 2) // campo quantidade contem o numero 2
});

//Scenario: 4.Validar que não é possível incluir mais produtos que o limite disponível por itens 
Given("que acesse o site de Advantage Online Shopping", () => {
    cy.visit("https://advantageonlineshopping.com/#/");
});
When("tentar adicionar quantidade indisponiel de produto", () => {
    cy.get('#mobileSearch > #menuSearch').click();
    cy.get('#mobileSearch > .roboto-medium').type('Tablet{enter}')
    cy.get(':nth-child(1) > :nth-child(4) > .productName').click()
    cy.contains('HP ELITEPAD 1000 G2 TABLET').should('be.visible')
    cy.get('.e-sec-plus-minus > :nth-child(2) > .ng-pristine').type(20)
    cy.get('.fixedBtn > .roboto-medium').click(); // adicionar ao carrinho

});
Then("apresenta mensagem de erro", () => {
    cy.get('#productProperties > label.ng-binding')
        .and('contain', 'Oops! We only have 10 in stock. We updated your order accordingly')
    cy.get('#shoppingCartLink').click();
    cy.get(':nth-child(5) > .ng-binding').and('contain', 10)
});

//Scenario: 5.Validar que não é possível incluir produtos esgotado no carrinho

Given("que acesse o site de Advantage Online Shopping", () => {
    cy.visit("https://advantageonlineshopping.com/#/");

});
When("selecionar produto esgotado", () => {
    cy.get('#mobileSearch > #menuSearch').click();
    cy.get('#mobileSearch > .roboto-medium').type('BOSE SOUNDLINK{enter}')

});

Then("apresenta a palavra esgotado na descrição", () => {
    cy.get(':nth-child(1) > :nth-child(4) > .productName').click()
    cy.contains('BOSE SOUNDLINK AROUND-EAR WIRELESS HEADPHONES').should('be.visible')
    cy.get('#Description > :nth-child(2) > .roboto-medium').and('contain', 'SOLD OUT')
});





