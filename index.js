function theBeatlesPlay(musicians,instruments){
  var array = [];
  for (let i = 0; i < musicians.length; i++ ){
    array.push (musicians[i] + ' plays ' + instruments[i])
  }
  return array
}

function johnLennonFacts(facts){
  var i = 0
  var string = "!!!"
  while( facts.length > 0 && i < facts.length ){

    facts[i]= `${facts[i]}!!!`
    i++
  }
return facts
}

function iLoveTheBeatles(number){
  var array = [];
  do {
    array.push ("I love the Beatles!")
    number++;
  } while (number < 15);
  return array
}
