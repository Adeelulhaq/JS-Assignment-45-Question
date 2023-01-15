let L_Guest_list = ["Tanveer", "wahab","Najam","aslam"];
for  (l_cnt  in L_Guest_list )
console.log("Dear Mr. "+ L_Guest_list[l_cnt].toUpperCase() +",\n\nYou are please invite today in my hous in evening please join us for wonderfull evening. \nRegards,\n\nAdeel ul haq\n");


console.log("Unfortunately, Aslam can't come in the party ");

  L_Guest_list.splice(3,1,"adeel")

//console.log(L_Guest_list)

console.log("------------- Splice value Adeel ----------------");
for  (l_cnt  in L_Guest_list )
console.log("Dear Mr. "+ L_Guest_list[l_cnt].toUpperCase() +",\n\nYou are please invite today in my hous in evening please join us for wonderfull evening. \nRegards,\n\nAdeel ul haq\n");
