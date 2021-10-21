fetch('http://sitelicon.eu/test/ajax_localidades.php')
    .then(res => res.json())
    .then(json => {

        let jsObj = json
        for (let key in jsObj) {

            let countryOption = document.createElement('option');
            let countrySelect = document.getElementById('countrySelect');

            countryOption.innerHTML = key;
            countrySelect.appendChild(countryOption);


        }
        document.querySelector('#countrySelect').addEventListener('change', function () { // Замыкание
            let cities = jsObj[this.value]

            citySelect.length = 0;

            for (const iterator of cities) {

                let cityOption = document.createElement('option');
                let citySelect = document.getElementById('citySelect');

                cityOption.innerHTML = iterator;
                citySelect.appendChild(cityOption);

            }
        });
    });
