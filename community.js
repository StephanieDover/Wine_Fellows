'use strict';
console.log('hackrd');

//


function generateUsers() {
  var communityBox = document.getElementById('communityMain');

// TODO: if adding another element remember to .setAttribute('users-on-screen-index', i);

  for(var i = 0; i < users.length; i++) {
    var userBox = document.createElement('div');
    userBox.setAttribute('users-on-screen-index', i);
    userBox.addEventListener('click', handleUserBoxClick);
    var name = document.createElement('h1')
    name.setAttribute('users-on-screen-index', i);
    name.textContent = users[i].first;
    userBox.appendChild(name);
    var imgElement = document.createElement('img');
    imgElement.setAttribute('users-on-screen-index', i);
    imgElement.src = users[i].profilePic;
    userBox.appendChild(imgElement);
    var wines = document.createElement('h3');
    wines.setAttribute('users-on-screen-index', i);
    wines.textContent = users[i].wineColors;
    userBox.appendChild(wines);

    communityBox.appendChild(userBox);
  }
}
generateUsers();

function handleUserBoxClick(event) {
  var boxForUser = event.target;
  console.log('heeel', boxForUser);
  userProfileIndex = boxForUser.getAttribute('users-on-screen-index');
  try {
    localStorage.userProfileIndex = JSON.stringify(userProfileIndex)
  } catch (error) {
    console.log('problem storing userProfileIndex', error)
  }

  window.location ='viewprofile.html';
}
