function hasOneAt(email) {
  return email.includes('@') &&
         email.indexOf('@') === email.lastIndexOf('@');
}

function isValidLocal(local) {
  return /^[\da-z]+$/i.test(local);
}

function isValidDomain(domain) {
  let parts = domain.split('.')
  for (let i = 0; i < parts.length; i++) {
    if (!/^[a-z]+$/i.test(parts[i])) {
      return false;
    }
  }

  return parts.length > 1;
}

function isValidEmail(email) {
  let local = email.split('@')[0];
  let domain = email.split('@')[1];
  return hasOneAt(email) && isValidLocal(local) && isValidDomain(domain);
}

function validEmailRegex(email) {
  let regex = /^[\da-z]+@[a-z]+(\.[a-z]+)+$/i;
  return regex.test(email);
}

console.log(validEmailRegex('Foo@baz.com.ph'));          // returns true
console.log(validEmailRegex('Foo@mx.baz.com.ph'));       // returns true
console.log(validEmailRegex('foo@baz.com'));             // returns true
console.log(validEmailRegex('foo@baz.ph'));              // returns true
console.log(validEmailRegex('HELLO123@baz'));            // returns false
console.log(validEmailRegex('foo.bar@baz.to'));          // returns false
console.log(validEmailRegex('foo@baz.'));                // returns false
console.log(validEmailRegex('foo_bat@baz'));             // returns false
console.log(validEmailRegex('foo@bar.a12'));             // returns false
console.log(validEmailRegex('foo_bar@baz.com'));         // returns false
console.log(validEmailRegex('foo@bar.....com'));         // returns false