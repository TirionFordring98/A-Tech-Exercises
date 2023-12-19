const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.static(path.join(__dirname, 'dist')))
app.listen(port, function () {
  console.log(`Running server on port ${port}`)
})

app.get('/recipes/:ingredient', (req, res) => {
  const ingredient = req.params.ingredient;
  const excludeDairy = req.query.excludeDairy === 'true';
  const excludeGluten = req.query.excludeGluten === 'true';
  const apiRecipes = `https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/${ingredient}?excludeDairy=${excludeDairy}&excludeGluten=${excludeGluten}`;

    axios.get(apiRecipes)
        .then(function(response) {
            const dairyIngredients = ["Cream", "Cheese", "Milk", "Butter", "Creme", "Ricotta", "Mozzarella", "Custard", "Cream Cheese"];
            const glutenIngredients = ["Flour", "Bread", "bread", "Spaghetti", "Biscuits", "Beer"]; // THE INGREDIENT FACTORS

            let filteredRecipe = response.data.results.map((item) => {
                // Check if the recipe should be excluded based on the checkbox values
                const hasDairy = excludeDairy && item.ingredients.some(ingredient => dairyIngredients.includes(ingredient));
                const hasGluten = excludeGluten && item.ingredients.some(ingredient => glutenIngredients.includes(ingredient));

                if (!hasDairy && !hasGluten) {
                    // Include the recipe if it does not contain excluded ingredients
                    return {
                        idMeal: item.idMeal,
                        title: item.title,
                        strCategory: item.strCategory,
                        href: item.href,
                        thumbnail: item.thumbnail,
                        ingredient: item.ingredients,
                    };
                } else {
                    // Exclude the recipe if it contains excluded ingredients
                    return null;
                }
            });

            // Remove null entries from the filtered array
            filteredRecipe = filteredRecipe.filter(recipe => recipe !== null);

            res.send(filteredRecipe);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('No Data Mr.DC');
        });
  });



