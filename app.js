const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(!address){
    console.log('Pls provide the location')
}else{
    //geocode(location, (error, data) =>{
    geocode(address, (error, {latitude,longitude,location} = {}) =>{  //using destructuring
        if(error){
            return console.log(error)
        }
        
        //forecast(data.latitude, data.longitude, (error, forecastData) => {
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
            console.log(location)
            console.log('Data : ', forecastData)
          })
    
    })
}







