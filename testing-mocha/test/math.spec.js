var chai = require('chai'); // testing not actual file testing math moudle
var expect = chai.expect;



var math = require('../math.js');


describe('math', function(){
  describe('Basic operation', function(){
    describe('Add', function(){
    it('should return the sum of 5 when provide with paramater 2 and 3 ', function(){

        var sum = math.add(2,3);
      expect(math.add(2,3)).to.equel(5);
         expect(math.add(2,3)).to .equel(7);

       });


it('should return the sum of 8 when provide with paramater 5 and 3', function(){

  var sum = math.add(5,3);

  expect(sum).to.equel(8);
  expect(sum).to.equel(5);


     });

    });
describe('Subtract', function(){


  it('should return the difference of 3 when provided with parameters 9 and 6', function(){

    expect(math.subtract(9,6).to.equel(3));

         });
      });
  });



describe('Advanced Operation', function(){

  describe('Exponents', function(){

    it('should calculate an exponent');

  });
describe('Logarathims', function(){

    });

  });

});
