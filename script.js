
  // Theme switcher logic
  document.querySelectorAll(".theme-btn").forEach(button => {
    button.addEventListener("click", () => {
      document.body.className = button.dataset.theme;
      localStorage.setItem("site-theme", button.dataset.theme); // save preference
    });
  });

  // Load saved theme on refresh
  const savedTheme = localStorage.getItem("site-theme");
  document.body.className = savedTheme ? savedTheme : "theme-blue"; // default

  const contactElm = document.querySelector(".cta-button")
  // console.log(contactElm)
  contactElm.addEventListener("click", (e) => {
    contactElm.setAttribute("href", "https://www.youtube.com/@muntasirrazaofficial5122")
    contactElm.setAttribute("target", "_blank")
    
  })

// Enhanced hamburger menu functionality
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const navOverlay = document.createElement("div");
navOverlay.className = "nav-overlay";
document.body.appendChild(navOverlay);

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  navOverlay.classList.toggle("active");
  document.body.style.overflow = navLinks.classList.contains("active") ? "hidden" : "";
});

navOverlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  navOverlay.classList.remove("active");
  document.body.style.overflow = "";
});

// Close menu when clicking on nav links
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    navOverlay.classList.remove("active");
    document.body.style.overflow = "";
  });
});

  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeSidebar");
  const contactLink = document.getElementById("myContact");
  const projectsLink = document.getElementById("myProjects");
  const sidebarContent = document.getElementById("sidebar-content");

// Content with icons
  const contactHTML = `
    <h2>Contact Me</h2>
    <ul>
      <li><i class="fab fa-instagram"></i>
        <a href="https://www.instagram.com/muntasir_raza_official/" target="_blank">Instagram</a>
      </li>
      <li><i class="fab fa-facebook"></i>
        <a href="https://www.facebook.com/hafiz.muntasir.raza/" target="_blank">Facebook</a>
      </li>
      <li><i class="fab fa-whatsapp"></i>
        <a>+91 6204553169</a>
      </li>
    </ul>`;


const projectsHTML = `
  <h2>My Projects</h2>
  <ul>
    <li><i class="fa-brands fa-youtube"></i>
     <a href="https://youtu.be/uzCJoqLLBuM" target = "_blank">Taraweeh Ki Dua</a>
    </li>
    <li><i class="fa-brands fa-youtube"></i>
      <a href="https://youtube.com/shorts/i83Jg4S6Vjc?si=VnX3-ZQPOUGqprwf" target="_blank">Niyat Ki Ahmiyat</a>
    </li>
    <li><i class="fa-brands fa-youtube"></i>
      <a href="https://youtube.com/shorts/v-RHcwh5vCU?si=ms1dFcAqHV2NyZN4" target = "_blank">Masjid Ki Safai</a>
    </li>
    <li><i class="fa-brands fa-youtube"></i>
      <a href="https://youtube.com/shorts/Bv0dRpS6xNU?si=OaAKSKu0uivslK1X" target="_blank">Sajda Kro</a>
    </li>
    <li><i class="fa-brands fa-youtube"></i>
      <a href="https://youtube.com/shorts/djXcgwMJS0M?si=H0qwXklQYuOpGVDY" target = "_blank">Sadqa</a>
    </li>
  </ul>`
;

// Open sidebar with animation reset
function openSidebar(content) {
  sidebarContent.innerHTML = content;

  // Reset animation for list items
  const items = sidebarContent.querySelectorAll("li");
  items.forEach(item => {
    item.style.animation = "none";
    item.offsetHeight; // Trigger reflow
    item.style.animation = "";
  });

  sidebar.classList.add("open");
  overlay.classList.add("active");
}

// Close sidebar
function closeSidebarFunc() {
  sidebar.classList.remove("open");
  overlay.classList.remove("active");
}

// Event listeners
contactLink.addEventListener("click", (e) => { 
  e.preventDefault(); 
  openSidebar(contactHTML); 
});
projectsLink.addEventListener("click", (e) => {
   e.preventDefault();
    openSidebar(projectsHTML);
   });
closeBtn.addEventListener("click", closeSidebarFunc);
overlay.addEventListener("click", closeSidebarFunc);