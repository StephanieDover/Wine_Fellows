'use strict';

function User (first, last, userName, favWine, favWinery, colorPref) {
  this.first= first;
  this.last= last;
  this.userName = userName;
  this.favWine = [];
  this.favWinery = favWinery;
  this.colorPref = colorPref;
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
  console.log(userNameEntry);
  for (var i = 0; i < users.length; i++) {
    if (userNameEntry === users[i].userName){
      // window.location = '#';
      console.log('yayy');
    } else {
      form.login.placeholder = 'User not found!!!';
      console.log('user not found!');
    }
    form.reset();
  }
}

var users = [];
// local storage object...!

var testUser= new User('Michael','Axelson', 'Maxelson11',['merlot','malbec'], 'Chatuea St. Michelle','red');

users.push(testUser);


try {
  localStorage.users = JSON.stringify(users);
} catch (error) {
  console.log('something went wrong', error);
}


try {
  users = JSON.parse(localStorage.users);
  console.log('stringifying...');
} catch (error) {
  console.log('something went wrong', error);
}


var loginLoad = document.getElementById('login-form');
loginLoad.addEventListener('submit', handleLoginSubmit);
//redirects to edit porfile
// function profileReDirect() {
//   window.location.replace('editprofile.html');
// }
// creates new users from form input
function handleUserGenerator (event){
  event.preventDefault();
  var form = event.target;
  var userGeneratorFirstName = form.firstName.value;
  var userGeneratorLastName = form.lastName.value;
  var userGeneratorUserName = form.userName.value;
  var userGeneratorColorPreference = form.colorPreference.value;
  var userGeneratorFavWine = form.favWine.value;
  var userGeneratorFavWinery = form.favWinery.value;
  var generatedUser = new User(userGeneratorFirstName, userGeneratorLastName, userGeneratorUserName, userGeneratorFavWine, userGeneratorFavWinery, userGeneratorColorPreference);
  generatedUser.favWine.push(userGeneratorFavWine);
  users.push(generatedUser);
  profileReDirect('editprofile.html');
}
var userGeneratorFormSubmit = document. getElementById('createUser');
userGeneratorFormSubmit.addEventListener('submit', handleUserGenerator);
