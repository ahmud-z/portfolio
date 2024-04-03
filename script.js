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

    body.classList.toggle('dark');
});

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

function emailSend() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Port: "2525",
        Username: "mahmudbappy.pri@gmail.com",
        Password: "14F28DAC14FFFF13D7A8F40A4FD8C63E39F4",
        To: 'ahmud.cse@outlook.com',
        From: `ahmudulhossain.n5@gmail.com`,
        Subject: `New email from portfolio contact form`,
        Body: `
            FROM: ${document.getElementById('email').value}
            Message: ${document.getElementById('message').value}
        `
    }).then(
        message => alert(message)
    );
}