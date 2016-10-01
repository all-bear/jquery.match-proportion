/*global jasmine, describe, it, $, expect, beforeEach*/

'use strict';

var fixtures  = jasmine.getFixtures();

// given relative path test/fixtures/ to karma
fixtures.fixturesPath = 'base/test/fixtures/';

describe('simple match', function () {
  beforeEach(function() {
    fixtures.load('index.html');
  });

  describe('match height', function () {
    it('should match height', function () {
      var target = $('#test-block-match-width'),
        proportionData = {
          width: 3,
          height: 7,
          fixedSide: 'width'
        };

      target.matchProportion(proportionData);

      expect(target.height()).toBeCloseTo((target.width() / proportionData.width) * proportionData.height, 0.1);
    });
    it('should match width', function () {
      var target = $('#test-block-match-width'),
        proportionData = {
          width: 3,
          height: 7,
          fixedSide: 'height'
        };

      target.matchProportion(proportionData);

      expect(target.width()).toBeCloseTo((target.height() / proportionData.height) * proportionData.width, 0.1);
    });
  });
});
