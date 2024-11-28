document.addEventListener("DOMContentLoaded", () => {
    const $ = (selector) => document.querySelector(selector);

    const calculateTax = (income) => {
        if (income <= 9875) {
            return income * 0.1;
        } else if (income <= 40125) {
            return 987.5 + (income - 9875) * 0.12;
        } else if (income <= 85525) {
            return 4617.5 + (income - 40125) * 0.22;
        } else if (income <= 163300) {
            return 14605.5 + (income - 85525) * 0.24;
        } else if (income <= 207350) {
            return 33271.5 + (income - 163300) * 0.32;
        } else if (income <= 518400) {
            return 47367.5 + (income - 207350) * 0.35;
        } else {
            return 156235 + (income - 518400) * 0.37;
        }
    };

    const processTax = () => {
        const income = parseFloat($("#income").value);

        if (isNaN(income) || income <= 0) {
            alert("Please enter a valid taxable income greater than zero.");
            $("#income").focus();
            return;
        }

        const taxOwed = calculateTax(income);
        $("#taxOwed").textContent = taxOwed.toFixed(2);
    };

    const clearTax = () => {
        $("#income").value = "";
        $("#taxOwed").textContent = "0.00";
        $("#income").focus();
    };

    $("#calculateTax").addEventListener("click", processTax);
    $("#clearTax").addEventListener("click", clearTax);

    $("#income").focus();
});
