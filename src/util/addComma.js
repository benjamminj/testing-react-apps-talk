const addComma = number => {
  const digitArray = number.toString().split('');
  return digitArray.reduceRight((acc, digit, i) => {
    const distanceFromEnd = digitArray.length - (i + 1);
    const shouldInsertComma = distanceFromEnd > 0 && distanceFromEnd % 3 === 0;
    const comma = shouldInsertComma ? ',' : '';
    return digit + comma + acc;
  }, '');
};

export default addComma