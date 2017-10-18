//A function that removes everything apart form digits in string
function onlyNumbers(string) {
  var numbString = string.replace(/[^0-9\.]+/g, "");
  return numbString;
}

module.exports = {
  extractnumbers: onlyNumbers
};
