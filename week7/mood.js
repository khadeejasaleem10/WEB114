// Khadeeja Saleem 19th April, 2026

const title = document.querySelector("#title");
const message = document.querySelector("#message");

const happyBtn = document.querySelector("#happyBtn");
const calmBtn = document.querySelector("#calmBtn");
const angryBtn = document.querySelector("#angryBtn");
const sleepyBtn = document.querySelector("#sleepyBtn");

const moods = {

    happy: {

              name:"Happy",

              bg: '#FFD700',

              text: '#bd26b0',

              message: 'Warm smiles and the suns kisses!'

            },
    calm: {
              name:"Calm",

              bg: '#33b9f3ed',

              text: '#090034db',

              message: 'Take a deep breath. Everything is okay'

    },
    angry: {

              name:"Angry",

              bg: '#f71919',

              text: '#0e0b0d',

              message: 'Calm down. Take a deep breath.!'

            },
    sleepy: {

              name:"Sleepy",

              bg: '#5783b0',

              text: '#023643',

              message: 'Time to sleep and take a break!'

            },
};

function changeMood(moodName) {

    const mood = moods[moodName];

    document.body.style.backgroundColor = mood.bg;

    document.body.style.color = mood.text;

    message.textContent = mood.message;

    title.textContent = mood.name;

    console.log("Mood selected:", moodName);
    console.log("Mood settings:", mood);
}

function handleHappyClick() {
    changeMood("happy");
}

function handleCalmClick() {
    changeMood("calm");
}

function handleAngryClick() {
    changeMood("angry");
}

function handleSleepyClick() {
    changeMood("sleepy");
}

happyBtn.addEventListener("click", handleHappyClick);
calmBtn.addEventListener("click", handleCalmClick);
angryBtn.addEventListener("click", handleAngryClick);
sleepyBtn.addEventListener("click", handleSleepyClick);
