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

// $(".header").css("color", headercolor);
// $(".header").css("font-size", headerfontsize);
// $(".header").css("text-decoration", headerdecoration);
// $(".name").css("color", namecolor);
// $(".name").css("font-size", namefontsize);

// $(".papertitle").css("color", ptitlecolor);
// $(".papertitle").css("font-size", ptitlefontsize);
// $(".papertitle").css("font-weight", ptitleweight);
// $(".papertitle").css("text-decoration", ptitledecoration);
// $(".papertitle").css("font-style", ptitlestyle);

// $(".thisauthor").css("color", selfcolor);
// $(".thisauthor").css("font-weight", selfweight);
// $(".thisauthor").css("text-decoration", selfdecoration);
// $(".thisauthor").css("font-style", selfstyle);

// $(".institution").css("color", insttitlecolor);
// $(".institution").css("font-size", insttitlesize);
// $(".years").css("color", instyearcolor);
// $(".years").css("font-size", instyearsize);

$(".profilepic").css("width", "150px"); // Set the width
$(".profilepic").css("height", "150px"); // Set the height
$(".profilepic").css("object-fit", "cover"); // Ensures no distortion
$(".profilepic").css("border-radius", "25%"); // Makes it circular (optional)


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
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Check localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            localStorage.setItem('theme', 'light');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
});

// 3. Parallax Background
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const body = document.body;
    // Move background position slowly
    body.style.backgroundPosition = `center ${scrolled * 0.5}px`;
});
