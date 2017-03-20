var math = require('../math.js');
var logger = require('../logger.js');

describe('Math', function(){
  describe('basic operation', function(){
    describe('Add', function(){


      beforeEach(function(){
        spyOn(logger, 'logMessage').and.callFake(function(){

          console.log('FAKE LOGGER');

        });
      });



    it('should return the sum of two numbers', function(){

      var sum = math.add(2,3);

      expect(logger.logMessage).toHaveBeenCalled();

      expect(sum).toEqual(5);

    });
  });
});
});
