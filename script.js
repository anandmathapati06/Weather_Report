console.log("hello");

let data
console.log(cityname.value);
console.log(config.key);

    










async function  apicall(){
    let place = (cityname.value == "") ? "india": cityname.value
    const url =`http://api.weatherapi.com/v1/current.json?q=${place}`
    let res = await fetch(url,{
        method : "GET",
    headers :
    { 
        "key" : KEYS.key,
        
    },
     
    
})
    let data = await res.json()
    console.log(data);
    temp.innerHTML = data.current.temp_c
    tempf.innerHTML = data.current.temp_f
    wind.innerHTML = data.current.wind_kph+"KPH"
    wind_direction.innerHTML= data.current.wind_dir 
    country.innerHTML= data.location.name
    last_updated.innerHTML = data.current.last_updated
    return data
}

async function use(){
    data = await apicall()
}
use()

window.onbeforeunload = apicall()
