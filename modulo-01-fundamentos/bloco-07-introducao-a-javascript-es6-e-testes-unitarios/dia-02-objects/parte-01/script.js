const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

const customerInfo = (order) => {
  const deliveryPerson = Object.values(order.order.delivery)[0];
  const name = Object.values(order)[0];
  const phone = Object.values(order)[1];
  const address1 = Object.values(order.address)[0];
  const address2 = Object.values(order.address)[1];
  const address3 = Object.values(order.address)[2];

  return `Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phone}, ${address1}, N° ${address2}, AP: ${address3}.`
}

console.log(customerInfo(order));

// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment.total = 'R$ 50,00';

  const name = Object.values(order)[0];
  const marguerita = Object.keys(order.order.pizza)[0];
  const pepperoni = Object.keys(order.order.pizza)[1];
  const drink = Object.values(order.order.drinks.coke)[0];
  const total = Object.values(order.payment)[0];

  return `Olá ${name}, o total do seu pedido de ${marguerita}, ${pepperoni} e ${drink} é ${total}.`
}
  
console.log(orderModifier(order));
