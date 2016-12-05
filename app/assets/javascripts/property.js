/*------ Side Nav-Bar -------*/

$(document).ready(function(){
  $(document).on('click', '.nav-btn', function(){
    if ( $('.side-nav').is(':visible') ) {
      $('.side-nav').css({
        display: 'none'
      })
      $(".main-container").css({
        width: '100%'
      })
    }else{
      $('.side-nav').css({
        display: 'block'
      })
      $(".main-container").removeAttr('style')
    }
  });
});

// MATH for Financial Costs

// $(document).on("turbolinks:load", function(){
//   $(document).on('keyup', '#percentOffer', function(){
//     var offerPercent = Number($('#percentOffer').val()) * 0.01
//     var offerPrice = Number($('#estimate').val()) * offerPercent
//     $('#offerPrice').val(offerPrice)
//   });
// });



$(document).on("turbolinks:load", function(){
  $(document).on('keyup', '#percentOffer', function(){
    var offerPercent = Number($('#percentOffer').val()) * 0.01
    var noString = $("#zestimate").text();
    var value = noString.replace(/[$]/, "").replace(",", "").replace(",", "")
    var valueClean = parseFloat(value);
    var offerPrice = valueClean * offerPercent
    $('#offerPrice').val(offerPrice.toFixed(2))
  });
});


$(document).on("turbolinks:load", function(){
  $(document).on('keyup', '#percentLoan', function(){
    var loanPercent = Number($('#percentLoan').val()) * 0.01
    var offerPrice = Number($('#offerPrice').val());
    var totalLoan = loanPercent * offerPrice;
    $('#loanTotal').val(totalLoan.toFixed(2));
  });
});



$(document).on("turbolinks:load", function(){
  $(document).on('keyup', '#loanRatePercent', function(){
    var loanRate = Number($('#loanRatePercent').val()) * 0.01
    var totalLoan = Number($('#loanTotal').val())
    var loanPayment = ((totalLoan * loanRate) + totalLoan) / 12
    $('#loanPayment').val(loanPayment.toFixed(2));
  });
});

$(document).on("turbolinks:load", function(){
  $(document).on('keyup', '#loanRatePercent', function(){
    var loanRate = Number($('#loanRatePercent').val()) * 0.01
    var totalLoan = Number($('#loanTotal').val())
    var holdTime = Number($('#holdTime').val())
    var loanPayment = ((totalLoan * loanRate) + totalLoan) / 12
    var totalLoanPayment = loanPayment * holdTime
    $('#loanTotalCost').val(totalLoanPayment.toFixed(2));
  });
});


// MATH for Holding Costs

$(document).on("turbolinks:load", function(){
    $(document).on('keyup', '#propertyTaxesYearly', function(){
      var propertyTaxesYearly = Number($('#propertyTaxesYearly').val())
      var propertyTaxesMonthly = propertyTaxesYearly / 12
      $('#propertyTaxesMonthly').val(propertyTaxesMonthly.toFixed(2));
    });
  });

  $(document).on("turbolinks:load", function(){
    $(document).on('keyup', '#hoaYearly', function(){
      var hoaYearly = Number($('#hoaYearly').val())
      var hoaMonthly = hoaYearly / 12
      $('#hoaMonthly').val(hoaMonthly.toFixed(2));
    });
  });

  $(document).on("turbolinks:load", function(){
    $(document).on('keyup', '#insuranceYearly', function(){
      var insuranceYearly = Number($('#insuranceYearly').val())
      var insuranceMonthly = insuranceYearly / 12
      $('#insuranceMonthly').val(insuranceMonthly.toFixed(2));
    });
  });

  $(document).on("turbolinks:load", function(){
    $(document).on('keyup', '#miscellaneousYearly', function(){
      var miscellaneousYearly = Number($('#miscellaneousYearly').val())
      var miscellaneousMonthly = miscellaneousYearly / 12
      $('#miscellaneousMonthly').val(miscellaneousMonthly.toFixed(2));
    });
  });
  // Total Holding Cost Yearly
    $(document).on("keyup", ".holdingCostsYearly", function() {
        var sum = 0;
        $(".holdingCostsYearly").each(function(){
            sum += +$(this).val();
        });
        $('#totalHoldingCostYearly').val(sum);
    });

//Total Holding Cost Monthly
$(document).on("keyup", '#totalHoldingCostYearly', function() {
  var totalHoldingCostYearly = Number($('#totalHoldingCostYearly').val()) / 12
  $('#totalHoldingCostMonthly').val(totalHoldingCostYearly.toFixed(2));
});

// Total Estimated Holding Time Cost
$(document).on("keyup", '#totalHoldingCostMonthly', function() {
  var totalHoldingCostMonthly = Number($('#totalHoldingCostMonthly').val());
  var holdTime = Number($('#holdTime').val());
  var totalHoldingCostEstimated = totalHoldingCostMonthly * holdTime;
  $('#totalHoldingCostEstimated').val(totalHoldingCostEstimated.toFixed(2));
});


