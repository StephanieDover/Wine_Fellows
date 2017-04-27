'use strict';

var currentUser;
var users = [];

try {
  users = JSON.parse(localStorage.users);
}
catch (error) {
  console.log('something went wrong', error);
}
try {
  currentUser = JSON.parse(localStorage.currentUser);
}
catch (error) {
  console.log('current user not returned');
}

function User (profilePic, first, last, userName, wineColor, favWine, favWinery) {
  this.first= first;
  this.last= last;
  this.userName = userName;
  this.wineColors = [];
  this.favWines =[];
  this.favWineries = [];
  this.bio = '';
  this.id = Math.random()+''+Math.random();
  this.profilePic = profilePic;
  this.reviews = [];
  this.comments = [];
  // users.push(User);
}

function Comment(userName, comment, date) {
  this.userName = userName;
  this.comment = comment;
  this.date = date;
}

var testUser = new User('www.google.com', 'Michael', 'Axelsosd', 'Maxelson', 'red', 'st.michelles');
users.push(testUser);

// try {
//   localStorage.setItem ('users', JSON.stringify(users));
// }
// catch (error) {
//   console.log('something went wrong', error);
// }
