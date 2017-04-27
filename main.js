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
  currentUserIndex = JSON.parse(localStorage.currentUserIndex);
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
}

function Comment(userName, comment, date) {
  this.userName = userName;
  this.comment = comment;
  this.date = date;
}
