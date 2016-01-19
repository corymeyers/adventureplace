$(document).ready(function(){
  $('blanks form').submit(function(event) {
    var q1 = $("input#question1").val();
    var q2 = $("input#question2").val();
    var q3 = $("input#question3").val();
    var q4 = $("input#question4").val();
    var q5 = $("input#question5").val();

    event.preventDefault();
  });
});







  //var q1 = $('#form').serializeArray()

//  var question2Input = $("input#question2").val();
//  var question3Input = $("input#question3").val();
//  var question4Input = $("input#question1question4").val();
//  var question5Input = $("input#question5").val();
//$('.question2').text(question2Input);
//$('.question3').text(question3Input);
//$('.question4').text(question4Input);
//$('.question5').text(question5Input);

//});

//var choices = [$('#form').serializeArray()]
