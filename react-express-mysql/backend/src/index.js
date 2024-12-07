const app = require("./server");
const { port } = require("./config");

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
