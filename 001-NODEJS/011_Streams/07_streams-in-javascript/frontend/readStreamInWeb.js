const input = document.querySelector("input");

input.addEventListener("change", async () => {
  const file = input.files[0];
  const str = await file.text();
  const readable = file.stream();

  // There is no method related to Events.
  // readable.on( "data", (chunk) => {
  //   console.log(chunk);
  // });

  // we cannot set highWaterMark value here
  // also we have to call the reader.read() untill the full data is completed reading.
  // so have to use loops
  const reader = readable.getReader();
  while (true) {
    // The reader.read() will return {done: boolear, value}
    // when every byte is readed the done becomes "true"
    const { done, value } = await reader.read();
    console.log(value);

    if (done) break;
  }

  // ========= or ===========

  for await (const chunk of readable) {
    console.log(chunk);
  }
});
