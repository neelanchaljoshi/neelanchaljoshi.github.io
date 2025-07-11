import { database } from "./firebaseConfig.js";
import {
  ref,
  push,
  onChildAdded,
  onValue,
  remove,
  set
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const clearBtn = document.getElementById("clearBtn");
const wordSpan = document.getElementById("word");
const wordBtn = document.getElementById("wordBtn");
const movieBtn = document.getElementById("movieBtn");

ctx.lineWidth = 2;
ctx.lineCap = "round";

let drawing = false;
const strokesRef = ref(database, "rooms/room1/strokes");
const wordRef = ref(database, "rooms/room1/currentWord");

const TMDB_API_KEY = "5e249bec0d03956a7c258cf77582f8d9";

const localWords = ["rocket", "sun", "tree", "car", "house", "cat", "dog", "bicycle", "flower", "moon"];

async function fetchRandomWord() {
  try {
    const res = await fetch("https://random-word-api.herokuapp.com/word?number=1");
    const data = await res.json();
    return data[0];
  } catch {
    return localWords[Math.floor(Math.random() * localWords.length)];
  }
}

async function fetchRandomMovie() {
  try {
    const page = Math.floor(Math.random() * 500) + 1;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    const movies = data.results;
    if (movies && movies.length > 0) {
      const movie = movies[Math.floor(Math.random() * movies.length)];
      return movie.title;
    } else {
      return "Inception";
    }
  } catch {
    return "Inception";
  }
}

async function setNewWord(type) {
  let newWord;
  if (type === "movie") {
    newWord = await fetchRandomMovie();
  } else {
    newWord = await fetchRandomWord();
  }
  wordSpan.textContent = newWord;
  await set(wordRef, newWord);
  clearCanvas();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  remove(strokesRef).catch(console.error);
}

document.addEventListener("DOMContentLoaded", () => {
  // Default word at start
  setNewWord("word");

  wordBtn.addEventListener("click", () => setNewWord("word"));
  movieBtn.addEventListener("click", () => setNewWord("movie"));
});

canvas.addEventListener("mousedown", e => {
  drawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
  push(strokesRef, { x: e.offsetX, y: e.offsetY, type: "start" });
});

canvas.addEventListener("mousemove", e => {
  if (!drawing) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  push(strokesRef, { x: e.offsetX, y: e.offsetY, type: "draw" });
});

canvas.addEventListener("mouseup", () => (drawing = false));
canvas.addEventListener("mouseleave", () => (drawing = false));

clearBtn.addEventListener("click", () => {
  if (confirm("Clear the entire board for everyone?")) {
    clearCanvas();
  }
});

onValue(strokesRef, snapshot => {
  if (!snapshot.exists()) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});

onChildAdded(strokesRef, snapshot => {
  const { x, y, type } = snapshot.val();
  if (type === "start") {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else if (type === "draw") {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
});
