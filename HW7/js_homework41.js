function customIsNaN(value) {
    return value !== value;
  }
  
  console.log(customIsNaN(NaN));