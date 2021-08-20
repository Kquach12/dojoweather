function changingCity(){
    alert('Loading weather report...')
}

function acceptCookie(){
    document.querySelector(".cookies").remove();
}

let test = document.querySelectorAll(".degrees")

function changeUnit(element){
    
    for (var i =0; i < test.length; i++){
        let degreesWeather = test[i].innerText;
        if (element.value === "farenheit"){
            degreesWeather =  degreesWeather*(9/5) + 32;
            test[i].innerText =  Math.round(degreesWeather);
        } 
        else if (element.value === "celsius"){
            degreesWeather =  (degreesWeather - 32) * (5/9);
            test[i].innerText =  Math.round(degreesWeather);
        }
    }

}