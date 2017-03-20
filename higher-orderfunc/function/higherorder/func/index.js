function filterCuerrentMember(arr){
var currentMemebers = arr.filter(function(element){

  return element.isMember === true;

});

return currentMemebers;
}
console.log(filterCuerrentMember(users));

function requestId(bodyID, parasmID, reqBody){

  var valid false;

  if((bodyID.stoString() !== paramsID.toString()) || (typeof bodyID !== 'number')){
    return valid;

  }
  return valid = true;

}


function singleMember(arr, id){
  var person = arr.filter(function(element){

    if(element.id.toString()=== id.toString()){

      return element;

    }
  });
  return singleMember;
}


function compareData (user, body){
  var canUpdate = false;
  var isEquel = true;
  var bodykeys = [];
  var memberskeys = [];



  bodykeys = object.keys(user);
bodykeys = bodykeys.sort();

memberskeys = Object.keys(user);
memberskeys = memberskeys.sort();


if(bodykeys.lenght > memberkeys.length){

  return canUpdate;

}

  var keycheck = bodykeys.map(function(element){
    if(memberkeys.indexOf(element) !== -1){
      return (element);

    }else {
      return -1;

    }
  });


  if ( ( keyCheck.indexOf(-1) !== -1 ) || ( keyCheck.indexOf('isMember') === -1 )) {
    return canUpdate;
} else {
    var i = 0;
    while (isEqual && i < keyCheck.length) {
        if (keyCheck[i] !== 'isMember'){
            if (user[keyCheck[i]] !== body[keyCheck[i]]){
                isEqual = false;
            }
        }
        i++;
    }
}

if (isEqual) {
    canUpdate = true;
}

return canUpdate;
}


module.exports = {
                getMembers : getMembers,
                checkRequestID : checkRequestID,
                findPerson : findPerson,
                compareData : compareData
            };
