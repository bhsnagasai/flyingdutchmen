// function readTextFile(file, callback) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     }
//     rawFile.send(null);
// }

// // this cannot be used untill we run the file on servers
// let userDetailsDB;
// //Get DB Users:
// readTextFile("./db_files/dutchman_table_users.json", function(text){
//     userDetailsDB = JSON.parse(text);
// });


function checkUserDetails(uname, upass){
    for (let index = 0; index < DB.users.length; index++) {
        const user = DB.users[index];
        if (user.email == uname && user.password == upass) {
            return true;
        }
    }
    return false;
}