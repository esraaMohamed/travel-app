const ErrorComponent = (message) => {
    const errorMsg = message
      ? message
      : "Oops! sorry something went wrong. Please enter a valid destination.";
    return `
          <div class="error">
              ${errorMsg}
          </div>
      `;
  };
  
  export default ErrorComponent;