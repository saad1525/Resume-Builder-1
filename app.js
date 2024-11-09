class ResumeManager {
    constructor() {
        this.sections = [
            { id: 'skills-toggle', contentId: 'skills-content' },
            { id: 'experience-toggle', contentId: 'experience-content' },
            { id: 'education-toggle', contentId: 'education-content' }
        ];
        this.initializeToggles();
    }
    initializeToggles() {
        this.sections.forEach(section => {
            const toggleBtn = document.getElementById(section.id);
            const content = document.getElementById(section.contentId);
            if (toggleBtn && content) {
                toggleBtn.addEventListener('click', () => this.toggleSection(content));
            }
        });
    }
    toggleSection(element) {
        element.classList.toggle('hidden');
    }
}
// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ResumeManager();
});
export {};
