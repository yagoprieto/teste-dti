const PETSHOPS = [
    {
      nome: 'Meu Canino Feliz',
      distancia: 2,
      precos: {
        pequeno: {
          semana: 20,
          fim_de_semana: 24,
        },
        grande: {
          semana: 40,
          fim_de_semana: 48,
        },
      },
    },
    {
      nome: 'Vai Rex',
      distancia: 1.7,
      precos: {
        pequeno: {
          semana: 15,
          fim_de_semana: 20,
        },
        grande: {
          semana: 50,
          fim_de_semana: 55,
        },
      },
    },
    {
      nome: 'ChowChawgas',
      distancia: 0.8,
      precos: {
        pequeno: 30,
        grande: 45,
      },
    },
  ];
  
  function calcularPreco(petshop, data, tamanho, quantidade) {
    const diaDaSemana = new Date(data).getDay();
    const isFimDeSemana = diaDaSemana === 0 || diaDaSemana === 6;
    const precoBase = petshop.precos[tamanho][isFimDeSemana ? 'fim_de_semana' : 'semana'];
  
    // Multiplica o preço base pela quantidade
    const precoTotal = precoBase * quantidade;
  
    // Retorna o preço total
    return precoTotal;
  }