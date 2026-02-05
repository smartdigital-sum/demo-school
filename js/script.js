// =====================
// NAVIGATION & MENU
// =====================

// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger) {
  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // Close menu when clicking on a link
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
    });
  });
}

// =====================
// LANGUAGE TOGGLE
// =====================

const translations = {
  en: {
    home: "Home",
    about: "About",
    academics: "Academics",
    facilities: "Facilities",
    studentLife: "Student Life",
    admissions: "Admissions",
    contact: "Contact",
    heroTitle: "Nurturing Tomorrow's Leaders",
    heroSubtitle: "Excellence in Education Since 2005",
  },
  hi: {
    home: "होम",
    about: "परिचय",
    academics: "शिक्षा",
    facilities: "सुविधाएं",
    studentLife: "छात्र जीवन",
    admissions: "प्रवेश",
    contact: "संपर्क",
    heroTitle: "कल के नेताओं को पोषण देना",
    heroSubtitle: "शिक्षा में उत्कृष्टता 2005 से",
  },
  as: {
    home: "গৃহ",
    about: "বিষয়ে",
    academics: "শিক্ষা",
    facilities: "সুবিধাসমূহ",
    studentLife: "শিক্ষার্থী জীবন",
    admissions: "ভর্তি",
    contact: "যোগাযোগ",
    heroTitle: "আগামীকালের নেতাদের লালন-পালন করা",
    heroSubtitle: "শিক্ষায় শ্রেষ্ঠত্ব ২০০৫ সাল থেকে",
  },
};

function changeLanguage(lang) {
  localStorage.setItem("preferredLanguage", lang);
  // You can add language switching logic here
  alert(
    `Language changed to ${lang === "hi" ? "हिन्दी" : lang === "as" ? "অসমীয়া" : "English"}`,
  );
}

// Load saved language preference
window.addEventListener("load", function () {
  const savedLang = localStorage.getItem("preferredLanguage") || "en";
  const langSelect = document.getElementById("languageSelect");
  if (langSelect) {
    langSelect.value = savedLang;
  }
});

// =====================
// ADMISSION MODAL
// =====================

function openAdmissionModal() {
  const modal = document.getElementById("admissionModal");
  if (modal) {
    modal.style.display = "block";
  }
}

function closeAdmissionModal() {
  const modal = document.getElementById("admissionModal");
  if (modal) {
    modal.style.display = "none";
  }
}

// Close modal when clicking outside of it
window.addEventListener("click", function (event) {
  const modal = document.getElementById("admissionModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// =====================
// FORM SUBMISSIONS
// =====================

function submitAdmissionForm(event) {
  event.preventDefault();

  // Get form data
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  // Simulate form submission
  console.log("Admission Form Submitted:", data);

  // Show success message
  showNotification(
    "Application submitted successfully! Our team will contact you soon.",
    "success",
  );

  // Reset form
  event.target.reset();

  // Close modal
  closeAdmissionModal();
}

function submitInquiry(event) {
  event.preventDefault();

  console.log("Inquiry Form Submitted");
  showNotification(
    "Thank you for your inquiry! We will get back to you shortly.",
    "success",
  );

  event.target.reset();
}

function submitContactForm(event) {
  event.preventDefault();

  console.log("Contact Form Submitted");
  showNotification(
    "Your message has been sent successfully! We will reply soon.",
    "success",
  );

  event.target.reset();
}

// =====================
// NOTIFICATION SYSTEM
// =====================

function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  const style = document.createElement("style");
  style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 4px;
            color: white;
            font-weight: 600;
            z-index: 2000;
            animation: slideIn 0.3s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        .notification-success {
            background-color: #4CAF50;
        }
        
        .notification-error {
            background-color: #f44336;
        }
        
        .notification-info {
            background-color: #2196F3;
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;

  if (!document.querySelector("style[data-notification]")) {
    style.setAttribute("data-notification", "true");
    document.head.appendChild(style);
  }

  document.body.appendChild(notification);

  // Remove notification after 4 seconds
  setTimeout(function () {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(function () {
      document.body.removeChild(notification);
    }, 300);
  }, 4000);
}

// =====================
// TAB SWITCHING
// =====================

function openTab(evt, tabName) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => {
    content.classList.remove("active");
  });

  // Remove active class from all tab buttons
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach((button) => {
    button.classList.remove("active");
  });

  // Show the current tab and mark the button as active
  const tabElement = document.getElementById(tabName);
  if (tabElement) {
    tabElement.classList.add("active");
  }

  if (evt.currentTarget) {
    evt.currentTarget.classList.add("active");
  }
}

// =====================
// SMOOTH SCROLLING
// =====================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});

// =====================
// LAZY LOADING & ANIMATIONS
// =====================

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all cards and sections
document
  .querySelectorAll(
    ".info-card, .academic-card, .facility-card, .faculty-card, .news-card, .content-card",
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// =====================
// COUNTER ANIMATION
// =====================

function animateCounter(element, target, duration = 2000) {
  let current = 0;
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// =====================
// ACTIVE NAVIGATION LINK
// =====================

window.addEventListener("scroll", () => {
  let current = "";

  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// =====================
// SCROLL TO TOP BUTTON
// =====================

function createScrollToTopButton() {
  const button = document.createElement("button");
  button.innerHTML = '<i class="fas fa-arrow-up"></i>';
  button.className = "scroll-to-top";
  button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #00796b;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        z-index: 999;
        font-size: 20px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;

  document.body.appendChild(button);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      button.style.display = "flex";
      button.style.alignItems = "center";
      button.style.justifyContent = "center";
    } else {
      button.style.display = "none";
    }
  });

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  button.addEventListener("mouseover", () => {
    button.style.background = "#0d47a1";
    button.style.transform = "translateY(-5px)";
  });

  button.addEventListener("mouseout", () => {
    button.style.background = "#00796b";
    button.style.transform = "translateY(0)";
  });
}

// Initialize scroll to top button when DOM is loaded
document.addEventListener("DOMContentLoaded", createScrollToTopButton);

// =====================
// FORM VALIDATION
// =====================

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^[0-9\-\+\s\(\)]+$/;
  return re.test(phone) && phone.replace(/\D/g, "").length >= 10;
}

// =====================
// PARENT PORTAL LINK
// =====================

document.addEventListener("DOMContentLoaded", () => {
  const parentPortalLinks = document.querySelectorAll(".parent-portal");
  parentPortalLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      showNotification(
        "Parent Portal Coming Soon! Please check back later.",
        "info",
      );
    });
  });
});

