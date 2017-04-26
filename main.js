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


function User (profilePic, first, last, userName, favWine, favWinery, red, white) {
  this.first= first;
  this.last= last;
  this.userName = userName;
  this.wineColor=[];
  this.favWine =[];
  this.favWinery = [];
  this.bio = '';
  this.id = Math.random()+''+Math.random();
  this.profilePic = profilePic;
  this.review= []
}

function Comment(userName, comment, date) {
  this.userName = userName;
  this.comment = comment;
  this.date = date;
}
