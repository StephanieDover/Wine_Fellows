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

var users = [];

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
