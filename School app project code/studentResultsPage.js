// Created variables in the form of arrays using var and square brackets
var announcements = "";
var finalGender = [];
var finalGrade = [];
var teacherDate = [];

var teacherGrade09 = [];
var teacherGrade10 = [];
var teacherGrade11 = [];
var teacherGrade12 = [];
var teacherGradeAll = [];

var teacherClub = [];

var teacherMaleGender = [];
var teacherFemaleGender = [];

var teacherDetails = [];

var teacherDate = [];

var studentGrade09 = [];
var studentGrade10 = [];
var studentGrade11 = [];
var studentGrade12 = [];
var studentGradeAll = [];

var studentClub = [];
var studentMaleGender = [];
var studentFemaleGender = [];

var announcementDetails = [];

//Created a function using "function", entering the function name "()", and opening the function using curley brackets
function displayResults() {
    //Used the localstorage.getItem function to retrieve the keys that were stored in the local storage
    //Put the name of the key inside the quotation marks to retrieve a specific item
    // used JSON.parse to convert the items form local storage into an array
    // Did this for all the variables I created before and items in the local storage

    teacherDate = JSON.parse(localStorage.getItem("teacherDateKey"))

    teacherDetails = JSON.parse(localStorage.getItem("teacherDetailsKey"))

    teacherGrade09 = JSON.parse(localStorage.getItem("teacherGrade09Key"));
    teacherGrade10 = JSON.parse(localStorage.getItem("teacherGrade10Key"));
    teacherGrade11 = JSON.parse(localStorage.getItem("teacherGrade11Key"));
    teacherGrade12 = JSON.parse(localStorage.getItem("teacherGrade12Key"));
    teacherGradeAll = JSON.parse(localStorage.getItem("teacherGradeAllKey"));

    teacherClub = JSON.parse(localStorage.getItem("teacherClubKey"));

    teacherMaleGender = JSON.parse(localStorage.getItem("teacherGenderMaleKey"));
    teacherFemaleGender = JSON.parse(localStorage.getItem("teacherGenderFemaleKey"));

    teacherDetails = JSON.parse(localStorage.getItem("teacherDetailsKey"));

    teacherDate = JSON.parse(localStorage.getItem("teacherDateKey"))

    studentGrade09 = JSON.parse(localStorage.getItem("studentGrade09Key"));
    studentGrade10 = JSON.parse(localStorage.getItem("studentGrade10Key"));
    studentGrade11 = JSON.parse(localStorage.getItem("studentGrade11Key"));
    studentGrade12 = JSON.parse(localStorage.getItem("studentGrade12Key"));
    studentGradeAll = JSON.parse(localStorage.getItem("studentGradeAllKey"));

    studentClub = JSON.parse(localStorage.getItem("studentClubKey"));

    studentMaleGender = JSON.parse(localStorage.getItem("studentGenderMaleKey"));
    studentFemaleGender = JSON.parse(localStorage.getItem("studentGenderFemaleKey"));



    //Created a for loop with an argument
    //The argument means that the loop should run for the number of items inside the teacherMaleGender array
    //created a variable called i and incremented so that it would go through the entire length of the array
    for (var i = 0; i < teacherMaleGender.length; i++) {
        //Used an if statement to check for announcement matches
        //Had an argument inside that would compare the student arrays with teacher arrays
        //used the variable i to check the first index of the variables, all the way to the last index
        if ((((studentGrade09[0] == teacherGrade09[i] && studentGrade09[0] == true)) ||
            (studentGrade10[0] == teacherGrade10[i] && studentGrade10[0] == true) ||
            (studentGrade11[0] == teacherGrade11[i] && studentGrade11[0] == true) ||
            (studentGrade12[0] == teacherGrade12[i] && studentGrade12[0] == true) ||
            (studentGradeAll[0] == teacherGradeAll[i] && studentGradeAll[0] == true)) &&
            ((studentMaleGender[0] == teacherMaleGender[i] && studentMaleGender[0] == true) ||
                (studentFemaleGender[0] == teacherFemaleGender[i] && studentFemaleGender[0] == true)) &&
            ((studentClub[0] == teacherClub[i]) || teacherClub[i] == "All Clubs" || (studentClub[0] == "All Clubs"))) {
                if(teacherGrade09[i]){
                    finalGrade.push(" Grade 9 ")
                }
                if(teacherGrade10[i]){
                    finalGrade.push(" Grade 10 ")
                }
                if(teacherGrade11[i]){
                    finalGrade.push(" Grade 11 ")
                }
                if(teacherGrade12[i]){
                    finalGrade.push(" Grade 12 ")
                }
                if(teacherMaleGender[i]){
                    finalGender.push(" Male ")
                }
                if(teacherFemaleGender[i]){
                    finalGender.push(" Female ")
                }

                announcements += teacherClub[i];
                announcements += "<br>"
                announcements += finalGrade;
                announcements += "<br>"
                announcements += finalGender;
                announcements += "<br>"
                announcements += teacherDate[i];
                announcements += "<br>"
                announcements += teacherDetails[i];
                announcements += "<br>"
                announcements += "<br>"
                announcements += "<br>"

                finalGrade = [];
                finalGender = [];

        } else {
            console.log(i + ": result not found");
        }

    }
    document.getElementById("htmlResultsArea1").innerHTML = announcements
}


