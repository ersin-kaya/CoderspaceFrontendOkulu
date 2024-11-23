const getDataButton = document.getElementById("get-data");
const postsContainer = document.getElementById("posts");

getDataButton.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.onload = () => {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      data.forEach((post) => {
        // console.log(post.title, post.body);
        postsContainer.innerHTML += `
        <div>
            Title: ${post.title}
            <br/>
            Post body: ${post.body}
        </div>
        <hr/>
        `;
      });
    }
  };
  xhr.send();
});
