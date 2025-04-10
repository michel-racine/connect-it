function clearConsole() {
  document.getElementById('console-output').textContent = '>>> ';
}

let query = '';
function buildQuery() {
  query +=
    document.getElementById('options').innerHTML +
    ' ' +
    document.getElementById('options2').innerHTML +
    ' | ' +
    document.getElementById('user-input').value +
    ' ';
  document.getElementById('console-output').innerHTML = query;
}

function clearQuery() {
  // query = '';
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

function fauxDatabaseOutput(delay = 500) {
  let index = 0;
  let text = `
Audit Log: User "alice123" attempted access to restricted resource.
Time: 2025-04-10 12:35:22
Result: Failed due to insufficient privileges
Reason: Permission denied
---
Audit Log: User "bob_smith" successfully logged in.
Time: 2025-04-10 12:42:11
Result: Success
---
Audit Log: User "joe_admin" modified account details for user "charlie456".
Time: 2025-04-10 12:50:33
Result: Success
  `;
  let outputElement = document.getElementById('console-output');
  outputElement.innerHTML += text;
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
