
  const sections = {
    library: {
      title: "Modern Library",
      description: "A spacious library with books, digital resources, and quiet zones.",
      details: "Open 8 AM - 9 PM. Over 20,000 books, digital terminals, café corner.",
      image: "/images/banner.JPG"
    },
    meetingRoom: {
      title: "Conference Meeting Room",
      description: "Professional meeting space for collaboration and presentations.",
      details: "Seats 30, projection system, whiteboard, video conferencing.",
      image: "/images/banner_2.JPG"
    },
    studyRoom: {
      title: "Focused Study Space",
      description: "Quiet areas for group or solo study with modern facilities.",
      details: "2–8 person rooms, high-speed WiFi, writable walls, power outlets.",
      image: "/images/banner_3.JPG"
    },
    musicClub: {
      title: "Vibrant Music Club",
      description: "A space for music lovers to perform, practice, and socialize.",
      details: "Stage, sound gear, 3 practice rooms, live events every week.",
      image: "https://www.aum.edu.kw/azure/files/ContentPhotos/Photos/RV4A3229%20copy_051758..jpg?w=780&h=520&scale=both&mode=crop"
    },
    restaurant: {
      title: "Gourmet Restaurant",
      description: "Elegant dining with a wide variety of cuisines.",
      details: "80 seats, breakfast to dinner, outdoor seating, private dining.",
      image: "https://www.nipissingu.ca/sites/default/files/styles/crop_freeform/public/Restaurant.jpg?itok=Yf272UBH"
    }
  };

  let activeKey = 'library';

  const navButtons = document.getElementById('nav-buttons');
  const img = document.getElementById('section-img');
  const title = document.getElementById('section-title');
  const desc = document.getElementById('section-desc');
  const detail = document.getElementById('section-detail');

  function renderSection(key) {
    activeKey = key;
    const section = sections[key];
    img.src = section.image;
    img.alt = section.title;
    title.textContent = section.title;
    desc.textContent = section.description;
    detail.textContent = section.details;

    document.querySelectorAll('#nav-buttons button').forEach(btn => {
      btn.classList.remove('bg-blue-600', 'text-white');
      btn.classList.add('bg-white', 'text-gray-700');
    });

    const activeBtn = document.getElementById(`btn-${key}`);
    activeBtn.classList.remove('bg-white', 'text-gray-700');
    activeBtn.classList.add('bg-blue-600', 'text-white');
  }

  function initNav() {
    for (const key in sections) {
      const btn = document.createElement('button');
      btn.id = `btn-${key}`;
      btn.textContent = sections[key].title;

      const isActive = key === activeKey;
      btn.className = `px-4 py-2 text-sm font-medium rounded-md transition whitespace-nowrap ${
        isActive ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
      }`;

      btn.addEventListener('click', () => renderSection(key));
      navButtons.appendChild(btn);
    }
  }

  initNav();
  renderSection(activeKey);