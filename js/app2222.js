  'use strict';

let salmonProfiles = document.getElementById('salmonProfiles');

const hour = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
//object contractor
function SalmonSales(name,average,min,max) {
  
  this.name = name;
  this.average = average;
  this.min = min;
  this.max = max;
  this.results =0;

};

SalmonSales.prototype.getCookiesPerHour = function(){
  let totalCookies=0;
  for(let i=0;i<hour.length;i++){
    Math.ceil( this.results.push(this.average*this.getRandomCoustmer()));
    totalCookies+= this.average*this.getRandomCoustmer();
   this.Total=totalCookies;   
  }
};

     SalmonSales.prototype.getRandomCoustmer = function() {       
        return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min); 
      };


    SalmonSales.prototype.render = function () {
  
  let titleElement = document.createElement('h1');
  titleElement.textContent = `${this.name}`;
  salmonProfiles.appendChild(titleElement);

  let divElement =document.createElement('div');
  salmonProfiles.appendChild(divElement);

  let salamonList = document.createElement('ul');
  divElement.appendChild(salamonList);
  
  for(let i = 0; i < hour.length; i++) {
    let listItem = document.createElement('li');
    salamonList.appendChild(listItem);
    listItem.textContent = `${this.hour[i]}    ${Math.ceil(this.results[i])}   cookies`;
  }
let listItem = document.createElement('li');
salamonList.appendChild(listItem);
listItem.textContent = `Total ${Math.ceil (this.Total)} cookies`;

};

let seattle = new SalmonSales('seattle',6.3,23,65,);

seattle.getRandomCoustmer()
seattle.getCookiesPerHour();
seattle.render();
// Tokyo.getCookiesPerHour();
// Tokyo.render();
// Dubai.getCookiesPerHour();
// Dubai.render();
// Paris.getCookiesPerHour();
// Paris.render();
// Lima.getCookiesPerHour();
// Lima.render();


 
  










// let Seattle = {
//     name: 'Seattle',
//     average: 6.3,
//     hour: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//     min:23,
//     max:65,
//     results:[],
//     Total:0,
    


     
      
//       },
      
//     render: function() {
      
  
//       let titleElement = document.createElement('h1');
//       titleElement.textContent = 'seattle';
//       salmonProfiles.appendChild(titleElement);
  
//       let divElement =document.createElement('div');
//       salmonProfiles.appendChild(divElement);

//       let salamonList = document.createElement('ul');
//       divElement.appendChild(salamonList);
      
//       for(let i = 0; i < this.hour.length; i++) {
//         let listItem = document.createElement('li');
//         salamonList.appendChild(listItem);
//         listItem.textContent = `${this.hour[i]}    ${Math.ceil(this.results[i])}   cookies`;
//       }
//     let listItem = document.createElement('li');
//     salamonList.appendChild(listItem);
//     listItem.textContent = `Total ${Math.ceil (this.Total)} cookies`;
//     }
//   };
  


// let Tokyo = {
//     name: 'Tokyo',
//     average: 1.2,
//     hour: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total'],
//     min:3,
//     max:24,
//     results:[],
//     Total:0,

//      getRandomCoustmer:function() {       
//         return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min); //The maximum is inclusive and the minimum is inclusive
//       },
//       getCookiesPerHour:function(){
//         let totalCookies=0; 
//         for(let i=0;i<this.hour.length;i++){
//             totalCookies+= this.average*this.getRandomCoustmer();
//             this.Total=totalCookies;
//              Math.floor(this.results.push(this.average*this.getRandomCoustmer()));

//           }
     
//         console.log(this.results);  
//       },
      
//     render: function() {
//       let titleElement = document.createElement('h1');
//       titleElement.textContent = 'Tokyo';
//       salmonProfiles.appendChild(titleElement);
  
//       let divElement =document.createElement('div');
//       salmonProfiles.appendChild(divElement);

//       let salamonList = document.createElement('ul');
//       divElement.appendChild(salamonList);
  
//       for(let i = 0; i < this.hour.length; i++) {
//         let listItem = document.createElement('li');
//         salamonList.appendChild(listItem);
//         listItem.textContent = `${this.hour[i]}    ${Math.ceil(this.results[i])}   cookies`;
//       }
  
//       let listItem = document.createElement('li');
//     salamonList.appendChild(listItem);
//     listItem.textContent = `Total ${Math.ceil (this.Total)} cookies`;  
//     }
//   };
// let Dubai = {
//     name: 'Dubai',
//     average: 3.7,
//     hour: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total'],
//     min:11,
//     max:38,
//     results:[],
//     Total: 0,

