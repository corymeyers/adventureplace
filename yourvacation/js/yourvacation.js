$(document).ready(function(){

  $('form').submit(function(event) {
    var personal1Input = $("input#personal1").val();






    $('.personal1').text(personal1Input);
    $('#vacation1show').show();
    $('#vacation2show').show();
    $('#vacation3show').show();
    $('#vacation4show').show();


      event.preventDefault();
    });

  $(".clickable1").click(function() {
      $("#vacation1show").toggle();
      $("#vacation1hide").toggle();
    });

  $(".clickable2").click(function() {
      $("#vacation2show").toggle();
      $("#vacation2hide").toggle();
    });

  $(".clickable3").click(function() {
      $("#vacation3show").toggle();
      $("#vacation3hide").toggle();
    });


});
