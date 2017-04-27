'use strict';
currentUser = 0;
console.log('lulwat', users);
if (users[currentUser].profilePic){
  var profilePic = document.getElementById('profile-pic');
  profilePic.src = users[currentUser].profilePic;
}
function handleUserBio (event){
  event.preventDefault();
  usersBio.textContent = '';
  var form = event.target;
  var userBioUpdate = form.userBio.value;
  console.log(userBioUpdate);
  users[currentUser].bio = userBioUpdate;
  form.reset();
  populateBio();
  try {
    localStorage.users = JSON.stringify(users);
    console.log('users', users);
  }
  catch (error) {
    console.log('something went wrong', error);
  }

}
function populateBio(){
  var bioUpdate = document.getElementById('usersBio');
  var text = document.createTextNode(users[currentUser].bio);
  var list = document.createElement('li');
  bioUpdate.appendChild(list);
  list.appendChild(text);
}
populateBio();



function check(id) {
  document.getElementById(id).checked = true;
}

function handleUserWineReview (event) {
  event.preventDefault();
  usersWineReview.textContent = '';
  var form = event.target;
  var userWineReviewUpdate = form.userWineReview.value;
  console.log(userWineReviewUpdate);
  users[currentUser].wineReview.push(userWineReviewUpdate);
  form.reset();
  populateWineReview();

  try{
    localStorage.users = JSON.stringify(users);
  }
  catch (error) {
    console.log('issue saving wine review', error);
  }
}

function populateWineReview() {
  var wineReviewUpdate = document.getElementById('usersWineReview');
  var text = document.createTextNode(users[currentUser].wineReview);
  var list = document.createElement('li');
  wineReviewUpdate.appendChild(list);
  list.appendChild(text);
}
populateWineReview();


populateBio();
function profilePicSubmitHandler(event){

  event.preventDefault();
  var form = event.target;
  console.log(event.target);
  var imageURL = form.imageURL.value;
  var image = document.getElementById('profile-pic');
  image.src = users[currentUser].profilePic;
  users[currentUser].profilePic = imageURL;
  try {
    localStorage.users = JSON.stringify(users);
    console.log('users', users);
  }
  catch (error) {
    console.log('something went wrong', error);
  }
}
function testUserConstructor(profilePic, reviews, userName) {
  this.profilePic = profilePic;
  this.reviews= [];
  this.userName= userName;
}

var testUser = new testUserConstructor('www.google.com', ['suh','dude'], 'mike');

users.push(testUser);

var setProfile = document.getElementById('set-profile');
setProfile.addEventListener('submit', profilePicSubmitHandler);

var bioFormSubmit = document.getElementById('wineList');
bioFormSubmit.addEventListener('submit', handleUserBio);

var bioFormSubmit = document.getElementById('bio');
bioFormSubmit.addEventListener('submit', handleUserBio);

var wineReviewFormSubmit = document.getElementById('wineReview');
wineReviewFormSubmit.addEventListener('submit', handleUserWineReview);
