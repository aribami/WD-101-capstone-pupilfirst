function sConsole(event) {
  event.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const dob = document.getElementById("dob");
  const accept = document.getElementById("accept");
  // console.log(name.value);
  // console.log(email.value);
  // console.log(password.value);
  // console.log(dob.value);
  // console.log(accept.value);
  const table_body = document.getElementById("table_body");
  const row = table_body.insertRow();
  const Name = row.insertCell(0);
  const nameText = document.createTextNode(name.value);
  Name.appendChild(nameText);
  const Email = row.insertCell(1);
  const emailText = document.createTextNode(email.value);
  Email.appendChild(emailText);
  const Password = row.insertCell(2);
  const passwordText = document.createTextNode(password.value);
  Password.appendChild(passwordText);
  const Dob = row.insertCell(3);
  const dobText = document.createTextNode(dob.value);
  Dob.appendChild(dobText);
  const Accept = row.insertCell(4);
  const acceptText = document.createTextNode(accept.value);
  Accept.appendChild(acceptText);
}
