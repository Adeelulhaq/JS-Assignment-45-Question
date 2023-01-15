let l_current_users = ['Admin', "wahab", "aslam", "riyyan", "Farman"];
let l_new_users = ["aslam", "jawad", "ali", "riyyan", "farah"];

for (let i = 0; i < l_new_users.length; i++) {
    if (l_current_users.includes(l_new_users[i].toLowerCase())) {
        console.log("The username " + l_new_users[i] + " is already taken. Please choose a different username.");
    } else {
        console.log("The username " + l_new_users[i] + " is available.");
    }
}