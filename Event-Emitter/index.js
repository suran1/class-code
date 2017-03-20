var emitter = require('./emitter');

emitter.on('winter', function (){
  console.log('Winter is comming');

});

emitter.on('call-the-hogs', function () {
  console.log('Woo pig Sooie!');

});


emitter.emit('winter');
emitter.emit('call-the-hogs');
