// Exercise 1
const person = {
    hungry: false,
  
    feed: function () {
      if (person.hungry === false ) {
        alert('Im no longer hungry!')
      }
    }
  }  
  
  person.feed() //should alert "I'm no longer hungry"
// 
//   Exercise 2
const pump = function (amount) {
    let liters = amount;
    console.log('You put ' + this.liters + ' liters in ' + this.name);
  };
  
  const garage = {
    car1: {
      name: 'Audi',
      liters: 3,
      fillTank: pump
    },
    car2: {
      name: 'Mercedes',
      liters: 21,
      fillTank: pump
    }
  };
  
  garage.car1.fillTank(3);
  console.log('Audi should have 20 liters: ',  garage.car1.liters);
  
  garage.car2.fillTank(21);
  console.log('Mercedes should have 61 liters: ', garage.car2.liters);
//   Exercise 3
const pumpFuel = function (plane) {
    plane.fuel += 1;
};

const airplane = {
    fuel: 1, // Initialize the fuel property to a value less than or equal to 2
    fly: function () {
        if (this.fuel <= 2) {
            return 'on the ground!';
        } else {
            return 'flying!';
        }
    }
};

console.log('The plane should not be able to fly (yet): ' + airplane.fly());

pumpFuel(airplane);
console.log('The plane should STILL not be able to fly: ' + airplane.fly());

pumpFuel(airplane);
console.log('Take off! ' + airplane.fly());
// Exercise 4
const tipJar = {
    coinCount: 20,
    tip: function () {
        this.coinCount += 1;
    },
    stealCoins: function (amount) {
        this.coinCount -= amount;
    }
};

tipJar.tip();
console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

tipJar.stealCoins(3);
console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

tipJar.stealCoins(10);
console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);
// Exercise 5
const revealSecret = function (person) {
  return person.secret;
};

const shoutIt = function (person, func) {
  person.revealItAll = func;
  const result = person.revealItAll(person); 
  alert(person.name + " said: " + result);
};

const avi = {
  name: "Avi", 
  secret: "I'm scared of snakes!" 
};

const narkis = {
  name: "Narkis", 
  secret: "I don't have secrets because I'm zen like that." 
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);
// Exercise 6
cconst coffeeShop = {
  beans: 40,
  money: 100, // Initial amount of money
  beanCost: 2, // Cost per bean (you can adjust this value)

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  buyBeans: function (numBeans) {
    const cost = numBeans * this.beanCost;

    if (this.money >= cost) {
      this.money -= cost;
      this.beans += numBeans;
      console.log("Bought " + numBeans + " beans. Remaining money: $" + this.money);
    } else {
      console.log("Not enough money to buy " + numBeans + " beans.");
    }
  },

  makeDrink: function (drinkType) {
    if (this.drinkRequirements.hasOwnProperty(drinkType)) {
      const requiredBeans = this.drinkRequirements[drinkType];

      if (this.beans >= requiredBeans) {
        this.beans -= requiredBeans;
        console.log(drinkType + " is ready! Enjoy your drink.");
      } else {
        console.log("Sorry, we're all out of beans!");
      }
    } else {
      console.log("Sorry, we don't make " + drinkType);
    }
  }
};

// Example usage
console.log("Initial money: $" + coffeeShop.money);
console.log("Initial beans: " + coffeeShop.beans);

coffeeShop.buyBeans(20);
console.log("Beans after purchase: " + coffeeShop.beans);

coffeeShop.makeDrink("latte");