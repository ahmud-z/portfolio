const light = document.getElementById('light-sun')
const body = document.querySelector('body')
const btnMobileMenu = document.getElementById('btn-mobile-menu')
const mobileMenu = document.getElementById('mobile-menu')
const element = document.getElementById('myDiv')
const visitorCountKey = 'visitorCount';

light.addEventListener('click', function () {
    if (this.classList.contains('bi-brightness-high')) {
        this.classList.remove('bi-brightness-high');
        this.classList.add('bi-moon-stars');
    } else {
        this.classList.remove('bi-moon-stars');
        this.classList.add('bi-brightness-high');
    }
    //body.classList.toggle('dark');
});

// Function to set the theme preference in localStorage
function setThemePreference(theme) {
    localStorage.setItem('theme', theme);
}

// Function to apply the theme based on the stored preference
function applyThemePreference() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }
}

// Event listener for theme toggle
light.addEventListener('click', function () {
    body.classList.toggle('dark');
    const theme = body.classList.contains('dark') ? 'dark' : 'light';
    setThemePreference(theme);
});

// Apply theme preference on page load
applyThemePreference();


btnMobileMenu.addEventListener('click', function () {
    mobileMenu.classList.toggle('show')
})

// Add event listener to hide menu after selecting any option
const menuItems = document.querySelectorAll('#mobile-menu a');
menuItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
        mobileMenu.classList.remove('show');
    });
});

// Add event listener to hide menu when clicking anywhere outside of it
document.addEventListener('click', function (event) {
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isClickOnMenuButton = btnMobileMenu.contains(event.target);
    if (!isClickInsideMenu && !isClickOnMenuButton) {
        mobileMenu.classList.remove('show');
    }
});

// Add event listener to hide menu when scrolling anywhere outside of it
document.addEventListener('scroll', function () {
    const isScrollInsideMenu = mobileMenu.contains(document.elementFromPoint(10, 10));
    if (!isScrollInsideMenu) {
        mobileMenu.classList.remove('show');
    }
});

const copyrightYear = document.getElementById('year')
copyrightYear.innerText = new Date().getFullYear()

function emailSend(e) {
    e.preventDefault();
    e.stopPropagation();

    const data = new FormData(document.getElementById('contactForm'))

    fetch('https://api.web3forms.com/submit', {
        method: 'post',
        body: data
    }).then(function ({ status }) {
        if (status === 200) {
            showModal('success-popup');
            clearForm();
        } else {
            showModal('error-popup');
        }
    })
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

function showModal(modalId) {
    const popup = document.getElementById(modalId);

    popup.classList.add('show-popup')
}

function hide(modalId) {
    const popup = document.getElementById(modalId);

    popup.classList.remove('show-popup')
}