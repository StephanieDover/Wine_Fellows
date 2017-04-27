'use strict';
var date = new Date();
var n = date.toDateString();
var time = date.toLocaleTimeString();
var userProfileIndex = 1;
// console.log(n + ' ' + time);
//
// var commentTime = document.getElementById('visiter-comments');
// commentTime.textContent = n + ' ' + time;
function profilePic() {
  var image = document.getElementById('view-user-profile-pic');
  image.src = users[userProfileIndex].profilePic;
}


function profileName() {
  var viewProfileName = document.getElementById('view-user-name');
  viewProfileName.textContent = users[userProfileIndex].name;
}

function populateBio(){
  var bioUpdate = document.getElementById('usersBio');
  var text = document.createTextNode(users[userProfileIndex].bio);
  var list = document.createElement('li');
  bioUpdate.appendChild(list);
  list.appendChild(text);
}


function logoutHandler() {
  localStorage.removeItem(currentUserIndex);
  window.location.replace('index.html');
}

profilePic();
profileName();
populateBio();

var logout = document.getElementById('logout');
logout.addEventListener('submit', logoutHandler);
