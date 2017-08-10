$(document).ready(function(event){

  $("#onlineMarket").submit(function(){
    var fn = $("#firstName").val();
    var ln = $("#lastName").val();
    var addy = $("#address").val();
    var city1 = $("#city").val();
    // var state1 = $("#state").val();
    var zipCode = $("#zip").val();

    var $output = $(".output");
    $("#onlineMarket").hide();
    $output.text("Thank you " + fn + " " + ln + " for your purchase!");

    event.preventDefault();
  });
});








// $("#name").submit(function(e){
//      var person = $("#person").val();
//      var description = $("#description").val();
//      var date = $("#date").val();
//      var newDate = new Date(date);
//      var time = $("#time").val();
//      var $output = $(".output");
//      $("#name").hide();
//      $output.text("Thank you " + person + " for setting an appointment on " + newDate + " at " + time + ". I will get back to you as soon as possible!");
//
//      e.preventDefault();
//    });
