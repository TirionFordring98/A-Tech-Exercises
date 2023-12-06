let recipe = {
  Recipe1 = {
  name: "Mashed Potatoes",
  serves: 4,
  ingredients: "potatos",
}
  Recipe2 = {
    name: "garlicPowder",
    count: 2,
    unit: "tablespoons",
    chiefTip: "make sure to keep some incase u get attacked by vampires, one never knows what might happen",
    healthy: "should be"
    ingredients: "2",
  }

    {
      "name": "water",
      "anyEastrenPhilosopherBeLike": "be like water my friend"
    },
    {
      "name": "potatoes",
      "count": 2,
      "chiefTip": "FREEDOOOM"
    },
    {
      "name": "butter",
      "count": 2,
      "unit": "tablespoons",
      "chiefTip": "good butta aye?",
      "calories" : 250
    },

    { 
      "calories" : 250
  }
  
  
    {
      "name": "salt",
      "count": 0.5,
      "unit": "teaspoon",
      "chiefTip": "salty life, salty food"
    },
    {
      "name": "pepper",
      "count": 0.25,
      "unit": "teaspoons",
      "chiefTip": "keep some to sniff later"
    }
  ],
  "directions": [
    "Cut potatoes into half inch thick slices",
    "Add potatoes to a pot and cover with an inch of water.",
    "Bring the water to a boil over high heat, then reduce to a simmer and cover.",
    "Simmer for 20 minutes or until potatoes are fork tender.",
    "Drain water from potatoes, leaving the potatoes in the original pot.",
    "Add remaining ingredients to the pot with the potatoes.",
    "Mash potatoes until they reach the desired consistency.",
    "Yer ought te aaadd twu bloody teespoons of garlec powda",
    "Serve immediately, or cover and refrigerate."
  ]
}

console.log(recipe.Recipe2.ingredients.filter(i => i.name == "garlic powder")[0].count) //should print 2
console.log(recipe.healthy) //should print true
console.log(recipe.calories) //should print 250
console.log(recipe.directions[0]) //should print "Cut potatoes into half inch thick slices"