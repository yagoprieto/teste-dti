import React, { useState } from 'react';

const PetshopComponent = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [smallDogs, setSmallDogs] = useState(0);
  const [bigDogs, setBigDogs] = useState(0);
  const [bestPetshop, setBestPetshop] = useState(null);

  const petshops = [
    {
      name: 'Meu Canino Feliz',
      distance: 2,
      weekdayPriceSmall: 20,
      weekdayPriceBig: 40,
      weekendPriceSmall: 24,
      weekendPriceBig: 48,
    },
    {
      name: 'Vai Rex',
      distance: 1.7,
      weekdayPriceSmall: 15,
      weekdayPriceBig: 50,
      weekendPriceSmall: 20,
      weekendPriceBig: 55,
    },
    {
      name: 'ChowChawgas',
      distance: 0.8,
      weekdayPriceSmall: 30,
      weekdayPriceBig: 45,
      weekendPriceSmall: 30,
      weekendPriceBig: 45,
    },
  ];

  const calculatePrice = (petshop) => {
    const date = new Date(selectedDate);
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const priceSmall = isWeekend ? petshop.weekendPriceSmall : petshop.weekdayPriceSmall;
    const priceBig = isWeekend ? petshop.weekendPriceBig : petshop.weekdayPriceBig;
    return smallDogs * priceSmall + bigDogs * priceBig;
  };

  const handleClick = () => {
    let minPrice = Infinity;
    let bestPetshop = null;

    petshops.forEach((petshop) => {
      const price = calculatePrice(petshop);
      if (price < minPrice || (price === minPrice && petshop.distance < bestPetshop.distance)) {
        minPrice = price;
        bestPetshop = petshop;
      }
    });

    setBestPetshop(bestPetshop);
  };

  return (

    <div className='container'>

    <h1 className='title'>Seja bem vindo, irei te ajudar a encontrar o melhor PetShop para o seu cão!</h1>
    <p>O nosso sistema leva em conta a menor distância e o menor preço, sendo de acordo com o dia da semana, para que você ache a melhor opção<br></br><br></br>      
    Para começar a usar basta selecionar a data desejada e em seguida preencher a quantidade de cães que deseja. Clique no botão azul e prontinho, a melhor opção aparecerá para você.  
    </p>
   <br></br>
      <label>
        <h4>Selecione a data:</h4>
        <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
      </label>
      <br></br>
      <label>
        <h4>Qual o número de cães de pequeno porte?</h4>
        <input type="number" value={smallDogs || ''}onChange={(e) => setSmallDogs(parseInt(e.target.value))}/>
      </label>
      <br></br>
      <label>
      <h4>Qual o número de cães de grande porte?</h4><p></p>
        <input type="number" value={bigDogs || ''}onChange={(e) => setBigDogs(parseInt(e.target.value))}/>
      </label>
      
      <button onClick={handleClick}>Qual o melhor petshop para levar os meus cães?</button>
      {bestPetshop && (
        <div className='resultado'>
          <h2>O melhor petshop é o: {bestPetshop.name}</h2>
          <p>O Preço total é: R${calculatePrice(bestPetshop).toFixed(2)}</p>
          <p>A distância dele até o seu canil é de: {bestPetshop.distance}km</p>
        </div>
      )}
    </div>
  );
};

export default PetshopComponent;
