'use strict';

var currentUserIndex;
var userProfileIndex;
var users = [];
var wines = ['red','white'];
var wineList = ['cab','merlot','malbec'];
var wineries = ['st.michelles','whatever winery'];

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

function checkBoxGenerator(list, listQuestion, questionName) {
  var form = document.getElementById('boolean-questions');
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
