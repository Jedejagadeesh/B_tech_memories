document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const finalSection = document.getElementById("finalMessage");
    let index = 0;

    sections.forEach(sec => sec.style.display = "none");
    finalSection.style.display = "none";

    function showNext() {
        if (index > 0 && index < sections.length) {
            sections[index - 1].style.display = "none";
        }

        if (index < sections.length) {
            sections[index].style.display = "block";
            index++;
            setTimeout(showNext, 3000);
        } else {
            sections.forEach(sec => sec.style.display = "none");
            finalSection.style.display = "block";
        }
    }

    showNext();

    // ----- Formspree submission via Fetch -----
    const form = document.getElementById("msgForm");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // STOP default submission

        const formData = new FormData(form);

        fetch("https://formspree.io/f/xpwvrjay", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert("Thank you for your valuable information ❤️");
                form.reset(); // clear form
            } else {
                alert("Oops! Something went wrong. Try again.");
            }
        }).catch(error => {
            alert("Oops! Something went wrong. Try again.");
            console.error(error);
        });
    });
});