//      getRandomCoustmer:function() {       
//         return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min); //The maximum is inclusive and the minimum is inclusive
//       },
//       getCookiesPerHour:function(){
//           let totalCookies=0;
//           for(let i=0;i<this.hour.length;i++){
//             totalCookies+= this.average*this.getRandomCoustmer();
//             this.Total=totalCookies;   
//              Math.floor(this.results.push(this.average*this.getRandomCoustmer()));

//           }
     
//         console.log(this.results);  
//       },
      
//     render: function() {
//       let titleElement = document.createElement('h1');
//       titleElement.textContent = 'Dubai';
//       salmonProfiles.appendChild(titleElement);
  
//       let divElement =document.createElement('div');
//       salmonProfiles.appendChild(divElement);

//       let salamonList = document.createElement('ul');
//       divElement.appendChild(salamonList);
  
//       for(let i = 0; i < this.hour.length; i++) {
//         let listItem = document.createElement('li');
//         salamonList.appendChild(listItem);
//         listItem.textContent = `${this.hour[i]}    ${Math.ceil(this.results[i])}   cookies`;
//       }
//       let listItem = document.createElement('li');
//       salamonList.appendChild(listItem);
//       listItem.textContent = `Total ${Math.ceil( this.Total)} cookies`;
     
//     }
// };
// let Paris = {
//     name: 'Paris',
//     average: 2.3,
//     hour: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total'],
//     min:20,
//     max:38,
//     results:[],
//     Total:0,

//      getRandomCoustmer:function() {       
//         return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min); //The maximum is inclusive and the minimum is inclusive
//       },
//       getCookiesPerHour:function(){
//           let totalCookies=0;
//         for(let i=0;i<this.hour.length;i++){
//             totalCookies+= this.average*this.getRandomCoustmer();
//             this.Total=totalCookies;
//              Math.floor(this.results.push(this.average*this.getRandomCoustmer()));

//           }
     
//         console.log(this.results);  
//       },
      
//     render: function() {
//       let titleElement = document.createElement('h1');
//       titleElement.textContent = 'Paris';
//       salmonProfiles.appendChild(titleElement);
  
//       let divElement =document.createElement('div');
//       salmonProfiles.appendChild(divElement);

//       let salamonList = document.createElement('ul');
//       divElement.appendChild(salamonList);
  
//       for(let i = 0; i < this.hour.length; i++) {
//         let listItem = document.createElement('li');
//         salamonList.appendChild(listItem);
//         listItem.textContent = `${this.hour[i]}    ${Math.ceil(this.results[i])}   cookies`;
//       }
//       let listItem = document.createElement('li');
//       salamonList.appendChild(listItem);
//       listItem.textContent = `Total ${Math.ceil( this.Total)} cookies`;
     
//     }
// };
// let Lima = {
//     name: 'Lima',
//     average: 4.6,
//     hour: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total'],
//     min:2,
//     max:16,
//     results:[],
//     Total:0,

//      getRandomCoustmer:function() {       
//         return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min); //The maximum is inclusive and the minimum is inclusive
//       },
//       getCookiesPerHour:function(){
//           let totalCookies=0;
//           for(let i=0;i<this.hour.length;i++){
//             totalCookies+= this.average*this.getRandomCoustmer();
//             this.Total=totalCookies;
//              Math.floor(this.results.push(this.average*this.getRandomCoustmer()));

//           }
     
//         console.log(this.results);  
//       },
      
//     render: function() {
//       let titleElement = document.createElement('h1');
//       titleElement.textContent = 'Lima';
//       salmonProfiles.appendChild(titleElement);
  
//       let divElement =document.createElement('div');
//       salmonProfiles.appendChild(divElement);

//       let salamonList = document.createElement('ul');
//       divElement.appendChild(salamonList);
  
//       for(let i = 0; i < this.hour.length; i++) {
//         let listItem = document.createElement('li');
//         salamonList.appendChild(listItem);
//         listItem.textContent = `${this.hour[i]}    ${Math.ceil(this.results[i])}    cookies`;
//       }
//       let listItem = document.createElement('li');
//       salamonList.appendChild(listItem);
//       listItem.textContent = `Total    ${Math.ceil( this.Total)}    cookies`;
     
//     }
// };