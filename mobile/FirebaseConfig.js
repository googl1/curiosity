import React from 'react';

class FirebaseConfig {
  // hide firebase config from git
  getConfig() {
    var conf = {
      apiKey: "AIzaSyCcdWOqgMbpy8yMtFzZGw5PFrjSKmNiePQ",
      authDomain: "curiouscity-a641b.firebaseapp.com",
      databaseURL: "https://curiouscity-a641b.firebaseio.com",
      storageBucket: "curiouscity-a641b.appspot.com"
    };
    return conf;
  }
}

export default FirebaseConfig
