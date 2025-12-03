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
        } 
        else {
            sections.forEach(sec => sec.style.display = "none");
            finalSection.style.display = "block";
        }
    }

    showNext();
});
