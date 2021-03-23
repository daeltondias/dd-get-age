const isValidDate = (dateString) => {
  const rules = ['([0-2][0-9]|(3)[0-1])', '((0)[0-9]|(1)[0-2])', '(\\d{4})'], separators = '([-/.])';
  const RootRule = '^(' + rules.join(separators) + ')|(' + rules.reverse().join(separators) + ')$';
  const regex = new RegExp(RootRule, 'i');
  return regex.test(dateString);
};

const checkAndConvertDateStringToISO = (dateString) => {
  if (!isValidDate(dateString)) return null;
  const arrDate = dateString.split(/[-/.]/);
  if (arrDate[0].length !== 4) arrDate.reverse();
  return arrDate.join('-');
};

const getAge = (dateString) => {
  if (!isValidDate(dateString)) return null;
  dateString = checkAndConvertDateStringToISO(dateString);
  let today = new Date(), birthDate = new Date(dateString);
  let month = today.getUTCMonth() - birthDate.getUTCMonth();
  let age = today.getUTCFullYear() - birthDate.getUTCFullYear();
  if (month < 0 || (month === 0 && today.getUTCDate() < birthDate.getUTCDate())) {
    age--;
  }
  return age;
};

module.exports = getAge;

