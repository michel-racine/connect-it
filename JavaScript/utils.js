function clearConsole() {
  document.getElementById('console-output').textContent = '>>> ';
}

let query = '';
function buildQuery() {
  query +=
    'SEARCH ' +
    document.getElementById('options').value +
    ' FOR ' +
    document.getElementById('user-input').value +
    ' ';
  document.getElementById('console-output').innerHTML = query;
}

function clearQuery() {
  query = '';
  document.getElementById('console-output').innerHTML = query;
}

function submitForm() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
    // TODO: Replace toy admin authentication
    if (username.toLowerCase().includes('admin')) {
      // Is admin so redirect to admin.html with username as query parameter
      window.location.href = `admin.html?username=${encodeURIComponent(
        username
      )}`;
    } else {
      // Is premium user, redirect to userPrem.html
      window.location.href = `userPrem.html?username=${encodeURIComponent(
        username
      )}`;
    }
  } else {
    alert('[-] One or more fields are empty');
  }
}

function fauxSuccessOutput(delay = 500) {
  let index = 0;
  let text = [
    '<hr/>[+] RUNNING QUERY...<br>',
    query + '<br>',
    '##',
    '#####',
    '##',
    '#######',
    '#',
    '#########',
    '####',
    '<br>[+] 32 Results. Press A to seel All results or add more search filters.<br>',
  ];

  function printNextLine() {
    if (index < text.length) {
      let outputElement = document.getElementById('console-output');
      outputElement.innerHTML += text[index];
      index++;
      setTimeout(printNextLine, delay);
    }
  }
  printNextLine();
}

function displayText() {
  const input = document.getElementById('user-input').value;

  document.getElementById('console-output').textContent =
    '>>> PERFORMING ACTION <' + input + '> ON SELECTED RECORDS. \nOk Computer.';
}
