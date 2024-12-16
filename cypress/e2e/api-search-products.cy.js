describe("Buscar por Produtos", () => {

  const endpoint = "/catalog/api/v1/products/search";

  it("Busca produtos e retorna apenas os que tenha o mesmo nome", () => {

    cy.log("Given I have the API endpoint", endpoint);

    cy.request({
      method: "GET",
      url: endpoint,
      qs: { name: "laptop" },


    }).then((response) => {

      cy.log(JSON.stringify(response.body));
      // Verifica se teve sucesso na resposta 
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array").and.not.to.be.empty;
      response.body.forEach((product) => {
        expect(product).to.have.property('categoryName').to.eq('LAPTOPS')

        // pega os valores de categoryName e verifica se todos são iguai
        const categoryNames = response.body.map((product) => product.categoryName);
        const allCategoryNamesAreEqual = categoryNames.every((category, _, array) => category === array[0]);
        expect(allCategoryNamesAreEqual).to.be.true;

      });
    });
  });
});


