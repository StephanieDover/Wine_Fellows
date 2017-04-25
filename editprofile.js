'use strict';

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

function check(currentUser) {
  document.getElementById(currentUser).checked = true;
}

function uncheck() {
  document.getElementById(currentUser).checked = false;
}

function inputchecker(id) {
  var inputId = document.getElementById(id);

}
//users[currentUser];

function loadUserData(){


  var lastName = setAttribute;
  var UserName = getElementById('');



  var lastName = setAttribute;
  var UserName = getElementById('');
  var userGeneratorLastName = lastName.value;
  var userGeneratorUserName = userName.value;
  var userGeneratorFavWine = favWine.value;
  var userGeneratorFavWinery = favWinery.value;
  var userGeneratorColorPreference = colorPreference.value;

  console.log(currentUser);
}

var bioFormSubmit = document.getElementById('bio');
bioFormSubmit.addEventListener('submit', handleUserBio);
