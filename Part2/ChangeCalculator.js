const $ = (selector) => document.querySelector(selector);

const makeChange = (amount) => {
    let remaining = amount;

    const quarters = Math.floor(remaining / 25);
    remaining %= 25;

    const dimes = Math.floor(remaining / 10);
    remaining %= 10;

    const nickels = Math.floor(remaining / 5);
    remaining %= 5;

    const pennies = remaining;

    console.log(`Quarters: ${quarters}, Dimes: ${dimes}, Nickels: ${nickels}, Pennies: ${pennies}`);

    $("#quarters").textContent = quarters;
    $("#dimes").textContent = dimes;
    $("#nickels").textContent = nickels;
    $("#pennies").textContent = pennies;
};

const processChange = () => {
    const changeAmount = parseInt($("#changeAmount").value, 10);

    if (isNaN(changeAmount) || changeAmount < 0 || changeAmount > 99) {
        alert("Please enter a valid number between 0 and 99.");
        $("#changeAmount").focus();
        return;
    }

    makeChange(changeAmount);
};

const clearChange = () => {
    $("#changeAmount").value = "";
    $("#quarters").textContent = "0";
    $("#dimes").textContent = "0";
    $("#nickels").textContent = "0";
    $("#pennies").textContent = "0";
    $("#changeAmount").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    console.log('Page Loaded');

    // Make sure the event listeners are correctly attached
    const makeChangeButton = $("#makeChange");
    const clearChangeButton = $("#clearChange");

    if (makeChangeButton) {
        makeChangeButton.addEventListener("click", (e) => {
            console.log('Make Change Button Clicked');
            processChange();
        });
    }

    if (clearChangeButton) {
        clearChangeButton.addEventListener("click", (e) => {
            console.log('Clear Button Clicked');
            clearChange();
        });
    }

    $("#changeAmount").focus();
});
