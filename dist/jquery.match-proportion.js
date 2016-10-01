/*! jquery.match-proportion - v0.1.0 - 2016-10-01
* https://github.com/all-bear/jquery.match-proportion
* Copyright (c) 2016 Oleh Birjukov; Licensed MIT */
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
