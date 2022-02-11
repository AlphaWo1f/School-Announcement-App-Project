function login(){
    var username = document.getElementById("htmlTUsername").value;
    var password = document.getElementById("htmlTPassword").value;
    console.log("username: " + username)
    console.log("password: " + password)

    if((username === ("North Park Seconday School") || ("NPSS") || ("NorthPark") || ("North Park")) && (password === "12345")){
        location.href = "teacherAnnouncement.html"; 
    }else{
        document.getElementById("htmlWelcome").innerHTML = "Wrong Password or Username";
    }
}