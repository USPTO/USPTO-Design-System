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
         

         
        
         //::::::::::
    });