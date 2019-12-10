function sorting(arrNumber) {
    // var arrNum=[]
    if (arrNumber.length===0){
        return ''
    }
    for (let i = 0; i < arrNumber.length; i++) {
        for (let j = 0; j < arrNumber.length; j++) {
            let temp=0
            temp+=arrNumber[j]
            if(arrNumber[j+1]<arrNumber[j]){
                arrNumber[j]=arrNumber[j+1]
                arrNumber[j+1]=temp
            }
        }
    }
    return arrNumber
}
// console.log(sorting([2, 8, 4, 6, 8, 5, 8, 4]))
  
function getTotal(arrNumber) {
    if (arrNumber.length===0){
        return ''
    }
    var count=0
    let i=arrNumber.length-1
    while (arrNumber[i]===arrNumber[arrNumber.length-1]){
    i--
    count++
    }
    // return count
    return 'angka paling besar adalah '+arrNumber[arrNumber.length-1]+' dan jumlah kemunculan sebanyak '+count+' kali'
}

function mostFrequentLargestNumbers(arrNumber) {
    if (arrNumber.length===0){
        return ''
    }
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''