var city = ['Nairobi', 'Mombasa', 'Kakamega', 'Eldoret']

// store this in local staorage
//localStorage.setItem('city', JSON.stringify(city))

//fetch it from local storage and console it
 const data = localStorage.getItem('city')
 console.log(JSON.parse(data))