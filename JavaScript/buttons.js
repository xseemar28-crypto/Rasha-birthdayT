/* =========================================================
   NUMBER BUTTONS
========================================================= */

const numberButtons = document.querySelectorAll(".number-button");

numberButtons.forEach(button => {

    button.addEventListener("click", () => {

        const number = button.dataset.number;

        /*
            * and # are intentionally ignored
            because the password uses numbers only.
        */

        if (
            number !== "*" &&
            number !== "#"
        ) {

            addPasswordNumber(number);

        }

    });

});


/* =========================================================
   PASSWORD DISPLAY
========================================================= */

function updatePasswordDisplay() {

    const dots =
        document.querySelectorAll("#passwordDisplay span");

    dots.forEach((dot, index) => {

        if (index < enteredPassword.length) {
            dot.classList.add("filled");
        } else {
            dot.classList.remove("filled");
        }

    });
}


/* =========================================================
   TRY AGAIN
========================================================= */

const tryAgainButton =
    document.getElementById("tryAgainButton");

if (tryAgainButton) {

    tryAgainButton.addEventListener("click", () => {

        hideErrorPopup();
        clearPassword();

        showPage("password");

    });

}


/* =========================================================
   CLOSE ERROR
========================================================= */

const closeErrorButton =
    document.getElementById("closeErrorButton");

if (closeErrorButton) {

    closeErrorButton.addEventListener("click", () => {

        hideErrorPopup();
        clearPassword();

        showPage("password");

    });

}


/* =========================================================
   ENVELOPE BUTTON
========================================================= */

const envelopeButton =
    document.getElementById("envelopeButton");

if (envelopeButton) {

    envelopeButton.addEventListener("click", () => {

        openEnvelope();

    });

}


/* =========================================================
   CHOICE 1 — FLOWER
========================================================= */

const flowerChoice =
    document.getElementById("flowerChoice");

if (flowerChoice) {

    flowerChoice.addEventListener("click", () => {

        openFlowerPage();

    });

}


/* =========================================================
   CHOICE 2 — PHOTO STRIP
========================================================= */

const photoChoice =
    document.getElementById("photoChoice");

if (photoChoice) {

    photoChoice.addEventListener("click", () => {

        openPhotoPage();

    });

}


/* =========================================================
   CHOICE 3 — SONG
========================================================= */

const songChoice =
    document.getElementById("songChoice");

if (songChoice) {

    songChoice.addEventListener("click", () => {

        openSongPage();

    });

}


/* =========================================================
   GO BACK BUTTONS
========================================================= */

const backButtons =
    document.querySelectorAll(".back-button");

backButtons.forEach(button => {

    button.addEventListener("click", () => {

        const destination =
            button.dataset.back;

        goBack(destination);

    });

});
