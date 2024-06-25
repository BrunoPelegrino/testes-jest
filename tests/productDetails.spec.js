const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    const newObj = productDetails('string1', 'string2')
    expect(newObj).toHaveLength(2)
  });
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    const newObj = productDetails('string1', 'string2')
    expect(typeof newObj[0]).toBe('object')
    expect(typeof newObj[1]).toBe('object')
  });
  it('Verifica se os objetos contêm a propriedade `name` com os valores corretos', () => {
    const newObj = productDetails('string1', 'string2');
    expect(newObj[0]).toHaveProperty('name', 'string1');
    expect(newObj[1]).toHaveProperty('name', 'string2');
  });
  it('Verifica se os objetos contêm a propriedade `details` com os valores corretos', () => {
    const newObj = productDetails('string1', 'string2');
    expect(typeof newObj[0].details).toBe('object');
    expect(typeof newObj[1].details).toBe('object');
  });

  it('Verifica se os objetos contêm a propriedade `details` com os valores corretos', () => {
    const newObj = productDetails('string1', 'string2');
    expect(newObj[0].details).toHaveProperty('productId', 'string1123');
    expect(newObj[1].details).toHaveProperty('productId', 'string2123');
  });
});
