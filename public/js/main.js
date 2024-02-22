const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name')
const temp = document.getElementById('temp')
const temp_status = document.getElementById('temp_status')
const data_hide = document.querySelector('.middle_layer')


const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === '') {
        city_name.innerText = 'City name cannot be empty';
        data_hide.classList.add('data_hide')

    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=f860451740a23515f9b822ef2ab26696`
            const response = await fetch(url)
            const data = await response.json()
            const arrData = [data]

            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;
            if (tempMood == "Clear") {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";

            }
        data_hide.classList.remove('data_hide')




        } catch (error) {
            city_name.innerText = 'Please enter a valid city.'
            data_hide.classList.add('data_hide')

        }

    }
}

submitBtn.addEventListener('click', getInfo)