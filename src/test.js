import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs,
  addDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDov4cuzedD7XlwtoAwZFmig3JfGuj6COQ",
  authDomain: "fir-9-geexpro.firebaseapp.com",
  projectId: "fir-9-geexpro",
  storageBucket: "fir-9-geexpro.appspot.com",
  messagingSenderId: "194567428232",
  appId: "1:194567428232:web:df62437660fa29ec92673d",
  measurementId: "G-B2C805E45M"
};

initializeApp(firebaseConfig)

const db = getFirestore()

const colRef = collection(db, 'Signup')

getDocs(colRef)
  .then((snapshot) => {
    let Signup = []
    snapshot.docs.forEach((doc) => {
      Signup.push({ ...doc.data(), id: doc.id })
    })
    console.log(Signup)
  })

  .catch(err => {
    console.log(err.message)
  })

console.log(localStorage.getItem('username'))

document.addEventListener("DOMContentLoaded", async function () {
    const js_score = document
      .getElementById("jsquizform");
  
    console.log(js_score);
  
    js_score.addEventListener("submit", async function (e) {
      e.preventDefault(); // Prevent the form from submitting
  
      console.log("Daba Dis");
      let score = 0;
  
      // Check answers for question 1
      if (document.getElementById("q1-option1").checked) {
        score += 4;
      }
  
      // Check answers for question 2
      if (document.getElementById("q2-option1").checked) {
        score += 4;
      }
  
      // Check answers for question 3
      if (document.getElementById("q3-option2").checked) {
        score += 4;
      }
  
      // Check answers for question 4
      if (document.getElementById("q4-option2").checked) {
        score += 4;
      }
  
      // Check answers for question 5
      if (document.getElementById("q5-option1").checked) {
        score += 4;
      }
  
      // Check answers for question 6
      if (document.getElementById("q6-option2").checked) {
        score += 4;
      }
  
      // Check answers for question 7
      if (document.getElementById("q7-option3").checked) {
        score += 4;
      }
  
      // Check answers for question 8
      if (document.getElementById("q8-option1").checked) {
        score += 4;
      }
  
      // Check answers for question 9
      if (document.getElementById("q9-option2").checked) {
        score += 4;
      }
  
      // Check answers for question 10
      if (document.getElementById("q10-option1").checked) {
        score += 4;
      }
  
      // Check answers for question 11
      if (document.getElementById("q11-option3").checked) {
        score += 4;
      }
  
      // Check answers for question 12
      if (document.getElementById("q12-option3").checked) {
        score += 4;
      }
  
      // Check answers for question 13
      if (document.getElementById("q13-option1").checked) {
        score += 4;
      }
  
      // Check answers for question 14
      if (document.getElementById("q14-option3").checked) {
        score += 4;
      }
  
      // Check answers for question 15
      if (document.getElementById("q15-option2").checked) {
        score += 4;
      }
  
      // Display the score
      console.log(score);
  
      const colRef3 = collection(db, 'jsmasti')
  
      getDocs(colRef3)
        .then((snapshot) => {
          let js_quiz_scores = []
          snapshot.docs.forEach((doc) => {
            js_quiz_scores.push({ ...doc.data(), id: doc.id })
          })
          console.log(js_quiz_scores)
        })
  
        .catch(err => {
          console.log(err.message)
        })
  
      addDoc(colRef3, {
        username: localStorage.getItem('username'),
        js_score: score,
      }).then(() => {
        alert('Your Score is ' + score);
      }
      )
    });
  });