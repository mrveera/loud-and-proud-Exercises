/*
created by veera on 31-10-2017
*/

let matchTheFollowing = function (firstHalf,secondHalf) {
  let resultObj = {};
  let resultObjStr='';
  for(let index=0;index<firstHalf.length;index++){
    let element = firstHalf[index];
    let lastFour = element.substr(element.length - 4);
    resultObj[lastFour]=element.substring(0,element.length-4);
   }
  for(let index=0;index<secondHalf.length;index++){
    let element = secondHalf[index];
    let firstFour = element.substr(0,4);
    resultObjStr +="\n"+resultObj[firstFour]+element;
  }
  return resultObjStr;
}

module.exports=matchTheFollowing;
