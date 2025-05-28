const AppError = require('../errors/AppError');
const Payment = require('../models/payment');

class CoffeeMachine {
  constructor(coffeeList) {
    this.coffeeList = coffeeList;
  }

  getCoffeeById(id) {
    const coffee = this.coffeeList.find(c => c.id === id);
    if (!coffee) throw new AppError('Le café demandé n\'existe pas.');
    return coffee;
  }

  checkStock(coffee) {
    if (coffee.stock <= 0) throw new AppError('Le café est en rupture de stock.');
  }

  validatePayment(coffee, payment) {
    if (payment.amount < coffee.price) throw new AppError('Paiement insuffisant.');
  }

  decrementStock(coffee) {
    coffee.stock -= 1;
  }

  dispense(coffee) {
    return `Voici votre ${coffee.name}. Merci pour votre achat.`;
  }

  run(paymentAmount, coffeeId) {
    const coffee = this.getCoffeeById(coffeeId);
    this.checkStock(coffee);
    this.validatePayment(coffee, new Payment(paymentAmount));
    this.decrementStock(coffee);
    return this.dispense(coffee);
  }
}

module.exports = CoffeeMachine;
