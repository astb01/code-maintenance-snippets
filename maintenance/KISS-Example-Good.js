const updateOrderDate = (order) => {
  return order({orderDate: new Date()});
}

const markOrderAsComplete = (order) => {
  return order({complete: true});
};

const submitOrderForProcessing = (order) => {
  return order.submit();
};

const processOrder = (order) => {
  order.updateOrderDate()
      .then(order => {
        order.markOrderAsComplete()
          .then(order => {
            submitOrderForProcessing(order);
          });
      })
};

