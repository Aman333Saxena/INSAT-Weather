const request = require('request')

const forecast = (address, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + encodeURIComponent(address) + '&appid=bafe627985c40d7ea5b2e72e27ad1455&units=metric' 

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect with location services!', undefined)
        } else if (body.cod == '404') {
            callback('Unable to find location', undefined)
        } else {         
            callback(undefined, {
                weather: body.list[0].weather[0].description,
                temperature: body.list[0].main.temp,
                humidity: body.list[0].main.humidity             
            })
        }
    })
}

module.exports = forecast