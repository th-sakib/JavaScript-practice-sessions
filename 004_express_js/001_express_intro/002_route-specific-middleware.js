// this is practices from this document | visit the site don't look at the code it could be confusing
// [documentation link](https://expressjs.com/en/guide/using-middleware.html#middleware.router)
import express from "express";

const app = express();

const router = express.Router();

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use(
  "/user/:id",
  (req, res, next) => {
    console.log("Request URL:", req.originalUrl);
    console.log("request url 2: ", req.url);
    next();
  },
  (req, res, next) => {
    console.log("Request Type:", req.method);
    next();
  }
);

router.get("user/:id/meaw", (req, res) => {
  res.send("meaw meaw");
});

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get(
  "/user/:id",
  (req, res, next) => {
    // if the user ID is 0, skip to the next router
    if (req.params.id === "0") next("route");
    // otherwise pass control to the next middleware function in this stack
    else next();
  },
  (req, res, next) => {
    // render a regular page
    // res.render("regular");
    res.send("rendered");
  }
);

// handler for the /user/:id path, which renders a special page
router.get("/user/:id", (req, res, next) => {
  console.log(req.params.id);
  res.render("special");
});

// mount the router on the app
app.use("/", router);

app.listen(4000, () => {
  console.log("server is running at port 4000");
});

/**
 * request url: is the path where client is requested
 * route: route is the path in backend code where we are handling requests
    # app.get("/", () => {});
    # here the "/" is the route
    * route and req.url can be different in certain situations
*/
