const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
  return tutorials.map(function (sentence) {
    //split each sentence.
    let splitSentence = sentence.split(' ');

    //Capitalize first letter of each word.
    let capitalizedWords = splitSentence.map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
   });
    //Join the capitalized words back into a sentence.
    return capitalizedWords.join(' ');
    });
}

console.log(titleCased())


/*
capitialize the first letter of each word in the array.
tools we are using: const,, let, .map(), functions, return, charAt(), split(' '), .join(' ') 

Split each sentence into words.
Capitalize the first letter of each word.
Join the capitalized words back into a sentence.
Return the modified array.
*/