import Order from "../models/order.model.js";

const newOrder = async (req, res) => {
  try {
    const { userName, items, totalPrice } = req.body;

    if (!userName || !items || !totalPrice)
      return res
        .status(400)
        .json({ success: false, message: "bad order request" });
    console.log(userName, items, totalPrice);

    const newBook = await Order.create({
      userName,
      items,
      totalPrice,
    });

    res.status(200).json({ success: true, message: "it works", newBook });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

const getOrders = async (req, res) => {
  try {
    // options = {};
    const Orders = await Order.find();

    if (!Orders)
      return res
        .status(400)
        .json({ success: false, message: "orders not found" });

    res
      .status(200)
      .json({ success: true, Orders, message: "fetched all orders" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id)
      return res
        .status(400)
        .json({ success: false, message: "id is required" });
    const { userName, items, totalPrice } = req.body;

    const order = await Order.findById(id);

    if (!order)
      return res
        .status(400)
        .json({ success: false, message: "order does not exist" });

    if (userName) order.userName = userName;
    if (items) order.items = items;
    if (totalPrice) order.totalPrice = totalPrice;

    const updatedOrder = await order.save();

    if (!updatedOrder)
      return res
        .status(400)
        .json({ success: false, message: "order not saved in database" });

    res.status(200).json({
      success: true,
      message: "order saved successfully",
      updatedOrder,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id)
      return res
        .status(400)
        .json({ success: false, message: "id is required" });

    const deletedOrder = await Order.findByIdAndDelete(id);
    console.log(deletedOrder);

    if (!deletedOrder)
      return res
        .status(400)
        .json({ success: false, message: "order was not deleted" });

    res.status(200).json({
      success: true,
      message: "order deleted successfully",
      deletedOrder,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export { newOrder, getOrders, updateOrder, deleteOrder };
