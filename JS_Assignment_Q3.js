let l_person_name =  "adEEl" ;
console.log( l_person_name.toLowerCase());
console.log("Name in Lower : " + l_person_name.toLowerCase());
console.log("Name in upper : " + l_person_name.toUpperCase());

console.log ("Name in title : " +  l_person_name[0].toUpperCase()+ l_person_name.slice(1,5).toLowerCase());

// for title case other option 

//  function titleCase(str) {
//     return str.toLowerCase().split(' ').map(
//           function(word) {
//       return word.replace(word[0], word[0].toUpperCase());
//     }).join(' ');
//   }
// console.log("Name in title : " + titleCase(l_person_name));