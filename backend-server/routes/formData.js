import express from "express";

const formData = express.Router();

formData.post("/postData", (req, res) => {
  console.log(req.body);
});

export default formData;
