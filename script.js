const clueMap = {
  ABOUT: "Concerning.",
  AFTER: "Later than.",
  ABOVE: "Higher than.",
  ACORN: "Oak tree seed.",
  ACTOR: "Stage performer.",
  ADAPT: "Adjust to fit.",
  ADMIT: "Confess or let in.",
  ALARM: "Warning sound.",
  ALBUM: "Collection of songs.",
  ALERT: "Watchful and ready.",
  ALIKE: "Similar.",
  ALONE: "By oneself.",
  AMBER: "Yellow-orange fossil resin.",
  ANGEL: "Halo wearer.",
  ANKLE: "Joint above the foot.",
  APPLE: "Fruit in a pie.",
  APRON: "Kitchen garment.",
  ARENA: "Sports venue.",
  ARGUE: "Disagree out loud.",
  ARISE: "Get up.",
  ASIDE: "Off to one side.",
  AUDIO: "Sound, technically.",
  AWAKE: "Not sleeping.",
  BASIL: "Fragrant herb in pesto.",
  BASIC: "Simple and essential.",
  BEACH: "Sandy place by the water.",
  BERRY: "Small fruit in a summer bowl.",
  BLISS: "Perfect happiness.",
  BLAZE: "Bright fire.",
  BLEND: "Mix together.",
  BLOCK: "Cube-shaped toy.",
  BLOOM: "Flower opening.",
  BRAIN: "Thinking organ.",
  BRAND: "Company mark.",
  BRAVE: "Courageous.",
  BREAD: "Bakery loaf.",
  BRICK: "Wall-building block.",
  BRIDE: "Wedding aisle walker.",
  BRING: "Carry along.",
  BROAD: "Wide.",
  BROWN: "Color of chocolate.",
  BRUSH: "Tool for hair or paint.",
  CABIN: "Small rustic house.",
  CABLE: "Cord for a device.",
  CANOE: "Narrow paddled boat.",
  CANDY: "Sweet checkout-aisle treat.",
  CAROL: "Holiday song.",
  CARRY: "Hold while moving.",
  CATCH: "Grab in midair.",
  CHAIR: "Seat with a back.",
  CHARM: "Delightful quality.",
  CHEER: "A shout of support.",
  CIDER: "Apple drink that can be mulled.",
  CLEAN: "Not dirty.",
  CLEAR: "Easy to understand.",
  CLOCK: "Time teller.",
  CLOUD: "Fluffy thing in the sky.",
  COAST: "Land beside the sea.",
  COMET: "Icy visitor with a tail.",
  CORGI: "Short-legged royal favorite.",
  COVER: "Put over the top.",
  CRANE: "Long-necked bird or lifting machine.",
  CREAM: "Rich dairy topping.",
  CRISP: "Crunchy, as a chip.",
  CROWN: "Royal headwear.",
  DAILY: "Happening every day.",
  DANCE: "Move to music.",
  DELAY: "Hold up.",
  DELTA: "River-mouth landform.",
  DOUBT: "Feeling of uncertainty.",
  DREAM: "Sleep story.",
  DRINK: "Sip.",
  EAGLE: "Large bird of prey.",
  EAGER: "Very excited to begin.",
  EARTH: "Our home planet.",
  ELBOW: "Arm bend.",
  ENJOY: "Take pleasure in.",
  ENTER: "Go in.",
  EVENT: "Happening on a calendar.",
  EVERY: "Each one.",
  EXTRA: "More than needed.",
  FAITH: "Deep trust.",
  FANCY: "A bit elegant.",
  FIELD: "Open grassy area.",
  FINAL: "Last.",
  FIRST: "Before all others.",
  FETCH: "Retrieve, as a thrown ball.",
  FLAME: "Tongue of fire.",
  FLOOR: "Room bottom.",
  FOCUS: "Concentrate.",
  FORCE: "Strength or power.",
  FRAME: "Border for a picture.",
  FRONT: "Opposite of back.",
  FRESH: "New, not stale.",
  FRUIT: "Apple or pear, for example.",
  GIANT: "Huge.",
  GHOST: "Spooky spirit.",
  GLASS: "Window material.",
  GLOVE: "Hand covering.",
  GRACE: "Poise and elegance.",
  GRAPE: "Tiny fruit in a bunch.",
  GRASS: "Lawn cover.",
  GRAIN: "Tiny cereal seed.",
  GRAND: "Impressive.",
  GRANT: "Give officially.",
  GREAT: "Excellent.",
  GREEN: "Color of grass.",
  GUIDE: "Person who shows the way.",
  HABIT: "Regular behavior.",
  HAPPY: "Feeling joyful.",
  HEART: "Symbol of love.",
  HONEY: "Sweet bear snack.",
  HOTEL: "Place to stay overnight.",
  HOUSE: "Place to live.",
  HUMAN: "Person.",
  HUMOR: "Funny quality.",
  IDEAL: "Perfect.",
  IMAGE: "Picture.",
  IRATE: "Very angry.",
  JELLY: "Toast spread.",
  JOLLY: "Merry.",
  JUICE: "Fruit drink.",
  KNIFE: "Cutting tool.",
  KNITS: "Makes with yarn.",
  LABEL: "Tag with a name.",
  LARGE: "Big.",
  LAUGH: "Sound of amusement.",
  LAYER: "One thickness.",
  LEARN: "Gain knowledge.",
  LEMON: "Yellow citrus fruit.",
  LEVEL: "Flat or even.",
  LIGHT: "Not heavy.",
  LUNCH: "Midday meal.",
  MAGIC: "Stage illusion stuff.",
  MAJOR: "Important.",
  MANGO: "Tropical fruit with a pit.",
  MARCH: "Walk in step.",
  MATCH: "Game or equal partner.",
  MERRY: "Cheerful.",
  METAL: "Iron or gold, for example.",
  MODEL: "Small version.",
  MONEY: "Cash.",
  MONTH: "Calendar page.",
  MOTOR: "Engine.",
  MOUSE: "Computer clicker.",
  MUSIC: "Something heard in a song.",
  NIGHT: "Dark part of the day.",
  NORTH: "Map direction.",
  NOVEL: "Long work of fiction.",
  NURSE: "Hospital caregiver.",
  OCEAN: "Vast body of salt water.",
  OLIVE: "Tiny fruit in tapenade.",
  OTHER: "Not this one.",
  PAINT: "Color for walls.",
  PANEL: "Flat section.",
  PAPER: "Sheet for writing.",
  PASTA: "Noodles, often with sauce.",
  PEACH: "Fuzzy stone fruit.",
  PEACE: "Calm, not conflict.",
  PHONE: "Calling device.",
  PILOT: "Plane flyer.",
  PLAIN: "Simple; not fancy.",
  PLANE: "Aircraft.",
  PLANT: "Garden grower.",
  POUND: "Unit of weight.",
  POWER: "Energy or strength.",
  PRESS: "Push firmly.",
  PRINT: "Put words on paper.",
  PRIDE: "Feeling of self-respect.",
  QUEEN: "Female monarch.",
  QUIET: "Not noisy.",
  RADIO: "Broadcast receiver.",
  RAISE: "Lift up.",
  RANCH: "Large farm.",
  REACH: "Stretch toward.",
  READY: "Prepared.",
  RIGHT: "Correct.",
  RIVER: "Natural flowing water.",
  ROAST: "Cook in an oven.",
  ROUND: "Shaped like a circle.",
  ROYAL: "Fit for a monarch.",
  SALAD: "Leafy lunch option.",
  SCALE: "Weighing device.",
  SCENE: "Part of a play.",
  SCORE: "Game tally.",
  SENSE: "Sight or smell, for example.",
  SHARE: "Use together.",
  SHEET: "Bed cover.",
  SHELL: "Hard outer covering.",
  SHORE: "Land beside water.",
  SHIFT: "Move slightly.",
  SHINE: "Give off light.",
  SKILL: "Learned ability.",
  SLATE: "Gray roofing stone.",
  SLICE: "Thin piece.",
  SLEEP: "Rest with eyes closed.",
  SMALL: "Little.",
  SMART: "Clever.",
  SMILE: "Friendly expression.",
  SOLID: "Firm; not liquid.",
  SOUND: "Something heard.",
  SOUTH: "Opposite of north.",
  SPACE: "Room or outer void.",
  SPARK: "Tiny flash.",
  SPICE: "Flavoring from the pantry.",
  SPORT: "Athletic game.",
  STAND: "Be upright.",
  STARE: "Look fixedly.",
  START: "Begin.",
  STEAM: "Vapor from a kettle.",
  STONE: "Small rock.",
  STORM: "Rough weather.",
  STYLE: "Distinctive look.",
  SUGAR: "Sweet crystals.",
  SUNNY: "Bright and cloudless.",
  SWEAR: "Promise solemnly.",
  SWEET: "Sugary.",
  TABLE: "Dining furniture.",
  TEACH: "Help someone learn.",
  THANK: "Express gratitude.",
  THEME: "Central subject.",
  THEIR: "Belonging to them.",
  THERE: "In that place.",
  THING: "Object whose name is handy.",
  THINK: "Use your mind.",
  TIGER: "Striped big cat.",
  TOAST: "Browned bread.",
  TOWER: "Tall narrow structure.",
  TRACE: "Faint mark.",
  TRACK: "Path for runners.",
  TRADE: "Exchange goods.",
  TRAIN: "Railway vehicle.",
  TREAT: "Special snack.",
  TRUCK: "Large road vehicle.",
  TRUST: "Rely on.",
  UNION: "Joining together.",
  VALUE: "Worth.",
  VIDEO: "Moving image.",
  VISIT: "Go see someone.",
  VOICE: "Sound from speaking.",
  WALKS: "Strolls.",
  WATER: "Clear drink from the tap.",
  WHEEL: "Round rolling part.",
  WHICH: "What one?",
  WOULD: "Word before 'you kindly.'",
  WORLD: "The earth and its people.",
  WRITE: "Put words on a page.",
  YOUNG: "Not old.",
  ZESTY: "Full of lively flavor.",
};

