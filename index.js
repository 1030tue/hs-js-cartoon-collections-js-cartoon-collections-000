function dwarfRollCall(dwarves){
  var array = [];
  for(var i = 0; i < dwarves.length; i++){
    array.push([i+1]+". "+dwarves[i]+" ");
  }
  return array.join('');
}


function summonCaptainPlanet(planeteerCall){
  var array = [];
  var i = 0;
  while(i < planeteerCall.length){
    array.push(planeteerCall[i].toUpperCase() + "!");
    i++;
  }
  return array;
}



function longPlaneteerCalls(words){
  for(var i = 0; i < words.length; i++){
    if(words[i].length > 4){
      return true;
    }
  }
  return false;
}

function findTheCheese(foods){
  for(var i = 0; i < foods.length; i++){
  if(foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert"){
    return foods[i];
  }
  }
  return "no cheese!";
}