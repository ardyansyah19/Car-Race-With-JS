// ==========================================
// SIMULASI BALAP MOBIL - P5.JS
// Lintasan 10 KM
// ==========================================

// ------------------------------------------
// KONFIGURASI
// ------------------------------------------

const TRACK_DISTANCE_KM = 10;

// Kecepatan masing-masing mobil (km/jam)
const cars = [
  {
    name: "Mobil A",
    speed: 10,
    image: null,
    x: 0,
    progress: 0,
    finished: false,
    finishTime: null
  },
  {
    name: "Mobil B",
    speed: 90,
    image: null,
    x: 0,
    progress: 0,
    finished: false,
    finishTime: null
  },
  {
    name: "Mobil C",
    speed: 80,
    image: null,
    x: 0,
    progress: 0,
    finished: false,
    finishTime: null
  },
  {
    name: "Mobil D",
    speed: 70,
    image: null,
    x: 0,
    progress: 0,
    finished: false,
    finishTime: null
  }
];

// ------------------------------------------
// VARIABEL
// ------------------------------------------

let roadImage;

let carImages = [];

let raceStarted = false;
let raceFinished = false;

let raceTime = 0;

// posisi Y mobil
let carY = [];

// posisi X tiap jalur
let laneX = [];


// ------------------------------------------
// PRELOAD
// ------------------------------------------

function preload() {

  // Gambar jalan
  roadImage = loadImage(
    "jalan.jpg",
    () => console.log("jalan.jpg berhasil dimuat"),
    () => console.log("jalan.jpg gagal dimuat")
  );

  // Gambar mobil
  carImages[0] = loadImage("carA.png");
  carImages[1] = loadImage("carB.png");
  carImages[2] = loadImage("carC.png");
  carImages[3] = loadImage("carD.png");
}


// ------------------------------------------
// SETUP
// ------------------------------------------

function setup() {

  createCanvas(453, 803);

  imageMode(CENTER);

  // Posisi X jalur
  laneX = [
    width * 0.145,
    width * 0.375,
    width * 0.625,
    width * 0.855
  ];

  // Posisi awal mobil
  for (let i = 0; i < cars.length; i++) {

    cars[i].x = laneX[i];

    cars[i].progress = 0;

    cars[i].finished = false;

    cars[i].finishTime = null;

    carY[i] = height - 50;
  }

  frameRate(60);
}


// ------------------------------------------
// DRAW
// ------------------------------------------

function draw() {

  background(30);

  drawTrack();

  // Jika balapan sedang berjalan
  if (raceStarted && !raceFinished) {

    updateRace();

  }

  drawCars();

  drawInformation();

}


// ------------------------------------------
// GAMBAR LINTASAN
// ------------------------------------------

function drawTrack() {

  // Jika jalan.jpg tersedia
  if (roadImage) {

    image(
      roadImage,
      width / 2,
      height / 2,
      width,
      height
    );

  } else {

    // Background jalan
    background(35);

    // Jalur
    fill(40);
    noStroke();

    rect(0, 0, width / 2, height);
    rect(width / 2, 0, width / 2, height);

  }
}


// ------------------------------------------
// UPDATE BALAPAN
// ------------------------------------------

function updateRace() {

  // deltaTime = waktu antar frame dalam milidetik
  let dt = deltaTime / 1000;

  // Batasi agar tidak terjadi lonjakan
  // ketika browser mengalami lag
  dt = min(dt, 0.05);

  raceTime += dt;

  let allFinished = true;

  for (let i = 0; i < cars.length; i++) {

    let car = cars[i];

    if (car.finished) {
      continue;
    }

    allFinished = false;

    // --------------------------------------
    // Konversi kecepatan
    // km/jam -> km/detik
    // --------------------------------------

    let speedKmPerSecond = car.speed / 3600;

    // --------------------------------------
    // Tambahkan jarak tempuh
    // --------------------------------------

    let distanceThisFrame =
      speedKmPerSecond * dt;

    // --------------------------------------
    // Progress 0 - 1
    // --------------------------------------

    let progressIncrease =
      distanceThisFrame / TRACK_DISTANCE_KM;

    car.progress += progressIncrease;

    // --------------------------------------
    // Jika mencapai FINISH
    // --------------------------------------

    if (car.progress >= 1) {

      car.progress = 1;

      car.finished = true;

      car.finishTime = raceTime;

      console.log(
        car.name +
        " FINISH dalam " +
        formatTime(car.finishTime)
      );
    }
  }

  // Semua mobil selesai
  if (allFinished) {

    raceFinished = true;

    console.log("SEMUA MOBIL TELAH FINISH");
  }
}


