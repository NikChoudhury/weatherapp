const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const getOutput = document.getElementById('getOutput');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status'); 
const dataHide = document.querySelector('.middle-layer');
const getInfo= async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal ==="") {
        getOutput.innerText = "Please Write the name Before Search";
        dataHide.classList.add('data-hide');
    }else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=50d4e750303338a0e2f6bac02da6d610`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            getOutput.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`
            temp.innerText= arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;
            
            // Condition To Check Weather
            const tempMood = arrData[0].weather[0].main;
            if (tempMood=="Clear") {
                temp_status.innerHTML = 
                '<i class="fa fa-cloud" aria-hidden="true" style="color: #eccc68"></i>';
            }else if (tempMood=="Clouds") {
                temp_status.innerHTML = 
                '<i class="fa fa-cloud" aria-hidden="true" style="color: #a4b0be"></i>';
            }else if (tempMood=="Rain") {
                temp_status.innerHTML = 
                '<i class="fa fa-cloud-rain" aria-hidden="true" style="color: #a4b0be"></i>';
            }else if (tempMood=="Mist") {
                temp_status.innerHTML = 
                '<i class="fas fa-smog" aria-hidden="true" style="color: #ecf0f1"></i>';
            }else if (tempMood=="Haze") {
                temp_status.innerHTML = 
                '<i class="fas fa-smog" aria-hidden="true" style="color: #ecf0f1"></i>';
            }else{
                temp_status.innerHTML = 
                '<i class="fas fa-sun" aria-hidden="true" style="color: #eccc68"></i>';
            }
            dataHide.classList.remove('data-hide');
            

        } catch {
            getOutput.innerText = "Please Enter the City Name Properly!!";
            dataHide.classList.add('data-hide');

        }
        
    }
}

submitBtn.addEventListener('click',getInfo);