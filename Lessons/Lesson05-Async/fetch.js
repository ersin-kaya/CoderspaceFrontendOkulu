// const getTextFile = () => {
//   fetch("data.txt")
//     .then((response) => response.text())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };
// getTextFile();

// const getJSONFile = () => {
//   fetch("users.json")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };
// getJSONFile();

// const getDataFromAPI = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };
// getDataFromAPI();

class Request {
  static get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  static post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json;",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  static put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json;",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  static delete(url, id) {
    return new Promise((resolve, reject) => {
      fetch(`${url}/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
}

// Request.get("https://jsonplaceholder.typicode.com/posts")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Request.post("https://jsonplaceholder.typicode.com/posts", {
//   userId: 1,
//   title: "PostTitle",
//   body: "PostBody",
// })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// Request.put("https://jsonplaceholder.typicode.com/posts/1", {
//   userId: 1,
//   title: "PostTitle",
//   body: "PostBody",
// })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

Request.delete("https://jsonplaceholder.typicode.com/posts", 1)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
