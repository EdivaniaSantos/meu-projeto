
describe('Atualizar imagem de produto', () => {

    const endpointLogin = "/accountservice/accountrest/api/v1/login";
    // Autenticação e captura o token antes de cada teste
    beforeEach(() => {
        const loginData = {
            email: 'edivanya.emjy@hotmail.com',
            loginPassword: 'Teste123',
            loginUser: 'Edivania'
        };

        // Realiza a autenticação para pegar o token
        cy.request({
            method: 'POST',
            url: endpointLogin,
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: loginData

        }).then((response) => {

            // Verifica a resposta e o sucesso da autenticação
            expect(response.status).to.eq(200);
            expect(response.body.statusMessage.success).to.eq(true);
            expect(response.body.statusMessage).to.have.property('token');

            // Armazena o token 
            const token = response.body.statusMessage.token;
            cy.wrap(token).as('authToken');
            Cypress.env('authToken', token);
        });
    });

    it('validar atualização de imagem de um produto com sucesso', function () {

        const userId = 397856839;  
        const color = 'blue';     
        //const productId = Math.floor(Math.random() * 50) + 1; // ID do produto aleatorio
        const productId = 16;      
        const source = 'new_image.jpg';  

        // Carregar o arquivo de imagem para o teste
        cy.fixture('imagem_para_teste.jpg', 'base64').then((fileContent) => {
            const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpeg');
            const formData = new FormData();
            formData.append('file', blob, 'imagem para teste.jpg');
            formData.append('type', 'image/jpeg');

            // Realiza a requisição POST para atualizar a imagem do produto
            cy.get('@authToken').then((token) => {
                cy.request({
                    method: 'POST',
                    url: `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/${userId}/${source}/${color}?product_id=${productId}`,
                    headers: {
                        accept: '*/*',
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data'
                    },
                    body: formData,
                    failOnStatusCode: false
                }).then((response) => {
                    cy.log(JSON.stringify(response.body));
                    // Exibe a resposta para depuração
                    cy.log('Response:', response.body);

                    //Verifica sesucesso na resposta
                    expect(response.status).to.eq(200);
                    expect(response.body).to.exist;
                    expect(productId).to.exist;



                });

            });
        });
    });


    it('Validar carregamento da imagem noproduto', function () {
        const productId = 16;   // ID do produto já cadastrado
        const body = {
            productId: 14,
        };

        cy.request({
            method: 'GET',
            url: `https://www.advantageonlineshopping.com/catalog/api/v1/products/${productId}`,
            headers: {
                'accept': '',
            },
            body: body,
        }).then((response) => {

            expect(response.status).to.eq(200);  // Verifica se a requisição foi com sucesso
            expect(response.body).to.have.property('imageUrl').that.is.not.empty;
            expect(response.body).to.have.property('productId', productId);


        });
    });

});



