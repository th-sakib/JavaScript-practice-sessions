console.time();

const res = await fetch("http://localhost:4000/");
// here we are getting the response after finshing the download
// const data = await res.json();
// console.log(data)

// what we can do is to use the readStream provided by response.body.
const decoder = new TextDecoder();
for await (const chunk of res.body) {
  console.log(decoder.decode(chunk))
}

console.timeEnd();
