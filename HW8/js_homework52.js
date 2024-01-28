var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
  };
  
  // Додаємо нову послугу
  services['Розбити скло'] = "200 грн";
  
  var salon = {
    services: services,
  
    price() {
      let total = 0;
      for (const service in this.services) {
        if (Object.prototype.hasOwnProperty.call(this.services, service)) {
          total += parseFloat(this.services[service]);
        }
      }
      return total;
    },
  
    minPrice() {
      let min = Infinity;
      for (const service in this.services) {
        if (Object.prototype.hasOwnProperty.call(this.services, service)) {
          const price = parseFloat(this.services[service]);
          if (price < min) {
            min = price;
          }
        }
      }
      return min;
    },
  
    maxPrice() {
      let max = -Infinity;
      for (const service in this.services) {
        if (Object.prototype.hasOwnProperty.call(this.services, service)) {
          const price = parseFloat(this.services[service]);
          if (price > max) {
            max = price;
          }
        }
      }
      return max;
    }
  };
  
  console.log('Загальна вартість послуг: ' + salon.price() + ' грн');
  console.log('Мінімальна вартість послуг: ' + salon.minPrice() + ' грн');
  console.log('Максимальна вартість послуг: ' + salon.maxPrice() + ' грн');
  