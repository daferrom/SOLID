class Store {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    purchaseBike(quantity) {
        this.paymentProcessor(200 * quantity);
        // this.stripe.makePayment(200 * quantity);
    }
    
    purchaseHelmet(quantity) {
        this.paymentProcessor(15 * quantity);
        // this.stripe.makePayment(15 * quantity * 100);
    }
}
class StripePaymentProcesssor {
    constructor(user) {
       this.stripe = new Stripe(user)
    }

    pay(amountInDollars){
        this.stripe.makePayment(amountInDollars * 100)
    }
}

class PaypalPaymentProcesssor {
    constructor(user) {
       this.stripe = new Stripe(user)
    }

    pay(amountInDollars){
        this.stripe.makePayment(this.user, amountInDollars)
    }
}


class Stripe {
    constructor(user) {
        this.user = user;
    }
    makePayment(amountInCents) {
        console.log(`${this.user} made payment of $${amountInCents / 100} with stripe`);
    }
}

class Paypal {
    makePayment(user, amountInDollars) {
        console.log(`${user} made payment of $${amountInCents / 100} with stripe`);
    }
}


const store = new Store('John')
store.purchaseBike(2);
store.purchaseHelmet(2);


