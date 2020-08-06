// just a static asset for now
$(function () {

  $('.current-year').text(new Date().getFullYear())

  var file = location.pathname.split('/').pop() // set `current` page
  $('a[href="' + file + '"]').addClass('active').attr('aria-current', 'page')

  $('.toast').toast('show')

  $('[data-toggle="tooltip"]').tooltip()

  sidenavBehavior()

})

function $controls (el) {
  return $('#' + el.getAttribute('aria-controls'))
}

function sidenavBehavior () {

  var classCollapsed = 'sidenav--collapsed'
  var sidenavs = $('.sidenav')
  var sidenavToggles = $('.sidenav__toggle')
  var mqList = window.matchMedia('(min-width: 992px)') // sm=576, md=768, lg=992

  var autoCollapse = function (e) {
    sidenavs.toggleClass(classCollapsed, e.matches === false)
    sidenavs.each(function () { updateState($(this)) })
  }

  var updateState = function (nav) {
    var collapsed = nav.hasClass(classCollapsed)
    sidenavToggles
      .filter('[aria-controls="' + nav.attr('id') + '"]')
      .attr('aria-expanded', !collapsed)
    if (collapsed) {
      // expand section[aria-expanded]
      nav.find('.sidenav__section__toggle.collapsed').click()
    }
  }

  mqList.addListener(autoCollapse)
  autoCollapse(mqList)

  sidenavToggles.each(function () {
    updateState($controls(this))
  })

  sidenavToggles.on('click', function () {
    // might consider turning off auto-collapse if user interacts?
    var nav = $controls(this)
    nav.toggleClass(classCollapsed)
    updateState(nav)
  })

}