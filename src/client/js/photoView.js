const PhotoComponent = (imgSrc, width, height) => {
    return `
          <div class="">
            <div class="">
                <img class="photo" src=${imgSrc} width=${width} height=${height} alt='destination-photo' />
            </div>
          </div>
      `;
  };
  
  export default PhotoComponent;