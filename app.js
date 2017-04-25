'use strict';


var currentUser;
var users = [];
function User (first, last, userName, favWine, favWinery, colorPref) {
  this.first= first;
  this.last= last;
  this.userName = userName;
  this.favWine = [];
  this.favWinery = favWinery;
  this.colorPref = colorPref;
  this.bio = '';
  this.id = Math.random()+''+Math.random();
}

function Comment(userName, comment, date) {
  this.userName = userName;
  this.comment = comment;
  this.date = date;
}

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
      console.log(currentUser);
    } else {
      form.login.placeholder = 'User not found!!!';
      console.log('user not found!');
    }
    form.reset();
  }
}


function handleUserGenerator (event){
  event.preventDefault();
  var form = event.target;
  var userGeneratorFirstName = form.firstName.value;
  var userGeneratorLastName = form.lastName.value;
  var userGeneratorUserName = form.userName.value;
  var userGeneratorFavWine = form.favWine.value;
  var userGeneratorFavWinery = form.favWinery.value;
  var userGeneratorColorPreference = form.colorPreference.value;

  var generatedUser = new User(userGeneratorFirstName, userGeneratorLastName, userGeneratorUserName, userGeneratorFavWine, userGeneratorFavWinery, userGeneratorColorPreference);
  currentUser =
  generatedUser.favWine.push(userGeneratorFavWine);
  users.push(generatedUser);
  console.log(generatedUser);
  // profileReDirect('editprofile.html');
  form.reset();
  try {
    localStorage.users = JSON.stringify(users);
    console.log('users', users);
  }
  catch (error) {
    console.log('something went wrong', error);
  }
}
// function handleUserBio (event){
//   event.preventDefault();
//   var form = event.target;
//   var userBioUpdate = form.userBio.value;
//   this.bio = userBioUpdate;
//   form.reset();
//   try {
//     localStorage.users[].bio = JSON.stringify(users);
//   }
//   catch (error) {
//   }
// }


function check(id) {
  document.getElementById(id).checked = true;
}

function uncheck() {
  document.getElementById(id).checked = false;
}

function loadUserData(){

  var lastName = setAttribute;
  var UserName = getElementById('');

  var userGeneratorLastName = lastName.value;
  var userGeneratorUserName = userName.value;
  var userGeneratorFavWine = favWine.value;
  var userGeneratorFavWinery = favWinery.value;
  var userGeneratorColorPreference = colorPreference.value

  console.log(currentUser);
}


// loadUserData();

// local storage object...!

var testUser= new User('Michael','Axelson', 'Maxelson11',['merlot','malbec'], 'Chatuea St. Michelle','red');

users.push(testUser);

try {
  users = JSON.parse(localStorage.users);
}
catch (error) {
  console.log('something went wrong', error);
}



var loginLoad = document.getElementById('login-form');
loginLoad.addEventListener('submit', handleLoginSubmit);
//redirects to edit porfile
function profileReDirect() {
  window.location.replace('editprofile.html');
}
// creates new users from form input
var userGeneratorFormSubmit = document.getElementById('createUser');
userGeneratorFormSubmit.addEventListener('submit', handleUserGenerator);
var bioFormSubmit = document.getElementById('bio');
userGeneratorFormSubmit.addEventListener('submit', handleUserBio);
