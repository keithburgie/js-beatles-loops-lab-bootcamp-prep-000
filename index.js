// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  let array = [];
  let i = 0;
  while(array.length < facts.length) {
    array.push(facts[i].concat("!!!"))
  }
  return array;
}

var myStringArray = ["Hello","World"];
    var arrayLength = myStringArray.length;
    for (var i = 0; i < arrayLength; i++) {
        console.log(myStringArray[i]);
        //Do something
    }