function makanTerusRekursif(waktu) {
    // var count =0
    if (waktu<1){
        // count++
        return 0
    } else {
        return 1+ makanTerusRekursif(waktu-15)
    }
  }
  
//   console.log(66/15)
  // TEST CASES
  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0