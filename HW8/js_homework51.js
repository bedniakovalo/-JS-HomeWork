const myObject = {
    name: 'Lolita',
    age: 23,
    city: 'Kyiv',
    
    getInfo() {
      let info = '';
      for (const prop in this) {
        if (Object.prototype.hasOwnProperty.call(this, prop) && typeof this[prop] !== 'function') {
          info += `${prop}: ${this[prop]}\n`;
        }
      }
      console.log(info);
    }
  };

  