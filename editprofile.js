'use strict';


console.log('is this file loaded?')

function handleUserBio (event){
  event.preventDefault();
  var form = event.target;
  var userBioUpdate = form.userBio.value;
  this.bio = userBioUpdate;
  form.reset();
  try {
    localStorage.users[currentUser].bio = JSON.stringify(users);
  }
  catch (error) {
    console.log('failed to save bio update');
  }
}


function profilePicSubmitHandler(event){
  event.preventDefault();
  var form = event.target;
  var imageURL = form.imageURL.value;
  var image = document.getElementById('profile-pic');
  image.src = imageURL;
}

var setProfile = document.getElementById('set-profile');
setProfile.addEventListener('submit', profilePicSubmitHandler);




var bioFormSubmit = document.getElementById('bio');
bioFormSubmit.addEventListener('submit', handleUserBio);
