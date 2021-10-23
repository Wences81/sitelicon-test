const BASE_URL = 'http://sitelicon.eu/test/ajax_localidades.php';

function fetchProvincias(optoin) {
    return fetch(`${BASE_URL}/option/${option}`).then((response) =>
        response.json(),

    );
   

    

}
        let jsObj = json
        for (let key in jsObj) {

        let provinciasOption = document.createElement('option');
        let provinciasSelect = document.getElementById('provincias');

        provinciasOption.innerHTML = key;
        provinciasSelect.appendChild(provinciasOption);

    }

    document.querySelector('#provincias').addEventListener('change', function () {
        let localidades = jsObj[this.value]

        localidadesSelect.length = 0;

        for (const iterator of localidades) {

            let localidadesOption = document.createElement('option');
            let localidadesSelect = document.getElementById('localidades');

            localidadesOption.innerHTML = iterator;
            localidadesSelect.appendChild(localidadesOption);

        }
    });

