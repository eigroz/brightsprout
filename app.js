const games = [
  { id: "spell-quest", title: "Spell Quest", subject: "spelling", ages: ["7-9"], ageLabel: "7–8", emoji: "🐲", colour: "#e1d8f7", description: "Explore the Wordwood through spoken prompts, word challenges and boss rounds.", playable: true, href: "games/spell-quest/" },
  { id: "word-builder", title: "Word Builder", subject: "spelling", ages: ["4-6", "7-9"], emoji: "🐸", colour: "#dcefdc", description: "Unscramble letters and build everyday words.", playable: true },
  { id: "sound-safari", title: "Sound Safari", subject: "english", ages: ["4-6", "7-9"], emoji: "🦁", colour: "#f6d7a8", description: "Listen for beginning sounds on a wild word hunt." },
  { id: "number-nest", title: "Number Nest", subject: "maths", ages: ["4-6"], emoji: "🐣", colour: "#d5e9ef", description: "Count, compare and help each chick find its nest." },
  { id: "sentence-studio", title: "Sentence Studio", subject: "english", ages: ["7-9", "10-12"], emoji: "✏️", colour: "#eadcf1", description: "Arrange lively phrases into strong sentences." },
  { id: "spellbound", title: "Spellbound", subject: "spelling", ages: ["10-12"], emoji: "🔮", colour: "#d8e5f6", description: "Master tricky words and break the wizard's spell." },
  { id: "fraction-feast", title: "Fraction Feast", subject: "maths", ages: ["7-9", "10-12"], emoji: "🍕", colour: "#f6d6cb", description: "Slice, share and explore fractions with food." }
];

const labels = { spelling: "Spelling", english: "English", maths: "Maths" };
let subjectFilter = "all";
let ageFilter = "all";

const grid = document.querySelector("#games-grid");
const emptyState = document.querySelector("#empty-state");

function renderGames() {
  const shown = games.filter(game => (subjectFilter === "all" || game.subject === subjectFilter) && (ageFilter === "all" || game.ages.includes(ageFilter)));
  grid.innerHTML = shown.map(game => `
    <article class="game-card">
      <div class="card-art" style="--card-bg:${game.colour}">
        <span class="age-tag">Ages ${game.ageLabel || game.ages.join(" & ")}</span>
        <span aria-hidden="true">${game.emoji}</span>
      </div>
      <div class="card-body">
        <p class="subject-label">${labels[game.subject]}</p>
        <h3>${game.title}</h3>
        <p>${game.description}</p>
        <button class="play-button" data-game="${game.id}" ${game.playable ? "" : "disabled"}>${game.playable ? "Play now →" : "Coming soon"}</button>
      </div>
    </article>`).join("");
  emptyState.hidden = shown.length > 0;
}

document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  subjectFilter = button.dataset.subject;
  renderGames();
}));

document.querySelectorAll(".age-pill").forEach(button => button.addEventListener("click", () => {
  const alreadyActive = button.classList.contains("active");
  document.querySelectorAll(".age-pill").forEach(item => item.classList.remove("active"));
  ageFilter = alreadyActive ? "all" : button.dataset.age;
  if (!alreadyActive) button.classList.add("active");
  renderGames();
  document.querySelector("#games").scrollIntoView({ behavior: "smooth" });
}));

const dialog = document.querySelector("#game-dialog");
const rounds = [
  { word: "frog", emoji: "🐸" }, { word: "star", emoji: "⭐" }, { word: "book", emoji: "📕" },
  { word: "plant", emoji: "🌱" }, { word: "train", emoji: "🚂" }
];
let round = 0;
let answer = [];
let shuffled = [];

function shuffleWord(word) {
  let result = word.split("").sort(() => Math.random() - .5);
  if (result.join("") === word && word.length > 2) [result[0], result[1]] = [result[1], result[0]];
  return result;
}

function drawRound() {
  const current = rounds[round];
  answer = [];
  shuffled = shuffleWord(current.word);
  document.querySelector("#round-number").textContent = round + 1;
  document.querySelector("#picture-card").textContent = current.emoji;
  document.querySelector("#answer-slots").innerHTML = current.word.split("").map(() => '<span class="slot"></span>').join("");
  document.querySelector("#letter-bank").innerHTML = shuffled.map((letter, index) => `<button class="letter" data-index="${index}">${letter}</button>`).join("");
  setMessage("");
}

function setMessage(message, type = "") {
  const element = document.querySelector("#game-message");
  element.textContent = message;
  element.className = `game-message ${type}`;
}

function updateAnswer() {
  document.querySelectorAll(".slot").forEach((slot, index) => slot.textContent = answer[index]?.letter || "");
}

grid.addEventListener("click", event => {
  const button = event.target.closest("[data-game]");
  if (!button) return;
  const selectedGame = games.find(game => game.id === button.dataset.game);
  if (selectedGame?.href) {
    window.location.href = selectedGame.href;
    return;
  }
  if (button.dataset.game !== "word-builder") return;
  round = 0;
  drawRound();
  dialog.showModal();
});

document.querySelector("#letter-bank").addEventListener("click", event => {
  const button = event.target.closest(".letter");
  if (!button || button.disabled || answer.length >= rounds[round].word.length) return;
  answer.push({ letter: button.textContent, index: button.dataset.index });
  button.disabled = true;
  updateAnswer();
  setMessage("");
});

document.querySelector("#clear-answer").addEventListener("click", () => {
  answer = [];
  document.querySelectorAll(".letter").forEach(button => button.disabled = false);
  updateAnswer();
  setMessage("");
});

document.querySelector("#check-answer").addEventListener("click", () => {
  if (answer.length < rounds[round].word.length) return setMessage("Choose all the letters first.", "error");
  if (answer.map(item => item.letter).join("") !== rounds[round].word) return setMessage("Almost! Clear the letters and try again.", "error");
  if (round === rounds.length - 1) {
    setMessage("Brilliant! You completed every word! 🎉", "success");
    document.querySelector("#check-answer").textContent = "Play again";
    document.querySelector("#check-answer").onclick = () => { round = 0; drawRound(); document.querySelector("#check-answer").textContent = "Check word"; document.querySelector("#check-answer").onclick = null; };
  } else {
    setMessage("You got it! Next word coming up…", "success");
    setTimeout(() => { round += 1; drawRound(); }, 850);
  }
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
document.querySelector("#year").textContent = new Date().getFullYear();
renderGames();
