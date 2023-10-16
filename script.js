// DELETE 
// find the index of the item 
// / check if the index exist 
// remove the index from the array

// USERS



const USERS = []

function getAllUsers(){
  // USERS.forEach(element => {
  //   console.log(element)
  // });
  return USERS
}



function getASingleUser(username){
    return USERS.find((item) => item.username == username)
    // console.log(userDetails)

  }
function checker(item, username) {
    return item.username == username;
}

function deleteUser(username) {
    // let index = USERS.findIndex((item)=>checker(item,username));
    let index = USERS.findIndex((item) => item.username == username);
    if (index >= 0) {
        USERS.splice(index, 1);
    }
}



function editUser(user) { //user{username, phone,name,...}
    let index = USERS.findIndex((item) => item.username == user.username);
    if (index < 0) { return }
    const currentData = USERS[index]
    //perform validation
    USERS[index] = { ...currentData, ...user }
}

function addUser(user) { //user{username, phone,name,...}
    let index = USERS.findIndex((item) => item.username == user.username);
    if (index >= 0) { return }
    //perform validation
    if (validateForm(user) == true) {
        USERS.push(user);
    }
    else{
        console.log('fail to validate')
    }
   
   
}


function validateForm (data){
    if(data.fname && data.lname && data.email && data.age){
        return true
    }else {
        return false
    }
}