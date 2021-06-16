'use strict';

const hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let salmon = document.getElementById('salesData');
let table = document.getElementById('table');


function SalmonApp(name,avg, min, max) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.averagePerHour = avg;
  this.cookiesPerHour = [];
  this.total = 0;
  SalmonApp.allCookies.push(this)
}

SalmonApp.allCookies = [];

SalmonApp.prototype.getCustomer = function() {
 
  for(let i = 0; i < hours.length; i++) {

    let cookies = Math.ceil(getRandomCustomer(this.min, this.max) * this.averagePerHour);

    this.cookiesPerHour.push(cookies);

    this.total += cookies;
  }
};

SalmonApp.prototype.render = function() {

  let tr = document.createElement('tr');
  table.appendChild(tr);

  let th = document.createElement('th');
  tr.appendChild(th);
  th.textContent = this.name;

  for(let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.cookiesPerHour[i];
  }

  let total = document.createElement('th');
    tr.appendChild(total);
    total.textContent = this.total;
}
////////////////////////////////////////////////////////////////
let seattle = new SalmonApp('Seattle',6.3, 23, 65)
let tokyo = new SalmonApp('Tokyo',1.2, 3, 24)
let dubai = new SalmonApp('Dubai',3.7,11,38)
let paris = new SalmonApp('Paris',2.3, 20, 38,2.3)
let lima = new SalmonApp('liam',4.6, 2, 16)

makeTableHeader();
seattle.getCustomer();
seattle.render();
tokyo.getCustomer();
tokyo.render();
dubai.getCustomer();
dubai.render();
paris.getCustomer();
paris.render();
lima.getCustomer();
lima.render();
makeTableFooter();

function makeTableHeader() {
  let tr = document.createElement('tr');
  table.appendChild(tr);

  let th1 = document.createElement('th');
  tr.appendChild(th1);
  th1.textContent = ' ';

  for(let i = 0; i < hours.length; i++) {
    let th2 = document.createElement('th');
    tr.appendChild(th2);
    th2.textContent = hours[i];
  }

  let th3 = document.createElement('th');
  tr.appendChild(th3);
  th3.textContent = 'Daily totals';
}

function makeTableFooter() {
  // console.log(SalmonApp.allCookies)
  let tr = document.createElement('tr');
  table.appendChild(tr);

  let th1 = document.createElement('th');
  tr.appendChild(th1);
  th1.textContent = 'Horly total';

  let hourlyTotal = 0;
  let totalOfTotals = 0;
  for(let i = 0; i < hours.length; i++) {
    hourlyTotal = 0;

    for(let j = 0; j < SalmonApp.allCookies.length; j++) {
      let total = SalmonApp.allCookies[j].cookiesPerHour[i];
      hourlyTotal += total;
      totalOfTotals += total;
    }
    let th2 = document.createElement('th');
    tr.appendChild(th2);
    th2.textContent = hourlyTotal;
  }

  let th3 = document.createElement('th');
  tr.appendChild(th3);
  th3.textContent = totalOfTotals;
}



function getRandomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

// let seattle = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   averageCookies: 6.3,
//   cookiesPerHour: [],
//   total: 0,
 
//   getCustomer: function() {
//     for(let i = 0; i < hours.length; i++) {
//       let cookies = Math.ceil(getRandomCustomer(this.min, this.max) * this.averageCookies);
//       this.cookiesPerHour.push(cookies);

//       this.total += cookies;
      
//     }
//   },
//   render: function() {
//     let h2 = document.createElement('h2');
//     salmon.appendChild(h2);
//     h2.textContent = this.name;

//     let ul = document.createElement('ul');
//     salmon.appendChild(ul);

//     for(let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//     }

//     let total = document.createElement('li');
//       ul.appendChild(total);
//       total.textContent = `Total: ${this.total} cookies`;
//   }
// }
// /////////////////////////////////////////////////////////
// let Tokyo = {
//   name: 'Tokyo',
//   min: 3,
//   max: 1.2,
//   averageCookies: 6.3,
//   cookiesPerHour: [],
//   total: 0,
 
//   getCustomer: function() {
//     for(let i = 0; i < hours.length; i++) {
//       let cookies = Math.ceil(getRandomCustomer(this.min, this.max) * this.averageCookies);
//       this.cookiesPerHour.push(cookies);

//       this.total += cookies;
      
//     }
//   },
//   render: function() {
//     let h2 = document.createElement('h2');
//     salmon.appendChild(h2);
//     h2.textContent = this.name;

//     let ul = document.createElement('ul');
//     salmon.appendChild(ul);

//     for(let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//     }

//     let total = document.createElement('li');
//       ul.appendChild(total);
//       total.textContent = `Total: ${this.total} cookies`;
//   }
// }

// ///////////////////////////////////////////////////////////////////////////////

// let dubai = {
//   name: 'Dubai',
//   min: 11,
//   max: 38,
//   averageCookies: 3.7,
//   cookiesPerHour: [],
//   total: 0,
 
//   getCustomer: function() {
//     for(let i = 0; i < hours.length; i++) {
//       let cookies = Math.ceil(getRandomCustomer(this.min, this.max) * this.averageCookies);
//       this.cookiesPerHour.push(cookies);

//       this.total += cookies;
      
//     }
//   },
//   render: function() {
//     let h2 = document.createElement('h2');
//     salmon.appendChild(h2);
//     h2.textContent = this.name;

//     let ul = document.createElement('ul');
//     salmon.appendChild(ul);

//     for(let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//     }

//     let total = document.createElement('li');
//       ul.appendChild(total);
//       total.textContent = `Total: ${this.total} cookies`;
//   }
// }

// //////////////////////////////////////////////////////


// let Paris  = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   averageCookies: 2.3,
//   cookiesPerHour: [],
//   total: 0,
 
//   getCustomer: function() {
//     for(let i = 0; i < hours.length; i++) {
//       let cookies = Math.ceil(getRandomCustomer(this.min, this.max) * this.averageCookies);
//       this.cookiesPerHour.push(cookies);

//       this.total += cookies;
      
//     }
//   },
//   render: function() {
//     let h2 = document.createElement('h2');
//     salmon.appendChild(h2);
//     h2.textContent = this.name;

//     let ul = document.createElement('ul');
//     salmon.appendChild(ul);

//     for(let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//     }

//     let total = document.createElement('li');
//       ul.appendChild(total);
//       total.textContent = `Total: ${this.total} cookies`;
//   }
// }





// let Lima = {
//   name: 'Lima',
//   min: 2,
//   max: 16,
//   averageCookies: 4.6,
//   cookiesPerHour: [],
//   total: 0,
 
//   getCustomer: function() {
//     for(let i = 0; i < hours.length; i++) {
//       let cookies = Math.ceil(getRandomCustomer(this.min, this.max) * this.averageCookies);
//       this.cookiesPerHour.push(cookies);

//       this.total += cookies;
      
//     }
//   },
//   render: function() {
//     let h2 = document.createElement('h2');
//     salmon.appendChild(h2);
//     h2.textContent = this.name;

//     let ul = document.createElement('ul');
//     salmon.appendChild(ul);

//     for(let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//     }

//     let total = document.createElement('li');
//       ul.appendChild(total);
//       total.textContent = `Total: ${this.total} cookies`;
//   }
// }






