const cardButtons = document.querySelector(".buttons");
const video = document.getElementById("valVideo");
const text = document.getElementById("valText");

let currentStep = "start";

// Helper to change video safely
function changeVideo(src) {
    video.innerHTML = `<source src="${src}" type="video/mp4">`;
    video.load();
    video.play();
}

// Helper to create button
function createButton(id, label, className = "", scale = 1) {
    const btn = document.createElement("button");
    btn.id = id;
    btn.className = className;
    btn.textContent = label;
    btn.style.transform = `scale(${scale})`;
    return btn;
}

// ================= INITIAL CLICK =================
document.getElementById("yesBtn").addEventListener("click", () => {

    if (currentStep === "start") {

        video.muted = false; // unmute after interaction
        changeVideo("video2.mp4");

        text.innerHTML = "I JUST WANTED TO ASK U...";

        cardButtons.innerHTML = "";
        const btn = createButton("mhhmBtn", "MHHHM?");
        cardButtons.appendChild(btn);

        btn.addEventListener("click", () => {
            currentStep = "confession";
            handleConfession();
        });

        currentStep = "step2";
    }
});

// ================= CONFESSION =================
function handleConfession() {

    changeVideo("video3.mp4");
    text.innerHTML = "WILL YOUUU PLEASEE BE MY VALENTINE??🙏🙏🙏";

    cardButtons.innerHTML = "";

    const yesBtn = createButton("yesBtn", "YESSSS!!🤭");
    const noBtn = createButton("noBtn", "no.💀");

    cardButtons.appendChild(yesBtn);
    cardButtons.appendChild(noBtn);

    yesBtn.addEventListener("click", yesStep1);
    noBtn.addEventListener("click", noStep1);
}

// ================= YES PATH =================
function yesStep1() {
    changeVideo("video4.mp4");
    text.innerHTML = "YEEEEYYY SKFJSKDKKD";

    cardButtons.innerHTML = "";
    const btn = createButton("hahaBtn", "HAHAHAHHAA");
    cardButtons.appendChild(btn);

    btn.addEventListener("click", yesStep2);
}

function yesStep2() {
    changeVideo("video5.mp4");
    text.innerHTML = "SO UHMM... I WANT YOU TO OPEN THIS LETTER PO! :))";

    cardButtons.innerHTML = "";
    const btn = createButton("openBtn", "CLICK TO OPEN THE LETTER💕");
    cardButtons.appendChild(btn);

    btn.addEventListener("click", () => {
        window.location.href = "letter.html";
    });
}

// ================= NO PATH =================
let noClickCount = 0;

function noStep1() {
    noClickCount++;

    if (noClickCount === 1) {
        changeVideo("video_no1.mp4");
        text.innerHTML = "LAHH PLEASEEE??🙏";
        updateNoButton("AYOKO", 0.7);

    } else if (noClickCount === 2) {
        changeVideo("video_no2.mp4");
        text.innerHTML = "AYAW MO TALAGA?";
        updateNoButton("AYAWW", 0.49);

    } else if (noClickCount === 3) {
        changeVideo("video_no3.mp4");
        text.innerHTML = "BUT I WANTT ITT SAYANGG TO OHHH";
        updateNoButton("AYAW TALAGAAA", 0.343);

    } else if (noClickCount === 4) {
        changeVideo("video_no4.mp4");
        text.innerHTML = "INALIS KO NA BUTTON😛😛";

        cardButtons.innerHTML = "";
        const yesBtn = createButton("forceYes", "ALR YES NA LANG");
        cardButtons.appendChild(yesBtn);

        yesBtn.addEventListener("click", yesStep1);
    }
}

function updateNoButton(textContent, scale) {
    const noBtn = document.getElementById("noBtn");
    noBtn.textContent = textContent;
    noBtn.style.transform = `scale(${scale})`;
}