//MATH for Transaction Costs

// Buying Costs Total
$(document).on("keyup", ".totalBuyingCosts", function() {
    var sum = 0;
    $(".totalBuyingCosts").each(function(){
        sum += +$(this).val();
    });
    $('#totalBuyingCost').val(sum);
});

// Selling Costs Total
$(document).on("keyup", ".totalSellingCosts", function() {
    var sum = 0;
    $(".totalSellingCosts").each(function(){
        sum += +$(this).val();
    });
    $('#totalSellingCost').val(sum);
});

// Total Transaction Costs
$(document).on("keyup", ".totalBuyingSelling", function() {
  var sum = 0;
  $(".totalBuyingSelling").each(function(){
      sum += +$(this).val();
  });
  $('#totalTransactionCost').val(sum);
});

// MATH for Repair Costs

// Exterior Costs
$(document).on("keyup", ".totalExteriorCosts", function() {
    var sum = 0;
    $(".totalExteriorCosts").each(function(){
        sum += +$(this).val();
    });
    $('#totalExteriorRepairCost').val(sum);
});

// Interior Costs
$(document).on("keyup", ".totalInteriorCosts", function() {
    var sum = 0;
    $(".totalInteriorCosts").each(function(){
        sum += +$(this).val();
    });
    $('#totalInteriorRepairCost').val(sum);
});

// Total Repair Costs
$(document).on("keyup", ".totalExteriorInteriorRepair", function() {
  var sum = 0;
  $(".totalExteriorInteriorRepair").each(function(){
      sum += +$(this).val();
  });
  $('#totalRepairCost').val(sum);
});


// Amount Invested
$(document).on("keyup", "#loanTotal", function() {
  var offerPrice = Number($('#offerPrice').val());
  var loanTotal = Number($('#loanTotal').val());
  var amountInvested = offerPrice - loanTotal;
  $('#amountInvested').val(amountInvested.toFixed(2));
});

// Total Costs
$(document).on("keyup", ".costsTotal", function() {
  var sum = 0;
  $(".costsTotal").each(function(){
      sum += +$(this).val();
  });
  $('#totalAllCost').val(sum.toFixed(2));
});

// Estimated Net Profit
$(document).on("turbolinks:load", function(){
  $(document).on('keydown', "#estimatedNetProfit", function(){
    var offerPercent = Number($('#percentOffer').val()) * 0.01
    var noString = $("#zestimate").text();
    var value = noString.replace(/[$]/, "").replace(",", "").replace(",", "")
    var zestimateVal = parseFloat(value);
    var offerPrice = zestimateVal * offerPercent
    var totalAllCost = Number($("#totalAllCost").val());
    var estimatedNetProfit = zestimateVal - offerPrice - totalAllCost;
    $("#estimatedNetProfit").val(estimatedNetProfit.toFixed(2));
  });
});

// ROI
$(document).on("turbolinks:load", function(){
  $(document).on('keydown', "#returnOnInvestment", function(){
    var estimatedNetProfit = Number($('#estimatedNetProfit').val());
    var amountInvested = Number($('#amountInvested').val());
    var returnOnInvestment = (estimatedNetProfit / amountInvested) * 100;
    $("#returnOnInvestment").val(returnOnInvestment.toFixed(2));
  });
});

// Dashboard Number Display

// Total Financial Cost
$(document).on("turbolinks:load", function(){
  $(document).on('keydown', "#loanTotalCost", function(){
    $("#financialTotalCost").text('$'+ $(this).val());
  });
 });

// Total Holding Cost
 $(document).on("turbolinks:load", function(){
   $(document).on('keydown', "#totalHoldingCostEstimated", function(){
     $("#holdingTotalCost").text('$'+ $(this).val());
   });
  });

// Total Transaction Cost
$(document).on("turbolinks:load", function(){
  $(document).on('keydown', "#totalTransactionCost", function(){
    $("#transactionTotalCost").text('$'+ $(this).val());
  });
 });

 // Total Repair Cost
 $(document).on("turbolinks:load", function(){
   $(document).on('keydown', "#totalRepairCost", function(){
     $("#repairTotalCost").text('$'+ $(this).val());
   });
  });

  // Total Costs
  $(document).on("turbolinks:load", function(){
    $(document).on('keydown', "#totalAllCost", function(){
      $("#allCostsTotal").text('$'+ $(this).val());
    });
   });

// Estimated Net Profit
$(document).on("turbolinks:load", function(){
  $(document).on('keydown', "#estimatedNetProfit", function(){
    $("#profitEstimated").text('$'+ $(this).val());
  });
 });

// ROI
$(document).on("turbolinks:load", function(){
  $(document).on('keydown', "#returnOnInvestment", function(){
    $("#roiEstimated").text($(this).val() + '%');
  });
 });
