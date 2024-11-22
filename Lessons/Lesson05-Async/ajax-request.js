const getDataButton = document.getElementById("get-data-button");
getDataButton.addEventListener("click", () => {
  // AJAX
  const xhr = new XMLHttpRequest();
  console.log(xhr);

  xhr.onreadystatechange = () => {
    console.log(xhr.readyState);
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
    }

    if (xhr.readyState === 4 && xhr.status === 404) {
      console.log("404");
    }
  };

  xhr.open("GET", "data.txt", true);
  xhr.send();
});
