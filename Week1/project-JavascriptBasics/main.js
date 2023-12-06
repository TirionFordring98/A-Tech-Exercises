let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018
if (boughtTesla === true && isUSCitizen) {
console.log("US Citizenship and Tesla Ownership confirmed")
}
if (boughtTesla === true && isUSCitizen) {
console.log("When did you purchase your Tesla?")
}
console.log(yearOfTeslaPurchase)
if (yearOfTeslaPurchase <= 2014) {
    console.log("Would you like an Upgrade?")
} else if (yearOfTeslaPurchase > 2014 ) {
    console.log("Are you satisfied with the car?")
}
if (boughtTesla === true && isUSCitizen) {
    console.log("US Citizenship reconfirmed, No need to ask for relocation to America") 
}
    else if (isUSCitizen === false) {
    console.log("Would you like to move to America?(Why would you? lul)")

}
if (boughtTesla === false) {
    console.log("Tesla Ownership unproven, Would you like to purchase a Tesla?") }
    else if (boughtTesla === true) {
    console.log("Tesla Ownership reconfirmed, no need to ask for car purchase")
    }
// Array Exercise 1
const numbers = [1,2,3,4,5,6,7,8,9,10]
numbers.splice(1, 2);
numbers.splice(3, 1, "1");
numbers.splice(4, 5);
numbers.unshift("0");
console.log(numbers);
// Objects Exercise 1
let p1 = {
    Name: "The Lich King",
    Age: "Immortal",
    City: "Icecrown Cidatel"
}
let p2 = {
    Name: "Tirion Fordring",
    Age: "Immortal",
    City: "Icecrown Cidatel"
}
if (p1.Age === p2.Age && p1.City === p2.City) {
    console.log("Tirion Fordring will break Frostmourne")
}
else if (p1 != p2) {
    console.log("Tirion Fording wanted to break the sword, but could not")
}


// Objects Exercise 2
let Books1 = [ Author = "Author :Hai Bnu Yaqthan", Title = "Title : Abnu Al Tufail"]
let Books2 = [ Author = "Edward Saeed", Title = "Orientalism"]
let Books3 = [ Author = "Albert Camo", Title = "The Stranger"]
let Library = {
    Book1 : Books1,
    Book2 : Books2,
    Book3 : Books3
}
// Objects Exercise 3
const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: false,
    fridge: {
        price: 500,
        works: false,
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}
const hasOven = kitchen.hasOven
const fridgeWorks = kitchen.fridge.works
// const kitchen.fridge.items[1]= Raddish/ How do I do this? NOTE TO SELF
if (kitchen.fridge.items[1].expiryDate < date && hasOven === true && fridgeWorks) {
    console.log("Geraldine’s raddish expired 1 day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the raddish in.")
} else if (kitchen.fridge.items[1].expiryDate < date && hasOven === false && fridgeWorks === true) {
    console.log("Geraldine’s raddish expired 1 day ago. Weird, considering her fridge works. Too bad she doesn’t have an oven to cook the raddish in..")
} else if (kitchen.fridge.items[1].expiryDate < date && hasOven === true && fridgeWorks === false) {
    console.log("Geraldine’s raddish expired 1 day ago. Probably because her fridge doesn’t work. Luckily, she has an oven to cook the raddish in. And she’ll have to pay 250 to fix the fridge.")
} else if (kitchen.fridge.items[1].expiryDate < date && hasOven === false && fridgeWorks === false) {
    console.log("Geraldine’s raddish expired 1 day ago. Probably because her fridge doesn’t work. Too bad she doesn’t have an oven to cook the raddish in. And she’ll have to pay 250 to fix the fridge")
}
// LOOPS
let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
for(let CompanyList in companies){
    console.log(companies[CompanyList])
  }
// Loops Exercise 1 + 2
const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];

for (let i = 0; i < names.length; i++) {
    const Variant = {
        name: names[i],
        age: ages[i]
    };
    people.push(Variant);
}
console.log(people);
for (const persons of people) {
    console.log(`${persons.name} is ${persons.age} years old`);
}
// Exercise 3
const posts = [
    { id: 1, text: "Love this product" },
    { id: 2, text: "This is the worst. DON'T BUY!" },
    { id: 3, text: "So glad I found this. Bought four already!" }
];

const postIdToRemove = 2;

const indexToRemove = posts.findIndex(post => post.id === postIdToRemove);

if (indexToRemove !== -1) {
    posts.splice(indexToRemove, 1);
}

console.log(posts);
// Exercise 4

  



