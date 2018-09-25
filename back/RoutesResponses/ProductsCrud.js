const { ObjectID } = require("mongodb");

const getProduct = (req, res) => {
  db.collection("products")
    .find()
    .toArray((err, data) => {
      if (err) res.send("cant fecth products");
      else res.send(data);
    });
};

const postProduct = (req, res) => {
  let newProduct = req.body;
  db.collection("products").insertOne(newProduct, (err, data) => {
    if (err) res.send("cant add products");
    else res.send(data);
  });
};

const editProduct = (req, res) => {
  let editedProduct = req.body;
  let id = ObjectID(req.params.id);
  db.collection("products").findOneAndUpdate(
    { _id: id },
    { $set: { ...editedProduct } },
    (err, data) => {
      if (err) res.send("cant edit products");
      else res.send(data);
    }
  );
};

const deleteProduct = (req, res) => {
  let id = ObjectID(req.params.id);
  db.collection("products").findOneAndDelete({ _id: id }, (err, data) => {
    if (err) res.send("cant delete products");
    else res.send(data);
  });
};

module.exports = { postProduct, editProduct, getProduct, deleteProduct };
