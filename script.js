// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Close mobile menu after clicking a link
    document.getElementById('mobile-menu').classList.add('hidden');
  });
});

// Modals
function openPrayerModal(){ document.getElementById('prayerModal').classList.remove('hidden'); }
function closePrayerModal(){ document.getElementById('prayerModal').classList.add('hidden'); }
function openDonationModal(){ document.getElementById('donationModal').classList.remove('hidden'); }
function closeDonationModal(){ document.getElementById('donationModal').classList.add('hidden'); }
function setDonationAmount(amount){ document.getElementById('donationAmount').value = amount; }

// API Form handlers (these will require a backend to function)
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  // This part is for backend API calls and will need to be implemented separately
  alert('Contact form submission is for demonstration purposes. A backend is required to handle this.');
  this.reset();
});

document.getElementById('prayerForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  // This part is for backend API calls and will need to be implemented separately
  alert('Prayer request submission is for demonstration purposes. A backend is required to handle this.');
  this.reset();
  closePrayerModal();
});

document.getElementById('donationForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  // This part is for backend API calls and will need to be implemented separately
  alert('Donation submission is for demonstration purposes. A backend is required to handle this.');
  this.reset();
  closeDonationModal();
});