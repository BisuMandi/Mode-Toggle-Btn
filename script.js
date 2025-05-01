const toggle = document.getElementById('toggle');
const chBox = document.getElementById('checkbox');
const toggleIcon = document.getElementById('toggle-icon');
const night = document.getElementById('night');
const day = document.getElementById('day');

function setDarkTheme() {
    toggleIcon.classList.remove('fa-circle');
    toggleIcon.classList.add('fa-moon');
    toggleIcon.classList.add('fa-rotate-by');
    toggleIcon.setAttribute('style', '--fa-rotate-angle: 230deg')
    night.setAttribute('style', 'opacity: 1');
    day.setAttribute('style', 'opacity: 0');

    // Remember theme
    localStorage.setItem('theme', 'dark');
}

function setLightTheme() {
    toggleIcon.classList.remove('fa-moon');
    toggleIcon.classList.remove('fa-rotate-by');
    toggleIcon.classList.add('fa-circle');
    night.setAttribute('style', 'opactiy: 0');
    day.setAttribute('style', 'opacity: 1');

    // Remember theme
    localStorage.setItem('theme', 'light');
}

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    chBox.checked = true;
    setDarkTheme();
} else {
    document.body.classList.remove('dark');
    chBox.checked = false;
    setLightTheme();
}

chBox.addEventListener('change', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        setDarkTheme();
    } else {
        setLightTheme();
    }
})