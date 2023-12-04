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

    
    $('#multiFileUpload').on('change', function(e) {
      e.preventDefault();
      $('.input-upload-area, .successArea').addClass('d-none');
      $('.progressArea').removeClass("d-none"); 
      setTimeout(function() {
      $('.input-upload-area, .progressArea').addClass('d-none');
      $('.successArea').removeClass("d-none");
      $('.newFile').addClass('table-success').removeClass('d-none');
      $('.newFile1').removeClass('d-none');
    }, 1500); 
    setTimeout(function() {
      $('.successArea, .progressArea').addClass('d-none');
      $('.input-upload-area').removeClass("d-none");
      $('.newFile').removeClass('table-success');
      $('.newFile1').removeClass('table-success');
    }, 4000);
    
    });
    $('.cancelMultiUpload').on('click', function(e) {
      // e.preventDefault();
      // e.stopPropagation();
      // $('.successArea, .progressArea').addClass("d-none");
      // $('.input-upload-area').removeClass('d-none');
      // $('.newFile').removeClass('table-success').addClass('d-none');
      // $('.newFile1').addClass('d-none');
    });
   
//:::: NEW file upload
//Number of file
function getTotalDocs() {  
  var rowCount = $('#FileUploadTable tbody tr').length;
  $('#totalDocuments').html(rowCount);
}



$("body").on("click", ".deleteFile-btn", function (e) {
  e.preventDefault(e);
  $(this).parents('td').parents('tr').addClass('deleteThisRow')
  var fileName = $(this).parents('td').parents('tr').children('td').eq(1).text();
  $('.deleteFileName').html(fileName);
$('#deleteFileModal').modal();
});
$("body").on("click", ".closeUploadedFile", function (e) {
  e.preventDefault(e);
  $('.deleteThisRow').removeClass();  
});
$("body").on("click", ".deleteUploadedFile", function (e) {
  e.preventDefault(e);
  $('.deleteThisRow').remove(); 
  $('#deleteFileModal').modal('hide');
  if ( $('#FileUploadTable tbody').children().length > 0 ) {
    getTotalDocs();   
} else {
  $('#FileUploadTable tbody').html("<tr class='noFilesUploaded'><td class='text-center'>No files uploaded</td></tr>");
  $('#totalDocuments').html("0");
}
$(".topUploadMsg").html("");
var deletedFile = $('.deleteFileName').text();
var alertMsg = "<div class='mb-2 alert alert-success alert-sm d-flex' role='alert'><div class='alert-icon'><i class='material-icons'>check_circle</i></div><div class='flex-grow-1'>File <strong><i>"+ deletedFile +"<i></strong> has been removed.   </div>    <div class='mb-auto'>    <button type='button' class='close' data-dismiss='alert' aria-label='Close'>      <span aria-hidden='true'>×</span>    </button>    </div>  </div> "
$(".topUploadMsg").append(alertMsg);
});


$('#multiFileUpload1').on('change', function(e) {
  e.preventDefault();
  $(".topUploadMsg").html("");
  $(this).parents("div.multiple-upload-primary").css("opacity", ".4");
  $('.newFile2').removeClass('d-none');
  $('.noFilesUploaded').remove();
var newFileTR = "<tr class='newFile2 successTr'><td style='width:30px'><div class='spinner-border spinner-border-sm align-bottom fileUploadSpinner' role='status'>  <span class='sr-only'>Loading...</span></div><i class='material-icons align-bottom text-success d-none' role='img'  title='Uploaded successfully'>check</i></td><td class='align-middle'>statement_1.pdf</td>	  <td style='width:30px'><a href='statement_1.pdf' target='_blank' data-toggle='tooltip' data-placement='top' title='Download' class='d-inline-block'><i class='material-icons text-secondary  d-none'>download</i></a></td>    <td style='width:30px'><a href='#' target='_blank' data-toggle='tooltip' data-placement='top' title='Delete' class='d-inline-block deleteFile-btn'><i class='material-icons text-secondary d-none'>delete</i></a></td></tr><tr class='newFile2 errorTr'><td style='width:30px'><div class='spinner-border spinner-border-sm align-bottom fileUploadSpinner' role='status'>  <span class='sr-only'>Loading...</span></div><i class='material-icons align-bottom text-danger d-none' role='img'  title='Error uploading'>error</i></td><td class='align-middle'>another_file.zip</td>	    <td class='text-right'  style='width:30px'>&nbsp;</td>      <td class='text-right'  style='width:30px'>  <a href='#' target='_blank' data-toggle='tooltip' data-placement='top' title='Delete' class='d-inline-block deleteFile-btn'><i class='material-icons text-secondary d-none'>delete</i></a></td></tr><tr class='newFile2 successTr'><td  style='width:30px'><div class='spinner-border spinner-border-sm align-bottom fileUploadSpinner' role='status'>  <span class='sr-only'>Loading...</span></div><i class='material-icons align-bottom text-success d-none' role='img'  title='Uploaded successfully'>check</i></td><td class='align-middle'>File_name.xml</td>	      <td  style='width:30px'><a href='File_name.xml' target='_blank' data-toggle='tooltip' data-placement='top' title='Download' class='d-inline-block'><i class='material-icons text-secondary d-none'>download</i></a></td><td  style='width:30px'><a href='#' target='_blank' data-toggle='tooltip' data-placement='top' title='Delete' class='d-inline-block deleteFile-btn'><i class='material-icons text-secondary d-none'>delete</i></a></td></tr>"
$("#FileUploadTable tbody").prepend(newFileTR);
//addContainerSpinner(".uploadArea", 114000);
getTotalDocs();
  setTimeout(function() {
   $(".fileUploadSpinner").addClass("d-none");
   $('.newFile2 i').removeClass('d-none');
   $(".successTr").addClass("table-success");
   $(".errorTr").addClass("table-danger");
   $("div.multiple-upload-primary").css("opacity", "1");

var alertMsg = "<div class='mb-2 alert alert-danger alert-sm d-flex' role='alert'>    <div class='alert-icon'><i class='material-icons'>error</i></div>    <div class='flex-grow-1'>      Something went wrong, 1 document failed to upload.    </div>    <div class='mb-auto d-none'>      <button type='button' class='close' data-dismiss='alert' aria-label='Close'>        <span aria-hidden='true'>×</span>      </button>    </div>  </div><div class='mb-2 alert alert-success alert-sm d-flex' role='alert'><div class='alert-icon'><i class='material-icons'>check_circle</i></div><div class='flex-grow-1'>      2 documents successfully uploaded.   </div>    <div class='mb-auto d-none'>    <button type='button' class='close' data-dismiss='alert' aria-label='Close'>      <span aria-hidden='true'>×</span>    </button>    </div>  </div>"
$(".topUploadMsg").append(alertMsg);
$('[data-toggle="tooltip"]').tooltip();
  }, 4000);
  setTimeout(function() {
    $(".successTr").removeClass("table-success");
    $(".successTr, errorTr").removeClass();
  }, 6000);
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