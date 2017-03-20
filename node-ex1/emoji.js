var emoji = require('node-emoji');
function loopEmoji(){
  var emojis= [];
  for (var i= 0; i<10; i++){
    emojis.push(emoji.random().emoji);

  }
  for(var i = 0; i<emojis.length; i++){
    console.log(emojis[i]);
  }
}
loopEmoji();
