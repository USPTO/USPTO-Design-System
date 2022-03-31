$( document ).ready(function() {
 
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
               drawCallback: function () { 
               $('div.dataTables_length select').removeClass('custom-select-sm');       
             }       
       });       
      // $("div.myButton").html("<button class='btn btn-outline-secondary btn-sm tablePage-btn d-none'>Go to table page</button> <button class='btn btn-primary btn-sm' disabled>None selected</button>");
         $('.sorting_disabled').removeClass('sorting_asc');
         

         //::::::::::
    });