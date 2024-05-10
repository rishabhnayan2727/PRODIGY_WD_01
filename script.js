window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#f8f9fa'; // Change background color when scrolled
    } else {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    }
  });
  