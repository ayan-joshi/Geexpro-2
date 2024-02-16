// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const colRef2 = collection(db, 'HTML_quiz_scores')

getDocs(colRef2)
    .then((snapshot) => {
        let HTML_quiz_scores = []
        snapshot.docs.forEach((doc) => {
            HTML_quiz_scores.push({ ...doc.data(), id: doc.id })
        })
        console.log(HTML_quiz_scores)
    })

    .catch(err => {
        console.log(err.message)
    })

// window.onload = function () {
    const addHtmlQuizMarks = document.getElementById('quizform');
    addHtmlQuizMarks.addEventListener('submit', (e) => {
        e.preventDefault();

        addDoc(colRef2, {
            html_score: addHtmlQuizMarks.html_score.value
        })
            .then(() => {
                console.log("This is active");
                // window.location.href = "http://127.0.0.1:5501/src/HTML/htmlscore.html"
                // addSignupForm.reset();

            })
            .catch((error) => {
                console.error('Error adding document: ', error);

            });

    });
// }





