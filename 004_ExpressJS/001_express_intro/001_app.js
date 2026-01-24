import express from "express";

const app = express();
const port = 4000;

// * global middleware | to parse req data
// app.use((req, res, next) => {
//   req.on("data", (chunk) => {
//     const reqBody = JSON.parse(chunk.toString());
//     req.body = reqBody;
//     next();
//   });
// });
// ! ++OR++ just use express builtin middleware
app.use(express.json());

// x-powered-by: this header is set by express for promotional purposes.
// We are disabling it.
app.disable("x-powered-by");

//* app.METHOD(): in these middlewares if the (routeName === req.url). then run the middleware
//* app.use(): in these middleware if the (req.url.startsWith(route)). then it will be triggered
app.get(
  "/",
  /**
   * These are middlewares.
   * * Middlewares are two types:
   * 1. Request handling middlewares,
   * 2. Error handling middlewares
   *
   * These two are Request handling middlewares.
   */
  (req, res, next) => {
    /**
     * * res.send() vs res.end()
     * res.send adds to extra headers (which res.end doesn't)
     * 1. Content-Type: res.send() set this header automatically and it can set proper value for this header too.
     * 2. Etag(used for caching): res.send set this header automatically
     */
    res.send("Hello World");
    /*
    If we want to send JSON content we can use res.json();
    res.json() will set the Content-Type response header to 'application/json'
    
    res.json({message: "Hello World"});
    */

    next();
  },
  (req, res) => {
    // * we can call (manually) error handling middleware by using:
    // next("some error")

    //* We can throw Error from synchronous operations like this:
    // throw new Error("new error");

    /**
     * request url: is the path where client is requested
     * route: route is the path in backend code where we are handling requests
        # app.get("/", () => {});
        # here the "/" is the route
     * route and req.url can be different in certain situations
     */
    console.log("request url: ", req.url);
    console.log("route: ", req.route.path, "\n");

    console.log("second middleware");
  },
  /**
   * * An error handling middleware
    --> This middleware only executes when `next(argument)` is called with **arguments**.
        Or if there is an **error thrown**.
   */
  (err, req, res, next) => {
    console.log("error is on the bizz: ", err.message);
  },
);

//* handling post requests
app.post("/", (req, res, next) => {
  console.log("the post request is handled.");
  res.send("ok your request is been proccessed");
});

app.post("/create-user", (req, res, next) => {
  const requestBody = req.body; // the body property is connected by the builtin **express.json()** middleware
  console.log(requestBody);

  res.send("post request handled");
});

//* == Also we have app.delete, app.put, app.patch ==

//* ========== the app.use() vs app.METHOD() ============
//* 1. app.METHOD(): in these middlewares if the (routeName === req.url). then run the middleware.
//* 2. app.use(): in these middleware if the (req.url.startsWith(route)). then it will be triggered.
//* For that reason(2) if we request to the (/users/1) than the /users route will be triggered and the /users/1 route won't because the /users route's middleware will end the RESPONSE stream.
app.use("/users", (req, res) => {
  res.send("hello from /users route");
});
app.use("/users/1", (req, res) => {
  res.send("hello from /users/1 route");
});

/**
 * * Although the app.use() not totally use req.url.startsWith(route)
 * Its just an abstract idea.
 * * But there will be checks for every part of the url. The parts separated by "/" will be checked,
 * * /users/1 will not trigger /user, but /users(as it matches the whole single part) will be triggered.
 */

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
