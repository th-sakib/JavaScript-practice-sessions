// select the first input tag
const input = document.querySelector("input");
const test = document.getElementById("test");

input.addEventListener("change", async (event) => {
  const file = event.target.files[0];
  const url = "http://localhost:4000/";

  ///// sending request with fetch api
  // const res = await fetch(url, {
  //   method: "POST",
  //   body: file,
  //   headers: { fileName: file.name },
  // });
  // const data = await res.text();
  // console.log(data);

  // seding requet with XMlHTTPRequst
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", (e) => {
    console.log(e.target.response);
  });

  xhr.upload.addEventListener("progress", (e) => {
    console.log(`${((e.loaded / e.total) * 100).toFixed(0)}%`);
  });

  xhr.open("POST", url, true);
  xhr.setRequestHeader("filename", file.name);
  xhr.send(file);
});

// studying AJAX (technique of dynamically show data without reload) or XML (which help implement the concent)
test.addEventListener("click", async (event) => {
  const xhr = new XMLHttpRequest();
  const url = "http://localhost:4000/";

  // when response comes load event fires
  xhr.addEventListener("load", (ev) => {
    console.log(ev.target.response);
  });

  // 1. initiate the request with method and url and aysnc true
  xhr.open("GET", url, true);
  // 2. Seding the request
  xhr.send();
});
