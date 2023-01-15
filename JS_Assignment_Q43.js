let l_magicians = ["zardari","Nawaz","imran"];
let l_g_magicians = [];
function make_great(p_magicians) {
    for (let i = 0; i < p_magicians.length; i++) {
        p_magicians[i] = "the Great " + p_magicians[i];
    }   
return p_magicians;
}

function show_magicians(p1_magicians) {
    for (let i = 0; i < p1_magicians.length; i++) {
        console.log(p1_magicians[i]);
    }
}

console.log("Original magicians: ")
show_magicians(l_magicians);
console.log("Great magicians: ")
l_g_magicians = make_great(l_magicians);
show_magicians(l_g_magicians);
