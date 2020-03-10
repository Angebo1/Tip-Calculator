function calcTip() {
  //Assign each entry to its respective value
  var billAmt = $("#billamt").val();
  var peopleAmt = $("#peopleamt").val();
  var tipAmt = $("#serviceQual").val();
  //If no bill amount or tip amount were entered, send alert asking for them to be specified
  if (billAmt === "" || tipAmt === 0) {
    alert("Please enter values");
    return;
  }
  //if the amount of people entered is 0 or 1, or it was not entered
  // then the number of people are assumed to be one and the "each" part is not displayed
  if (peopleAmt === "" || peopleAmt <= 1){
    peopleAmt = 1;
    $("#each").hide();
  } else {
    $("#each").show();
  }
//Calcutes tip by multiplying service quality percentage and bill total, then
//dividing it by the amount of people paying the bill
  var tipTotal = (billAmt * tipAmt) / peopleAmt;
//We keep the answer to two decimal places
  tipTotal = tipTotal.toFixed(2);
//We display the total tip area with the total tip amount
  $("#totalTip").show();
  $("#tip").text(tipTotal);
}

$("#totalTip").hide();

$("#calculate").on("click", function() {
  calcTip();
});