const puzzleWords = Object.keys(clueMap).filter((word) => word.length === 5);
let generatedPuzzlePool = [];

const today = new Date();
let puzzle;

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
const loadingScreen = document.querySelector("#loadingScreen");

let direction = "across";
let active = { row: 0, col: 0 };
let paused = false;
let seconds = 0;
let toastTimeout;
let celebrationTimeout;

const cells = [];
const entries = { across: [], down: [] };

function buildDailyPuzzle(date) {
  const localMidnight = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const dayNumber = Math.floor(localMidnight.getTime() / 86400000);
  const seed = (dayNumber ^ 0x5eedc0de) >>> 0;
  const generated = generatePuzzle(seed);
  const [acrossTop, acrossMiddle, acrossBottom] = generated.across;
  const [downLeft, downMiddle, downRight] = generated.down;

  return {
    size: 5,
    title: generated.title,
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

function generatePuzzle(seed) {
  const poolIndex = seed % generatedPuzzlePool.length;
  const generated = generatedPuzzlePool[poolIndex];
  const [top, middle, bottom] = generated.across;

  return {
    ...generated,
    title: makePuzzleTitle(seed, top, middle, bottom),
  };
}

function buildGeneratedPuzzlePool() {
  const signatureIndex = puzzleWords.reduce((index, word) => {
    const signature = `${word[0]}${word[2]}${word[4]}`;
    index[signature] ||= [];
    index[signature].push(word);
    return index;
  }, {});
  const pool = [];

  for (const left of puzzleWords) {
    for (const center of puzzleWords) {
      for (const right of puzzleWords) {
        const topOptions = signatureIndex[`${left[0]}${center[0]}${right[0]}`] || [];
        const middleOptions = signatureIndex[`${left[2]}${center[2]}${right[2]}`] || [];
        const bottomOptions = signatureIndex[`${left[4]}${center[4]}${right[4]}`] || [];

        for (const top of topOptions) {
          for (const middle of middleOptions) {
            for (const bottom of bottomOptions) {
              if (new Set([top, middle, bottom, left, center, right]).size < 6) continue;

              pool.push({
                across: [top, middle, bottom],
                down: [left, center, right],
              });
            }
          }
        }
      }
    }
  }

  const uniquePool = [];
  const seen = new Set();

  for (const puzzle of pool) {
    const key = [...puzzle.across, ...puzzle.down].join("-");
    if (!seen.has(key)) {
      seen.add(key);
      uniquePool.push(puzzle);
    }
  }

  return uniquePool.length
    ? uniquePool
    : [
        {
          across: ["CORGI", "RAISE", "IDEAL"],
          down: ["CORGI", "RAISE", "IDEAL"],
        },
      ];
}

function makePuzzleTitle(seed, top, middle, bottom) {
  const adjectives = ["Bright", "Tiny", "Cozy", "Quick", "Sunny", "Clever", "Fresh", "Happy"];
  const nouns = ["Mini", "Break", "Grid", "Sprint", "Nibble", "Wag", "Spark", "Treat"];
  const adjective = adjectives[seed % adjectives.length];
  const noun = nouns[(seed + top.charCodeAt(0) + middle.charCodeAt(2) + bottom.charCodeAt(4)) % nouns.length];
  return `${adjective} ${noun}`;
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

let numbers;

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
  if (isPuzzleComplete() && checkPuzzle(false)) {
    paused = true;
    showToast(`Solved in ${formatTime(seconds)}. Nice work.`);
    celebrateSolve();
  }
}

function isPuzzleComplete() {
  const openSquares = puzzle.rows.flat().filter(Boolean).length;
  const filled = document.querySelectorAll(".cell[data-value]").length;
  return filled === openSquares;
}

function celebrateSolve() {
  window.clearTimeout(celebrationTimeout);
  document.querySelector(".celebration")?.remove();
  boardEl.classList.remove("solved");

  const celebration = document.createElement("div");
  celebration.className = "celebration";
  celebration.setAttribute("aria-hidden", "true");

  const colors = ["#f8d55f", "#8fc7ff", "#ef8c8c", "#72c28f", "#ffffff"];
  for (let index = 0; index < 42; index += 1) {
    const piece = document.createElement("span");
    piece.style.setProperty("--x", `${Math.random() * 100}vw`);
    piece.style.setProperty("--delay", `${Math.random() * 0.35}s`);
    piece.style.setProperty("--spin", `${Math.random() * 540 - 270}deg`);
    piece.style.setProperty("--color", colors[index % colors.length]);
    celebration.append(piece);
  }

  document.body.append(celebration);
  requestAnimationFrame(() => boardEl.classList.add("solved"));

  celebrationTimeout = window.setTimeout(() => {
    celebration.remove();
    boardEl.classList.remove("solved");
  }, 2800);
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
  if (checkPuzzle() && isPuzzleComplete()) {
    paused = true;
    showToast(`Solved in ${formatTime(seconds)}. Nice work.`);
    celebrateSolve();
  }
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

function initializePuzzle() {
  generatedPuzzlePool = buildGeneratedPuzzlePool();
  puzzle = buildDailyPuzzle(today);
  numbers = numberGrid();

  updatePuzzleMeta();
  buildEntries();
  makeBoard();
  makeClues();
  makeKeyboard();
  selectCell(0, 0, true);
  window.setInterval(tick, 1000);
  finishLoading();
}

function finishLoading() {
  document.body.classList.remove("is-loading");
  document.body.classList.add("is-ready");
  loadingScreen?.setAttribute("aria-hidden", "true");
  window.setTimeout(() => loadingScreen?.remove(), 360);
}

requestAnimationFrame(() => {
  window.setTimeout(initializePuzzle, 80);
});
