import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import { getDatabase, ref, set, onValue } from"https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAqHajlfQfkKuvRy0OxtHTQWHr_YnUu2DI",
  authDomain: "auth-app-149ba.firebaseapp.com",
  databaseURL: "https://auth-app-149ba-default-rtdb.firebaseio.com",
  projectId: "auth-app-149ba",
  storageBucket: "auth-app-149ba.firebasestorage.app",
  messagingSenderId: "609188439323",
  appId: "1:609188439323:web:ee3179f67679a85c3b1fbe",
  measurementId: "G-RF9D0FWS1Z"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getDatabase(app);
const counterRef=ref(db,"counter");

function updateCounter(value){
    set(counterRef,value);
}

document.getElementById("increment").addEventListener("click",function(e){
    e.preventDefault();
    let count=Number(document.getElementById("counter").innerText);
    updateCounter(count+1);                                            
})

document.getElementById("decrement").addEventListener("click",function(e){
    e.preventDefault();
    let count=Number(document.getElementById("counter").innerText);
    updateCounter(count-1);
})

onValue(counterRef,function(snapshot){
    document.getElementById("counter").innerText=snapshot.val();
})