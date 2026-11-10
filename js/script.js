
        // ============================================
        // HEADER SCROLL EFFECT
        // ============================================
        const header = document.getElementById('header');

        window.addEventListener('scroll', function() {
            if (window.scrollY > 60) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // ============================================
        // MOBILE HAMBURGER
        // ============================================
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');

        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('open');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('open');
            });
        });

        // ============================================
        // BOOKING FORM
        // ============================================
        // const bookingForm = document.getElementById('bookingForm');

        // bookingForm.addEventListener('submit', function(e) {
        //     e.preventDefault();
        //     alert('Thank you! Your table has been reserved. We look forward to serving you.');
        // });


        const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you! Your table has been reserved. We look forward to serving you.');
    });
}

        // ============================================
        // DISH RESERVE BUTTONS
        // ============================================
        document.querySelectorAll('.reserve-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const dishName = this.closest('.dish-overlay').querySelector('h4').textContent;
                alert(`You reserved "${dishName}". We'll confirm your booking shortly.`);
            });
        });

        // ============================================
        // HERO BUTTONS
        // ============================================
        document.querySelector('.hero-buttons .btn-gold-filled')?.addEventListener('click', function() {
            document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
        });

        document.querySelector('.hero-buttons .btn-gold')?.addEventListener('click', function() {
            document.getElementById('dishes').scrollIntoView({ behavior: 'smooth' });
        });

        // ============================================
        // NAV BUTTON - Reserve Table
        // ============================================
        document.querySelector('.btn-nav')?.addEventListener('click', function() {
            document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
        });

        // ============================================
        // COUNTER ANIMATION (on scroll)
        // ============================================
        function animateCounters() {
            const stats = document.querySelectorAll('.chef-stats .stat h3');
            if (!stats.length) return;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        const text = el.textContent;
                        const num = parseInt(text.replace(/[^0-9]/g, ''));
                        if (!num) return;

                        let current = 0;
                        const increment = Math.ceil(num / 40);
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= num) {
                                el.textContent = text;
                                clearInterval(timer);
                            } else {
                                el.textContent = current + '+';
                            }
                        }, 30);
                        observer.unobserve(el);
                    }
                });
            }, { threshold: 0.5 });

            stats.forEach(stat => observer.observe(stat));
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', animateCounters);
        } else {
            animateCounters();
        }

        // ============================================
        // SMOOTH SCROLL FOR ANCHOR LINKS
        // ============================================
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        console.log('NIVA — Luxury Restaurant & Resort loaded successfully.');






     document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("pageLoader");

    setTimeout(() => {
        loader.classList.add("hide");

        setTimeout(() => {
            loader.remove();
        }, 400);
    }, 800); // sirf 0.6 second
});




if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', function () {
    window.scrollTo(0, 0);
});





// WEEDING page code



const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }

        });

    },
    {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    }
);

fadeElements.forEach((element) => {
    observer.observe(element);
});


/* =========================================
   ENQUIRY FORM
========================================= */

const form = document.getElementById('enquiryForm');

if (form) {

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        const name =
            document.getElementById('fullName').value.trim();

        const phone =
            document.getElementById('phone').value.trim();

        const email =
            document.getElementById('email').value.trim();

        const date =
            document.getElementById('weddingDate').value;


        if (!name || !phone || !email || !date) {

            alert('Please fill in all required fields.');

            return;
        }


        /* Email validation */

        if (!/^\S+@\S+\.\S+$/.test(email)) {

            alert('Please enter a valid email address.');

            return;
        }


        /* Phone validation */

        if (phone.length < 10) {

            alert('Please enter a valid phone number.');

            return;
        }


        /* Button loading */

        const btn =
            form.querySelector('.btn-primary');

        const originalText =
            btn.innerHTML;

        btn.innerHTML =
            '<i class="fas fa-spinner fa-spin"></i> Sending...';

        btn.disabled = true;


        /* Success simulation */

        setTimeout(() => {

            btn.innerHTML =
                '<i class="fas fa-check"></i> Enquiry Sent!';

            btn.style.background = '#2D7D46';


            setTimeout(() => {

                btn.innerHTML = originalText;

                btn.style.background = '';

                btn.disabled = false;

                form.reset();

            }, 3000);

        }, 1500);

    });

}


/* =========================================
   SET MINIMUM WEDDING DATE
========================================= */

const dateInput =
    document.getElementById('weddingDate');

if (dateInput) {

    const today = new Date();

    const yyyy =
        today.getFullYear();

    const mm =
        String(today.getMonth() + 1)
            .padStart(2, '0');

    const dd =
        String(today.getDate())
            .padStart(2, '0');

    dateInput.min =
        `${yyyy}-${mm}-${dd}`;
}



// birthday

document.querySelectorAll('.event-card').forEach((card, index) => {
    const pages = [
        '../EventCelebration/Weeding.html',
        '../EventCelebration/Birthday.html',
        '../EventCelebration/Seminars.html',
        '../EventCelebration/Receptions.html',
        '../EventCelebration/Engagements.html',
        '../EventCelebration/Hall-of-Honor.html'
    ];

    card.style.cursor = 'pointer';

    card.onclick = function () {
        window.location.href = pages[index];
    };
});




// ==============================
// GOLDEN GLOW CURSOR
// ==============================

const dot = document.querySelector(".cursor-dot");
const glow = document.querySelector(".cursor-glow");

if (dot && glow) {

    // Cursor movement
    document.addEventListener("mousemove", (e) => {
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;

        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
    });

    // Elements where glow should appear
    const hoverElements = document.querySelectorAll(
        "button, a, input, .menu-item, .feature-card, .dish-card, .room-card, .nivaa-room-item, .nivaa-book-room, .event-card"
    );

    hoverElements.forEach((element) => {

        element.addEventListener("mouseenter", () => {
            glow.classList.add("active");
        });

        element.addEventListener("mouseleave", () => {
            glow.classList.remove("active");
        });

    });
}



// =============================================>>>>>>>>>>>>>>>>>>>>>>>>




// ============================================
// SIGNATURE DISH DETAIL POPUP
// ============================================

(function initSignatureDishPopup() {

    const signatureModal = document.getElementById("signatureModal");
    const signatureModalClose = document.getElementById("signatureModalClose");

    if (!signatureModal || !signatureModalClose) return;

    const modalImage = document.getElementById("signatureModalImage");
    const modalTitle = document.getElementById("signatureModalTitle");
    const modalDescription = document.getElementById("signatureModalDescription");
    const modalPerfect = document.getElementById("signatureModalPerfect");
    const modalPrice = document.getElementById("signatureModalPrice");

    // Details for each Signature Dish card.
    const signatureDishDetails = {
        "Palak Patta Chaat": {
            description: "Crispy spinach leaves topped with spiced yogurt, tangy chutneys, chaat masala and fresh herbs for a perfect balance of crunch, spice and freshness.",
            perfectWith: "Mint Chutney / Sweet Chutney"
        },
        "Kamal Kakdi Chaat": {
            description: "Crispy lotus stem tossed with refreshing yogurt, aromatic spices and tangy chutneys, finished with a delicate chaat-style seasoning.",
            perfectWith: "Mint Chutney / Masala Chaas"
        },
        "Honey Chilli Lotus Stem": {
            description: "Crispy lotus stem glazed in a sweet and mildly spicy honey-chilli sauce, finished with sesame and fresh herbs.",
            perfectWith: "Sweet Chilli Dip / Refreshing Mocktail"
        },
        "Dahi Ke Sholay": {
            description: "Crispy golden rolls filled with creamy hung curd, herbs and aromatic spices, served hot with a delicious chutney.",
            perfectWith: "Mint Chutney / Tamarind Chutney"
        }
    };

    function openSignatureDish(card) {

        const titleElement = card.querySelector("h4, h5");
        const imageElement = card.querySelector("img");
        const priceElement = card.querySelector(".price");

        if (!titleElement || !imageElement) return;

        const dishName = titleElement.textContent.trim();
        const details = signatureDishDetails[dishName] || {
            description: "A carefully crafted signature dish prepared by our chefs with premium ingredients and authentic flavours.",
            perfectWith: "Chef's recommended accompaniment"
        };

        modalTitle.textContent = dishName;
        modalDescription.textContent = details.description;
        modalPerfect.textContent = details.perfectWith;
        modalPrice.textContent = priceElement
            ? priceElement.textContent.trim()
            : "";

        modalImage.src = imageElement.currentSrc || imageElement.src;
        modalImage.alt = dishName;

        signatureModal.classList.add("active");
        signatureModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";

        // Keep focus on the close button for keyboard users.
        setTimeout(() => signatureModalClose.focus(), 50);
    }

    function closeSignatureDish() {
        signatureModal.classList.remove("active");
        signatureModal.setAttribute("aria-hidden", "true");

        // Do not unlock the page if the existing Menu popup is open.
        const menuModal = document.getElementById("menuModal");
        if (!menuModal || !menuModal.classList.contains("active")) {
            document.body.style.overflow = "";
        }
    }

    // Event delegation means it also works if these cards are rebuilt later.
    document.addEventListener("click", function(e) {

        const card = e.target.closest("#dishes .dishes-grid > .dish-card");

        if (!card) return;

        // Do not open the signature popup for cards inside another popup.
        if (card.closest(".menu-modal")) return;

        openSignatureDish(card);
    });

    signatureModalClose.addEventListener("click", closeSignatureDish);

    // Close when clicking the dark background.
    signatureModal.addEventListener("click", function(e) {
        if (e.target === signatureModal) {
            closeSignatureDish();
        }
    });

    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && signatureModal.classList.contains("active")) {
            closeSignatureDish();
        }
    });

})();





