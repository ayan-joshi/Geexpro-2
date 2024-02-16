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

const colRefScores= collection(db, 'html_quiz_scores')

getDocs(colRefScores)
  .then((snapshot) => {
    let scores = []
    snapshot.docs.forEach((doc) => {
      scores.push({ ...doc.data(), id: doc.id })
    })
    console.log(scores)
  })

  .catch(err => {
    console.log(err.message)
  })

const leaderboardTable = document.getElementById("leaderboardTable");
console.log("leaderboardTable");
db.ref("leaderboard").orderByChild("score").on("value", function(snapshot) {
    const leaderboardData = [];
    snapshot.forEach(function(childSnapshot) {
        const entry = childSnapshot.val();
        leaderboardData.push(entry);
    });

    leaderboardData.reverse(); // Reverse the data array to display in descending order by score

    leaderboardData.forEach((entry, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${index + 1}</td><td>${entry.name}</td><td>${entry.score}</td>`;
        leaderboardTable.appendChild(row);
    });
});
