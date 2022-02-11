//creating arrays to store the teacher's announcement input
var grade09T = [];
var grade10T = [];
var grade11T = [];
var grade12T = [];
var gradeAllT = [];

var genderMaleT = [];
var genderFemaleT = [];

var clubsT = [];

var additionalDetailsT = [];

var dateT = [];

//creating a counter and setting to 0
var counter = 0;

//function that will run when the teacher clicks submit button
function teacherSubmitbutton() {


     //setting the initial input as false for grades and genders using counter to index the different items
     grade09T[counter] = false;
     grade10T[counter] = false;
     grade11T[counter] = false;
     grade12T[counter] = false;
     gradeAllT[counter] = false;


     genderMaleT[counter] = false;
     genderFemaleT[counter] = false;


     //making the choosen grades true
     if (document.getElementById("htmlTGrade9").checked) {
          grade09T[counter] = true;
     }
     if (document.getElementById('htmlTGrade10').checked) {
          grade10T[counter] = true;
     }
     if (document.getElementById('htmlTGrade11').checked) {
          grade11T[counter] = true;
     }
     if (document.getElementById('htmlTGrade12').checked) {
          grade12T[counter] = true;
     }

     //checking if ALl grades were selected with an if statement
     if ((grade09T[counter] && grade10T[counter] && grade11T[counter] && grade12T[counter]) || (!grade09T && !grade10T && !grade11T && !grade12T)) {
          gradeAllT[counter] = true;
     }


     //retriving the clubs that the teacher selected
     clubsT[counter] = document.getElementById("htmlTClubs").value;


     //making the choosen genders true
     if (genderMaleT[counter] = document.getElementById("htmlTMale").checked) {
          genderMaleT[counter] = true;
     }
     if (genderFemaleT[counter] = document.getElementById("htmlTFemale").checked) {
          genderFemaleT[counter] = true;
     }

     //retriving the details that the teacher made
     additionalDetailsT[counter] = document.getElementById("htmlTDetails").value;

     dateT[counter] = document.getElementById("htmlTDate").value;
     console.log(dateT[counter])

     console.log(additionalDetailsT[counter])


     //Sending information to local storage as a string using localstorage.setitem, a key name, 
     //json.stringify (to convert to string because an array cannot be in local storage), and variable name
     localStorage.setItem("teacherGradeAllKey", JSON.stringify(gradeAllT));
     localStorage.setItem("teacherGrade09Key", JSON.stringify(grade09T));
     localStorage.setItem("teacherGrade10Key", JSON.stringify(grade10T));
     localStorage.setItem("teacherGrade11Key", JSON.stringify(grade11T));
     localStorage.setItem("teacherGrade12Key", JSON.stringify(grade12T));
     localStorage.setItem("teacherGenderMaleKey", JSON.stringify(genderMaleT));
     localStorage.setItem("teacherGenderFemaleKey", JSON.stringify(genderFemaleT));
     localStorage.setItem("teacherClubKey", JSON.stringify(clubsT));
     localStorage.setItem("teacherDetailsKey", JSON.stringify(additionalDetailsT));
     localStorage.setItem("teacherDateKey", JSON.stringify(dateT));

     //incrementing counter to move onto the next announcement created
     counter++;
}

//function that will work when the page is loaded
function getExistingAnnouncements() {
//if statement that will make sure that the announcements are kept stored in local storage, even after closing tab
//using localstorage.getItem to get the item from the local storage
     if (JSON.parse(localStorage.getItem("teacherGrade09Key")) != null) {
          grade09T = JSON.parse(localStorage.getItem("teacherGrade09Key"));
          grade10T = JSON.parse(localStorage.getItem("teacherGrade10Key"));
          grade11T = JSON.parse(localStorage.getItem("teacherGrade11Key"));
          grade12T = JSON.parse(localStorage.getItem("teacherGrade12Key"));
          gradeAllT = JSON.parse(localStorage.getItem("teacherGradeAllKey"));

          clubsT = JSON.parse(localStorage.getItem("teacherClubKey"));

          genderMaleT = JSON.parse(localStorage.getItem("teacherGenderMaleKey"));
          genderFemaleT = JSON.parse(localStorage.getItem("teacherGenderFemaleKey"));

          additionalDetailsT = JSON.parse(localStorage.getItem("teacherDetailsKey"));

          dateT = JSON.parse(localStorage.getItem("teacherDateKey"));

          counter = grade09T.length;
     }

}
