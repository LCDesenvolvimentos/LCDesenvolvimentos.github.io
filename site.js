// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
navLinks.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();

const target = document.querySelector(this.getAttribute('href'));
if (target) {
window.scrollTo({
top: target.offsetTop - 80,
behavior: 'smooth'
});

// Close mobile menu if open
navLinks.classList.remove('active');
}
});
});

// Active Navigation Link
window.addEventListener('scroll', () => {
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

let currentSection = '';

sections.forEach(section => {
const sectionTop = section.offsetTop - 100;
const sectionHeight = section.clientHeight;

if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
currentSection = section.getAttribute('id');
}
});

navLinks.forEach(link => {
link.classList.remove('active');
if (link.getAttribute('href') === `#${currentSection}`) {
link.classList.add('active');
}
});
});


    // Mobile Menu Toggle
    //const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    //const navLinks = document.getElementById('navLinks');

    //mobileMenuBtn.addEventListener('click', () => {
    //navLinks.classList.toggle('active');
    //});

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
    window.scrollTo({
    top: target.offsetTop - 80,
    behavior: 'smooth'
    });

    // Close mobile menu if open
    navLinks.classList.remove('active');
    }
    });
    });

    // Active Navigation Link
    window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let currentSection = '';

    sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
    currentSection = section.getAttribute('id');
    }
    });

    navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
    link.classList.add('active');
    }
    });
    });

    // Form submission
    var form = document.getElementById("my-form");

    async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
    'Accept': 'application/json'
    }
    }).then(response => {
    if (response.ok) {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
    } else {
    response.json().then(data => {
    if (Object.hasOwn(data, 'errors')) {
    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
    } else {
    status.innerHTML = "Oops! There was a problem submitting your form"
    }
    })
    }
    }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
    });
    }
    form.addEventListener("submit", handleSubmit)