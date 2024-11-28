document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", (event) => {
        event.preventDefault();

        const nights = document.getElementById("nights").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (isNaN(nights)) {
            document.getElementById("nightsError").style.display = "block";
        } else {
            document.getElementById("nightsError").style.display = "none";
        }

        if (!emailPattern.test(email)) {
            document.getElementById("emailError").style.display = "block";
        } else {
            document.getElementById("emailError").style.display = "none";
        }

        if (!phone) {
            document.getElementById("phoneError").style.display = "block";
        } else {
            document.getElementById("phoneError").style.display = "none";
        }
    });
});
