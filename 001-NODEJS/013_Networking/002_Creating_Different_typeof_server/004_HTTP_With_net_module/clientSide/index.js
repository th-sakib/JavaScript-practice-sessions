const res = await fetch("http://192.168.1.102:4000");

for await (const chunk of res.body) {
  console.log(chunk);
}

// the res.headers is a iterator where we can get the key and value of headers
res.headers.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
