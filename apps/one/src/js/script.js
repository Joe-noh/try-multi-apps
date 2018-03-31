import add from '@common/add';

const app = document.querySelector('#app');

const elem = document.createElement("span")
elem.textContent = `
  This is App One.
  ${add(1, 2)}
`;

app.appendChild(elem)
