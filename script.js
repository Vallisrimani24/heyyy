window.onload = function () {
  const text = document.getElementById("letsStartText");
  const container = document.getElementById("mainContent");

  // Step 1: Fade in "Let's Start" after 4s
  setTimeout(() => {
    text.style.opacity = "1";
  }, 4000);

  // Step 2: After 3s more, show the container with zoom-in
  setTimeout(() => {
    text.style.opacity = "0"; // optional fade out of text
    container.style.display = "block";
    container.classList.add("fade-in-zoom");
  }, 7000);
};

function openNextContainer(nextId) {
  // Hide all containers
  const containers = document.querySelectorAll(".container");
  containers.forEach(container => container.style.display = "none");

  // Show the next container
  const next = document.querySelector(`.${nextId}`);
  if (next) {
    next.style.display = "block";
    next.classList.remove("fade-in-zoom"); // reset animation if re-triggered
    void next.offsetWidth; // force reflow for restart animation
    next.classList.add("fade-in-zoom");
  }
}

function checkPassword(nextId) {
  const input = document.getElementById("password-date").value;
  const error = document.getElementById("error-msg-password");
  
  if (input === "2006-08-30") {
    error.textContent = "✔️ Correct! Moving ahead...";
    error.style.color = "green";
    setTimeout(() => {
      openNextContainer(nextId);
    }, 3000);
  } else {
    error.textContent = "❌ Oops! Try again, maybe it's someone's special day?";
    error.style.color = "crimson";
  }
}

function checkCraving(nextId) {
  const input = document.getElementById("craving-input").value.trim().toLowerCase();
  const error = document.getElementById("error-msg-craving");
  const correctAnswer = "valleeee";

  if (input === correctAnswer) {
    error.textContent = "✔️ Yes... that's what I've been missing 💔";
    error.style.color = "green";
    setTimeout(() => {
      openNextContainer(nextId);
    }, 3000);
  } else {
    error.textContent = "❌ Not quite... try again? Think with your heart 🥹";
    error.style.color = "crimson";
  }
}

function checkPlaceDate(nextId) {
  const input = document.getElementById("place-date").value;
  const error = document.getElementById("error-msg-place");
  const correctDate = "2024-09-27";

  if (input === correctDate) {
    error.textContent = "✔️ You remembered... 💖";
    error.style.color = "green";
    setTimeout(() => {
      openNextContainer(nextId);
    }, 3000);
  } else {
    error.textContent = "❌ Hmm... think of that one place we talked about.";
    error.style.color = "crimson";
  }
}

function checkNickname(nextId) {
  const input = document.getElementById("nickname-input").value.trim().toLowerCase();
  const error = document.getElementById("error-msg-nickname");
  const correctWord = "potti dhanaa";

  if (input === correctWord) {
    error.textContent = "✔️ Yep... that word. It still makes me smile 🙂";
    error.style.color = "green";
    setTimeout(() => {
      openNextContainer(nextId);
    }, 3000);
  } else {
    error.textContent = "❌ Try again... it’s a word you used often, both sweet and silly 😅";
    error.style.color = "crimson";
  }
}

function closeSite() {
  alert("Thank you for watching 💌");
  window.close();
}