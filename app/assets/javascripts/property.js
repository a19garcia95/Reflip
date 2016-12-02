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

$(document).on("turbolinks:load", function(){
  $(document).on('keyup', '#percentOffer', function(){
    var offerPercent = Number($('#percentOffer').val()) * 0.01
    var offerPrice = Number($('#estimate').val()) * offerPercent
    $('#offerPrice').val(offerPrice)
  });
});

$(document).on("turbolinks:load", function(){
  $(document).on('keyup', '#percentLoan', function(){
    var loanPercent = Number($('#percentLoan').val()) * 0.01
    var totalLoan = Number($('#estimate').val()) * loanPercent
    $('#loanTotal').val(totalLoan)
  });
});

$(document).on("turbolinks:load", function(){
  $(document).on('keyup', '#loanRatePercent', function(){
    var loanRate = Number($('#loanRatePercent').val()) * 0.01
    var totalLoan = Number($('#loanTotal').val())
    var loanPayment = ((totalLoan * loanRate) + totalLoan) / 12
    $('#loanPayment').val(loanPayment)
  });
});

$(document).on("turbolinks:load", function(){
  $(document).on('keyup', '#loanRatePercent', function(){
    var loanRate = Number($('#loanRatePercent').val()) * 0.01
    var totalLoan = Number($('#loanTotal').val())
    var holdTime = Number($('#holdTime').val())
    var loanPayment = ((totalLoan * loanRate) + totalLoan) / 12
    var totalLoanPayment = loanPayment * holdTime
    $('#loanTotalCost').val(totalLoanPayment)
  });
});


// MATH for Holding Costs

$(document).on("turbolinks:load", function(){
    $(document).on('keyup', '#propertyTaxesYearly', function(){
      var propertyTaxesYearly = Number($('#propertyTaxesYearly').val())
      var propertyTaxesMonthly = propertyTaxesYearly / 12
      $('#propertyTaxesMonthly').val(propertyTaxesMonthly)
    });
  });

  $(document).on("turbolinks:load", function(){
    $(document).on('keyup', '#hoaYearly', function(){
      var hoaYearly = Number($('#hoaYearly').val())
      var hoaMonthly = hoaYearly / 12
      $('#hoaMonthly').val(hoaMonthly)
    });
  });

  $(document).on("turbolinks:load", function(){
    $(document).on('keyup', '#insuranceYearly', function(){
      var insuranceYearly = Number($('#insuranceYearly').val())
      var insuranceMonthly = insuranceYearly / 12
      $('#insuranceMonthly').val(insuranceMonthly)
    });
  });

  $(document).on("turbolinks:load", function(){
    $(document).on('keyup', '#miscellaneousYearly', function(){
      var miscellaneousYearly = Number($('#miscellaneousYearly').val())
      var miscellaneousMonthly = miscellaneousYearly / 12
      $('#miscellaneousMonthly').val(miscellaneousMonthly)
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
  $('#totalHoldingCostMonthly').val(totalHoldingCostYearly);
});

  // $(document).on("blur", ".holdingCostsMonthly", function() {
  //     var sum = 0;
  //     $(".holdingCostsMonthly").each(function(){
  //         sum += +$(this).val();
  //     });
  //     $('#totalHoldingCostMonthly').val(sum);
  // });

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

// Total Costs
$(document).on("keyup", ".costsTotal", function() {
  var sum = 0;
  $(".costsTotal").each(function(){
      sum += +$(this).val();
  });
  $('#totalAllCost').val(sum);
});

// Dashboard Number Display

// Total Financial Cost
$(document).on("turbolinks:load", function(){
  $(document).on('keydown', "#loanPayment", function(){
    $("#financialTotalCost").text('$'+ $(this).val());
  });
 });

// Total Holding Cost
 $(document).on("turbolinks:load", function(){
   $(document).on('keydown', "#totalHoldingCostYearly", function(){
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

  //  .toFixed[3]
