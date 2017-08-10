$(document).ready(function(){

  $("#onlineMarket").submit(function(event){
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var address = $("#address").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var zip = $("#zip").val();

    var $output = $(".output");
    $("#onlineMarket").hide();
    $output.text("Thank you " + firstName + " " + lastName + " for your purchase!");

    event.preventDefault();
  });
});
