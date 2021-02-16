const app = require("./app");

app.listen(3000, "www.dotst.com", () => {
  console.log("www listening at http://www.dotst.com:3000");
});

app.listen(4000, "sb.dotst.com", () => {
  console.log("sb listening at http://sb.dotst.com:4000");
});

app.listen(5678, () => {
  console.log("Example app listening on port 5678!");
});
