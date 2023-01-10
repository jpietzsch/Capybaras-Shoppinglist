import { useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, getDocs, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZhvIKBeElo4jwfKhyIGrfGlvgwRu2d-Y",
  authDomain: "capybaras-einkaufsliste.firebaseapp.com",
  projectId: "capybaras-einkaufsliste",
  storageBucket: "capybaras-einkaufsliste.appspot.com",
  messagingSenderId: "709491743795",
  appId: "1:709491743795:web:10e485303a2b01e7b3d746",
  measurementId: "G-W5SGYCW3ZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


const userProvider = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  function loginUser(user, pass) {



    getUsers()



    if (user == "test") {
      if (pass == "test") {
        console.log("eingeloggt oder so ka")
        setIsLoggedIn(true)
      }
    }
  }


  return { isLoggedIn, loginUser }
}


export default userProvider;



function getUsers() {

  const test = db.collectionGroup("Posts").where("isVisible", "==", true).get()
    .then(querySnapshot => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      })
      return null
    })

  const querySnapshot = getDocs(collection(db, "users"));
      .then()
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}