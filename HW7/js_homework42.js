function pad(str, char, length, padStart) {
    if (typeof str !== 'string' || typeof char !== 'string' || typeof length !== 'number' || typeof padStart !== 'boolean') {
      throw new Error('Invalid input types');
    }
  
    if (length <= str.length) {
      return str;
    }
  
    const padChars = char.repeat(length - str.length);
    
    if (padStart) {
      return padChars + str;
    } else {
      return str + padChars;
    }
  }
  
  