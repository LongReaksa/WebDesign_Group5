    // FAQ Data
    const faqData = [
        {
          question: "តើអ្នកណាអាចដាក់ពាក្យស្នើសុំកម្ចីសិក្សានេះបាន?",
          answer: "និស្សិតទាំងអស់ដែលចុះឈ្មោះក្នុងសាកលវិទ្យាល័យភ្នំពេញអន្តរជាតិ (PPIU) ទាំងថ្នាក់បរិញ្ញាបត្ររង បរិញ្ញាបត្រ បរិញ្ញាបត្រជាន់ខ្ពស់ និងបណ្ឌិត អាចដាក់ពាក្យស្នើសុំកម្ចីសិក្សានេះបាន។"
        },
        {
          question: "តើការដាក់ពាក្យស្នើសុំមានដំណើរការយ៉ាងដូចម្តេច?",
          answer: "អ្នកត្រូវបំពេញពាក្យស្នើសុំនៅការិយាល័យហិរញ្ញវត្ថុនៃសាកលវិទ្យាល័យភ្នំពេញអន្តរជាតិ ឬនៅសាខារបស់ធនាគាព្រីនស៍ណាមួយ។ អ្នកត្រូវត្រៀមឯកសារដូចជា អត្តសញ្ញាណប័ណ្ណ លិខិតបញ្ជាក់ការសិក្សា និងព័ត៌មានទំនាក់ទំនងរបស់អ្នកធានា។"
        },
        {
          question: "តើខ្ញុំត្រូវចាប់ផ្តើមបង់ប្រាក់នៅពេលណា?",
          answer: "សម្រាប់កម្ចីរយៈពេល ៥ ឆ្នាំឡើងទៅ អ្នកបង់តែការប្រាក់ក្នុងរយៈពេល ៤ ឆ្នាំដំបូង។ បន្ទាប់មក អ្នកចាប់ផ្តើមបង់ទាំងប្រាក់ដើមនិងការប្រាក់រហូតដល់ចប់កិច្ចសន្យា។"
        },
        {
          question: "តើមានការដាក់ទណ្ឌកម្មអ្វីខ្លះប្រសិនបើខ្ញុំបង់ផ្តាច់មុនកាលកំណត់?",
          answer: "មិនមានការដាក់ទណ្ឌកម្មទេ ប្រសិនបើអ្នកសម្រេចចិត្តបង់ផ្តាច់មុនកាលកំណត់។ អ្នកអាចបង់ផ្តាច់នៅពេលណាក៏បានដោយមិនមានការគិតថ្លៃបន្ថែម។"
        }
      ];
  
      // Loan calculator functionality
      document.addEventListener('DOMContentLoaded', function() {
        // Initialize FAQ
        const faqContainer = document.getElementById('faq-container');
        
        faqData.forEach((item, index) => {
          const faqItem = document.createElement('div');
          faqItem.className = 'bg-white rounded-lg shadow-md overflow-hidden';
          
          faqItem.innerHTML = `
            <button class="w-full flex justify-between items-center p-4 text-left focus:outline-none">
              <span class="font-medium">${item.question}</span>
              <svg class="w-5 h-5 text-gray-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="faq-answer px-4 pb-4 hidden">
              <p class="text-gray-600">${item.answer}</p>
            </div>
          `;
          
          faqContainer.appendChild(faqItem);
          
          // Add click event
          const button = faqItem.querySelector('button');
          button.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('svg');
            
            answer.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
          });
        });
        
        // Loan calculator
        const loanAmountSlider = document.getElementById('loan-amount');
        const loanTermSlider = document.getElementById('loan-term');
        const amountValue = document.getElementById('amount-value');
        const termValue = document.getElementById('term-value');
        const interestOnly = document.getElementById('interest-only');
        const principalPayment = document.getElementById('principal-payment');
        const totalPayment = document.getElementById('total-payment');
        
        function updateCalculator() {
          const amount = parseFloat(loanAmountSlider.value);
          const term = parseInt(loanTermSlider.value);
          const annualRate = 0.1; // 10%
          
          // Update display values
          amountValue.textContent = '$' + amount.toLocaleString();
          termValue.textContent = term + ' ឆ្នាំ';
          
          // Calculate monthly interest payment
          const monthlyInterest = (amount * annualRate / 12).toFixed(2);
          interestOnly.textContent = '$' + monthlyInterest + ' / ខែ';
          
          // Calculate principal payment after grace period
          let remainingTerm = term - 4;
          if (remainingTerm < 0) remainingTerm = term;
          
          const monthlyPrincipal = (remainingTerm > 0) 
            ? (amount / (remainingTerm * 12)).toFixed(2) 
            : 0;
          
          principalPayment.textContent = '$' + monthlyPrincipal + ' + ការប្រាក់ / ខែ';
          
          // Calculate total payment
          let totalInterest = 0;
          
          if (term <= 4) {
            // Interest for the entire period plus principal
            totalInterest = amount * annualRate * term;
          } else {
            // Interest for grace period (4 years)
            const gracePeriodInterest = amount * annualRate * 4;
            
            // Interest for remaining period (declining balance)
            let balance = amount;
            const monthlyPayment = balance / ((term - 4) * 12);
            
            for (let i = 0; i < (term - 4) * 12; i++) {
              totalInterest += balance * (annualRate / 12);
              balance -= monthlyPayment;
            }
            
            totalInterest += gracePeriodInterest;
          }
          
          const total = amount + totalInterest;
          totalPayment.textContent = '$' + total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        }
        
        // Initialize calculator
        updateCalculator();
        
        // Add event listeners to sliders
        loanAmountSlider.addEventListener('input', updateCalculator);
        loanTermSlider.addEventListener('input', updateCalculator);
        
        // Apply button animation
        const applyBtn = document.getElementById('apply-btn');
        applyBtn.addEventListener('click', function() {
          alert('ពាក្យស្នើសុំរបស់អ្នកត្រូវបានទទួល។ អ្នកតំណាងរបស់យើងនឹងទាក់ទងអ្នកក្នុងពេលឆាប់ៗ។');
        });
      });