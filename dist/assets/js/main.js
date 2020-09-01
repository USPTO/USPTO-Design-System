// just a static asset for now


$(function () {

  //add active class to side nav li and aria-current to a tag
  var file = location.pathname.split('/').pop() // set `current` page
  $('ul.sidenav a[href="' + file + '"]').parent('li').addClass('active')
  $('ul.sidenav a[href="' + file + '"]').attr('aria-current', 'page')

  //add active class to top nav based on the side nav 
  var parentFolder = $('ul.sidenav a').attr('data-parent');
  var locationFolder = location.pathname.split("/")[1];
  if(parentFolder.toLowerCase() === locationFolder ){
       $('ul.navbar-nav li a[title=' + parentFolder + ']').parent().addClass('active');
  }

  //copy to clipboard  
  var clipboard = new ClipboardJS('.clipboard');
  clipboard.on('success', function (e) {
    $(e.trigger).text("Copied!");
    e.clearSelection();
    setTimeout(function () {
      $(e.trigger).text("Copy Code");
    }, 2500);
  });

  // dropdown on change for left nav in mobile view
  $("#leftSideNav").change(function () {
    location.href = $(this).val();
    var file = location.pathname.split('/').pop()
    console.log(location.href)
    console.log(file)
  })
})

function $controls(el) {
  return $('#' + el.getAttribute('aria-controls'))
};

