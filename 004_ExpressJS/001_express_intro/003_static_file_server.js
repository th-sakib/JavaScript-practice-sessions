import express from "express";

const app = express();
app.disable("x-powered-by");

/**
 * This middleware serves all the files in the [public] folder
 */
app.use(express.static("public"));

/**
 * To handle and send a specific file,
 * we can read and pipe the readstream to the response, But that wouldn't be optimized.
 * Not optimized because "accept-range" header and "range" header (where we menipulate the range from which part of the video we want to send) menipulation is very complicated for setting the range.
 *
 * That's why we can use res.sendFile(); | this optimize the process by itself and we can stream from any range without any problem.
 */

app.get("/video", (req, res) => {
  res.sendFile(`${import.meta.dirname}/video.mp4`); // optimized for streaming | headers are set autometically
});

app.get("/", (req, res) => {
  res.send("root route is hitted");
});

app.listen(3000, () => {
  console.log("server is running at port 3000");
});
