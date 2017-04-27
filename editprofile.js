'use strict';



function handleSubmitReview (event) {

  event.preventDefault();
  var form = event.target;
  var reviewUpdate = form.userWineReview.value;
  console.log(reviewUpdate);
  form.reset();

  var section = document.getElementById('reviewBox');

  var pTag = document.createElement('p');
  section.appendChild(pTag);
  pTag.textContent = (reviewUpdate);

  if (currentUser) {
    currentUser.reviews.push(reviewUpdate);
  }
  try {
    localStorage.users = JSON.stringify(users);
    console.log('users', users);
  }
  catch (error) {
    console.log('something went wrong', error);
  }
}




//
function handleUserBio (event){
  event.preventDefault();
  usersBio.textContent = '';
  var form = event.target;
  var userBioUpdate = form.userBio.value;
  console.log(userBioUpdate);
  currentUser.bio = userBioUpdate;
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
  var text = document.createTextNode(currentUser.bio);
  var list = document.createElement('li');
  bioUpdate.appendChild(list);
  list.appendChild(text);
}
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



var setProfile = document.getElementById('set-profile');
setProfile.addEventListener('submit', profilePicSubmitHandler);

var bioFormSubmit = document.getElementById('wineList');
bioFormSubmit.addEventListener('submit', handleUserBio);

  

var bioFormSubmit = document.getElementById('bio');
bioFormSubmit.addEventListener('submit', handleUserBio);

var reviewSubmit = document.getElementById('myReview');
reviewSubmit.addEventListener('submit', handleSubmitReview);
