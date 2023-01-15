let L_Guest_list = ["Tanveer", "wahab","Najam","aslam"];
for  (l_cnt  in L_Guest_list )
console.log("Dear Mr. "+ L_Guest_list[l_cnt].toUpperCase() +",\n\nYou are please invite today in my hous in evening please join us for wonderfull evening. \nRegards,\n\nAdeel ul haq\n");

console.log("Unfortunately, Aslam can't come in the party ");

  L_Guest_list.splice(3,1,"adeel")

console.log("------------- Splice value Adeel ----------------");
for  (l_cnt  in L_Guest_list )
console.log("Dear Mr. "+ L_Guest_list[l_cnt].toUpperCase() +",\n\nYou are please invite today in my hous in evening please join us for wonderfull evening. \nRegards,\n\nAdeel ul haq\n");

console.log("we found a bigger table now we have a  space to Invite three more guest");
console.log("so we Invited, Farooq, Imran, Umair");

L_Guest_list.splice(0,0,"Farooq")
L_Guest_list.splice(Math.ceil((L_Guest_list.length)/2),0,"Imran")

L_Guest_list.push("umair")

for  (l_cnt  in L_Guest_list )
console.log("Dear Mr. "+ L_Guest_list[l_cnt].toUpperCase() +",\n\nYou are please invite today in my hous in evening please join us for wonderfull evening. \nRegards,\n\nAdeel ul haq\n");
