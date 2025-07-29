const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(bodyParser.json());


const isNumber = (str) => /^\d+$/.test(str);

const isAlphabet = (str) => /^[a-zA-Z]+$/.test(str);

const isSpecialCharacter = (str) => /^[^a-zA-Z0-9]+$/.test(str);

const toAlternatingCaps = (str) => {
  return str
    .split("")
    .reverse()
    .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");
};

app.get("/", (req, res) => {
  res.send("Welcome to the BFHL API!");
});

app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: "Invalid input.",
      });
    }

    let evenNumbers = [];
    let oddNumbers = [];
    let alphabets = [];
    let specialCharacters = [];
    let sum = 0;
    let concatLetters = "";


    data.forEach((item) => {
      if (isNumber(item)) {
        const num = parseInt(item);
        num % 2 === 0 ? evenNumbers.push(item) : oddNumbers.push(item);
        sum += num;
      }
       else if (isAlphabet(item)){
        alphabets.push(item.toUpperCase());
        concatLetters += item;
      }
      else if (isSpecialCharacter(item)) {
        specialCharacters.push(item);
      }
    });

    const response = {
      is_success: true,
      user_id: "john_doe_17091999",
      email: "john@xyz.com",
      roll_number: "ABCD123",
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specialCharacters,
      sum: sum.toString(),
      concat_string: toAlternatingCaps(concatLetters),
    };
    console.log(req.body);
    res.status(200).json(response);
  }
   catch (error) {
    res.status(500).json({
      is_success: false,
      message: "Something went wrong!",
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
