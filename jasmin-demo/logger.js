'use strict';

function logMessage(message){

  console.log('A thing was logged: ', message);


}

function differentLog(message){

}

module.exports = {
  logMessage: logMessage,
  differentLog: differentLog
}
