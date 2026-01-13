function SimplePassword(str) {
  // 1. Length Check
  if (str.length < 8 || str.length > 30) {
    return false;
  }

  // 2. Capital Letter Check
  let hasCapital = /[A-Z]/.test(str);

  // 3. Number Check
  let hasNumber = /[0-9]/.test(str);

  // 4. Punctuation Check
  let hasPunctuation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(str);

  // 5. "password" Substring Check
  let noPassword = !str.toLowerCase().includes("password");

  return hasCapital && hasNumber && hasPunctuation && noPassword;
}

console.log(SimplePassword("apple!M7")); // true
console.log(SimplePassword("short"));    // false (too short, no cap/punct)
console.log(SimplePassword("Password123!")); // false (contains "Password")
