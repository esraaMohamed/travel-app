const DestinationInfoComponent = (destination, destinationCountry, population, toponymName, countryCode, fcodeName) => {
    const codeName = destination === destinationCountry
     ? ` an ${fcodeName}`
     : `a ${fcodeName}`
    return `
          <div class="">
            <div class="infoCard">
                <h2 class="header3">Some facts about ${destination}:</h2>
                <h2 class="header1"><span class="static">The population there is: </span>${population}</h2>
                <h2 class="header2"><span class="static">The topnym name of it is: </span>${toponymName}</h2>
                <h2 class="header2"><span class="static">The country code is: </span>${countryCode}</h2>
                <h2 class="header2"><span class="static">${destination} is </span>${codeName}</h2>
            </div>
          </div>
      `;
  };
  
  export default DestinationInfoComponent;