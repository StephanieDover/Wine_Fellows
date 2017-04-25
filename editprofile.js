'use strict';

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
