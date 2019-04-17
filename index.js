// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  
  for (let i = 1; musicians < 4; musicians++) {
    array.push(`${musicians} plays ${instruments}`);
  }
  return array;
}