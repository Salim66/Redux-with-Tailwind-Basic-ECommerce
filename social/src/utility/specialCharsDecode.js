// Create the function.
export const htmlspecialchars = (input) => {
  
    var parser = new DOMParser().parseFromString(input, "text/html");
    return parser.documentElement.textContent;
   
};
