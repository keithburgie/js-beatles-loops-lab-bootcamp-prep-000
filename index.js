// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  
  for (let i = 1; i < musicians.length; i++) {
    array.push(`${musicians} plays ${instruments}`);
  }
  return array;
}