// ------------------------------------------
// GAMBAR MOBIL
// ------------------------------------------

function drawCars() {

  for (let i = 0; i < cars.length; i++) {

    let car = cars[i];

    // --------------------------------------
    // Posisi Y
    // --------------------------------------

    let startY = height - 50;

    let finishY = 30;

    carY[i] = lerp(
      startY,
      finishY,
      car.progress
    );

    // --------------------------------------
    // Ukuran mobil
    // --------------------------------------

    let carWidth = 48;
    let carHeight = 100;

    // --------------------------------------
    // Gambar mobil
    // --------------------------------------

    if (carImages[i]) {

      image(
        carImages[i],
        car.x,
        carY[i],
        carWidth,
        carHeight
      );

    } else {

      // fallback jika gambar gagal
      drawFallbackCar(
        car.x,
        carY[i],
        i
      );
    }
  }
}


// ------------------------------------------
// MOBIL CADANGAN
// ------------------------------------------

function drawFallbackCar(x, y, index) {

  push();

  rectMode(CENTER);

  // warna berbeda tiap mobil
  if (index === 0) fill(180);
  if (index === 1) fill(200, 30, 30);
  if (index === 2) fill(80, 180, 70);
  if (index === 3) fill(50, 130, 200);

  noStroke();

  rect(x, y, 38, 70, 8);

  fill(30);

  rect(x, y - 15, 25, 18, 4);

  pop();
}


// ------------------------------------------
// INFORMASI BALAP
// ------------------------------------------

function drawInformation() {

  push();

  fill(255);

  textAlign(LEFT, TOP);

  textSize(13);

  // Background informasi
  fill(0, 0, 0, 170);

  rect(
    5,
    5,
    145,
    115,
    8
  );

  fill(255);

  textSize(12);

  text(
    "JARAK: " +
    TRACK_DISTANCE_KM +
    " KM",
    15,
    15
  );

  text(
    "WAKTU: " +
    formatTime(raceTime),
    15,
    32
  );

  text(
    "A : 10 KM/JAM",
    15,
    52
  );

  text(
    "B : 90 KM/JAM",
    15,
    68
  );

  text(
    "C : 80 KM/JAM",
    15,
    84
  );

  text(
    "D : 70 KM/JAM",
    15,
    100
  );

  pop();
}


// ------------------------------------------
// FORMAT WAKTU
// ------------------------------------------

function formatTime(seconds) {

  let hours = floor(seconds / 3600);

  let minutes =
    floor((seconds % 3600) / 60);

  let secs =
    floor(seconds % 60);

  return nf(hours, 2) +
    ":" +
    nf(minutes, 2) +
    ":" +
    nf(secs, 2);
}


// ------------------------------------------
// MULAI BALAP
// ------------------------------------------

function startRace() {

  raceStarted = true;

  raceFinished = false;

  raceTime = 0;

  for (let i = 0; i < cars.length; i++) {

    cars[i].progress = 0;

    cars[i].finished = false;

    cars[i].finishTime = null;
  }
}


// ------------------------------------------
// RESET BALAP
// ------------------------------------------

function resetRace() {

  raceStarted = false;

  raceFinished = false;

  raceTime = 0;

  for (let i = 0; i < cars.length; i++) {

    cars[i].progress = 0;

    cars[i].finished = false;

    cars[i].finishTime = null;
  }
}


// ------------------------------------------
// KONTROL KEYBOARD
// ------------------------------------------

function keyPressed() {

  // SPACE = mulai
  if (key === " ") {

    if (!raceStarted) {

      startRace();

    }
  }

  // R = reset
  if (
    key === "r" ||
    key === "R"
  ) {

    resetRace();
  }
}