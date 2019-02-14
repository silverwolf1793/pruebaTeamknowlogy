 console.log(num([1,2,3,4,5,6,7,8,9],9))


function num(data, target) {
  let bresuelto = false
  let  resultado = []

  for( a=0;a<data.length&! bresuelto;a++){
    for( b=0;b<data.length&! bresuelto;b++){
      for( c=0;c<data.length&! bresuelto;c++){
        if(data[a]+data[b]-data[c]==target & a!=b & b!=c & a!=c){
          resultado.push(a)
          resultado.push(b)
          resultado.push(c)
          bresuelto = true
        }
      }
    }
  }

  return ((bresuelto) ? resultado : null);
}
