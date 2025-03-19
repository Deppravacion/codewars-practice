function errBob(string) {
  const regex = /[aeiouAEIOU]$/i;
  let split = string.split(" ");
  let modifiedStr = split.map((el) => {
    let lettersOnly = el.replace(/[^a-zA-Z ]/g, "");
    if (!regex.test(lettersOnly)) {
      let lastChar = lettersOnly[lettersOnly.length - 1];
      let eRR = lastChar === lastChar.toUpperCase() ? "ERR" : "err";
      return `${lettersOnly}${eRR}${el.slice(lettersOnly.length)}`;
    }
    return el;
  });
  let newString = modifiedStr.join(" ");
  console.log(newString);
  return newString;
}

errBob("Hello, I am Mr Bob");
