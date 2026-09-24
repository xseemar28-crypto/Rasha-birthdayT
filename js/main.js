/* =========================================================
   PAGE MANAGEMENT
========================================================= */

const pages = {
    password: document.getElementById("passwordPage"),
    envelope: document.getElementById("envelopePage"),
    openedEnvelope: document.getElementById("openedEnvelopePage"),
    flower: document.getElementById("flowerPage"),
    photo: document.getElementById("photoPage"),
    song: document.getElementById("songPage"),
    final: document.getElementById("finalPage")
};


/* =========================================================
   SHOW PAGE
========================================================= */

function showPage(pageName) {

    Object.values(pages).forEach(page => {
        page.classList.remove("active-page");
    });

    if (pages[pageName]) {
        pages[pageName].classList.add("active-page");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   PASSWORD
========================================================= */

const correctPassword = "143";

let enteredPassword = "";


function checkPassword() {

    if (enteredPassword === correctPassword) {

        enteredPassword = "";

        if (typeof updatePasswordDisplay === "function") {
            updatePasswordDisplay();
        }

        showPage("envelope");

    } else {

        if (typeof showErrorPopup === "function") {
            showErrorPopup();
        }

    }
}


/* =========================================================
   ADD PASSWORD NUMBER
========================================================= */

function addPasswordNumber(number) {

    if (enteredPassword.length >= 3) {
        return;
    }

    enteredPassword += number;

    if (typeof updatePasswordDisplay === "function") {
        updatePasswordDisplay();
    }

    if (enteredPassword.length === 3) {

        setTimeout(() => {
            checkPassword();
        }, 180);

    }
}


/* =========================================================
   CLEAR PASSWORD
========================================================= */

function clearPassword() {

    enteredPassword = "";

    if (typeof updatePasswordDisplay === "function") {
        updatePasswordDisplay();
    }
}


/* =========================================================
   ENVELOPE
========================================================= */

function openEnvelope() {

    showPage("openedEnvelope");

    if (typeof playEnvelopeAnimation === "function") {
        playEnvelopeAnimation();
    }
}


/* =========================================================
   FLOWER
========================================================= */

function openFlowerPage() {
    showPage("flower");
}


/* =========================================================
   PHOTO STRIP
========================================================= */

function openPhotoPage() {
    showPage("photo");
}


/* =========================================================
   SONG
========================================================= */

function openSongPage() {
    showPage("song");
}


/* =========================================================
   FINAL PAGE
========================================================= */

function openFinalPage() {
    showPage("final");
}


/* =========================================================
   GO BACK
========================================================= */

function goBack(pageName) {

    /*
        password
        envelope
        openedEnvelope
        flower
        photo
        song
        final
    */

    showPage(pageName);
}
