let passwordnode = document.getElementById("password");
let messagenode = document.getElementById("errormessage");
var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
let breaknode = document.getElementById("break");
function checkPassword(){
    let value = passwordnode.value;
    if(strongRegex.test(value)){
        messagenode.innerHTML = "";
        breaknode.innerHTML = "";
    }
    else{
        breaknode.innerHTML = "<br/>";
        messagenode.innerHTML = "Password must be of length 8, and" +"<br/>" + " include at least 1 uppercase letter and 1 number";
    }
}