console.log(Account.prototype.getInfo); // function

function Account({ login, email }) {
  this.login = login;
  this.email = email;
}
Account.prototype.getInfo = function () {
  return `This login ${this.login}, this email ${this.email}`;
};

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

console.log(mango.getInfo()); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

console.log(poly.getInfo()); // Login: Poly, Email: poly@mail.com
