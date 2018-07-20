const capitalisedName = (firstName, lastName) => {
  let fName = '';
  let lName = '';
  let upperRE = /[A-Z]/;
  let lowerRE = /[a-z]/;

  for (let x = 0; x < firstName.length; x++) {
    let fc = firstName.charAt(x);

    if (!upperRE.test(fc)){
      fName += fc.replace(lowerRE, (match) => {
        return match.toUpperCase()
      });
    }
  }

  for (let x = 0; x < lastName.length; x++) {
    let fc = lastName.charAt(x);

    if (!upperRE.test(fc)){
      lName += fc.replace(lowerRE, (match) => {
        return match.toUpperCase()
      });
    }
  }

  return fName + ' ' + lName;
};

console.log(`Result: ${capitalisedName('john', 'doe')}`);
