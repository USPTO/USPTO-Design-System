$( document ).ready(function() {
 
    //drang n drop file upload
    $('.input-upload-area').on('dragover', function(e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).addClass('dragover');
    });
    
    $('.input-upload-area').on('dragleave', function(e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).removeClass('dragover');
    });
    
    $('.input-upload-area').on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      $('.input-file').click();
    });

        //dataTable
 $('#dataTableExample').DataTable({  
  "sDom": '<"row view-filter"<"col-sm-12"<"float-left"i><"float-right"f><"clearfix">>>t<"row view-pager"<"col-sm-12"<"float-left"l><"float-right"p>>>',  
 "language": {
             "lengthMenu": "_MENU_",
             "zeroRecords": "No records found",
             "info":           "Showing _START_ to _END_ of _TOTAL_ records",
             "infoEmpty": "No records found",
             "infoFiltered": "(filtered from _MAX_ total records)",
             paginate: {
              next: '<i class="material-icons">navigate_next</i>',
              previous: '<i class="material-icons">navigate_before</i>'  
            }
         },
         "lengthMenu": [ [10, 25, 50, 75, 100], ["10 per page", "25 per page", "50 per page", "75 per page", "100 per page"] ],
         drawCallback: function () {
         $('div.dataTables_length select').removeClass().addClass('form-control'); 
         $('#dataTableExample_paginate i.material-icons').parent().addClass('md-icon');
       }
       });

      

        $('#dataTableTest').DataTable({
        "sDom": '<"row view-filter"<"col-sm-12"<"float-left"i><"float-right"<"myButton">><"clearfix">>>t<"row view-pager"<"col-sm-12"<"float-left"l><"float-right"p>>>',
              "language": {       
                   "lengthMenu": "_MENU_",       
                   "zeroRecords": "No records found",       
                   "info":           "Showing _START_ to _END_ of _TOTAL_ records",       
                   "infoEmpty": "No records found",       
                   "infoFiltered": "(filtered from _MAX_ total records)"       
               },       
               "lengthMenu": [ [25, 50, 100, 250, 1000], ["25 per page", "50 per page", "7100 per page", "250 per page", "1000 per page"] ],
       
                       columnDefs: [{       
             targets: 0, orderable: false       
           }], 
           destroy: true,      
               drawCallback: function () { 
               $('div.dataTables_length select').removeClass('custom-select-sm');       
             }       
       });       
      // $("div.myButton").html("<button class='btn btn-outline-secondary btn-sm tablePage-btn d-none'>Go to table page</button> <button class='btn btn-primary btn-sm' disabled>None selected</button>");
         $('.sorting_disabled').removeClass('sorting_asc');
         

       
// Phone number1 with dropdwon
var phoneInputID = 'input[name="PhoneNumber"]';
var input = document.querySelector(phoneInputID);

  var iti = window.intlTelInput(input, {
     allowDropdown: false,    
    formatOnDisplay: true,    
    hiddenInput: "full_number",    
     nationalMode: false,
     onlyCountries: ['us'],    
     separateDialCode: true,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.14/js/utils.js"
  });
  var phoneInputIDNew = 'input[name="PhoneNumberNew"]';
var inputNew = document.querySelector(phoneInputIDNew);

  var iti = window.intlTelInput(inputNew, {
     allowDropdown: false,    
    formatOnDisplay: true,    
    hiddenInput: "full_number",    
     nationalMode: false,
     onlyCountries: ['us'],    
     separateDialCode: true,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.14/js/utils.js"
  });

  var phoneInputIDMobile = '#mobile';
var inputMobile = document.querySelector(phoneInputIDMobile);

  var iti = window.intlTelInput(inputMobile, {
     allowDropdown: false,    
    formatOnDisplay: true,    
    hiddenInput: "full_number",    
     nationalMode: false,
     onlyCountries: ['us'],    
     separateDialCode: true,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.14/js/utils.js"
  });
  var phoneInputIDWork = '#work';
var inputWork = document.querySelector(phoneInputIDWork);

  var iti = window.intlTelInput(inputWork, {
     allowDropdown: false,    
    formatOnDisplay: true,    
    hiddenInput: "full_number",    
     nationalMode: false,
     onlyCountries: ['us'],    
     separateDialCode: true,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.14/js/utils.js"
  });


  $(phoneInputID).on("countrychange", function(event) {
    // Get the selected country data to know which country is selected.
    var selectedCountryData = iti.getSelectedCountryData();
    // Get an example number for the selected country to use as placeholder.
    newPlaceholder = intlTelInputUtils.getExampleNumber(selectedCountryData.iso2, true, intlTelInputUtils.numberFormat.INTERNATIONAL),

      // Reset the phone number input.
      iti.setNumber("");

    // Convert placeholder as exploitable mask by replacing all 1-9 numbers with 0s
    mask = newPlaceholder.replace(/[1-9]/g, "0");

    // Apply the new mask for the input
   // $(this).mask(mask);
   $('input[name="PhoneNumber"]').mask(mask);
   $('input[name="PhoneNumberNew"]').mask(mask);
   $('#mobile').mask(mask);
   $('#work').mask(mask);
    
   // console.log($(this).mask(mask));
  });

  // When the plugin loads for the first time, we have to trigger the "countrychange" event manually, 
  // but after making sure that the plugin is fully loaded by associating handler to the promise of the 
  // plugin instance.

  iti.promise.then(function() {
    $(phoneInputID).trigger("countrychange");
  });  


  //Add new phone number
$("body").on("click", ".add-new-phone-btn", function (e) {
  $('.newPhoneRow').removeClass('d-none');
  
if ($("form#enter-phone").hasClass("added")){
  $('#phoneNumber-Modal').modal('show');
//alert('acced');
return false;
}
$("form#enter-phone").addClass("added");
});
$("body").on("click", ".delete-new-phone-btn", function (e) {
  $('.newPhoneRow').addClass('d-none');
  $("form#enter-phone").removeClass("added");
});

//Add new phone number1
$("body").on("click", ".add-new-phone-btn1", function (e) {
  $('.newPhoneRow1').removeClass('d-none');
  
if ($("form#enter-phone1").hasClass("added")){
  $('#phoneNumber-Modal').modal('show');
//alert('acced');
return false;
}
$("form#enter-phone1").addClass("added");
});
$("body").on("click", ".delete-new-phone-btn1", function (e) {
  $('.newPhoneRow1').addClass('d-none');
  $("form#enter-phone1").removeClass("added");
});




        
         //::::::::::
    });