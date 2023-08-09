let bill = require("../../modules/bill");

count = (req, res) => {
  bill.countDocuments({}, function (err, send) {
    if (err) {
      return res.json(err);
    } else {
      // console.log(send);
      //   let c = { g: send };
      //   send = send.toString();
      return res.json({ r: send });
    }
  });
};
module.exports = count;
