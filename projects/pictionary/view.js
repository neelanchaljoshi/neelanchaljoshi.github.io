// view.js
import { database } from "./firebaseConfig.js";
import {
  ref,
  onChildAdded,
  onValue,
  remove
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 2;
ctx.lineCap = "round";

const strokesRef = ref(database, "rooms/room1/strokes");

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
