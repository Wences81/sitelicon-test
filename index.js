function fetchProvincias(name) {

    return fetch(`http://sitelicon.eu/test/ajax_localidades.php/name/${name}`, options)
        .then(res => res.json())
        .then(json => {


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
        });
}

