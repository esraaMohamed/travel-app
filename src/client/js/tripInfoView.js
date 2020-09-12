const TripInfoComponent = (destination, destinationCountry) => {
    const destinationInfo = destination === destinationCountry
     ? `${destinationCountry}`
     : `${destination}, ${destinationCountry}`
    return `
          <div class="">
            <div class="infoCard">
                <h2 class="header1"><span class="static">Your trip to: </span>${destinationInfo}</h2>
            </div>
          </div>
      `;
  };
  
  export default TripInfoComponent;