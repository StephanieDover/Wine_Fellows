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

function check(id) {
  document.getElementById(id).checked = true;
}

check('red');

function infogenerator() {
  if (users[currentUser]
}

function uncheck(id) {
  document.getElementById(id).checked = false;
}



//users[currentUser];
function findCheckedInfo(id) {
}
function loadUserData(){
  var form = event.target;
  var redwine = form.colorPreference.value;
  var white = form.white.value;
  users[currentUser].favWine = redwine;
}

users[currentUser];

loadUserData();



  // var lastName = setAttribute;
  // var UserName = getElementById('');
  // var userGeneratorLastName = lastName.value;
  // var userGeneratorUserName = userName.value;
  // var userGeneratorFavWine = favWine.value;
  // var userGeneratorFavWinery = favWinery.value;
  // var userGeneratorColorPreference = colorPreference.value;
  //
  // console.log(currentUser);

var bioFormSubmit = document.getElementById('bio');
bioFormSubmit.addEventListener('submit', handleUserBio);
