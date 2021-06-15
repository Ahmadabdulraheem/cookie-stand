'use strict';

const hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let salmon = document.getElementById('salesData');

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  averageCookies: 6.3,
  cookiesPerHour: [],
  total: 0,
 
  getCustomer: function() {
    for(let i = 0; i < hours.length; i++) {
      let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.averageCookies);
      this.cookiesPerHour.push(cookies);

      this.total += cookies;
      
    }
  },
  render: function() {
    let h2 = document.createElement('h2');
    salmon.appendChild(h2);
    h2.textContent = this.name;

    let ul = document.createElement('ul');
    salmon.appendChild(ul);

    for(let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }

    let total = document.createElement('li');
      ul.appendChild(total);
      total.textContent = `Total: ${this.total} cookies`;
  }
}
/////////////////////////////////////////////////////////
let Tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 1.2,
  averageCookies: 6.3,
  cookiesPerHour: [],
  total: 0,
 
  getCustomer: function() {
    for(let i = 0; i < hours.length; i++) {
      let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.averageCookies);
      this.cookiesPerHour.push(cookies);

      this.total += cookies;
      
    }
  },
  render: function() {
    let h2 = document.createElement('h2');
    salmon.appendChild(h2);
    h2.textContent = this.name;

    let ul = document.createElement('ul');
    salmon.appendChild(ul);

    for(let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }

    let total = document.createElement('li');
      ul.appendChild(total);
      total.textContent = `Total: ${this.total} cookies`;
  }
}

///////////////////////////////////////////////////////////////////////////////

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  averageCookies: 3.7,
  cookiesPerHour: [],
  total: 0,
 
  getCustomer: function() {
    for(let i = 0; i < hours.length; i++) {
      let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.averageCookies);
      this.cookiesPerHour.push(cookies);

      this.total += cookies;
      
    }
  },
  render: function() {
    let h2 = document.createElement('h2');
    salmon.appendChild(h2);
    h2.textContent = this.name;

    let ul = document.createElement('ul');
    salmon.appendChild(ul);

    for(let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }

    let total = document.createElement('li');
      ul.appendChild(total);
      total.textContent = `Total: ${this.total} cookies`;
  }
}

//////////////////////////////////////////////////////


let Paris  = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  averageCookies: 2.3,
  cookiesPerHour: [],
  total: 0,
 
  getCustomer: function() {
    for(let i = 0; i < hours.length; i++) {
      let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.averageCookies);
      this.cookiesPerHour.push(cookies);

      this.total += cookies;
      
    }
  },
  render: function() {
    let h2 = document.createElement('h2');
    salmon.appendChild(h2);
    h2.textContent = this.name;

    let ul = document.createElement('ul');
    salmon.appendChild(ul);

    for(let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }

    let total = document.createElement('li');
      ul.appendChild(total);
      total.textContent = `Total: ${this.total} cookies`;
  }
}





let Lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  averageCookies: 4.6,
  cookiesPerHour: [],
  total: 0,
 
  getCustomer: function() {
    for(let i = 0; i < hours.length; i++) {
      let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.averageCookies);
      this.cookiesPerHour.push(cookies);

      this.total += cookies;
      
    }
  },
  render: function() {
    let h2 = document.createElement('h2');
    salmon.appendChild(h2);
    h2.textContent = this.name;

    let ul = document.createElement('ul');
    salmon.appendChild(ul);

    for(let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }

    let total = document.createElement('li');
      ul.appendChild(total);
      total.textContent = `Total: ${this.total} cookies`;
  }
}






seattle.getCustomer();
seattle.render();

Tokyo.getCustomer();
Tokyo.render();

dubai.getCustomer();
dubai.render();

Paris.getCustomer();
Paris.render();

Lima.getCustomer();
Lima.render();


function getRandomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}