
describe('Autenticação de e login usuário', () => {
    
    it('Deve autenticar um usuário com sucesso e obter um token válido', () => {
        const loginData = {
            email: 'edivanya.emjy@hotmail.com',
            loginPassword: 'Teste123',
            loginUser: 'Edivania'
        };

        cy.request({
            method: 'POST',
            url: 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/login',
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: loginData
        }).then((response) => {
            // Exibindo a resposta completa no log para inspecionar o corpo
            cy.log(JSON.stringify(response.body));

            // Verificando se o login foi bem-sucedido e se o token foi retornado
            expect(response.status).to.eq(200);
            expect(response.body.statusMessage.success).to.eq(true); 
            expect(response.body.statusMessage).to.have.property('token');  

            // Armazenando o token para uso posterior
            const token = response.body.statusMessage.token;
            cy.wrap(token).as('authToken');
            Cypress.env('authToken', token); 


        });

    });

});

