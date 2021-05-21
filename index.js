import {
  getLocalStoreValue,
  getSessionStoreValue,
  incrementCount,
} from "./store.js";

const localCounterElement = document.getElementById("local-value");
const sessionCounterElement = document.getElementById("session-value");
const counterButtonElement = document.getElementById("inc-btn");
// intial load
updateValues();

function updateValues() {
  localCounterElement.innerText = getLocalStoreValue();
  sessionCounterElement.innerText = getSessionStoreValue();
}

function handleIncrement() {
  incrementCount();
  updateValues();
}
counterButtonElement.addEventListener("click", handleIncrement);
