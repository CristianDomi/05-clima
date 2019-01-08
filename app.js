const lugar = require("./lugar/lugar");
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direcion de la ciudad para obtener el clima',
        //: true
    }
}).argv;

/*lugar.getLugarLatLng(argv.direccion).then(resp => {
    console.log(resp);
}).catch(e => {
    console.log(e);
})
*/

let getInfo = async(direccion) => {

    try {
        let coordenadas = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(coordenadas.latitud, coordenadas.longitud);

        return `El clima en ${coordenadas.direccion} es de ${temperatura} centigrados`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }

}

getInfo(argv.direccion).then(resp => console.log(resp))
    .catch(e => console.log(e));