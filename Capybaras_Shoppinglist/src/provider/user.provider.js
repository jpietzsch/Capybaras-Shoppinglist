import { useState } from "react";

import { doc, getDoc, getDocs, collection } from "firebase/firestore";

import { toast } from "react-toastify"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


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
const fb = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(fb);

const usersRef = collection(db, "users");


const userProvider = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  async function loginUser(user, pass) {


    const querySnapshot = await getDocs(usersRef);
    querySnapshot.forEach((doc) => {
      console.log(`${doc.data().email}`);
      if (user == doc.data().email) {
        if (pass == doc.data().password) {
          setIsLoggedIn(true)
          toast.success('Eingeloggt als ' + doc.data().firstname, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
            return
        }
        toast.error('Falsches Passwort für ' + doc.data().email, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
          return
      }
    });
    toast.error('Diesen Benutzer gibt es nicht', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }


  return { isLoggedIn, loginUser }
}


export default userProvider;



