l_person_name =  "AdEEl ul haq" ;
console.log( l_person_name.toLowerCase());
console.log("Name in Lower : " + l_person_name.toLowerCase());
console.log("Name in upper : " + l_person_name.toUpperCase());

 function titleCase(str) {
    return str.toLowerCase().split(' ').map(
          function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }

console.log("Name in upper : " + titleCase(l_person_name));