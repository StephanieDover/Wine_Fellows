'use strict';

function handleLoginSubmit(event) {
  event.preventDefault();
  var form = event.target;
  var userNameEntry = form.login.value;
  var userFound = false;
  console.log(userNameEntry);
  for (var i = 0; i < users.length && !userFound; i++) {
    if (userNameEntry === users[i].userName) {
      // window.location = '#';
      userFound = true;
      currentUser = i;
      try {
        localStorage.currentUser = JSON.stringify(currentUser);
        console.log('users', users);
      }
      catch (error) {
        console.log('current user index not saved');
      }
      console.log(currentUser);
    } else {
      form.login.placeholder = 'User not found!!!';
      console.log('user not found!');
    }
    form.reset();
  }
}



var wines = ['red','white'];
var wineList = ['cab','merlot','malbec'];
var wineries = ['st.michelles','whatever winery'];
var favoriteLocal = ['woodinville','columbia valley'];

function checkBoxGenerator(list, listQuestion, questionName) {
  var form = document.getElementById('createUser');
  var header = document.createElement('h3');
  header.textContent = listQuestion;
  form.appendChild(header);
  var ul = document.createElement('ul');
  ul.setAttribute('class', 'question');
  form.appendChild(ul);
  for (var i = 0; i < list.length; i++) {
    var li = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', list[i]);
    checkbox.setAttribute('id', list[i]);
    var label = document.createElement('label');
    label.setAttribute('for', questionName);
    label.textContent = list[i];
    ul.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(label);
  }
}




checkBoxGenerator(wines, 'Whats your favorite wine color?', 'favwine');
checkBoxGenerator(wineList, 'What kinds of wines do you like to drink?', 'wineTypes');
checkBoxGenerator(favoriteLocal, 'What are your favorite wineries??', 'favWineries');
// var inputs = document.getElementById('favwine').getElementsByTagName('input');
// console.log(inputs.length);
//
// var inputs = document.getElementsByClassName('checkBox');
// console.log (inputs.checked);
//
// var stuff = document.getElementsByClassName('question').getElementsByTagName('input');
//
// console.log(stuff);
//
//  //.getElementsByTagName('input');
// console.log(checkedBox);
//
// // console.log(inputs.length);
//
// function questionLooper() {
//   var questions = document.getElementsByClassName('questions');
// }


// function experimentalUserGenerator(event) {
//   event.preventDefault();
//   var form = event.target;
//   var questions =document.getElementsByClassName('questions');
//   for(var i=0; i<questions.length; i++) {
//     questions[i].getElements
// }
//   for (var i = 0; i<)
//   var generatedUser = new User(profilePic, first, last, userName, wineColor, favWine, favWinery);
//
// }


// function handleUserGenerator (event){
//   event.preventDefault();
//   var form = event.target;
//
//   var generatedUser = new User(userGeneratorProfilePic, userGeneratorFirstName, userGeneratorLastName, userGeneratorUserName, userGeneratorFavWine, userGeneratorFavWinery);
//
//   var userGeneratorFirstName = form.firstName.value;
//   var userGeneratorLastName = form.lastName.value;
//   var userGeneratorUserName = form.userName.value;
//   var inputs = document.getElementById(questionName).getElementsByTagName('input');
//
//   for (var i=0; i<users.length; ) {
//
//   if (input[i].checked)
//   var userGeneratorFavWine = form.favWine.checked;
//   var userGeneratorFavWinery = form.favWinery.checked;
//   var userGeneratorProfilePic = form.profilePic.value;
//   var userGeneratorWineColor = form.wineColor.value;
//
//
//   users.push(generatedUser);
//   console.log(generatedUser);
//   // profileReDirect('editprofile.html');
//   profileReDirect();
//   form.reset();
//
//   try {
//     localStorage.users = JSON.stringify(users);
//     console.log('users', users);
//   }
//   catch (error) {
//     console.log('something went wrong', error);
//     }
//   }
// }

// loadUserData();

// local storage object...!

var loginLoad = document.getElementById('login-form');
loginLoad.addEventListener('submit', handleLoginSubmit);
//redirects to edit porfile
function profileReDirect() {
  window.location.replace('editprofile.html');
}
// creates new users from form input
var userGeneratorFormSubmit = document.getElementById('createUser');
userGeneratorFormSubmit.addEventListener('submit', handleUserGenerator);
