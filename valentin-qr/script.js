// Fake loading → lock screen
setTimeout(() => {
  document.getElementById("loading").style.display = "none";
  document.getElementById("lock").classList.remove("hidden");
}, 3000);

// Unlock function
function unlock() {
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (pass === "Amar Petni") { // CHANGE THIS
    document.getElementById("lock").style.display = "none";
    document.getElementById("main").classList.remove("hidden");
    typeName();
  } else {
    error.innerText = "Ei apni na,apni onno keu,get lost.... 😡";
  }
}

// Typewriter name effect
function typeName() {
  const name = "My Cutest Petni 😘 "; // CHANGE HER NAME
  let i = 0;
  const target = document.getElementById("name");

  const typing = setInterval(() => {
    target.innerHTML += name.charAt(i);
    i++;
    if (i === name.length) clearInterval(typing);
  }, 150);
}

// Music
function playMusic() {
  document.getElementById("music").play();
}

// NO button runs away
function moveNo() {
  const no = document.getElementById("no");
  no.style.top = Math.random() * window.innerHeight + "px";
  no.style.left = Math.random() * window.innerWidth + "px";
}

// YES button
function yes() {
  document.getElementById("final").classList.remove("hidden");
}
