// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var array = [];
  while(array.length < facts.length) {
    array.push(facts.concat("!!!"))
  }
  console.log(facts.length)
  return array;
}