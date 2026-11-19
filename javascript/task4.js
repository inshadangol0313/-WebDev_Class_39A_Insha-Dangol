// Qno4
// Login & Role Check
// • Task: Create two variables: isLoggedIn (boolean) and role
// (e.g., "admin", "editor", "guest").
// • If not logged in, log "Please log in".
// • If logged in and role === "admin", log "Welcome,
// Admin".
// • If logged in with any other role, log "Welcome, User".
let Loggedin=true;
let role="admin";
if(!Loggedin)
{
    console.log("Please Login")
}
else if(role=="admin"){
    console.log("Welcome,Admin")
}
else{
    console.log("Welcome,User")
}
