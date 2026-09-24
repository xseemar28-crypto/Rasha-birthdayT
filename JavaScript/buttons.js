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
   CHOICE 1 — FLOWER BOUQUET + PHOTO STRIPS
========================================================= */

const flowerChoice =
    document.getElementById("flowerChoice");

if (flowerChoice) {

    flowerChoice.addEventListener("click", () => {

        showPage("flowerPage");

    });

}


/* =========================================================
   CHOICE 2 — LETTER
========================================================= */

const letterChoice =
    document.getElementById("letterChoice");

if (letterChoice) {

    letterChoice.addEventListener("click", () => {

        showPage("letterPage");

    });

}


/* =========================================================
   CHOICE 3 — FAVORITE SONG
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

        if (button.dataset.page) {

            showPage(button.dataset.page);

        } else {

            goBack(destination);

        }

    });

});
