const idElement = document.getElementById('?');
console.log('idElement',idElement);

const classElement = document.getElementsByClassName('?');
console.log('classElement',classElement);

const tagElement = document.getElementsByTagName('?');
console.log('tagElement',tagElement);


const beforePage = document.querySelector('h1');
console.log('beforePage',beforePage);
beforePage.textContent = 'New Content'


const QSElement = document.querySelector('.menu');
console.log('QSElement',QSElement);

const QSAElement = document.querySelectorAll('.menu');
console.log('QSAElement',QSAElement);
