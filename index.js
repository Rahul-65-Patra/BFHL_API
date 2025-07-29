const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

const isNumber = (str) => /^\d+$/.test(str);
const isAlphabet = (str) => /^[a-zA-Z]+$/.test(str);
const isSpecialCharacter = (str) => /^[^a-zA-Z0-9]+$/.test(str);

const toAlternatingCaps = (str) => {
  const chars = str.split("").reverse();
  return chars
    .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");
};

app.get('/',(req,res)=>{
    res.send("Welcome to the BFHL API!")
})
app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: "Invalid input.",
      });
    }

    let evenNumbers = [],
      oddNumbers = [],
      alphabets = [],
      specialCharacters = [];
    let sum = 0;
    let concatLetters = "";

    data.forEach((item) => {
      if (isNumber(item)) {
        const num = parseInt(item);
        num % 2 === 0 ? evenNumbers.push(item) : oddNumbers.push(item);
        sum += num;
      } else if (isAlphabet(item)) {
        alphabets.push(item.toUpperCase());
        concatLetters += item;
      } else if (isSpecialCharacter(item)) {
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

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      is_success: false,
      message: "Something went wrong!",
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
