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
profilePic();

function profileName() {

}

function logoutHandler() {
  localStorage.removeItem(currentUserIndex);
  window.location.replace('index.html')
}

var logout = document.getElementById('logout');
logout.addEventListener('submit', logoutHandler);
