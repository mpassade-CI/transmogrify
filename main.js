const biggify = function(num){
  return num+9000
}

const nasafy = function(num){
  const x = []
    for (let i=num; i>0; i--){
      x.push(i)
    }
    x.push('Blast off!')
    return x
}

const reversify = function(str){
  let x = ''
  for (let i=str.length-1; i>=0; i--){
    x += str[i]
  }
  return x
}

const titleify = function(str){
  let x = ''
  for (let i=0; i<str.length; i++){
    if (str[i-1]===' ' || i===0){
      x += str[i].toUpperCase()
    }
    else {
      x += str[i].toLowerCase()
    }
  }
  return x
}

const crazify = function(str){
  let x = ''
  let y = ''
  let count = 0
  for (let i=0; i<str.length; i++){
    y = str[i]
    if (y===' '){
      x += y
    }
    else if (count%2===0){
      x += y.toLowerCase()
      count++
    }
    else {
      x += y.toUpperCase()
      count++
    }
  }
  return x
}



if (typeof biggify === 'undefined') {
  biggify = undefined;
}

if (typeof nasafy === 'undefined') {
  nasafy = undefined;
}

if (typeof reversify === 'undefined') {
  reversify = undefined;
}

if (typeof titleify === 'undefined') {
  titleify = undefined;
}

if (typeof crazify === 'undefined') {
  crazify = undefined;
}


module.exports = {
  biggify,
  nasafy,
  reversify,
  titleify,
  crazify,
}
