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

// local storage object...!
var dataStorage= {
  title: 'Data on Users',
  dataForLocal: [],
};

try {
  dataStorage = JSON.parse(localStorage.dataStorage);
} catch (error) {
  console.log('error while trying to retrieve data...');
}
