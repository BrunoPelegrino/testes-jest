const createMenu = require('../src/restaurant');
 
/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante através do qual será possível
  cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto que permite:

  - Ler o menu cadastrado;
  - Fazer pedidos;
  - Verificar o que foi pedido;
  - Somar o valor da conta.

  A estrutura deste código e deste objeto já está definida e você precisa implementá-la.
  Abaixo você verá uma série de testes e passos que irão guiar você e, que devem NECESSARIAMENTE ser realizados em ordem para o bom desenvolvimento do sistema.

  Desenvolvimento:
  - Uma função: 
    createMenu()
  - Recebe um parâmetro que é um objeto, o menu:
    Exemplo: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.

  A função createMenu() então, retornará um novo objeto. Este novo objeto contém algumas chaves e ao acessar cada uma delas temos os seguintes retornos:

  - Uma chave `fetchMenu` retornando o menu, que nada mais é que o objeto passado como parâmetro para createMenu()

    Exemplo:
    const meuRestaurante = createMenu({
      food: {'coxinha': 3.90, 'sanduiche', 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    });

    meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` armazenando um array de strings. Cada string é a chave de um pedido.
    Exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` armazenando uma função. Essa função recebe uma string como parâmetro e essa string deve ser adicionada à lista armazenada em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função. Essa função faz a soma do preço de todos os pedidos, retornando essa soma de preços com acréscimo de 10%.

  Comportamento:
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })

    meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

    meuRestaurante.order('coxinha') // Retorno: undefined

    meuRestaurante.consumption // Retorno: ['coxinha']

    meuRestaurante.pay() // Retorno: 4.29

  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A SEQUÊNCIA INDICADA NO README DO PROJETO!

*/

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifique se função `createMenu()` retorna um objeto que possui a chave `fetchMenu`, a qual tem como valor uma função.', () => {
    const newMenu = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })
    expect(newMenu).toHaveProperty('fetchMenu')
    expect(typeof newMenu.fetchMenu).toBe('function')
  });
  it('Verifique se objetoRetornado.fetchMenu()retorna um objeto cujas chaves são somente food e drink', () => {
    const newMenu = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })
    expect(newMenu.fetchMenu()).toHaveProperty('food')
    expect(newMenu.fetchMenu()).toHaveProperty('drink')
  });
  it('Verifique se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função objetoRetornado.fetchMenu()', () => {
    const obj = { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }
    const newMenu = createMenu(obj)
    expect(newMenu.fetchMenu()).toEqual(obj)
  });
  it('Verifique se objetoRetornado.consumption, após a criação do menu, retorna um array vazio', () => {
    const obj = { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }
    const newMenu = createMenu(obj)
    expect(newMenu.consumption).toEqual([])
  });
  it('Verifique se, ao chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro (como `objetoRetornado.order(coxinha)), tal string é adicionadaao array retornado em `objetoRetornado.consumption', () => {
    const obj = { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }
    const newMenu = createMenu(obj)
    newMenu.order('coxinha');
    expect(newMenu.consumption).toContain('coxinha');
  });
  it('Verifique se ao adicionar três pedidos, dentre bebidas e comidas, o array objetoRetornado.consumption contém os itens pedidos', () => {
    const newMenu = createMenu({ food: {}, drink: {} });
    newMenu.order('coxinha');
    newMenu.order('cerveja');
    newMenu.order('sopa');
    expect(newMenu.consumption).toEqual(['coxinha', 'cerveja', 'sopa']);
  });
  it('Verifique se ao adicionar três pedidos, dentre bebidas e comidas, o array objetoRetornado.consumption contém os itens pedidos', () => {
    const newMenu = createMenu({ food: {}, drink: {} });
    newMenu.order('coxinha');
    newMenu.order('cerveja');
    newMenu.order('coxinha');
    expect(newMenu.consumption).toEqual(['coxinha', 'cerveja', 'coxinha']);
  });
  it(' Verifique se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption', () => {
    const newMenu = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} });
    newMenu.order('coxinha');
    newMenu.order('cerveja');
    newMenu.order('coxinha');
    expect(newMenu.consumption).toEqual(['coxinha', 'cerveja', 'coxinha']);
    const total = 3.9 + 6.9 + 3.9
    expect(newMenu.pay()).toEqual(total)
  });

});
