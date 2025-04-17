  // Navbar Functionality
  const navbar = {
    nav: document.getElementById('navbar'),
    mobileMenu: document.getElementById('mobile-menu'),
    mobileOpenBtn: document.getElementById('mobile-menu-open'),
    mobileCloseBtn: document.getElementById('mobile-menu-close'),
    mobileLinks: document.querySelectorAll('[data-mobile-link]'),
    
    init: function() {
      // Handle scroll events for navbar background
      window.addEventListener('scroll', () => this.handleScroll());
      
      // Mobile menu toggle
      this.mobileOpenBtn.addEventListener('click', () => this.openMobileMenu());
      this.mobileCloseBtn.addEventListener('click', () => this.closeMobileMenu());
      
      // Close mobile menu when clicking a link
      this.mobileLinks.forEach(link => {
        link.addEventListener('click', () => this.closeMobileMenu());
      });
    },
    
    handleScroll: function() {
      if (window.scrollY > 50) {
        this.nav.classList.remove('navbar-transparent');
        this.nav.classList.add('navbar-scrolled');
      } else {
        this.nav.classList.add('navbar-transparent');
        this.nav.classList.remove('navbar-scrolled');
      }
    },
    
    openMobileMenu: function() {
      this.mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    },
    
    closeMobileMenu: function() {
      this.mobileMenu.classList.remove('active');
      document.body.style.overflow = ''; // Re-enable scrolling
    }
  };
  
  // Initialize navbar
  navbar.init();
