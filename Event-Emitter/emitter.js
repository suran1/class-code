var emitter = {  // bulding an event emitter. This emits ('broadcasts') events ('message')
                  // and registers listeners 'on' references listeners
                  // 'emit' broadcasts

  events: {}, //this stores the defination of the function- it doesnot execute i
  on: on,  // the function 'on'
  emit
};


//create a function that registers listeners
// the function name is 'on'

function on (eventType, listenerFunc){

  // check if function already exists in our emitter

  if(!this.events[eventType]) {
    this.events[eventType]= [listenerFunc]
  }else {
    this.events[eventType].push(listenerFunc);

  }
}

function emit (eventType) {

  //check if the eventType already exist?
  // if does't already exit we'r going to ignore it 
  if(this.events[eventType]){
    for(var i = 0; i< this.events[eventType].length; i++)
    {
      this.events[eventType][i]();

    }
  }
}


module.exports = emitter;
