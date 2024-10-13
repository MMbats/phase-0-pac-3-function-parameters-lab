// index.js

// Function that uses a parameter
function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  // Function that uses two parameters
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Function with an optional parameter
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  