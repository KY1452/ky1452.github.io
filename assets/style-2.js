// Initialize font properties
const fontname = "Ubuntu";
const fontweights = [300, 400]

// Color properties
const basecolor = "#777";
const accentcolor = "#a00";
const highlightcolor = "#111";

// Body properties
const bodyfontweight = 300;
const bodyfontsize = "12pt";
const backgroundcolor = "#fff";

// Link properties
const acolor = accentcolor;
const adecoration = "none";

// Menu properties
const menucolor = basecolor;
const menufontsize = "14pt";
const menudecoration = "none";

// Header properties
const headercolor = accentcolor;
const headerfontsize = "18pt";
const headerdecoration = "none";
const namecolor = highlightcolor;
const namefontsize = "23pt";


// Publication properties
const ptitlecolor = accentcolor;
const ptitlefontsize = bodyfontsize;
const ptitleweight = bodyfontweight;
const ptitledecoration = "none";
const ptitlestyle = "normal";

const authorcolor = accentcolor;
const authorweight = bodyfontweight;
const authordecoration = "none";
const authorstyle = "normal";

const selfcolor = highlightcolor;
const selfweight = bodyfontweight;
const selfdecoration = "none";
const selfstyle = "normal";

const tagcolor = accentcolor;
const tagweight = bodyfontweight;
const tagdecoration = "none";
const tagstyle = "normal";

const insttitlecolor = highlightcolor;
const insttitlesize = "12px";
const instyearcolor = accentcolor;
const instyearsize = "11px";

// Works for sans serif, change otherwise
// Ensure jQuery is loaded before using it
if (typeof $ !== 'undefined') {
    $("head").append("<link href='https://fonts.googleapis.com/css2?family=" + fontname + ":wght@" + fontweights.join(';') + "&display=swap' rel='stylesheet' type='text/css'>");
    $("body").css("font-family", fontname);

    // $("body").css("color", basecolor);
    $("body").css("font-weight", bodyfontweight);
    $("body").css("font-size", bodyfontsize);
    // $("body").css("background-color", backgroundcolor);

    // $("a").css("color", acolor);
    $("a").css("text-decoration", adecoration);

    // $(".menulink").css("color", menucolor);
    $(".menulink").css("font-size", menufontsize);
    $(".menulink").css("text-decoration", menudecoration);

    $(".profilepic").css("width", "150px"); // Set the width
    $(".profilepic").css("height", "150px"); // Set the height
    $(".profilepic").css("object-fit", "cover"); // Ensures no distortion
    $(".profilepic").css("border-radius", "25%"); // Makes it circular (optional)
} else {
    console.error("jQuery not loaded, skipping style initialization");
}


// --- New Frontend Features ---

// 1. Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // 2. Dark Mode Logic
    // 2. Dark Mode Logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeToggle) {
        const icon = themeToggle.querySelector('i');

        // Check localStorage safely
        try {
            if (localStorage.getItem('theme') === 'dark') {
                body.classList.add('dark-mode');
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        } catch (e) {
            console.warn("LocalStorage access denied or not available:", e);
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');

            // Update icon
            if (isDark) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }

            // Save preference safely
            try {
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
            } catch (e) {
                console.warn("Could not save theme preference:", e);
            }
        });
    } else {
        console.error("Theme toggle button not found");
    }
});

// 3. Parallax Background
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const body = document.body;
    // Move background position slowly
    body.style.backgroundPosition = `center ${scrolled * 0.5}px`;
});
