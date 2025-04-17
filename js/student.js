// // student change

// const userTexts = document.getElementsByClassName("user-text");
// const userPics   = document.getElementsByClassName("user-pic");

// function showReview() {
//     for (userPic of userPics) {
//         userPic.classList.remove("active-pic");
//     }
//     for (userText of userTexts) {
//         userText.classList.remove("active-text");
//     }

//     let i = Array.from(userPics).indexOf(event.target);

//     userPics[i].classList.add('active-pic');
//     userTexts[i].classList.add('active-text');
// }



// Testimonial data - all content moved to JavaScript
const testimonials = [
    {
        image: "/images/luffy.jpg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo est nobis molestias non magnam optio eaque, rem veniam dolor maxime?",
        name: "Van Devit",
        role: "Web Developer"
    },
    {
        image: "/images/luffy.jpg",
        text: "This should be used to tell a story and include any testimonials you might have about your product or service for your clients!",
        name: "Reksa",
        role: "Backend Developer"
    },
    {
        image: "/images/luffy.jpg",
        text: "This should be used to tell a story and include any testimonials you might have about your product or service for your clients!",
        name: "Thean Fong",
        role: "Design UX & UI"
    },
    {
        image: "/images/luffy.jpg",
        text: "This should be used to tell a story and include any testimonials you might have about your product or service for your clients!",
        name: "LiYuu",
        role: "Project Manager"
    },
    {
        image: "/images/luffy.jpg",
        text: "This should be used to tell a story and include any testimonials you might have about your product or service for your clients!",
        name: "Reaksmey",
        role: "Design UX & UI"
    }
];

// Function to generate the HTML
function generateTestimonials() {
    const userPicsContainer = document.getElementById('user-pics-container');
    const testimonialsContainer = document.getElementById('testimonials-container');
    
    // Generate user pictures
    testimonials.forEach((testimonial, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = testimonial.image;
        imgElement.alt = testimonial.name;
        imgElement.className = `h-[110px] w-[110px] rounded-full p-1 m-3 cursor-pointer user-pic ${index === 0 ? 'active-pic' : ''}`;
        imgElement.onclick = function() { showReview(index); };
        userPicsContainer.appendChild(imgElement);
    });
    
    // Generate testimonial text sections
    testimonials.forEach((testimonial, index) => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.className = `user-text ${index === 0 ? 'active-text' : ''}`;
        
        testimonialDiv.innerHTML = `
            <p class="md:text-2xl mb-6 dark:text-white">${testimonial.text}</p>
            <h4 class="font-bold text-blue-700 mb-1">${testimonial.name}</h4>
            <p class="dark:text-white">${testimonial.role}</p>
        `;
        
        testimonialsContainer.appendChild(testimonialDiv);
    });
}

// Function to show selected review
function showReview(selectedIndex) {
    const userPics = document.getElementsByClassName("user-pic");
    const userTexts = document.getElementsByClassName("user-text");
    
    // Remove active classes
    Array.from(userPics).forEach(pic => pic.classList.remove("active-pic"));
    Array.from(userTexts).forEach(text => text.classList.remove("active-text"));
    
    // Add active class to selected items
    userPics[selectedIndex].classList.add('active-pic');
    userTexts[selectedIndex].classList.add('active-text');
}

// Initialize testimonials when page loads
window.addEventListener('DOMContentLoaded', generateTestimonials);