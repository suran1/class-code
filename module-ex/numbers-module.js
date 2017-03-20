module.exports = function (nbr, arr){
  var result = [];
  var nbrIndex= arr.indexOf(nbr);

  if(nbr === arr[0]){
    result.push(arr[arr.length-1]);
    result.push(arr[nbrIndex + 1]);

  }else if(nbr === arr[arr.length -1]) {

    result.push(arr[nbrIndex -1]);
    result.push(arr[0]);
  }else {
    result.push(arr[nbrIndex-1]);
    result.push(arr[nbrIndex +1]);
  }
  return result;
}
