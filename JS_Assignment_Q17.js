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

console.log("-------------------------Invite only two people for dinner-----------------");
// l_guest_un_invited = L_Guest_list.splice(2,L_Guest_list.length)
// console.log(l_guest_un_invited)
 
// L_guest_remove = (L_Guest_list.length)-2;
// for ( var count = 0 ; count < L_guest_remove; count++ ) 
// {
// console.log("Dear Mr. "+ L_Guest_list[0].toUpperCase() +",\n\nwe are regret to inform you, that the scheduled party has been canceled due to some issue.  \nRegards,\n\nAdeel ul haq\n") 
// L_Guest_list.splice(0,1)
// console.log(L_Guest_list)
// }

for ( var count = L_Guest_list.length -1 ;   count > 1 ; count-- ) 
{ console.log("Dear Mr. "+ L_Guest_list[count].toUpperCase() +",\n\nwe are regret to inform you, that the scheduled party has been canceled due to some issue.  \nRegards,\n\nAdeel ul haq\n") 
  L_Guest_list.pop()
}

for  (l_cnt  in L_Guest_list )
console.log("Dear Mr. "+ L_Guest_list[l_cnt].toUpperCase() +",\n\nYou are please invite today in my hous in evening please join us for wonderfull evening. \nRegards,\n\nAdeel ul haq\n");

L_Guest_list = [];
console.log(L_Guest_list)





