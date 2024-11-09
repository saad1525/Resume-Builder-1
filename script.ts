// script.ts
document.addEventListener("DOMContentLoaded", () => {
    const toggleSkillsButton = document.getElementById("toggle-skills");
    const skillsSection = document.getElementById("skills");

    if (toggleSkillsButton && skillsSection) {
        toggleSkillsButton.addEventListener("click", () => {
            console.log("Button clicked!"); // Log message when button is clicked
            if (skillsSection.style.display === "none") {
                skillsSection.style.display = "block"; // Show Skills section
            } else {
                skillsSection.style.display = "none"; // Hide Skills section
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const toggleSkillsButton = document.getElementById("toggle-skills");
    const skillsSection = document.getElementById("skills");

    // Check if both elements exist in the DOM
    if (toggleSkillsButton && skillsSection) {
        toggleSkillsButton.addEventListener("click", () => {
            // Toggle the visibility of the Skills section
            if (skillsSection.style.display === "none") {
                skillsSection.style.display = "block"; // Show Skills section
            } else {
                skillsSection.style.display = "none"; // Hide Skills section
            }
            
        });
    }
});
