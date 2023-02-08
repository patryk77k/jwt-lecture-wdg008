const getAllQuotes = async (req, res) => {
  //send an array with 5 quotes
  const quotes = [
    {
      quote: "The way to get started is to quit talking and begin doing.",
    },
    {
      quote:
        "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.",
    },
    {
      quote: "Don’t let yesterday take up too much of today.",
    },
    {
      quote:
        "You learn more from failure than from success. Don’t let it stop you. Failure builds character.",
    },
    {
      quote: "It’s not whether you get knocked down, it’s whether you get up.",
    },
  ];
  res.status(200).json(quotes);
};

module.exports = getAllQuotes;
