const fs = require("fs");

const quotes = JSON.parse(fs.readFileSync(__dirname + "/../data/quotes.json"));

//Calculate total quotes
generateNumber = () => {
const quotesLength = quotes.length;
return Math.floor(Math.random() * quotesLength);
}

//Select  quote

exports.getQuotes = (req,res) => {
    res.status(200).json({
        status: "success",
        data: quotes,
    })
}

exports.getSingleQuote = (req,res) => {
    const quoteNumber = generateNumber();
    res.status(200).json({
        status: "success",
        data: [quotes[quoteNumber]],
    })
}