const axios = require('axios');

const getClima = async(lat, lng) => {

    let direccionPeticion = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=450e66801f29655aab370dacea535355`;

    let resp = await axios.get(direccionPeticion);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}