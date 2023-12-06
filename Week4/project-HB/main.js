const source = $('#store-template').html();
const template = Handlebars.compile(source)
const newHTML = template({item: "bread", price: "15"});
$('.items').append(newHTML);