'use strict';
console.log('hackrd');


function generateUsers() {
  var communityBox = document.getElementById('communityMain');

  for(var i = 0; i < users.length; i++) {
    var userBox = document.createElement('div');
    var name = document.createElement('h1')
    name.textContent = users[i].first;
    userBox.appendChild(name);
    var imgElement = document.createElement('img');
    imgElement.src = users[i].profilePic;
    userBox.appendChild(imgElement);
    var wines = document.createElement('h3');
    wines.textContent = users[i].wineColors;
    userBox.appendChild(wines);

    communityBox.appendChild(userBox);
  }
}
generateUsers();
