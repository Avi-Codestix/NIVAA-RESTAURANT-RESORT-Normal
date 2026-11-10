// ======================================================
// NIVAA CAREERS PAGE
// IMPORTANT: Replace the sample WhatsApp number below
// with the official number including country code.
// Example: 919876543210 (no +, spaces or hyphens).
// ======================================================
const NIVAA_WHATSAPP_NUMBER = "+91 70371 27008";

document.addEventListener("DOMContentLoaded", () => {
    const getWhatsAppLink = (message) => {
        const number = NIVAA_WHATSAPP_NUMBER.replace(/\D/g, "");
        return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    };

    // Open the selected vacancy in WhatsApp.
    document.querySelectorAll(".apply-btn").forEach((button) => {
        button.addEventListener("click", () => {
            const jobTitle = button.dataset.job || "a position at NIVAA";
            const message = `Hello NIVAA, I am interested in applying for the ${jobTitle} position. Please share more details about the application process.`;
            window.open(getWhatsAppLink(message), "_blank", "noopener,noreferrer");
        });
    });

    // General resume submission.
    const sendResumeBtn = document.getElementById("sendResumeBtn");
    sendResumeBtn?.addEventListener("click", () => {
        const message = "Hello NIVAA, I would like to share my resume for current or future job opportunities. Please let me know how I can apply.";
        window.open(getWhatsAppLink(message), "_blank", "noopener,noreferrer");
    });

    // Accessible mobile navigation.
    const menuButton = document.querySelector(".mobile-menu-btn");
    const navLinks = document.getElementById("primary-navigation");
    const menuIcon = menuButton?.querySelector("i");

    const closeMenu = () => {
        navLinks?.classList.remove("is-open");
        menuButton?.setAttribute("aria-expanded", "false");
        menuButton?.setAttribute("aria-label", "Open navigation menu");
        if (menuIcon) menuIcon.className = "fas fa-bars";
    };

    menuButton?.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("is-open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
        if (menuIcon) menuIcon.className = isOpen ? "fas fa-times" : "fas fa-bars";
    });

    navLinks?.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 820) closeMenu();
    });
});
