/* ==========================================
   PREMIUM LOVE WEBSITE
   SCRIPT.JS - PART 1
========================================== */

// Loader
window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        }, 1000);

    }, 2500);

});

// Elements
const music = document.getElementById("bgMusic");
const enterBtn = document.getElementById("enterBtn");
const welcome = document.getElementById("welcome");
const envelopeSection = document.getElementById("envelopeSection");
const envelope = document.getElementById("envelope");
const hero = document.getElementById("hero");

// Welcome Button

enterBtn.onclick = () => {

    welcome.style.display = "none";

    envelopeSection.style.display = "flex";

    music.play().catch(() => {});

};

// Envelope Open

envelope.onclick = () => {

    envelope.style.transform = "scale(1.1) rotate(-5deg)";

    setTimeout(() => {

        envelopeSection.style.display = "none";

        hero.style.display = "flex";

        document.getElementById("gallery").scrollIntoView({

            behavior: "smooth"

        });

    }, 800);

};

// ===============================
// IMAGE SLIDER
// ===============================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function changeSlide() {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    slides[currentSlide].classList.add("active");

}

setInterval(changeSlide, 3000);

// ===============================
// HEART RAIN
// ===============================

const hearts = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 25) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 250);

// ===============================
// ROSE PETALS
// ===============================

function createRose() {

    const rose = document.createElement("div");

    rose.className = "rose";

    rose.innerHTML = "🌹";

    rose.style.left = Math.random() * 100 + "vw";

    rose.style.fontSize = (20 + Math.random() * 25) + "px";

    rose.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(rose);

    setTimeout(() => {

        rose.remove();

    }, 9000);

}

setInterval(createRose, 900);

// ===============================
// SPARKLES
// ===============================

function sparkle() {

    const star = document.createElement("div");

    star.className = "sparkle";

    star.innerHTML = "✨";

    star.style.left = Math.random() * window.innerWidth + "px";

    star.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(star);

    setTimeout(() => {

        star.remove();

    }, 2000);

}

setInterval(sparkle, 450);

// ===============================
// HERO ANIMATION
// ===============================

hero.style.opacity = "0";

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

});

document.querySelectorAll("section").forEach(sec => {

    sec.style.transform = "translateY(50px)";

    sec.style.transition = ".8s";

    observer.observe(sec);

});
/* ==========================================
   PREMIUM LOVE WEBSITE
   SCRIPT.JS - PART 2
========================================== */

/* ============================
   TYPEWRITER EFFECT
============================ */

const typingElement = document.getElementById("typing");

const originalText = typingElement.innerText;

typingElement.innerHTML = "";

let letterIndex = 0;

function typeWriter(){

    if(letterIndex < originalText.length){

        typingElement.innerHTML += originalText.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeWriter,35);

    }

}

setTimeout(typeWriter,2500);


/* ============================
   LOVE TIMER
============================ */

// ⚠️ Yahan apni relationship date likho

const loveDate = new Date("2025-01-01 00:00:00");

const timer = document.getElementById("loveTimer");

function updateLoveTimer(){

    const now = new Date();

    const distance = now - loveDate;

    const days = Math.floor(distance / (1000*60*60*24));

    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds = Math.floor((distance%(1000*60))/1000);

    timer.innerHTML =

    `${days} Days ❤️ ${hours} Hours ❤️ ${minutes} Minutes ❤️ ${seconds} Seconds`;

}

setInterval(updateLoveTimer,1000);

updateLoveTimer();


/* ============================
   RUNNING NO BUTTON
============================ */

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover",()=>{

    const x = Math.random() * (window.innerWidth-200);

    const y = Math.random() * (window.innerHeight-100);

    noBtn.style.position="fixed";

    noBtn.style.left=x+"px";

    noBtn.style.top=y+"px";

});


/* ============================
   YES BUTTON
============================ */

const yesBtn = document.getElementById("yesBtn");

const celebration = document.getElementById("celebration");

yesBtn.onclick=()=>{

    celebration.style.display="block";

    celebration.scrollIntoView({

        behavior:"smooth"

    });

    startFireworks();

}


/* ============================
   FIREWORKS
============================ */

function startFireworks(){

    for(let i=0;i<200;i++){

        createFirework();

    }

}


function createFirework(){

    const fire=document.createElement("div");

    fire.className="firework";

    fire.style.left=Math.random()*window.innerWidth+"px";

    fire.style.top=Math.random()*window.innerHeight+"px";

    fire.style.setProperty("--x",(Math.random()*400-200)+"px");

    fire.style.setProperty("--y",(Math.random()*400-200)+"px");

    fire.style.background=

    `hsl(${Math.random()*360},100%,60%)`;

    document.body.appendChild(fire);

    setTimeout(()=>{

        fire.remove();

    },1300);

}


