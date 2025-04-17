        // Partner data
        const partnersData = [
            {
                name: "Tech Innovations Inc.",
                logo: "data:image/jpeg;base64,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",
                description: "A leading technology solutions provider specializing in cutting-edge software development.",
                industry: "Technology",
                established: 2005,
                website: "https://www.ababank.com/"
            },
            {
                name: "Global Consulting Group",
                logo: "https://via.placeholder.com/150?text=Global+Consulting",
                description: "International consulting firm offering strategic business solutions across multiple sectors.",
                industry: "Consulting",
                established: 1998,
                website: "https://globalconsulting.com"
            },
            {
                name: "Green Energy Solutions",
                logo: "https://via.placeholder.com/150?text=Green+Energy",
                description: "Pioneering renewable energy technologies and sustainable infrastructure projects.",
                industry: "Energy",
                established: 2010,
                website: "https://greenenergysolutions.com"
            },
            {
                name: "HealthTech Innovations",
                logo: "https://via.placeholder.com/150?text=HealthTech",
                description: "Revolutionizing healthcare through advanced medical technologies and digital solutions.",
                industry: "Healthcare",
                established: 2015,
                website: "https://healthtechinnovations.com"
            },
            {
                name: "Financial Dynamics",
                logo: "https://via.placeholder.com/150?text=Financial+Dynamics",
                description: "Comprehensive financial services and investment strategy experts.",
                industry: "Finance",
                established: 2000,
                website: "https://financialdynamics.com"
            },
            {
                name: "Education Frontier",
                logo: "https://via.placeholder.com/150?text=Education+Frontier",
                description: "Innovative educational technology and learning solution providers.",
                industry: "Education",
                established: 2012,
                website: "https://educationfrontier.com"
            },
            {
                name: "Logistics Network",
                logo: "https://via.placeholder.com/150?text=Logistics+Network",
                description: "Global logistics and supply chain management experts.",
                industry: "Logistics",
                established: 2008,
                website: "https://logisticsnetwork.com"
            },
            {
                name: "Creative Media Solutions",
                logo: "https://via.placeholder.com/150?text=Creative+Media",
                description: "Cutting-edge digital marketing and media production company.",
                industry: "Media",
                established: 2018,
                website: "https://creativemediasolutions.com"
            }
        ];

        // Reference to DOM elements
        const partnersContainer = document.getElementById('partners-container');
        const showMoreBtn = document.getElementById('show-more-btn');
        const partnerModal = document.getElementById('partner-modal');
        const modalContent = document.getElementById('modal-content');
        const closeModalBtn = document.getElementById('close-modal');

        // Current number of displayed partners
        let displayedPartners = 4;

        // Render partners
        function renderPartners() {
            partnersContainer.innerHTML = ''; // Clear previous content

            // Display partners
            partnersData.slice(0, displayedPartners).forEach(partner => {
                const partnerCard = document.createElement('div');
                partnerCard.className = `
                    bg-white rounded-lg shadow-md p-6 
                    flex flex-col items-center text-center 
                    transform transition duration-300 
                    hover:scale-105 hover:shadow-xl
                    cursor-pointer
                `;

                partnerCard.innerHTML = `
                    <img src="${partner.logo}" alt="${partner.name}" class="w-32 h-32 object-contain mb-4">
                    <h3 class="font-bold text-xl mb-2">${partner.name}</h3>
                    <p class="text-gray-600 text-sm">${partner.industry}</p>
                `;

                // Add click event to show modal
                partnerCard.addEventListener('click', () => showPartnerDetails(partner));

                partnersContainer.appendChild(partnerCard);
            });
        }

        // Show partner details in modal
        function showPartnerDetails(partner) {
            modalContent.innerHTML = `
                <img src="${partner.logo}" alt="${partner.name}" class="w-48 h-48 object-contain mx-auto mb-6">
                <h2 class="text-2xl font-bold mb-4">${partner.name}</h2>
                <p class="text-gray-700 mb-4">${partner.description}</p>
                <div class="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <p class="font-semibold">Industry</p>
                        <p class="text-gray-600">${partner.industry}</p>
                    </div>
                    <div>
                        <p class="font-semibold">Established</p>
                        <p class="text-gray-600">${partner.established}</p>
                    </div>
                </div>
                <a href="${partner.website}" target="_blank" class="
                    inline-block px-6 py-2 
                    bg-blue-600 text-white 
                    rounded-lg hover:bg-blue-700 
                    transition duration-300
                ">
                    Visit Website
                </a>
            `;

            partnerModal.classList.remove('hidden');
            partnerModal.classList.add('flex');
        }

        // Show more partners
        showMoreBtn.addEventListener('click', () => {
            displayedPartners += 4;
            if (displayedPartners >= partnersData.length) {
                showMoreBtn.style.display = 'none';
            }
            renderPartners();
        });

        // Close modal
        closeModalBtn.addEventListener('click', () => {
            partnerModal.classList.remove('flex');
            partnerModal.classList.add('hidden');
        });

        // Close modal when clicking outside
        partnerModal.addEventListener('click', (event) => {
            if (event.target === partnerModal) {
                partnerModal.classList.remove('flex');
                partnerModal.classList.add('hidden');
            }
        });

        // Initial render
        renderPartners();