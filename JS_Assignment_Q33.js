let l_numbers = [];
for (i=1; i<=9; i++ ) 
  { l_numbers.push(i); }

for (let i = 0; i < l_numbers.length; i++) {
    if (l_numbers[i] === 1) {
        console.log(l_numbers[i] + "st");
    } else if (l_numbers[i] === 2) {
        console.log(l_numbers[i] + "nd");
    } else if (l_numbers[i] === 3) {
        console.log(l_numbers[i] + "rd");
    } else {
        console.log(l_numbers[i] + "th");
    }
}
