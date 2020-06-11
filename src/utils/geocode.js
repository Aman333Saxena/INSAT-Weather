const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + encodeURIComponent(address) + '&appid=bafe627985c40d7ea5b2e72e27ad1455&units=metric' 

    request({url, json: true}, (error,{body}) => {
        if (error) {
            callback('Unable to connect with location services!', undefined)
        } else if (body.cod == '404') {
            callback('Unable to find location', undefined)
        } else {         
            callback(undefined, {
                location: body.city.name,
                latitude: body.city.coord.lat,
                longitude: body.city.coord.lon             
            })
        }
    })
}

module.exports = geocode

