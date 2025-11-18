import express from "express";

const app = express();
const port = 4000;

// global middleware | to parse req data
// app.use((req, res, next) => {
//   req.on("data", (chunk) => {
//     const reqBody = JSON.parse(chunk.toString());
//     req.body = reqBody;
//     next();
//   });
// });
// ++OR++ just use express builtin middleware
app.use(express.json());

// x-powered-by: this header is set by express for promotional purposes.
// We are disabling it.
app.disable("x-powered-by");

app.get(
  "/",
  /**
   * These are middlewares.
   * Middle wares are two types:
   * 1. Request handling middlewares, 2. Error handling middlewares
   * These two are Request handling middlewares.
   */
  (req, res, next) => {
    /**
     * res.send adds to extra headers (which res.end doesn't)
     * 1. Content-Type: res.send set this header autometically
     * 2. Etag: res.send set this header autometically
     */
    res.send("hello world");

    next();
  },
  (req, res) => {
    // error middleware wil be called | manually call error handling middleware
    // next("some error")

    //if any error is thrown | autometically error handling middleware will be called
    // throw new Error("new error");

    /**
     * request url: is the path where client is requested
     * route: route is the path in backend code where we are handling requests
        # app.get("/", () => {});
        # here the "/" is the route
     * route and req.url can be different in certain situations
     */
    console.log("requet url: ", req.url);
    console.log("route: ", req.route.path, "\n");

    console.log("second middleware");
  },
  /**
   * An error handling middleware
   * ** This middleware only executes when `next(argument)` is called with arguments. **
   * ** Or if there is an error thrown. **
   */
  (err, req, res, next) => {
    console.log("error is on the bizz: ", err.message);
  }
);

// handling post requests
app.post("/", (req, res, next) => {
  console.log("the post request is handled.");
  res.send("ok your request is been proccessed");
});

app.post("/create-user", (req, res, next) => {
  const requestBody = req.body;
  console.log(requestBody);

  res.send("post request handled");
});

// == Also we have app.delete, app.put, app.patch ==

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
