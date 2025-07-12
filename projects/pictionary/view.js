import { database } from "./firebaseConfig.js";
import {
  ref,
  onChildAdded,
  onValue
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 2;
ctx.lineCap = "round";

const strokesRef = ref(database, "rooms/room1/strokes");

// ✅ High-DPI scaling
function resizeCanvas() {
  const dpi = window.devicePixelRatio || 1;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  if (canvas.width !== width * dpi || canvas.height !== height * dpi) {
    canvas.width = width * dpi;
    canvas.height = height * dpi;
    ctx.setTransform(dpi, 0, 0, dpi, 0, 0);
  }
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// ✅ Clear when strokes reset
onValue(strokesRef, snapshot => {
  if (!snapshot.exists()) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});

// ✅ Draw incoming strokes
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
