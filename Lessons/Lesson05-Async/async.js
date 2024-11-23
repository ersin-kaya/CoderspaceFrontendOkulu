// class Request {
//   static get(url) {
//     const response = fetch(url);
//     console.log(response);
//     if (!response.ok) throw new Error("There was an error: ", response.status);
//     const data = response.json();
//     return data;
//   }
// }

class Request {
  static async get(url) {
    const response = await fetch(url);
    console.log(response);
    if (!response.ok) throw new Error("There was an error: ", response.status);
    const data = await response.json();
    return data;
  }
}

// Request.get("https://jsonplaceholder.typicode.com/posts")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

////////////////////////////////////////////
Request.get("http://localhost:3000/users")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// post vs hepsini yapılacak localhost içinde...
