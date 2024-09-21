import express from "express";

const app = express();

app.get("/", async (req, res) => {
  res.status(200).json({ message: "Hi Nithin I am Docker..." });
});

const startServer = () => {
  app.listen(8000, () => {
    console.log("Server running on port no: 8000");
  });
};

startServer();
