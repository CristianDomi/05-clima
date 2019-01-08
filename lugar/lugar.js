const axios = require('axios');

const getLugarLatLng = async(direccionPeticion) => {

    let encodeUrl = encodeURI(direccionPeticion)

    let resp = await axios.get(`https://api.tomtom.com/search/2/geocode/${encodeUrl}.json?key=RJeJyAmOwiwnbXGaFkvbs3PW937G4xcH
    `)
    if (resp.data.results[0] === undefined) {
        throw new Error(`No hay resultados para la busqueda "${direccionPeticion}"`)
    }


    let direccion = `${resp.data.results[0].address.municipality}, ${resp.data.results[0].address.countrySubdivision} , ${resp.data.results[0].address.country}`;
    let latitud = resp.data.results[0].position.lat;
    let longitud = resp.data.results[0].position.lon;

    //console.log(JSON.stringify(resp.data, undefined, 2));



    return {
        direccion,
        latitud,
        longitud
    }
}

module.exports = {
    getLugarLatLng
}