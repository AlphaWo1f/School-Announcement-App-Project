//function that will run when student searches for announcement
function studentSubmitbutton() {
    //grades selected 
    var gradeAllS = [false];
    var grade09S = [false];
    var grade10S = [false];
    var grade11S = [false];
    var grade12S = [false];

    var genderMaleS = [false];
    var genderFemaleS = [false];

    //isolating the chosen grade(s) by using .checked and setting the index to true with and if statement//

    if (document.getElementById("htmlSGrade9").checked) {
        grade09S[0] = true;
    }
    if (document.getElementById("htmlSGrade10").checked) {
        grade10S[0] = true;
    }
    if (document.getElementById("htmlSGrade11").checked) {
        grade11S[0] = true;
    }
    if (document.getElementById("htmlSGrade12").checked) {
        grade12S[0] = true;
    }

    if ((!(grade09S[0]) && !(grade10S[0]) && !(grade11S[0]) && !(grade12S[0])) ||
    ((grade09S[0]) && (grade10S[0]) && (grade11S[0]) && (grade12S[0]))) {
        gradeAllS[0] = true;
    }

    //isolating the chosen club by using cocument.getelementbyid and using .value//
    var clubsS = [];
    clubsS[0] = document.getElementById("htmlSClubs").value;

    //making the selected gender as true

    if (document.getElementById("htmlSMale").checked) {
        genderMaleS = [true];
    }
    if (document.getElementById("htmlSFemale").checked) {
        genderFemaleS = [true];
    }
    
    //sending information to local storage as a string using JSON.stringify//
    localStorage.setItem("studentGradeAllKey", JSON.stringify(gradeAllS));
    localStorage.setItem("studentGrade09Key", JSON.stringify(grade09S));
    localStorage.setItem("studentGrade10Key", JSON.stringify(grade10S));
    localStorage.setItem("studentGrade11Key", JSON.stringify(grade11S));
    localStorage.setItem("studentGrade12Key", JSON.stringify(grade12S));
    localStorage.setItem("studentClubKey", JSON.stringify(clubsS));
    localStorage.setItem("studentGenderMaleKey", JSON.stringify(genderMaleS));
    localStorage.setItem("studentGenderFemaleKey", JSON.stringify(genderFemaleS));
}

function studentResetbutton(){
    location.href = "studentAnnouncement.html"; 
}


