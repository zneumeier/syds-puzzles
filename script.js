const clueMap = {
  ABOUT: "Concerning.",
  AFTER: "Later than.",
  BASIL: "Fragrant herb in pesto.",
  BLISS: "Perfect happiness.",
  BRAVE: "Courageous.",
  CANDY: "Sweet checkout-aisle treat.",
  CHEER: "A shout of support.",
  CIDER: "Apple drink that can be mulled.",
  CLOUD: "Fluffy thing in the sky.",
  CORGI: "Short-legged royal favorite.",
  DAILY: "Happening every day.",
  DANCE: "Move to music.",
  EARTH: "Our home planet.",
  FETCH: "Retrieve, as a thrown ball.",
  GREEN: "Color of grass.",
  HONEY: "Sweet bear snack.",
  IDEAL: "Perfect.",
  LARGE: "Big.",
  LEMON: "Yellow citrus fruit.",
  LIGHT: "Not heavy.",
  MAGIC: "Stage illusion stuff.",
  MANGO: "Tropical fruit with a pit.",
  MUSIC: "Something heard in a song.",
  OCEAN: "Vast body of salt water.",
  RAISE: "Lift up.",
  ROYAL: "Fit for a monarch.",
  SALAD: "Leafy lunch option.",
  SHORE: "Land beside water.",
  STORM: "Rough weather.",
  SUNNY: "Bright and cloudless.",
  TRAIN: "Railway vehicle.",
  WALKS: "Strolls.",
  YOUNG: "Not old.",
};

const dailyPuzzleBank = [
  {
    title: "Royal Short Legs",
    across: ["CORGI", "RAISE", "IDEAL"],
    down: ["CORGI", "RAISE", "IDEAL"],
  },
  {
    title: "Sky Moves",
    across: ["CLOUD", "OCEAN", "DANCE"],
    down: ["CLOUD", "OCEAN", "DANCE"],
  },
  {
    title: "Small Bravery",
    across: ["BRAVE", "AFTER", "EARTH"],
    down: ["BRAVE", "AFTER", "EARTH"],
  },
  {
    title: "Sweet Tune",
    across: ["MUSIC", "SHORE", "CHEER"],
    down: ["MUSIC", "SHORE", "CHEER"],
  },
  {
    title: "Apple Crown",
    across: ["CIDER", "DAILY", "ROYAL"],
    down: ["CIDER", "DAILY", "ROYAL"],
  },
  {
    title: "Tropical Weather",
    across: ["STORM", "OCEAN", "MANGO"],
    down: ["STORM", "OCEAN", "MANGO"],
  },
  {
    title: "Kitchen Garden",
    across: ["BASIL", "STORM", "LEMON"],
    down: ["BASIL", "STORM", "LEMON"],
  },
  {
    title: "Sweet Spell",
    across: ["MAGIC", "GREEN", "CANDY"],
    down: ["MAGIC", "GREEN", "CANDY"],
  },
  {
    title: "Good Dog",
    across: ["FETCH", "TRAIN", "HONEY"],
    down: ["FETCH", "TRAIN", "HONEY"],
  },
  {
    title: "Bright Stroll",
    across: ["WALKS", "LEMON", "SUNNY"],
    down: ["WALKS", "LEMON", "SUNNY"],
  },
  {
    title: "Light Lunch",
    across: ["BLISS", "IDEAL", "SALAD"],
    down: ["BLISS", "IDEAL", "SALAD"],
  },
  {
    title: "Golden Hour",
    across: ["ROYAL", "YOUNG", "LIGHT"],
    down: ["ROYAL", "YOUNG", "LIGHT"],
  },
];

const today = new Date();
const puzzle = buildDailyPuzzle(today);

const boardEl = document.querySelector("#board");
const acrossCluesEl = document.querySelector("#acrossClues");
const downCluesEl = document.querySelector("#downClues");
const activeClueText = document.querySelector("#activeClueText");
const directionButton = document.querySelector("#directionButton");
const keyboardEl = document.querySelector("#keyboard");
const filledCountEl = document.querySelector("#filledCount");
const timerButton = document.querySelector("#timerButton");
const toast = document.querySelector("#toast");
const dateLabel = document.querySelector(".date-label");
const puzzleTitle = document.querySelector(".puzzle-meta h2");

