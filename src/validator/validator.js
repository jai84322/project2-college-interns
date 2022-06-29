// function for string verification
const isValid = function (value) {
  if (typeof value == undefined || value == null) return false;
  if (typeof value == "string" && value.trim().length == 0) return false;
  else if (typeof value == "string") return /^[a-zA-Z ]{2,30}$/.test(value);
};

const isValidLink = function (link) {
  return /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(
    link
  );
};

const isValidName = function (name) {
  return /^[A-Za-z]+$/.test(name);
};

const isValidRequest = function (data) {
  if (Object.keys(data).length == 0) return false;
  return true;
};

const isValidMail = function (v) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
};

const isValidMobile = function (num) {
  return /^[6789]\d{9}$/.test(num);
};

module.exports = {
  isValid,
  isValidLink,
  isValidName,
  isValidRequest,
  isValidMail,
  isValidMobile,
};
