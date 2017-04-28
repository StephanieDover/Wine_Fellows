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
  var section = document.getElementById('reviewBox');
  var pTag = document.createElement('p');
  section.appendChild(pTag);
  pTag.textContent = (reviewUpdate);
  users[currentUserIndex].reviews.push(reviewUpdate);

try {
  localStorage.users = JSON.stringify(users);
  console.log('users', users);
}
catch (error) {
  console.log('something went wrong', error);
}
form.reset();
genorateReview();
}
function genorateReview(){
  for (var i = 0; i <= users[currentUserIndex].reviews.length; i++) {
    var unordered = document.getElementById('reviewBox');
  var list = document.createElement('ul');
  var listItem = document.createElement('li');
  listItem.textContent =
  (users[currentUserIndex].reviews[i]);
  console.log(users[currentUserIndex].reviews[i])
  unordered.appendChild(list);
  list.appendChild(listItem);
}
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
  list.setAttribute('id', 'bio-list');
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


function clickRememberer(list, answers, questionName,userArray) {
  var form = document.getElementById('boolean-answers');
  var header = document.createElement('h3');
  header.textContent = answers;
  form.appendChild(header);
  var ul = document.createElement('ul');
  ul.setAttribute('class', 'question');
  form.appendChild(ul);
  for (var i = 0; i < list.length; i++) {
    var li = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', list[i]);
    checkbox.setAttribute('id', list[i]);
    var label = document.createElement('label');
    label.setAttribute('for', questionName);
    label.textContent = list[i];
    ul.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(label);
    if (list[i]===userArray[i]) {
      checkbox.checked =true ;
    }
  }
}

function updateUserWineInfoHandler(event) {
  event.preventDefault();
  var form = event.target;
  users[currentUserIndex].wineColors = [];
  users[currentUserIndex].favWines = [];
  users[currentUserIndex].favWineries = [];
  // wineColor, favWine, favWinery

  var checkbox;
  for (var i = 0; i <wines.length; i++) {
    checkbox = form[wines[i]];
    if (checkbox.checked) {
      users[currentUserIndex].wineColors.push(checkbox.id)
    }
  }

  for (i = 0; i< wineList.length; i++){
    checkbox = form[wineList[i]];
    if (checkbox.checked) {
      users[currentUserIndex].favWines.push(checkbox.id)
    }
  }
  for (i = 0; i< wineries.length; i++){
    checkbox = form[wineries[i]];
    if (checkbox.checked) {
      users[currentUserIndex].favWineries.push(checkbox.id)
    }
  }
  try {
    localStorage.users = JSON.stringify(users);
    console.log('users', users);
  }
  catch (error) {
    console.log('something went wrong', error);
  }
}



clickRememberer(wines, 'Update your wine!', 'suh dude', users[currentUserIndex].wineColors);
clickRememberer(wineList, 'Update your favorite wines!', 'suh dude', users[currentUserIndex].favWines);
clickRememberer(wineries, 'Update Your Favorite wineries', 'suh dude', users[currentUserIndex].favWineries);
genorateReview()


// clickRememberer(users[currentUserIndex].favWine);
// console.log(users[currentUserIndex].favWine);


var updateUserWineInfo = document.getElementById('update-wine-info');
updateUserWineInfo.addEventListener('submit', updateUserWineInfoHandler);

var setProfile = document.getElementById('set-profile');
setProfile.addEventListener('submit', profilePicSubmitHandler);

var bioFormSubmit = document.getElementById('bio');
bioFormSubmit.addEventListener('submit', handleUserBio);

var reviewSubmit = document.getElementById('myReview');
reviewSubmit.addEventListener('submit', handleSubmitReview);

var logout = document.getElementById('logout');
logout.addEventListener('submit', logoutHandler);
