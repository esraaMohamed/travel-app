const CurrentWeatherCompontent = (destination, timezone, temperature, sunrise, sunset, imgSrc, weatherCondition) => {
    return `
    <div class="">
      <div class="card">
        <img class="weatherIcon" src=${imgSrc} alt='weather-icon' />
        <h2 class="header2"><span class="static">The weather condition at ${destination} is: </span>${weatherCondition}</h2>
          <h2 class="header2"><span class="static">The timezone in ${destination} is : </span>${timezone}</h2>
          <h2 class="header2"><span class="static">The sun rises at: </span>${sunrise}</h2>
          <h2 class="header2"><span class="static">The sun sets at: </span>${sunset}</h2>
          <h2 class="header2"><span class="static">The temperature is: </span>${temperature}&#8451;</h2>
      </div>
    </div>
`;
}

export default CurrentWeatherCompontent;