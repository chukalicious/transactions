// here we are both importing express and its Router method
const router = require("express").Router();

const Transactions = require("./transactions-model");

router.get("/", (req, res) => {
  Transactions.getAll()
    .then((transactions) => {
      if (transactions) {
        res.status(201).json(transactions);
      } else {
        res.status(404).json({ message: "Bad Request" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Server error" });
    });
});

// ceate a function that will return a promise
// that will resolve to and array of the transactions with the given date
router.get("/:date", (req, res) => {
  const { date } = req.params;
  Transactions.getByDate(date)
    .then((transactions) => {
      if (transactions) {
        res.status(201).json(transactions);
      } else {
        res.status(404).json({ message: "Bad Request" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Server error" });
    });
});

module.exports = router;
