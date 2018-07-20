const updateOrderDeliveryDate = (order) => {
  order.updateOrderDate(new Date());

  order.markOrderAsComplete();

  return order;
};

