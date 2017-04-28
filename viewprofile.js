'use strict';
var date = new Date();
var n = date.toDateString();
var time = date.toLocaleTimeString();

function profilePic() {
  var image = document.getElementById('view-user-profile-pic');
  image.src = users[userProfileIndex].profilePic;
}

function profileName() {
  var viewProfileName = document.getElementById('view-user-name');
  viewProfileName.textContent = users[userProfileIndex].name;
}

function profileBio(){
  var bioUpdate = document.getElementById('view-user-bio');
  var text = document.createTextNode(users[userProfileIndex].bio);
  var list = document.createElement('li');
  bioUpdate.appendChild(list);
  list.appendChild(text);
}

function profileFavs(title, userArray) {
  var header = document.getElementById('view-user-favs');
  var header3 = document.createElement('h3');
  header3.textContent = title;
  var ul = document.createElement('ul');
  var li = document.createElement('li');
  var button = document.createElement('button');
  button.textContent = 'delete';
  header.appendChild(header3);
  header.appendChild(ul);
  for (var i = 0; i < userArray.length ; i++) {
    ul.appendChild(li);
    li.appendChild(button);
    li.textContent = userArray;
  }
}

function profileReview(){
  var section = document.getElementById('view-user-reviews');
  var list = document.createElement('ul');
  var listItem = document.createElement('li');
  section.appendChild(list);
  for (var i = 0; i < users[userProfileIndex].reviews.length; i++)
  list.appendChild(listItem);
  listItem.textContent =
   (users[userProfileIndex].reviews[i]);
}

function commentsHandler(event) {
  event.preventDefault();
  var textarea = event.target;
  var comment = textarea.commentText.value;
  var whoCommented = users[currentUserIndex].first;
  console.log(comment);
  var commentTime = n + ' ' + time;
  var commentObject = {
    time: commentTime,
    text: comment,
    person: whoCommented,
  };
  // var commentsArray = [commentTime, comment];
  users[userProfileIndex].comments.push(commentObject);
  try {
    localStorage.users = JSON.stringify(users);
  } catch (error){
    console.log(error);
  }
  commentGenerator();
}

function commentGenerator(){
  var visitorComments = document.getElementById('visitor-comments');

  for (var i = 0; i < users[userProfileIndex].comments.length; i++) {
    var list = document.createElement('ul');
    var listTime = document.createElement('li');
    var listText = document.createElement('li');
    var listPerson = document.createElement('li');
    visitorComments.appendChild(list);
    list.appendChild(listTime);
    listTime.textContent = users[userProfileIndex].comments[i].time;
    list.appendChild(listPerson );
    listPerson.textContent = users[userProfileIndex].comments[i].person;
    listText.textContent = users[userProfileIndex].comments[i].text;
    list.appendChild(listText);
  }
}

function logoutHandler() {
  localStorage.removeItem(currentUserIndex);
  location.replace('index.html');
}

commentGenerator();
profilePic();
profileName();
profileBio();
profileFavs('Favorite Wine Colors', users[userProfileIndex].wineColors);
profileFavs('Favorite Wines', users[userProfileIndex].favWines);
profileFavs('Favorite Wineries', users[userProfileIndex].favWineries);

var logout = document.getElementById('logout');
logout.addEventListener('submit', logoutHandler);

var leaveComment = document.getElementById('comments');
leaveComment.addEventListener('submit', commentsHandler);
