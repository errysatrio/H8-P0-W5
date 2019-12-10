function totalDigitRekursif(angka) {
    var num=''
    var output=''
    num+=angka
    if (num===''){
        return 0
    } else {
        for (let i = 1; i < num.length; i++) {
            output+=num[i]
        }
        // console.log(num)
        return num[0]*1 + totalDigitRekursif(output)
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5