let direction = "across";
let active = { row: 0, col: 0 };
let paused = false;
let seconds = 0;
let toastTimeout;

const cells = [];
const entries = { across: [], down: [] };

function buildDailyPuzzle(date) {
  const localMidnight = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const dayNumber = Math.floor(localMidnight.getTime() / 86400000);
  const daily = dailyPuzzleBank[dayNumber % dailyPuzzleBank.length];
  const [acrossTop, acrossMiddle, acrossBottom] = daily.across;
  const [downLeft, downMiddle, downRight] = daily.down;

  return {
    size: 5,
    title: daily.title,
    rows: [
      acrossTop.split(""),
      [downLeft[1], null, downMiddle[1], null, downRight[1]],
      acrossMiddle.split(""),
      [downLeft[3], null, downMiddle[3], null, downRight[3]],
      acrossBottom.split(""),
    ],
    clues: {
      across: {
        1: clueMap[acrossTop],
        4: clueMap[acrossMiddle],
        5: clueMap[acrossBottom],
      },
      down: {
        1: clueMap[downLeft],
        2: clueMap[downMiddle],
        3: clueMap[downRight],
      },
    },
  };
}

function updatePuzzleMeta() {
  dateLabel.textContent = today.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  puzzleTitle.textContent = puzzle.title;
}

function isOpen(row, col) {
  return (
    row >= 0 &&
    row < puzzle.size &&
    col >= 0 &&
    col < puzzle.size &&
    puzzle.rows[row][col] !== null
  );
}

function numberGrid() {
  let next = 1;
  const numbers = Array.from({ length: puzzle.size }, () => Array(puzzle.size).fill(null));

  for (let row = 0; row < puzzle.size; row += 1) {
    for (let col = 0; col < puzzle.size; col += 1) {
      if (!isOpen(row, col)) continue;

      const startsAcross = (col === 0 || !isOpen(row, col - 1)) && isOpen(row, col + 1);
      const startsDown = (row === 0 || !isOpen(row - 1, col)) && isOpen(row + 1, col);

      if (startsAcross || startsDown) {
        numbers[row][col] = next;
        next += 1;
      }
    }
  }

  return numbers;
}

const numbers = numberGrid();

function buildEntries() {
  for (let row = 0; row < puzzle.size; row += 1) {
    for (let col = 0; col < puzzle.size; col += 1) {
      const number = numbers[row][col];
      if (!number) continue;

      if ((col === 0 || !isOpen(row, col - 1)) && isOpen(row, col + 1)) {
        const positions = [];
        let cursor = col;
        while (isOpen(row, cursor)) {
          positions.push({ row, col: cursor });
          cursor += 1;
        }
        entries.across.push({ number, positions, clue: puzzle.clues.across[number] });
      }

      if ((row === 0 || !isOpen(row - 1, col)) && isOpen(row + 1, col)) {
        const positions = [];
        let cursor = row;
        while (isOpen(cursor, col)) {
          positions.push({ row: cursor, col });
          cursor += 1;
        }
        entries.down.push({ number, positions, clue: puzzle.clues.down[number] });
      }
    }
  }
}

function makeBoard() {
  for (let row = 0; row < puzzle.size; row += 1) {
    cells[row] = [];
    for (let col = 0; col < puzzle.size; col += 1) {
      const cell = document.createElement("button");
      cell.className = "cell";
      cell.type = "button";
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.setAttribute("role", "gridcell");

      if (!isOpen(row, col)) {
        cell.classList.add("block");
        cell.disabled = true;
        cell.setAttribute("aria-label", "Blocked square");
      } else {
        cell.setAttribute("aria-label", `Square ${row + 1}, ${col + 1}`);
        cell.addEventListener("click", () => selectCell(row, col));

        if (numbers[row][col]) {
          const number = document.createElement("span");
          number.className = "number";
          number.textContent = numbers[row][col];
          cell.append(number);
        }
      }

      boardEl.append(cell);
      cells[row][col] = cell;
    }
  }
}

function makeClues() {
  for (const entry of entries.across) {
    acrossCluesEl.append(makeClueItem(entry, "across"));
  }
  for (const entry of entries.down) {
    downCluesEl.append(makeClueItem(entry, "down"));
  }
}

