var firebaseConfig = {
    apiKey: "AIzaSyBG-xIXOmpLZn_JnZRAKGIEn5GP21xlAzM",
    authDomain: "classtest-93ee7.firebaseapp.com",
    databaseURL: "https://classtest-93ee7-default-rtdb.firebaseio.com",
    projectId: "classtest-93ee7",
    storageBucket: "classtest-93ee7.appspot.com",
    messagingSenderId: "815323471505",
    appId: "1:815323471505:web:dc91aaa8bcb5b003b76930"
  };

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}