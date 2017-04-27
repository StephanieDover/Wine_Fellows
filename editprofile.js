
'use strict';

//start of update fav lists handler
function favsUpdateHandleSubmit(event) {
  console.log('yeah so this part works');
  event.preventDefault();
  var form = event.target;
  var checkbox;
  for (var i = 0; i <wines.length; i++) {
    checkbox = form[wines[i]];
    console.log(checkbox.id);
    if ((checkbox.id != users[currentUserIndex].wineColors[i]) && checkbox.checked) {
      checkbox = form[wines[i]];
      users[currentUserIndex].wineColors.push(checkbox.id)
      console.log(checkbox.id);
    } else {
      if (checkbox.checked) {
        console.log('wont work');
      }
    }
  }

  for (i = 0; i< wineList.length; i++){
    checkbox = form[wineList[i]];
    console.log(checkbox.id);
    if ((checkbox.id != users[currentUserIndex].favWines[i]) && checkbox.checked) {
      checkbox = form[wineList[i]];
      users[currentUserIndex].favWines.push(checkbox.id)
      console.log(checkbox.id);
    } else {
      if (checkbox.checked) {
        console.log('wont work');
      }
    }
  }

  for (i = 0; i< wineries.length; i++){
    checkbox = form[wineries[i]];
    if ((checkbox.id != users[currentUserIndex].favWineries[i]) && checkbox.checked) {
      checkbox = form[wineries[i]];
      users[currentUserIndex].favWineries.push(checkbox.id)
      console.log(checkbox.id);
    } else {
      if (checkbox.checked) {
        console.log('wont work');
      }

  }
}

  try {
    localStorage.users = JSON.stringify(users);
  } catch (error){
    console.log('failed to save updated list');

  }
}
//end update favs lists handler
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

  users[currentUserIndex].reviews.push(reviewUpdate);
}
try {
  localStorage.users = JSON.stringify(users);
  console.log('users', users);
}
catch (error) {
  console.log('something went wrong', error);
}

//
function handleUserBio (event){
  event.preventDefault();
  usersBio.textContent = '';
  var form = event.target;
  var userBioUpdate = form.userBio.value;
  console.log(userBioUpdate);
  users[currentUserIndex].bio = userBioUpdate;
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
  var text = document.createTextNode(users[currentUserIndex].bio);
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
  image.src = users[currentUserIndex].profilePic;
  users[currentUserIndex].profilePic = imageURL;
  try {
    localStorage.users = JSON.stringify(users);
    console.log('users', users);
  }
  catch (error) {
    console.log('something went wrong', error);
  }
  profilePic();
}
function profilePic() {
  var image = document.getElementById('profile-pic');
  image.src = users[currentUserIndex].profilePic;
}
profilePic();

function logoutHandler() {
  localStorage.removeItem(currentUserIndex);
  window.location.replace('index.html')
}

checkBoxGenerator(wines, 'Whats your favorite wine color?', 'favwine');
checkBoxGenerator(wineList, 'What kinds of wines do you like to drink?', 'wineTypes');
checkBoxGenerator(wineries, 'What are your favorites wineries?');

var setProfile = document.getElementById('set-profile');
setProfile.addEventListener('submit', profilePicSubmitHandler);

var bioFormSubmit = document.getElementById('bio');
bioFormSubmit.addEventListener('submit', handleUserBio);

var reviewSubmit = document.getElementById('myReview');
reviewSubmit.addEventListener('submit', handleSubmitReview);

var updateFavsSubmit = document.getElementById('boolean-questions');
updateFavsSubmit.addEventListener('submit', favsUpdateHandleSubmit);

var logout = document.getElementById('logout');
logout.addEventListener('submit', logoutHandler);
