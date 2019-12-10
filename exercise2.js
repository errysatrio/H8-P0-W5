function changeVocals (str) {
    var vocal=''
    for (let i = 0; i < str.length; i++) {
        if(str[i]==='a'){
            vocal+='b'
        } else if(str[i]==='A'){
            vocal+='B'
        } else if(str[i]==='i'){
            vocal+='j'
        } else if(str[i]==='I'){
            vocal+='J'
        } else if(str[i]==='u'){
            vocal+='v'
        } else if(str[i]==='U'){
            vocal+='V'
        } else if(str[i]==='e'){
            vocal+='f'
        } else if(str[i]==='E'){
            vocal+='F'
        } else if(str[i]==='o'){
            vocal+='p'
        } else if(str[i]==='O'){
            vocal+='P'
        }else {
            vocal+=str[i]
        }
    }
    return vocal
  }
  
  function reverseWord (str) {
      var reverse=''
      for (let i = str.length-1; i >=0; i--) {
          reverse+=str[i]
        }
        return reverse
    }
    // console.log(reverseWord('Sergei Dragunov'))
    
    function setLowerUpperCase (str) {
        var LowUp=''
        for (let i = 0; i < str.length; i++) {
            if (str[i]===str[i].toLowerCase()){
                LowUp+=str[i].toUpperCase()
            } else if (str[i]===str[i].toUpperCase()){
                LowUp+=str[i].toLowerCase()
            }
        }
        return LowUp
    }
    // console.log(setLowerUpperCase('Sergei Dragunov'))
    
    function removeSpaces (str) {
        var space=''
        for (let i = 0; i < str.length; i++) {
            if (str[i]===' '){
            } else {
                space+=str[i]
            }
        }
        return space
    }
    // console.log(removeSpaces('Sergei Dragunov'))
    
  function passwordGenerator (name) {
      let str=changeVocals(name)
      let a=reverseWord(str)
      let b=setLowerUpperCase(a)
      var output=''
      if (a.length<5){
          output='minimal karakter yang diinput adalah 5 karakter'
          return output
        } else
        output=removeSpaces(b)
      return output
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'