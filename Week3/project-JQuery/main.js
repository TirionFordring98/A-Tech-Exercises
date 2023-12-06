$("h4").css("color", "red")
$("h1").css("color", "blue")
$("div").css("color", "red")
$("li").css("color", "green")
$("#brown-div").css("color", "brown")
$("#b1").addClass("box");
$("#b2").addClass("box");
$('#my-input').val("terabyte")
const data = $("div").data()
console.log("Item with barcode " + data.barcode + " will expire on " + data.expirationdate) //notice how we use expirationdate, even though in the HTML it's expirationDate
$(".box").hover(function(){
    $(this).css("background-color", "blue")
})
$(".feedme").on("click", function(){
    let divCopy = `<div class=feedme> ${$(this).text()} </div>`
    
    $("body").append(divCopy)
  })
  
  
  // Notice the two dollar signs:
  
  
  // 1. The first is for the template literal - this allows us to combine text and variables easily
  // 2. The second is our normal jQuery function that converts this into a jQuery object