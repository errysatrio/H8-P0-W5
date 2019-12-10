function kaliTerusRekursif(angka) {
    var num=''
    var output=1
    var next=''
    num+=angka
    if(num.length===1){
        return num*1
    } else {
        for (let i = 0; i < num.length; i++) {
            output*=num[i]
        }
        return kaliTerusRekursif(output)
        }
    }

    
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6