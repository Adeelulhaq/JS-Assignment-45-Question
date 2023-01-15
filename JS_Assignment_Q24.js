let L_variable_1 = "Karachi"
let L_variable_2 = "Pakistan"
let L_variable_3 = "Karachi"

console.log('L_variable_1 == L_variable_2 ',  L_variable_1 == L_variable_2) ;
console.log("L_variable_1 != L_variable_2 ",L_variable_1 != L_variable_2) ;
console.log("L_variable_1 == L_variable_3 " , L_variable_1 == L_variable_3) ;
console.log("L_variable_1 != L_variable_3 ",L_variable_1 != L_variable_3) ;

console.log("Working on Lower condation") ;
L_variable_1 = "Karachi";
L_variable_2 = "Karachi";

console.log("L_variable_1.toLowerCase == L_variable_2.toLowerCase ", L_variable_1.toLowerCase == L_variable_2.toLowerCase) ;
console.log("L_variable_1.toLowerCase != L_variable_2.toLowerCase ", L_variable_1.toLowerCase != L_variable_2.toLowerCase) ;

console.log("Working on Number condation") ;

let L_NUMBER_1 = 5;
let L_NUMBER_2 = 10;
let L_NUMBER_3 = 5;

console.log("L_NUMBER_1 == L_NUMBER_2 ", L_NUMBER_1 == L_NUMBER_2) ;
console.log("L_NUMBER_1 != L_NUMBER_2 " ,  L_NUMBER_1 != L_NUMBER_2) ;
console.log("L_NUMBER_1 < L_NUMBER_2 " ,  L_NUMBER_1 < L_NUMBER_2 );
console.log("L_NUMBER_1 > L_NUMBER_2 ", L_NUMBER_1 > L_NUMBER_2) ;
console.log("L_NUMBER_1 <= L_NUMBER_2 " , L_NUMBER_1 <= L_NUMBER_2);
console.log("L_NUMBER_1 >= L_NUMBER_2 ", L_NUMBER_1 >= L_NUMBER_2);
console.log("L_NUMBER_1 == L_NUMBER_3 ", L_NUMBER_1 == L_NUMBER_3) ;
console.log("L_NUMBER_1 != L_NUMBER_3 " ,  L_NUMBER_1 != L_NUMBER_3) ;

console.log("Working on AND & OR OPERATOR condation") ;

let a = true;
let b = false;

console.log("a && b" ,a && b ) ;
console.log("a || b",a || b) ;

console.log("Test whether an item is in a array") ;

let l_array = [1, 2, 3, 4, 5];
let l_item_1 = 3;
let l_item_2 = 8;
console.log(l_item_1 in l_array) ;
console.log(l_item_2 in l_array) ;

console.log("Test whether an item is not in a array") ;

let l_array_2 = [1, 2, 3, 4, 5];
let l_item = 7;
console.log("l_array_2.indexOf(l_item) == -1  ",l_array_2.indexOf(l_item) == -1 );
console.log("l_array_2.indexOf(l_item) !== -1 ",l_array_2.indexOf(l_item) !== -1 );
console.log("!l_array_2.includes(l_item)  ",!l_array_2.includes(l_item));