// =====================
// ADMISSION SCHEDULE
// =====================

const admissionSchedule = {
  registrationStart: "2024-01-15",
  entranceTests: "2024-02-15 to 2024-03-15",
  meritDeclaration: "2024-03-31",
  admissionConfirmation: "2024-04-15 to 2024-05-31",
  sessionStart: "2024-06-01",
};

// =====================
// SCHOOL INFORMATION
// =====================

const schoolInfo = {
  name: "Sunrise Public School",
  phone: "+91-9876-543-210",
  email: "info@sunriseschool.edu.in",
  address: "123, Education Lane, Guwahati, Assam 781001",
  website: "www.sunriseschool.edu.in",
  founded: 2005,
  affiliation: "CBSE",
  classes: "Pre-KG to XII",
};

// =====================
// PERFORMANCE METRICS
// =====================

const schoolMetrics = {
  students: 2500,
  faculty: 150,
  classrooms: 80,
  boardPassRate: 95,
  stateRank: 5,
};

// =====================
// DYNAMIC CONTENT LOADING
// =====================

function loadAnnouncements() {
  // This function can be extended to load announcements dynamically
  console.log("Announcements loaded");
}

function loadNews() {
  // This function can be extended to load news dynamically
  console.log("News loaded");
}

// =====================
// PRINT FRIENDLY
// =====================

function makePrintFriendly() {
  const style = document.createElement("style");
  style.textContent = `
        @media print {
            .header, footer, .admission-btn, .parent-portal {
                display: none;
            }
            body {
                background: white;
            }
        }
    `;
  document.head.appendChild(style);
}

makePrintFriendly();

// =====================
// ACCESSIBILITY FEATURES
// =====================

// Skip to main content link
const skipLink = document.createElement("a");
skipLink.href = "#main-content";
skipLink.textContent = "Skip to main content";
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: white;
    padding: 8px;
    z-index: 100;
`;

skipLink.addEventListener("focus", () => {
  skipLink.style.top = "0";
});

skipLink.addEventListener("blur", () => {
  skipLink.style.top = "-40px";
});

document.body.insertBefore(skipLink, document.body.firstChild);

// =====================
// PERFORMANCE OPTIMIZATION
// =====================

// Defer non-critical CSS loading
if ("requestIdleCallback" in window) {
  requestIdleCallback(() => {
    // Load additional resources
    console.log("Idle callback for performance optimization");
  });
}

// =====================
// ERROR HANDLING
// =====================

window.addEventListener("error", (event) => {
  console.error("Error:", event.error);
  // Could send to error tracking service
});

// =====================
// INITIALIZATION
// =====================

document.addEventListener("DOMContentLoaded", () => {
  console.log("School Website Loaded Successfully");

  // Initialize tooltips
  document.querySelectorAll("[title]").forEach((el) => {
    el.setAttribute("aria-label", el.getAttribute("title"));
  });
});

// =====================
// CONTACT FORM ENHANCEMENT
// =====================

const contactForms = document.querySelectorAll("form");
contactForms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    const emailInput = form.querySelector('input[type="email"]');
    const phoneInput = form.querySelector('input[type="tel"]');

    if (emailInput && !validateEmail(emailInput.value)) {
      e.preventDefault();
      showNotification("Please enter a valid email address", "error");
    }

    if (phoneInput && !validatePhone(phoneInput.value)) {
      e.preventDefault();
      showNotification("Please enter a valid phone number", "error");
    }
  });
});

// =====================
// BREADCRUMB NAVIGATION
// =====================

function generateBreadcrumb() {
  const breadcrumb = document.createElement("nav");
  breadcrumb.setAttribute("aria-label", "Breadcrumb");
  breadcrumb.innerHTML = `
        <ol style="display: flex; gap: 10px; padding: 10px; margin: 10px 0;">
            <li><a href="/">Home</a></li>
        </ol>
    `;
  // Can be inserted into header if needed
}

console.log("All scripts loaded and ready");
