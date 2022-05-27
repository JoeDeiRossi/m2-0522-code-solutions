
const userList = document.querySelector('#user-list');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log('status', xhr.status);
  console.log('response', xhr.response);
  for (let i = 0; i < xhr.response.length; i++) {
    const currentUser = xhr.response[i].name;
    const listItem = document.createElement('li');
    listItem.textContent = currentUser;
    userList.appendChild(listItem);
  }
});

xhr.send();
