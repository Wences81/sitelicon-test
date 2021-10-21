import './css/styles.css';
import countryCardTpl from '../src/templates/country-card.hbs';
import countriesTpl from '../src/templates/countries.hbs';
import API from  './js/fetchCountries';
import getRefs from './js/get-refs';
import Notiflix from "notiflix";

const debounce = require('lodash.debounce')
const DEBOUNCE_DELAY = 300;
const refs = getRefs();



refs.inputSearch.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
    e.preventDefault()
    const name = refs.inputSearch.value;
    refs.countryInfo.innerHTML = '';
    const searchQuery = e.target.value;

    

    // if (name === ' ') {
    //     return Notiflix.Notify.failure('Please enter something');
    // }
    // else {
    if(searchQuery.trim() !== '') {
    
        API.fetchCountry(name)
            .then(renderCountryCard)
            .catch(error => console.log(error))
    
    }
}

function renderCountryCard(name) {
    if (name.length === 1) {
        const markup = name[0];
        refs.countryInfo.insertAdjacentHTML('beforeend', countryCardTpl(markup));

    } else if (name.length > 10) {
        getInfoMessage('Too many matches found. Please enter a more specific name.');

    } else if (name.status === 404) {
        getErrorMessage('Oops, there is no country with that name');

    

    } else {
        refs.countryInfo.innerHTML = countriesTpl(name);
    }
        }




function getInfoMessage(message) {
    Notiflix.Notify.info(message);
}

function getErrorMessage(message) {
    Notiflix.Notify.failure(message);
}