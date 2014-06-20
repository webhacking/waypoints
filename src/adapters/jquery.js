(function() {
  'use strict'

  var $ = window.jQuery

  function JQueryAdapter(element) {
    this.$element = $(element)
  }

  $.each([
    'height',
    'off',
    'offset',
    'on',
    'outerHeight',
    'outerWidth',
    'scrollLeft',
    'scrollTop',
    'width'
  ], function(i, method) {
    JQueryAdapter.prototype[method] = function() {
      var args = Array.prototype.slice.call(arguments)
      return this.$element[method].apply(this.$element, args)
    }
  })

  $.each([
    'extend',
    'inArray',
    'isEmptyObject'
  ], function(i, method) {
    JQueryAdapter[method] = $[method]
  })

  window.Waypoint.adapters.push({
    name: 'jquery',
    Adapter: JQueryAdapter
  })
  window.Waypoint.Adapter = JQueryAdapter
}())