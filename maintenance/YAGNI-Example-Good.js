const capitalisedName = (firstName, lastName) => {
  return firstName.toUpperCase() + ' ' + lastName.toUpperCase();
};

console.log(`Result: ${capitalisedName('john', 'doe')}`);
