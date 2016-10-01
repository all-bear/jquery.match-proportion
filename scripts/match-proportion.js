/*global jQuery, document, JSON*/

(function ($) {
  var defaults = {
    initEvents: ['ready', 'page:load', 'shown.bs.modal', 'shown.bs.tab', 'resize'],
    dataAttributeHolder: 'data-match-proportion',
    fixedSide: 'width'
  };

  if (typeof $.fn.matchProportionDefaults !== 'undefined' && $.fn.matchProportionDefaults) {
    defaults = $.extend({}, defaults, $.fn.matchProportionDefaults)
  }

  $.fn.matchProportion = function (options) {
    var flexibleSide = defaults.fixedSide == 'width' ? 'height' : 'width',
      step = $(this)[defaults.fixedSide]() / options[defaults.fixedSide],
      flexibleSideSize = options[flexibleSide] * step;

    $(this)[flexibleSide](flexibleSideSize);
  };

  $(document).on(defaults.initEvents.join(' '), function () {
    $('[' + defaults.dataAttributeHolder + ']').each(function (i, el) {
      var matchEl = $(el),
        initData = JSON.parse(matchEl.attr(defaults.dataAttributeHolder));

      matchEl.matchProportion(initData);
    });
  });
})(jQuery, document);
