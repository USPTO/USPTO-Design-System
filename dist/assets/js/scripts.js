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
    
    });