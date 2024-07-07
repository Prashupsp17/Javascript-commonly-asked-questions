// Anagram

const s = "anagram";
const t = "nagaram";

const isAnagram = (s,t) => {
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");

    return s===t;
}
console.log(isAnagram(s,t));