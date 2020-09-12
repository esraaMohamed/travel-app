const ForcastWeatherComponent = (destination, highTemp, lowTemp, sunrise, sunset, imgSrc, weatherCondition, date) => {
  return `
    <div class="">
      <div class="card">
          <img class="weatherIcon" src=${imgSrc} alt='weather-icon' /> 
          <h2 class="header2"><span class="static">On ${date} </span></h2>
          <h2 class="header2"><span class="static">The weather condition at ${destination} is: </span>${weatherCondition}</h2>
          <h2 class="header2"><span class="static">The high temperature in ${destination} is : </span>${highTemp}&#8451;</h2>
          <h2 class="header2"><span class="static">The low temperature in ${destination} is : </span>${lowTemp}&#8451;</h2>
          <h2 class="header2"><span class="static">The sun rises at: </span>${sunrise}</h2>
          <h2 class="header2"><span class="static">The sun sets at: </span>${sunset}</h2>
      </div>
    </div>
`;
}

export default ForcastWeatherComponent;