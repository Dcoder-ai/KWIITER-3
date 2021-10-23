var firebaseConfig = {
    apiKey: "AIzaSyAZ0jyldkn8C-udMlbSc9rRH_x46tPI7v0",
    authDomain: "kwitter-5a333.firebaseapp.com",
    databaseURL: "https://kwitter-5a333-default-rtdb.firebaseio.com",
    projectId: "kwitter-5a333",
    storageBucket: "kwitter-5a333.appspot.com",
    messagingSenderId: "513158859578",
    appId: "1:513158859578:web:c74981f5fca3b037259e03",
    measurementId: "G-533XZJFRLB"
};

firebase.initializeApp(firebaseConfig);

function send() {
    msg = document.getElementById('msg').value;
    firebase.database().ref(room_name).push({
          name: user_name,
          like: 0
    });
    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code
                    console.log(firebase_message_id);
                    console.log(message_data);
                    name  = message_data['name'];
                    message = message_data['message'];
                    like = message_data['like'];
                    name_with_tag = "<h4> " + name + "<img class = 'user_tick'  src= 'tick.png'> </h4>";
                      //End code
                }
          });
    });
}
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}