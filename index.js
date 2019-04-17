// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  
  for (musicians = 0; musicians < 3; musicians++) {
    array.push(`${musicians} plays ${instruments}`);
  }
  return array;
}