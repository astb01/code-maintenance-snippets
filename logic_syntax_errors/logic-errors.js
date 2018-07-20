const debitAccount = (account, amount) => {
  account.balance += amount;

  return account;
};

const processOrderAndMarkAsComplete = (order, address) => {
  order.setAddress(address);

  order.setDeliveryDate(new Date());

  return order;
};