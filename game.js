let randomCountryElement = document.querySelector('#random-country');
let userAnswerElement = document.querySelector("#user-answer");
let submitButton = document.querySelector("#submit-answer");
let resultTextElement = document.querySelector('#result');


// TODO when the page loads, select an element at random from the countriesAndCodes array
// This array is defined in the countries.js file. Your browser treats all 
// JavaScript files as one big file, organized in the order of the script tags
// so countriesAndCodes is available to this file

// Found on StackOverflow
let random_country_code = countriesAndCodes[Math.floor(Math.random() * countriesAndCodes.length)];

console.log(countriesAndCodes);  // You don't need to log countriesAndCodes - just proving it is available

// TODO display the country's name in the randomCountryElement

randomCountryElement.innerHTML = random_country_code.name;

// TODO add a click event handler to the submitButton.  When the user clicks the button,                    //Done
//  * read the text from the userAnswerElement                                                              //Done
//  * Use fetch() to make a call to the World Bank API with the country code (from countriesAndCodes)       //Done
//  * Extract the capital city from the World Bank API response
//  * Compare it to the user's answer. 
//      You can decide how correct you require the user to be. A basic solution requires 
//      the user's answer to be exactly the same as the World Bank answer. If you want 
//      to be more flexible, include and use a string similarity library such as https://github.com/hiddentao/fast-levenshtein 
//  * Display an appropriate result in the resultTextElement. 
//      For example "Correct! The capital of Germany is Berlin" or "Wrong - the capital of Germany is not G, it is Berlin"

submitButton.addEventListener('click', function () {
    let input = document.getElementById("user-answer").value;
    let alpha_2 = random_country_code["alpha-2"];

    const url = 'http://api.worldbank.org/v2/country/' + alpha_2 + '?format=json';

    fetch(url).then( (res) => {
        return res.json()
    }).then((json) =>{
        console.log(json);

        let country_capital = json.
        console.log(country_capital);
    })
});