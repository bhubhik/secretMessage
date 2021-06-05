const { hash } = window.location;
const message = atob(hash.replace('#', ''));
if (message) {
  document.querySelector('#messageForm').classList.add('hide');
  document.querySelector('#message-show').classList.remove('hide');
  document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#messageForm').classList.add('hide');
  document.querySelector('#linkForm').classList.remove('hide');
  const input = document.querySelector('#message-input');
  const code = btoa(input.value);
  const linkInput = document.querySelector('#link-input');
  linkInput.value = `${window.location}#${code}`;
  document.querySelector('#copyBtn').addEventListener('click', () => {
    linkInput.select();
    document.execCommand('copy');
    console.log('copied');
  });
});
