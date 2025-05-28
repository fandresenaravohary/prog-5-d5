const CoffeeMachine = require('./usecases/coffeeMachine');
const Coffee = require('./models/coffee');
const AppError = require('./errors/AppError');

const coffees = [
  new Coffee('c1', 'Espresso', 2, 3),
  new Coffee('c2', 'Latte', 3, 2),
  new Coffee('c3', 'Cappuccino', 2.5, 1)
];

const machine = new CoffeeMachine(coffees);

const tests = [
  { payment: 3, coffeeId: 'c2' },
  { payment: 1, coffeeId: 'c1' },
  { payment: 3, coffeeId: 'c4' },
  { payment: 3, coffeeId: 'c3' },
  { payment: 3, coffeeId: 'c3' }
];

tests.forEach(({ payment, coffeeId }, i) => {
  try {
    const result = machine.run(payment, coffeeId);
    console.log(`Test ${i + 1} : ${result}`);
  } catch (e) {
    if (e instanceof AppError) {
      console.log(`Test ${i + 1} : Erreur - ${e.message}`);
    } else {
      console.log(`Test ${i + 1} : Erreur inattendue`);
    }
  }
});
