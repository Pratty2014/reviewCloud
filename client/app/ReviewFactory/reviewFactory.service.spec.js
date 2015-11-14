'use strict';

describe('Service: SoundFactory', function () {

  // load the service's module
  beforeEach(module('reviewCloudApp'));

  // instantiate service
  var SoundFactory;
  beforeEach(inject(function (_SoundFactory_) {
    SoundFactory = _SoundFactory_;
  }));

  it('should do something', function () {
    expect(!!SoundFactory).toBe(true);
  });

});
