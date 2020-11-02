import "./styles.css";
import template from "./menu-template.hbs";
import menuJSON from "./menu.json"

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const toggleRef = document.querySelector('.theme-switch__toggle');
const localStorageTheme = localStorage.getItem('theme');

toggleRef.addEventListener('change', toggleChange);

function toggleChange() {
    if (!toggleRef.checked) {
        addLightTheme();
    } else {
        addDarkTheme();
    }
}

function addLightTheme() {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
}

function addDarkTheme() {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
}

function LocalStorageHandler() {
    if (localStorageTheme === Theme.DARK) {
        document.body.classList.toggle(Theme.DARK);
        toggleRef.checked = true;
    } else {
        document.body.classList.toggle(Theme.LIGHT);
        toggleRef.checked = false;
    }
}

LocalStorageHandler()

const createMarkup = template(menuJSON);

const galleryRef = document.querySelector('.js-menu');
galleryRef.insertAdjacentHTML('beforeend', createMarkup);