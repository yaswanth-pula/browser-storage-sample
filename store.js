const STORE_KEY = "counter";

function getLocalStoreValue() {
  let localVal = localStorage.getItem(STORE_KEY);
  if (localVal === null) return 0;

  return Number(localVal);
}

function getSessionStoreValue() {
  let sessionVal = sessionStorage.getItem(STORE_KEY);
  if (sessionVal === null) return 0;

  return Number(sessionVal);
}

function incrementCount() {
  let localVal = getLocalStoreValue() + 1;
  localStorage.setItem(STORE_KEY, localVal.toString());

  let sessionVal = getSessionStoreValue() + 1;
  sessionStorage.setItem(STORE_KEY, sessionVal.toString());
}

export { getLocalStoreValue, getSessionStoreValue, incrementCount };
