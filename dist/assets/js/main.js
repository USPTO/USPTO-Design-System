// just a static asset for now


$(function () {

  // initialize popover
  $('[data-toggle="popover"]').popover();
  // initialize tooltip
  $('[data-toggle="tooltip"]').tooltip();

  //add active class to side nav li and aria-current to a tag
  var file = location.pathname.split('/').pop() // set `current` page
  $('ul.sidenav a[href="' + file + '"]').parent('li').addClass('active')
  $('ul.sidenav a[href="' + file + '"]').attr('aria-current', 'page')

  //add active class to top nav based on the side nav 
  if ($("ul.sidenav")[0]){
  var parentFolder = $('ul.sidenav a').attr('data-parent');
  var locationFolder = location.pathname.split("/")[1];
  if (parentFolder.toLowerCase() === locationFolder) {
    $('ul.navbar-nav li a[title=' + parentFolder + ']').parent().addClass('active');
  }
}



  //copy to clipboard  
  var clipboard = new ClipboardJS('.clipboard');
  clipboard.on('success', function (e) {
    $(e.trigger).html("<span class=\"material-icons\">check</span> Copied!");
    $(e.trigger).toggleClass('btn-light btn-success');
    e.clearSelection();
    setTimeout(function () {
      $(e.trigger).html("<span class=\"material-icons\">content_copy</span> Copy Code");
      $(e.trigger).toggleClass('btn-light btn-success');
    }, 2500);

  });
  // dropdown on change for left nav in mobile view
  $("#leftSideNav").change(function () {
    location.href = $(this).val();
    var file = location.pathname.split('/').pop()
    console.log(location.href)
    console.log(file)
  })
  function $controls(el) {
    return $('#' + el.getAttribute('aria-controls'))
  };
  
  /*
   * Add collapsible panel functionality
   */
  $('body').on('click', '#collapse-all', function (e) {
    e.preventDefault(e);
    $('#myAccordion .collapse').collapse('hide');
  });
  $('body').on('click', '#expand-all', function (e) {
    e.preventDefault(e);
    $('#myAccordion .collapse').collapse('show');
  });
  
  $('body').on('click', '#settingExample1 .dropdown-item', function (e) {  
    $('#settingExample1 .dropdown-item').removeClass('active');  
  });


  /*
   * Show hide left navigation on multistep page
   */
  $('body').on('click', '.showLeftNavigation', function (e) {
    e.preventDefault(e);
    $('.leftNavigation').toggleClass('d-none d-lg-block d-xl-block');
  });

  /*
   * Credit card validation
   */

  $('.creditCardText').keyup(function() {
    var foo = $(this).val().split("-").join(""); // remove hyphens
    if (foo.length > 0) {
      foo = foo.match(new RegExp('.{1,4}', 'g')).join("-");
    }
    $(this).val(foo);
  });

  //Change custom scrollbar

$("body").on("change", "#chooseScrollbar", function (e) {
  e.preventDefault(e);
  
  var valueSelected = this.value;
  if (valueSelected === "") {
    $("#myScrollBar").removeClass();
  } else {
    $("#myScrollBar").removeClass();
    $("#myScrollBar").addClass("scrollbar-custom-" + valueSelected);
  }

   if (valueSelected === "custom") {
    $("#myScrollBar").removeClass();
     $("#myScrollBar").addClass("scrollbar-custom");
  } 
  if ($("input#smallScrollbar").is(":checked")) {
    $("#myScrollBar").addClass("scrollbar-custom-sm");
  }

});

$('body').on('click', 'input#smallScrollbar', function (e) {  
  if ($("input#smallScrollbar").is(":checked")) {
    $("#myScrollBar").addClass("scrollbar-custom-sm");
  } else {
    $("#myScrollBar").removeClass("scrollbar-custom-sm");
  }
});

//got to top
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if ($(this).scrollTop() > 200) {
    $("#pagetop").fadeIn();
  } else {
    $("#pagetop").fadeOut();
  }
});

$("#pagetop").bind("click", function (event) {
 // $(this).fadeOut();
  var $anchor = $(this);  
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $($anchor.attr("href")).offset().top,
      },
      1200,
      "easeInOutExpo"
    );
  event.preventDefault();
});

// add new row
$("body").on("click", ".btn-addRow1", function (e) {
  var newrow =
  '<tr><td><input type="text" class="form-control form-control-sm" /></td><td><input type="text" class="form-control form-control-sm" /></td><td><input type="text" class="form-control form-control-sm col-9 d-inline " /> <button type="button" data-container="body" title="" data-toggle="tooltip" data-original-title="Submit" class="btn btn-icon-only p-0"><i class="material-icons text-success">check_circle</i></button><button type="button" data-container="body" title="" data-toggle="tooltip" data-original-title="Remove" class="btn btn-icon-only p-0"><i class="material-icons text-danger">remove_circle_outline</i></button></td></tr>';
$('.addNewRow').before(newrow);
$("[data-toggle=tooltip]").tooltip();
});
$("body").on("click", ".btn-addRow", function (e) {
  var newrow =
    '<tr><td><input type="text" class="form-control form-control-sm" /></td><td><input type="text" class="form-control form-control-sm" /></td><td><input type="text" class="form-control form-control-sm col-9 d-inline " /> <button type="button" data-container="body" title="" data-toggle="tooltip" data-original-title="Submit" class="btn btn-icon-only p-0"><i class="material-icons text-success">check_circle</i></button><button type="button" data-container="body" title="" data-toggle="tooltip" data-original-title="Remove" class="btn btn-icon-only p-0"><i class="material-icons text-danger">remove_circle_outline</i></button></td></tr>';
  $(this).parent().parent().after(newrow);
  $("[data-toggle=tooltip]").tooltip();
});

})
/*
   * Character count
   */

$('#textinput, #textareainput').keyup(function () {
  var max = $(this).siblings().children('#charNum').attr('data-value');
  //console.log(max);
  var len = $(this)
    .val()
    .length;

  if (len >= 1 & len <= max) {
    var char = max - len;
    $(this).siblings().children('#charNum').text(char);
     $(this).siblings().children('#charTxt').text("characters left");
    $(this).removeClass('is-invalid');
    $(this)
      .siblings('small.help-text')
      .removeClass('invalid-feedback');
  } else if (len > max) {
    var char = max - len;
    char = Math.abs(char);
     $(this).siblings().children('#charNum').text(char);
     $(this).siblings().children('#charTxt').text("characters over limit");
    $(this).addClass('is-invalid');
    $(this)
      .siblings('small.help-text')
      .addClass('invalid-feedback');
  } else if (len === 0) {
     $(this).siblings().children('#charNum').text(max);
     $(this).siblings().children('#charTxt').text("characters allowed");
    $(this).removeClass('is-invalid');
    $(this)
      .siblings('small.help-text')
      .removeClass('invalid-feedback');
  }

});