function makeClueItem(entry, entryDirection) {
  const item = document.createElement("li");
  item.dataset.direction = entryDirection;
  item.dataset.number = entry.number;
  item.innerHTML = `<span class="clue-number">${entry.number}</span><span>${entry.clue}</span>`;
  item.addEventListener("click", () => {
    direction = entryDirection;
    const firstEmpty = entry.positions.find(({ row, col }) => !cells[row][col].dataset.value);
    const position = firstEmpty || entry.positions[0];
    selectCell(position.row, position.col, true);
  });
  return item;
}

function makeKeyboard() {
  const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
  rows.forEach((letters, index) => {
    const row = document.createElement("div");
    row.className = "key-row";

    if (index === 2) row.append(makeKey("Del", "utility"));

    letters.split("").forEach((letter) => row.append(makeKey(letter)));

    if (index === 2) row.append(makeKey("Next", "utility"));

    keyboardEl.append(row);
  });
}

function makeKey(label, kind = "") {
  const key = document.createElement("button");
  key.type = "button";
  key.className = `key ${kind}`.trim();
  key.textContent = label;
  key.addEventListener("click", () => {
    if (label === "Del") {
      eraseLetter();
    } else if (label === "Next") {
      moveToNextEntry();
    } else {
      enterLetter(label);
    }
  });
  return key;
}

function getEntry(row = active.row, col = active.col, entryDirection = direction) {
  return entries[entryDirection].find((entry) =>
    entry.positions.some((position) => position.row === row && position.col === col),
  );
}

function selectCell(row, col, keepDirection = false) {
  if (!isOpen(row, col)) return;

  if (!keepDirection && active.row === row && active.col === col) {
    const alternate = direction === "across" ? "down" : "across";
    if (getEntry(row, col, alternate)) direction = alternate;
  }

  active = { row, col };
  updateBoard();
}

function updateBoard() {
  const entry = getEntry();
  const related = getEntry(active.row, active.col, direction === "across" ? "down" : "across");

  document.querySelectorAll(".cell").forEach((cell) => {
    cell.classList.remove("active", "highlighted", "related", "wrong");
  });
  document.querySelectorAll(".clue-column li").forEach((item) => item.classList.remove("active"));

  if (entry) {
    entry.positions.forEach(({ row, col }) => cells[row][col].classList.add("highlighted"));
    activeClueText.textContent = `${entry.number}. ${entry.clue}`;
    directionButton.textContent = direction;

    const clueItem = document.querySelector(
      `.clue-column li[data-direction="${direction}"][data-number="${entry.number}"]`,
    );
    clueItem?.classList.add("active");
  }

  if (related) {
    related.positions.forEach(({ row, col }) => cells[row][col].classList.add("related"));
  }

  cells[active.row][active.col].classList.add("active");
  updateFilledCount();
}

function enterLetter(letter) {
  const cell = cells[active.row][active.col];
  cell.dataset.value = letter;
  cell.textContent = letter;
  restoreNumber(cell, active.row, active.col);
  moveWithinEntry(1);
  updateBoard();
  checkCompletion();
}

function eraseLetter() {
  const cell = cells[active.row][active.col];
  if (cell.dataset.value) {
    delete cell.dataset.value;
    cell.textContent = "";
    restoreNumber(cell, active.row, active.col);
  } else {
    moveWithinEntry(-1);
    const previous = cells[active.row][active.col];
    delete previous.dataset.value;
    previous.textContent = "";
    restoreNumber(previous, active.row, active.col);
  }
  updateBoard();
}

function restoreNumber(cell, row, col) {
  if (!numbers[row][col] || cell.querySelector(".number")) return;
  const number = document.createElement("span");
  number.className = "number";
  number.textContent = numbers[row][col];
  cell.prepend(number);
}

function moveWithinEntry(step) {
  const entry = getEntry();
  if (!entry) return;

  const index = entry.positions.findIndex(
    (position) => position.row === active.row && position.col === active.col,
  );
  const next = entry.positions[index + step];

  if (next) {
    active = next;
  } else if (step > 0) {
    moveToNextEntry();
  }
}

