// just a static asset for now
$(function () {
  var file = location.pathname.split('/').pop() // set `current` page
  $('a[href="' + file + '"]').parent('li').addClass('active')
  $('a[href="' + file + '"]').attr('aria-current', 'page')

  var clipboard = new ClipboardJS('.clipboard');

  clipboard.on('success', function (e) {
    $(e.trigger).text("Copied!");
    e.clearSelection();
    setTimeout(function () {
      $(e.trigger).text("Copy Code");
    }, 2500);
  });


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

