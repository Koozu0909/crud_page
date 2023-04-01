const express = require("express");
const router = express.Router();
const { Products } = require("../models");

// Lấy tất cả sản phẩm
router.get("/", async (req, res) => {
  const listOfProduct = await Products.findAll();
  res.json({ listOfProduct });
});

// Lấy một sản phẩm theo ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const product = await Products.findByPk(id);
  res.json(product);
});

// Thêm một sản phẩm mới
router.post("/", async (req, res) => {
  const product = req.body;
  await Products.create(product);
  res.json(product);
});

// Cập nhật thông tin một sản phẩm
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { name, description, price } = req.body;
  await Products.update(
    { name: name, description: description, price: price },
    { where: { id: id } }
  );
  res.json({ name: name, description: description, price: price });
});

// Xóa một sản phẩm
router.delete("/:id", async (req, res) => {
  const productId = req.params.id;
  await Products.destroy({
    where: { id: productId },
  });
  res.json("Delete Success");
});

module.exports = router;
