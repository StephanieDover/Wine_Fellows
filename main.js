'use strict';

var currentUserIndex;
var users = [];

try {
  users = JSON.parse(localStorage.users);

}
catch (error) {
  console.log('something went wrong', error);
}

try {
    currentUserIndex = JSON.parse(currentUserIndex)
}
catch (error) {
  console.log('something went wrong', error);
}




function User (profilePic, first, last, userName) {
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

  users.push(this);

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
