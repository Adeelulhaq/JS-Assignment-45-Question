let l_users = ['Admin', "wahab", "aslam", "riyyan", "Farman"];

if(l_users.length === 0) {
    console.log("We need to find some users!");
}
else {
        for (let i = 0; i < l_users.length; i++) {
            if(l_users[i] === "Admin"){
                console.log("Hello admin, would you like to see a status report?")
            }
            else{
                console.log(`Hello ${l_users[i]}, thank you for logging in again.`)
            }
        }
   }

   l_users = [];
   if(l_users.length === 0) {
       console.log("We need to find some users!");
   }
   else {
           for (let i = 0; i < l_users.length; i++) {
               if(l_users[i] === "Admin"){
                   console.log("Hello admin, would you like to see a status report?")
               }
               else{
                   console.log(`Hello ${l_users[i]}, thank you for logging in again.`)
               }
           }
      }