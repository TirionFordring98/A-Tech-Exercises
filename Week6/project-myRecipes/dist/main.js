function fetchRecipeData() {
    let recipeInput = $("#recipe-input").val();
    const excludeDairy = $("#dairyfree").prop("checked");
    const excludeGluten = $("#glutenfree").prop("checked");
    $('.recipe').remove();
    $.get(`/recipes/${recipeInput}?excludeDairy=${excludeDairy}&excludeGluten=${excludeGluten}`, function (recipeData) {
        // REVISE HB LATER /*NTS
            // GET TEMPLATE HTML 
            const templateHtml = $('#recipe-template');
            // COMPILE TEMPLATE USING HANDLEBARS
            const template = Handlebars.compile(templateHtml.html());
            // GENERATE THE NEW HTML
            const newHtml = template({recipes: recipeData});
            // APPEND THE HTML TO THE PAGE
            $('body').append(newHtml);
            // console.log(newHtml, recipeData);
        });
};

$('body').on('click','img' ,function(event) {
    const ingredientAlert = $(this).closest('div').find('ul').find('li').html();
    const ingredientAlertCapitilized = ingredientAlert.charAt(0).toUpperCase() + ingredientAlert.slice(1);
    alert(ingredientAlertCapitilized);
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        fetchRecipeData();
    }
}); // ENTER BUTTON FOR SEARCHING
