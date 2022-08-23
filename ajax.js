//API Integration
document.querySelector("#button").addEventListener("click", () => {
  //console.log("hello");
  const xhr = new XMLHttpRequest();
  const url = `https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`;
  xhr.open("Get", url);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const objectResponse = JSON.parse(xhr.responseText);
      let output = " ";
      for (let i = 0; i < objectResponse.length; i++) {
        output += `
              <div style="width: 90%; margin: 0.5rem; border: 2px solid black; padding: 0.5rem">
                  <h1 style="color: hsl(357, 100%, 60%)">${objectResponse[i].id}</h1>
                  <h3><span style="font-weight: bold">Title:<span> ${objectResponse[i].title}</h3>
                  <p>${objectResponse[i].body}</p>
              </div>
          `;
      }
      console.log(output);
      document.querySelector("#div1").innerHTML = output;
    }
  };
  xhr.send();
});
