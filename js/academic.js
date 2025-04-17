// Faculty data with corrected majors
const facultyData = [
    {
      name: "Faculty of Science and Technology",
      icon: "microscope",
      majors: [
        "Computer Science", "Management System Information",
      ]
    },
    {
      name: "Faculty of Business and Tourism",
      icon: "briefcase",
      majors: [
        "Management", "Accounting", 
        "Hotel & Tourism Management", "Logistics Management", 
        "Marketing"
      ]
    },
    {
      name: "Faculty of Law and Economics",
      icon: "scale-balanced",
      majors: [
        "Economics", "Finance & Banking", 
        "Public Administration", "Law","International Relation"
      ]
    },
    {
      name: "Faculty of Education Science",
      icon: "graduation-cap",
      majors: [
        "English for Education",
      ]
    },
  ];

  // Icons object with SVG paths
  const icons = {
    "microscope": `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-blue-600">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21a48.309 48.309 0 01-8.135-1.587c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    `,
    "briefcase": `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-green-600">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    `,
    "scale-balanced": `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-purple-600">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    `,
    "graduation-cap": `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-red-600">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.1 50.1 0 0112 2.493a50.1 50.1 0 019.725 3.814" />
      </svg>
    `,
  };

  // Function to render faculties
  function renderFaculties() {
    const container = document.getElementById('faculty-container');
    container.innerHTML = ''; // Clear previous content

    facultyData.forEach((faculty) => {
      // Create faculty card
      const facultyCard = document.createElement('div');
      facultyCard.className = `
        bg-white border rounded-lg p-6 text-center 
        transition-all duration-300 
        hover:shadow-xl cursor-pointer 
        border-gray-200 group
        transform hover:-translate-y-1
      `;
      
      // Card header with icon
      const iconContainer = document.createElement('div');
      iconContainer.className = 'flex justify-center mb-4 transition-transform group-hover:scale-110 duration-300';
      iconContainer.innerHTML = icons[faculty.icon] || '';

      // Faculty name
      const facultyName = document.createElement('h2');
      facultyName.className = 'text-xl font-semibold mb-4 text-gray-800';
      facultyName.textContent = faculty.name;

      // Majors list (initially hidden)
      const majorsList = document.createElement('div');
      majorsList.className = 'mt-4 overflow-hidden transition-all duration-300 max-h-0 opacity-0';
      majorsList.style.maxHeight = '0';
      
      const majorsTitle = document.createElement('h3');
      majorsTitle.className = 'font-bold mb-2 text-gray-700';
      majorsTitle.textContent = 'Majors:';
      
      const majorsUl = document.createElement('ul');
      majorsUl.className = 'space-y-2';

      // Render majors
      faculty.majors.forEach(major => {
        const majorLi = document.createElement('li');
        majorLi.className = 'bg-gray-100 rounded-md p-2 text-sm text-gray-700 hover:bg-gray-200 transition-colors';
        majorLi.textContent = major;
        majorsUl.appendChild(majorLi);
      });

      // View more button
      const viewButton = document.createElement('button');
      viewButton.className = 'mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors text-sm font-medium';
      viewButton.textContent = 'View Majors';
      
      // Toggle majors visibility
      viewButton.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Toggle majors visibility with smooth animation
        if (majorsList.style.maxHeight === '0px' || majorsList.style.maxHeight === '') {
          majorsList.style.maxHeight = majorsList.scrollHeight + 'px';
          majorsList.classList.replace('opacity-0', 'opacity-100');
          viewButton.textContent = 'Hide Majors';
        } else {
          majorsList.style.maxHeight = '0';
          majorsList.classList.replace('opacity-100', 'opacity-0');
          viewButton.textContent = 'View Majors';
        }
      });

      // Assemble the card
      majorsList.appendChild(majorsTitle);
      majorsList.appendChild(majorsUl);
      
      facultyCard.appendChild(iconContainer);
      facultyCard.appendChild(facultyName);
      facultyCard.appendChild(viewButton);
      facultyCard.appendChild(majorsList);

      // Add to container
      container.appendChild(facultyCard);
    });
  }

  // Filter function for searching faculties
  function addSearch() {
    const header = document.querySelector('header');
    
    const searchContainer = document.createElement('div');
    searchContainer.className = 'max-w-md mx-auto mt-8';
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search faculties or majors...';
    searchInput.className = 'w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-black     ';
    
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const cards = document.querySelectorAll('#faculty-container > div');
      
      cards.forEach(card => {
        const facultyName = card.querySelector('h2').textContent.toLowerCase();
        const majors = Array.from(card.querySelectorAll('li')).map(li => li.textContent.toLowerCase());
        
        // Check if faculty name or any major matches the search term
        const matchesFaculty = facultyName.includes(searchTerm);
        const matchesMajor = majors.some(major => major.includes(searchTerm));
        
        // Show/hide card based on search
        if (matchesFaculty || matchesMajor) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
    
    searchContainer.appendChild(searchInput);
    header.appendChild(searchContainer);
  }

  // Initialize the page
  document.addEventListener('DOMContentLoaded', () => {
    renderFaculties();
    addSearch();
  });