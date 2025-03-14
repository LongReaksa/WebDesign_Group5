document.addEventListener("DOMContentLoaded", function () {
  // Check for CSS view timeline support (unchanged)
  const supportsViewTimeline = CSS.supports("animation-timeline: view()");
  if (!supportsViewTimeline) {
    const cards = document.querySelectorAll(".card, .event-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "appear 5s linear forwards";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach((card) => observer.observe(card));
  }

  // See More/See Less for Events (unchanged)
  const seeMoreBtn = document.getElementById("seeMoreBtn");
  const seeLessBtn = document.getElementById("seeLessBtn");
  const hiddenEvents = document.querySelectorAll(".hidden-event");

  seeMoreBtn.addEventListener("click", () => {
    hiddenEvents.forEach((event) => {
      event.style.display = "block";
      if (!supportsViewTimeline) {
        setTimeout(() => {
          event.querySelector(".event-card").style.animation =
            "appear 5s linear forwards";
        }, 10);
      }
    });
    seeMoreBtn.style.display = "none";
    seeLessBtn.style.display = "inline-block";
  });

  seeLessBtn.addEventListener("click", () => {
    hiddenEvents.forEach((event) => {
      event.style.display = "none";
    });
    seeMoreBtn.style.display = "inline-block";
    seeLessBtn.style.display = "none";
  });

  // See More/See Less for News (unchanged)
  const seeMoreNewsBtn = document.getElementById("seeMoreNewsBtn");
  const seeLessNewsBtn = document.getElementById("seeLessNewsBtn");
  const hiddenNews = document.querySelectorAll(".hidden-news");

  seeMoreNewsBtn.addEventListener("click", () => {
    hiddenNews.forEach((news) => {
      news.style.display = "block";
      if (!supportsViewTimeline) {
        setTimeout(() => {
          news.querySelector(".card").style.animation =
            "appear 5s linear forwards";
        }, 10);
      }
    });
    seeMoreNewsBtn.style.display = "none";
    seeLessNewsBtn.style.display = "inline-block";
  });

  seeLessNewsBtn.addEventListener("click", () => {
    hiddenNews.forEach((news) => {
      news.style.display = "none";
    });
    seeMoreNewsBtn.style.display = "inline-block";
    seeLessNewsBtn.style.display = "none";
  });

  // Back to Top Button (unchanged)
  window.addEventListener("scroll", () => {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  document.getElementById("backToTopBtn").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Smooth Scroll for Anchor Links (unchanged)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Newsletter Form Submission (unchanged)
  document.getElementById("newsletterForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("newsletter1").value;
    const message = document.getElementById("newsletterMessage");

    if (message) {
      message.style.display = "block";
      message.style.color = email ? "green" : "red";
      message.textContent = email
        ? translations[currentLang].thankYou
        : translations[currentLang].enterValidEmail;
      if (email) document.getElementById("newsletter1").value = "";
    }
  });

  // Sticky Navbar with Transparency (unchanged)
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Dark Mode Toggle (unchanged)
  const darkModeToggle = document.getElementById("darkModeToggle");
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    darkModeToggle.innerHTML = isDark
      ? '<i class="bi bi-sun"></i>'
      : '<i class="bi bi-moon"></i>';
  });

  // Language Toggle Logic
  const translations = {
    en: {
      title: "PPIU",
      language: "EN",
      menu: "Menu",
      home: "Home",
      newsEvents: "News & Events",
      more: "More",
      location: "Location",
      contact: "Contact",
      aboutUs: "About Us",
      search: "Search",
      programs: "Programs",
      program1: "Program 1",
      program2: "Program 2",
      program3: "Program 3",
      academics: "Academics",
      course1: "Course 1",
      course2: "Course 2",
      course3: "Course 3",
      actions: "Actions",
      action1: "Action 1",
      action2: "Action 2",
      action3: "Action 3",
      achievements: "Achievements",
      achievement1: "Achievement 1",
      achievement2: "Achievement 2",
      achievement3: "Achievement 3",
      about: "About",
      team: "Team",
      mission: "Mission",
      vision: "Vision",
      components: "Components",
      component1: "Component 1",
      component2: "Component 2",
      component3: "Component 3",
      shiftTimes: "Shift Times",
      morning: "Morning",
      afternoon: "Afternoon",
      evening: "Evening",
      email: "Email",
      phone: "Phone",
      office: "Office",
      latestNews: "LATEST NEWS",
      cardTitle: "Card title",
      cardText1:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      cardText2:
        "This is a longer card with supporting text below as a natural lead-in to additional content.",
      seeMore: "See More",
      seeLess: "See Less",
      upcomingEvents: "UPCOMING EVENTS",
      event1: "Event 1",
      eventText1:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      lastUpdated3Mins: "Last updated 3 mins ago",
      event2: "Event 2",
      eventText2: "Join us for an exciting event with insightful discussions.",
      lastUpdated10Mins: "Last updated 10 mins ago",
      event3: "Event 3",
      eventText3: "A special event featuring guest speakers and sessions.",
      lastUpdated1Hour: "Last updated 1 hour ago",
      event4: "Event 4",
      eventText4: "An interactive workshop on technology advancements.",
      lastUpdated2Hours: "Last updated 2 hours ago",
      event5: "Event 5",
      eventText5: "A networking event for professionals in the industry.",
      lastUpdated1Day: "Last updated 1 day ago",
      event6: "Event 6",
      eventText6: "A seminar on future trends in artificial intelligence.",
      lastUpdated2Days: "Last updated 2 days ago",
      event7: "Event 7",
      eventText7: "A hands-on coding bootcamp for beginners.",
      lastUpdated3Days: "Last updated 3 days ago",
      event8: "Event 8",
      eventText8: "A panel discussion with industry leaders.",
      lastUpdated4Days: "Last updated 4 days ago",
      event9: "Event 9",
      eventText9: "A community meetup for tech enthusiasts.",
      lastUpdated5Days: "Last updated 5 days ago",
      professors: "PROFESSORS",
      professorTitle1: "Title",
      professorText1:
        "Always remember that a computer does not possess intelligence, but it acquires artificial intelligence through three main functional elements: the ability to analyze, the ability to synthesize, and logical reasoning.",
      professorTitle2: "Another Title",
      professorText2:
        "If we want to use a smart computer to process the Arabic language, we find ourselves facing a significant challenge, especially since our language is characterized by the cohesion and interconnectedness of its systems.",
      professorTitle3: "Third Title",
      professorText3:
        "Thanks to artificial intelligence research, we have been able to transition from dealing with the physical to dealing with the logical, positively impacting how we interact with languages.",
      viewDetails: "View Details",
      featureTitle1: "First Featured Title.",
      featureSubtitle1: "It’ll blow your mind.",
      featureText1:
        "The human face is an extremely complex and distinctive part of the body. In fact, it is one of the most intricate signaling systems we have available; it involves more than 40 structurally and functionally independent muscles, each of which can be operated independently of the others, forming one of the strongest indicators of emotions.",
      featureTitle2: "Oh yeah, it’s that good.",
      featureSubtitle2: "See for yourself.",
      featureText2:
        "When we laugh or cry, we display our emotions, allowing others to catch a glimpse of our minds as they 'read' our faces based on changes in key facial components such as the eyes, eyebrows, eyelids, nose, and lips.",
      ppiuLocation: "PPIU LOCATION",
      section: "Section",
      news: "News",
      events: "Events",
      subscribeNewsletter: "Subscribe to our newsletter",
      newsletterText: "Monthly digest of what's new and exciting from us.",
      emailAddress: "Email address",
      subscribe: "Subscribe",
      footerCopyright: "© 2024 PPIU, Inc. All rights reserved.",
      thankYou: "Thank you for subscribing!",
      enterValidEmail: "Please enter a valid email address.",
      welcomePPIU: "Welcome to PPIU",
    },
    kh: {
      title: "PPIU",
      language: "ខ្មែរ",
      menu: "ម៉ឺនុយ",
      home: "ទំព័រដើម",
      newsEvents: "ព័ត៌មាន និងព្រឹត្តិការណ៍",
      more: "បន្ថែម",
      location: "ទីតាំង",
      contact: "ទំនាក់ទំនង",
      aboutUs: "អំពីយើង",
      search: "ស្វែងរក",
      programs: "កម្មវិធី",
      program1: "កម្មវិធី ១",
      program2: "កម្មវិធី ២",
      program3: "កម្មវិធី ៣",
      academics: "ការសិក្សា",
      course1: "វគ្គសិក្សា ១",
      course2: "វគ្គសិក្សា ២",
      course3: "វគ្គសិក្សា ៣",
      actions: "សកម្មភាព",
      action1: "សកម្មភាព ១",
      action2: "សកម្មភាព ២",
      action3: "សកម្មភាព ៣",
      achievements: "សមិទ្ធផល",
      achievement1: "សមិទ្ធផល ៱",
      achievement2: "សមិទ្ធផល ៲",
      achievement3: "សមិទ្ធផល ៳",
      about: "អំពី",
      team: "ក្រុម",
      mission: "បេសកកម្ម",
      vision: "ចក្ខុវិស័យ",
      components: "សមាសភាគ",
      component1: "សមាសភាគ ១",
      component2: "សមាសភាគ ២",
      component3: "សមាសភាគ ៣",
      shiftTimes: "ពេលវេលាផ្លាស់ប្តូរ",
      morning: "ព្រឹក",
      afternoon: "រសៀល",
      evening: "ល្ងាច",
      email: "អ៊ីមែល",
      phone: "ទូរស័ព្ទ",
      office: "ការិយាល័យ",
      latestNews: "ព័ត៌មានថ្មីៗ",
      cardTitle: "ចំណងជើងកាត",
      cardText1:
        "នេះជាកាតវែងជាមួយអត្ថបទគាំទ្រខាងក្រោមជាការដឹកនាំធម្មជាតិទៅការមាតិកាបន្ថែម។ មាតិកានេះមានបន្ទាប់បន្សំបន្តិច។",
      cardText2:
        "នេះជាកាតវែងជាមួយអត្ថបទគាំទ្រខាងក្រោមជាការដឹកនាំធម្មជាតិទៅការមាតិកាបន្ថែម។",
      seeMore: "មើលបន្ថែម",
      seeLess: "មើលតិច",
      upcomingEvents: "ព្រឹត្តិការណ៍ខាងមុខ",
      event1: "ព្រឹត្តិការណ៍ ១",
      eventText1:
        "នេះជាកាតធំជាមួយអត្ថបទគាំទ្រខាងក្រោមជាការដឹកនាំធម្មជាតិទៅការមាតិកាបន្ថែម។",
      lastUpdated3Mins: "ធ្វើបច្ចុប្បន្នភាពចុងក្រោយ ៣ នាទីមុន",
      event2: "ព្រឹត្តិការណ៍ ២",
      eventText2:
        "ចូលរួមជាមួយយើងសម្រាប់ព្រឹត្តិការណ៍រំភើបជាមួយការពិភាក្សាដ៏មានប្រយោជន៍។",
      lastUpdated10Mins: "ធ្វើបច្ចុប្បន្នភាពចុងក្រោយ ១០ នាទីមុន",
      event3: "ព្រឹត្តិការណ៍ ៣",
      eventText3: "ព្រឹត្តិការណ៍ពិសេសមួយដែលមានភ្ញៀវអញ្ជើញនិងសម័យប្រជុំ។",
      lastUpdated1Hour: "ធ្វើបច្ចុប្បន្នភាពចុងក្រោយ ១ ម៉ោងមុន",
      event4: "ព្រឹត្តិការណ៍ ៤",
      eventText4: "សិក្ខាសាលាអន្តរកម្មស្តីពីការវិវឌ្ឍន៍បច្ចេកវិទ្យា។",
      lastUpdated2Hours: "ធ្វើបច្ចុប្បន្នភាពចុងក្រោយ ២ ម៉ោងមុន",
      event5: "ព្រឹត្តិការណ៍ ៥",
      eventText5:
        "ព្រឹត្តិការណ៍បណ្តាញភ្ជាប់សម្រាប់អ្នកជំនាញក្នុងឧស្សាហកម្ម។",
      lastUpdated1Day: "ធ្វើបច្ចុប្បន្នភាពចុងក្រោយ ១ ថ្ងៃមុន",
      event6: "ព្រឹត្តិការណ៍ ៦",
      eventText6:
        "សិក្ខាសាលាស្តីពីនិន្នាការអនាគតនៃផ្នែកបញ្ញាសិប្បនិម្មិត។",
      lastUpdated2Days: "ធ្វើបច្ចុប្បន្នភាពចុងក្រោយ ២ ថ្ងៃមុន",
      event7: "ព្រឹត្តិការណ៍ ៧",
      eventText7: "សាលាហាត់សាកល្បងកូដដៃសម្រាប់អ្នកចាប់ផ្តើម។",
      lastUpdated3Days: "ធ្វើបច្ចុប្បន្នភាពចុងក្រោយ ៣ ថ្ងៃមុន",
      event8: "ព្រឹត្តិការណ៍ ៨",
      eventText8: "ការពិភាក្សាពេញមួយបន្ទះជាមួយអ្នកដឹកនាំឧស្សាហកម្ម។",
      lastUpdated4Days: "ធ្វើបច្ចុប្បន្នភាពចុងក្រោយ ៤ ថ្ងៃមុន",
      event9: "ព្រឹត្តិការណ៍ ៩",
      eventText9: "ការជួបជុំសហគមន៍សម្រាប់អ្នកចូលរួមបច្ចេកវិទ្យា។",
      lastUpdated5Days: "ធ្វើបច្ចុប្បន្នភាពចុងក្រោយ ៥ ថ្ងៃមុន",
      professors: "គ្រូបង្រៀន",
      professorTitle1: "ចំណងជើង",
      professorText1:
        "តែងតែចងចាំថាកុំព្យូទ័រមិនមានបញ្ញាញាណទេ ប៉ុន្តែវាទទួលបានបញ្ញាសិប្បនិម្មិតតាមរយៈធាតុផ្គត់ផ្គង់សំខាន់បីយ៉ាង៖ សមត្ថភាពវិភាគ សមត្ថភាពសំយោគ និងហេតុផលឡូជីក។",
      professorTitle2: "ចំណងជើងមួយផ្សេងទៀត",
      professorText2:
        "ប្រសិនបើយើងចង់ប្រើកុំព្យូទ័រឆ្លាតវៃដើម្បីដំណើរការភាសាអារ៉ាប់ក៏ដោយ យើងរកឃើញថាយើងប្រឈមនឹងបញ្ហាធំមួយ ជាពិសេសព្រោះភាសារបស់យើងត្រូវបានកំណត់លក្ខណៈដោយការភ្ជាប់ និងទំនាក់ទំនងនៃប្រព័ន្ធរបស់ខ្លួន។",
      professorTitle3: "ចំណងជើងទីបី",
      professorText3:
        "អរគុណចំពោះការស្រាវជ្រាវផ្នែកបញ្ញាសិប្បនិម្មិត យើងអាចផ្លាស់ប្តូរពីការដោះស្រាយផ្នែករាងកាយទៅការដោះស្រាយផ្នែកឡូជីក ដែលមានឥទ្ធិពលវិជ្ជមានលើរបៀបដែលយើងធ្វើអន្តរកម្មជាមួយភាសា។",
      viewDetails: "មើលព័ត៌មានលម្អិត",
      featureTitle1: "ចំណងជើងផលិតផលដំបូង។",
      featureSubtitle1: "វានឹងធ្វើឱ្យអ្នកភ្ញាក់ផ្អើល។",
      featureText1:
        "មុខមាត់មនុស្សជារបស់រាងកាយដ៏ស្មុគស្មាញ និងលក្ខណៈពិសេសមួយ។ តាមពិតទៅ វាជាប្រព័ន្ធសញ្ញាដ៏ស្មុគស្មាញបំផុតមួយដែលយើងមាន។ វាពាក់ព័ន្ធនឹងសាច់ដុំឯករាជ្យជាង ៤០ ដែលអាចដំណើរការឯករាជ្យពីគ្នាទៅគ្នា ដែលបង្កើតជាផលិតផលមួយក្នុងចំណោមផលិតផលខ្លាំងបំផុតនៃអារម្មណ៍។",
      featureTitle2: "អូ! វាល្អណាស់។",
      featureSubtitle2: "មើលដោយខ្លួនឯង។",
      featureText2:
        "នៅពេលយើងសើច ឬញាក់ឪ្យក់ យើងបង្ហាញអារម្មណ៍របស់យើង ដែលអនុញ្ញាតឱ្យអ្នកដទៃមើលឃើញផ្នែកនៃចិត្តរបស់យើង ខណៈពួកគេ 'អាន' មុខរបស់យើងដោយផ្អែកលើការផ្លាស់ប្តូរនៃសមាសភាគសំខាន់នៃមុខដូចជាភ្នែក ក្រវ៉ាត់ភ្នែក ប្រអប់ភ្នែក ច្រមុះ និងផ្អែម។",
      ppiuLocation: "ទីតាំង PPIU",
      section: "ផ្នែក",
      news: "ព័ត៌មាន",
      events: "ព្រឹត្តិការណ៍",
      subscribeNewsletter: "ជាវការដំណឹងអេឡិចត្រូនិករបស់យើង",
      newsletterText:
        "សេចក្តីរាយការណ៍ប្រចាំខែនៃអ្វីដែលថ្មីនិងរំភើបពីយើង។",
      emailAddress: "អាសយដ្ឋានអ៊ីមែល",
      subscribe: "ជាវ",
      footerCopyright: "© ២០២៤ PPIU, Inc. រក្សាសិទ្ធិគ្រប់យ៉ាង។",
      thankYou: "សូមអរគុណចំពោះការជាវ!",
      enterValidEmail: "សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលឲ្យត្រឹមត្រូវ។",
      welcomePPIU: "សូមស្វាគមន៍មកកាន់ PPIU",
    },
  };

  let currentLang = localStorage.getItem("language") || "en";
  const langToggle = document.getElementById("languageToggle");

  // Dynamic Language Update Function
  function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("language", lang);

    // Toggle Khmer font class
    document.body.classList.toggle("khmer", lang === "kh");

    // Update all elements with data-lang attributes
    document.querySelectorAll("[data-lang]").forEach((element) => {
      const key = element.getAttribute("data-lang");
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });

    // Special case for search placeholder
    const searchInput = document.querySelector(".form-control");
    if (searchInput) {
      searchInput.placeholder = translations[lang].search;
    }

    // Update welcome text on homePage
    const homePage = document.getElementById("homePage");
    if (homePage) {
      homePage.setAttribute("data-lang-text", translations[lang].welcomePPIU);
    }

    // Update language toggle button text
    if (langToggle) {
      langToggle.querySelector("span").textContent = translations[lang].language;
    }
  }

  // Set initial language
  updateLanguage(currentLang);

  // Language toggle event listener
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      console.log("Language toggle clicked, switching to:", currentLang === "en" ? "kh" : "en");
      updateLanguage(currentLang === "en" ? "kh" : "en");
    });
  } else {
    console.error("Language toggle button (#languageToggle) not found in the DOM!");
  }
});