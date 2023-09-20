function countEmojis(str) {
  const emojiRegex = /[\p{Emoji}]/gu;

  const matches = str.match(emojiRegex);

  const counts = {};

  matches.forEach((match) => {
    if (counts[match]) {
      counts[match]++;
    } else {
      counts[match] = 1;
    }
  });

  return counts;
}

const str = "Hello, I ❤️ JavaScript🚀🚀🚀!";
countEmojis(str);
console.log(countEmojis(str));
