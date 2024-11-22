const getData = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./users.json", true);
  xhr.onload = () => {
    const tableBody = document.getElementById("employees");
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      data.forEach((user) => {
        tableBody.innerHTML += `<tr>
            <td>${user.name}</td> 
        </tr>`;
      });
    } else {
      console.log("There was an error!");
    }
  };
  xhr.send();
};

const getDataButton = document.getElementById("get-data-button");
getDataButton.addEventListener("click", getData);