/* ============================
   EXTRA HEART BURST
============================ */

function heartBurst(){

    for(let i=0;i<40;i++){

        let heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=(window.innerWidth/2)+"px";

        heart.style.top=(window.innerHeight/2)+"px";

        heart.style.position="fixed";

        heart.style.fontSize=(20+Math.random()*30)+"px";

        heart.style.transform=

        `translate(${Math.random()*700-350}px,

        ${Math.random()*700-350}px)`;

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },2500);

    }

}

yesBtn.addEventListener("click",heartBurst);


/* ============================
   LOVE MESSAGE POPUP
============================ */

yesBtn.addEventListener("click",()=>{

    setTimeout(()=>{

        alert("❤️ Thank You My Beautiful Queen Nimra ❤️\n\nI Love You Forever 🥹💖");

    },1000);

});
/* ==========================================
   PREMIUM LOVE WEBSITE
   SCRIPT.JS - PART 3
========================================== */

/* ============================
   CURSOR HEART EFFECT
============================ */

document.addEventListener("mousemove",(e)=>{

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=e.clientX+"px";

    heart.style.top=e.clientY+"px";

    heart.style.fontSize="18px";

    heart.style.pointerEvents="none";

    heart.style.zIndex="9999";

    heart.style.transition="1s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform="translateY(-80px) scale(0)";

        heart.style.opacity="0";

    },20);

    setTimeout(()=>{

        heart.remove();

    },1000);

});


/* ============================
   MUSIC BUTTON
============================ */

const musicBtn=document.createElement("button");

musicBtn.innerHTML="🎵";

musicBtn.style.position="fixed";
musicBtn.style.bottom="20px";
musicBtn.style.right="20px";
musicBtn.style.width="60px";
musicBtn.style.height="60px";
musicBtn.style.borderRadius="50%";
musicBtn.style.border="none";
musicBtn.style.fontSize="28px";
musicBtn.style.cursor="pointer";
musicBtn.style.background="#ff2d55";
musicBtn.style.color="white";
musicBtn.style.zIndex="9999";

document.body.appendChild(musicBtn);

let playing=true;

musicBtn.onclick=()=>{

if(playing){

music.pause();

musicBtn.innerHTML="🔇";

}else{

music.play();

musicBtn.innerHTML="🎵";

}

playing=!playing;

};


/* ============================
   IMAGE ZOOM
============================ */

slides.forEach(img=>{

img.addEventListener("click",()=>{

if(img.classList.contains("zoom")){

img.classList.remove("zoom");

img.style.transform="scale(1)";

}else{

img.classList.add("zoom");

img.style.transform="scale(1.15)";

}

});

});


/* ============================
   AUTO SCROLL
============================ */

let autoScroll=false;

function startAutoScroll(){

if(autoScroll) return;

autoScroll=true;

let pos=0;

const scroll=setInterval(()=>{

window.scrollTo({

top:pos,

behavior:"smooth"

});

pos+=2;

if(pos>=document.body.scrollHeight){

clearInterval(scroll);

}

},40);

}


/* ============================
   FLOATING LOVE TEXT
============================ */

const words=[

"I Love You ❤️",

"My Queen 👑",

"Forever Together 💖",

"Nimra ❤️",

"Ali ❤️"

];

function floatingText(){

const text=document.createElement("div");

text.innerHTML=words[Math.floor(Math.random()*words.length)];

text.style.position="fixed";

text.style.left=Math.random()*window.innerWidth+"px";

text.style.bottom="-50px";

text.style.color="white";

text.style.fontWeight="bold";

text.style.fontSize="22px";

text.style.pointerEvents="none";

text.style.transition="6s linear";

document.body.appendChild(text);

setTimeout(()=>{

text.style.transform="translateY(-120vh)";

text.style.opacity="0";

},50);

setTimeout(()=>{

text.remove();

},6000);

}

setInterval(floatingText,2500);


/* ============================
   GIFT SURPRISE
============================ */

const gift=document.createElement("button");

gift.innerHTML="🎁";

gift.style.position="fixed";

gift.style.left="20px";

gift.style.bottom="20px";

gift.style.width="60px";

gift.style.height="60px";

gift.style.borderRadius="50%";

gift.style.border="none";

gift.style.fontSize="28px";

gift.style.cursor="pointer";

gift.style.background="#ffb703";

gift.style.zIndex="9999";

document.body.appendChild(gift);

gift.onclick=()=>{

alert(`💝 Surprise 💝

Meri Jaan Nimra ❤️

I Love You So Much.

You are my happiness,

my smile,

my future,

my everything.

🥹❤️🌹`);

};


/* ============================
   END
============================ */

console.log("❤️ Premium Love Website Loaded Successfully ❤️");