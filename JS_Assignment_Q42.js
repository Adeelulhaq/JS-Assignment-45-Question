let L_magicians  = ["zardari","Nawaz","imran"];


function make_great(p_magicians) {
    for (let i = 0; i < p_magicians.length; i++) {
        p_magicians[i] = "the Great " + p_magicians[i];
    }
}
make_great(L_magicians);

 function show_magicians(p1_magicians) {
    for (let i = 0; i < p1_magicians.length; i++) {
         console.log(p1_magicians[i]);
     }
 }


 show_magicians(L_magicians);
//console.log(L_magicians);