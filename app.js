function matchEmojis(inputString) {
  const emojiRanges = [
    "\ud83c[\udf00-\udfff]",
    "\ud83d[\udc00-\ude4f]",
    "\ud83d[\ude80-\udeff]",
    "[\u2600-\u27BF]",
  ];
  const emojiPattern = new RegExp(emojiRanges.join("|"), "g");

  const emojis = inputString.match(emojiPattern);

  const emojiCount = {};

  if (emojis) {
    emojis.forEach((emoji) => {
      if (emojiCount[emoji]) {
        emojiCount[emoji]++;
      } else {
        emojiCount[emoji] = 1;
      }
    });
  }

  return emojiCount;
}

const inputString = "Hello, I ❤️ JavaScript! 🚀😁😍❤️🚀🚀";
const emojis = matchEmojis(inputString);
console.log(emojis);