function moveToNextEntry() {
  const currentEntries = entries[direction];
  const current = getEntry();
  const index = Math.max(0, currentEntries.indexOf(current));
  const next = currentEntries[(index + 1) % currentEntries.length];
  const firstEmpty = next.positions.find(({ row, col }) => !cells[row][col].dataset.value);
  active = firstEmpty || next.positions[0];
  updateBoard();
}

function checkPuzzle(showSuccess = true) {
  let wrong = 0;

  for (let row = 0; row < puzzle.size; row += 1) {
    for (let col = 0; col < puzzle.size; col += 1) {
      if (!isOpen(row, col)) continue;
      const cell = cells[row][col];
      if (cell.dataset.value && cell.dataset.value !== puzzle.rows[row][col]) {
        cell.classList.add("wrong");
        wrong += 1;
      }
    }
  }

  if (wrong) {
    showToast(`${wrong} square${wrong === 1 ? "" : "s"} need another look.`);
    return false;
  }

  if (showSuccess) showToast("Everything filled so far looks right.");
  return true;
}

function checkCompletion() {
  const openSquares = puzzle.rows.flat().filter(Boolean).length;
  const filled = document.querySelectorAll(".cell[data-value]").length;

  if (filled === openSquares && checkPuzzle(false)) {
    paused = true;
    showToast(`Solved in ${formatTime(seconds)}. Nice work.`);
  }
}

function updateFilledCount() {
  const openSquares = puzzle.rows.flat().filter(Boolean).length;
  const filled = document.querySelectorAll(".cell[data-value]").length;
  filledCountEl.textContent = `${filled}/${openSquares}`;
}

function showToast(message) {
  window.clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimeout = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function formatTime(totalSeconds) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const secs = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${secs}`;
}

function tick() {
  if (!paused) {
    seconds += 1;
    timerButton.textContent = formatTime(seconds);
  }
}

document.querySelector("#directionButton").addEventListener("click", () => {
  direction = direction === "across" ? "down" : "across";
  if (!getEntry()) {
    direction = direction === "across" ? "down" : "across";
  }
  updateBoard();
});

document.querySelector("#checkButton").addEventListener("click", () => {
  updateBoard();
  checkPuzzle();
});

document.querySelector("#clearButton").addEventListener("click", () => {
  document.querySelectorAll(".cell[data-value]").forEach((cell) => {
    delete cell.dataset.value;
    cell.textContent = "";
    restoreNumber(cell, Number(cell.dataset.row), Number(cell.dataset.col));
  });
  updateBoard();
  showToast("Puzzle cleared.");
});

document.querySelector("#revealButton").addEventListener("click", () => {
  enterLetter(puzzle.rows[active.row][active.col]);
  showToast("Revealed one square.");
});

timerButton.addEventListener("click", () => {
  paused = !paused;
  timerButton.setAttribute("aria-label", paused ? "Resume timer" : "Pause timer");
  showToast(paused ? "Timer paused." : "Timer resumed.");
});

document.addEventListener("keydown", (event) => {
  if (/^[a-z]$/i.test(event.key)) {
    enterLetter(event.key.toUpperCase());
  } else if (event.key === "Backspace" || event.key === "Delete") {
    eraseLetter();
  } else if (event.key === "Tab") {
    event.preventDefault();
    moveToNextEntry();
  } else if (event.key === " ") {
    event.preventDefault();
    direction = direction === "across" ? "down" : "across";
    updateBoard();
  } else if (event.key.startsWith("Arrow")) {
    event.preventDefault();
    moveByArrow(event.key);
  }
});

function moveByArrow(key) {
  const deltas = {
    ArrowUp: [-1, 0, "down"],
    ArrowDown: [1, 0, "down"],
    ArrowLeft: [0, -1, "across"],
    ArrowRight: [0, 1, "across"],
  };
  const [rowDelta, colDelta, nextDirection] = deltas[key];
  let row = active.row + rowDelta;
  let col = active.col + colDelta;

  while (row >= 0 && row < puzzle.size && col >= 0 && col < puzzle.size) {
    if (isOpen(row, col)) {
      direction = nextDirection;
      active = { row, col };
      updateBoard();
      return;
    }
    row += rowDelta;
    col += colDelta;
  }
}

updatePuzzleMeta();
buildEntries();
makeBoard();
makeClues();
makeKeyboard();
selectCell(0, 0, true);
window.setInterval(tick, 1000);
