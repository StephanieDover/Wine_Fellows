'use strict';

function handleLoginSubmit(event) {
  event.preventDefault();
  var form = event.target;
  var userNameEntry = form.login.value;
  var userFound = false;
  console.log(userNameEntry);
  for (var i = 0; i < users.length && !userFound; i++) {
    if (userNameEntry === users[i].userName) {
      // window.location = '#';
      userFound = true;
      currentUser = i;
      try {
        localStorage.currentUser = JSON.stringify(currentUser);
        console.log('users', users);
      }
      catch (error) {
        console.log('current user index not saved');
      }
      console.log(currentUser);
    } else {
      form.login.placeholder = 'User not found!!!';
      console.log('user not found!');
    }
    form.reset();
  }
}

function handleUserGenerator (event){
  event.preventDefault();
  var form = event.target;
  var userGeneratorFirstName = form.firstName.value;
  var userGeneratorLastName = form.lastName.value;
  var userGeneratorUserName = form.userName.value;
  var userGeneratorFavWine = form.favWine.checked;
  var userGeneratorFavWinery = form.favWinery.checked;
  var userGeneratorRed = form.red.checked;
  var userGeneratorWhite = form.white.checked;
  var userGeneratorProfilePic= form.profilePic.value;
  console.log(userGeneratorWhite);
  var generatedUser = new User(userGeneratorProfilePic, userGeneratorFirstName, userGeneratorLastName, userGeneratorUserName, userGeneratorFavWine, userGeneratorFavWinery, userGeneratorRed, userGeneratorWhite);
  if (userGeneratorRed === true){
    userGeneratorRed = 'red';
    users[currentUser].favWine.push(userGeneratorRed);
  }
  if (userGeneratorWhite === true){
      userGeneratorWhite = 'white';
      users[currentUser].favWine.push(userGeneratorWhite);
  }

  users.push(generatedUser);
  console.log(generatedUser);
  // profileReDirect('editprofile.html');
  profileReDirect();
  form.reset();

  try {
    localStorage.users = JSON.stringify(users);
    console.log('users', users);
  }
  catch (error) {
    console.log('something went wrong', error);
  }
}

// loadUserData();

// local storage object...!

var loginLoad = document.getElementById('login-form');
loginLoad.addEventListener('submit', handleLoginSubmit);
//redirects to edit porfile
function profileReDirect() {
  window.location.replace('editprofile.html');
}
// creates new users from form input
var userGeneratorFormSubmit = document.getElementById('createUser');
userGeneratorFormSubmit.addEventListener('submit', handleUserGenerator);
