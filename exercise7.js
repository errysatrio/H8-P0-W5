function meleeRangedGrouping (str) {
    var list=str.split(',')
    var temp=[]
    var name=[]
    var type=[]
    var output=[]
    var ranged=[]
    var mele=[]
    if(str.length===0){
        output=''
        return output
    }
    for (let i = 0; i < list.length; i++) {
        temp.push(list[i].split('-'))
        name.push(temp[i][0])
        type.push(temp[i][1])
    }
    for (let j = 0; j < type.length; j++) {
        if(type[j]==='Ranged'){
            ranged.push(name[j])
        } else {
            mele.push(name[j])
        }
    }
    output.push(ranged)
    output.push(mele)
    // console.log(name)
    // console.log(type)
    return output
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []