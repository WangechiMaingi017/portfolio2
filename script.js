// Function to toggle the mobile menu
function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Add a scroll-to-top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Optional: Add animation to skills progress bars
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const target = bar.getAttribute('data-progress');
        let width = 0;
        const id = setInterval(frame, 10);
        function frame() {
            if (width >= target) {
                clearInterval(id);
            } else {
                width++;
                bar.style.width = width + '%';
            }
        }
    });
}

// Call animateSkills when the skills section is in view
const skillsSection = document.querySelector('#experience');
const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        animateSkills();
    }
});

observer.observe(skillsSection);