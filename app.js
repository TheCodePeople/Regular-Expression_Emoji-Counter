function countEmojis(str) {
  // Define a regular expression that matches emojis
  const emojiRegex = /[\p{Emoji}]/gu;

  // Use the match method to extract all occurrences of the regular expression
  const matches = str.match(emojiRegex);

  // Create an empty object to hold the counts
  const counts = {};

  // Loop through each match and increment the count for that emoji
  matches.forEach((match) => {
    // if the property exists (counts.match) increase the count by 1
    if (counts[match]) {
      counts[match]++;
    } else {
      // if the property is not found in the object, create it and set the count to 1
      counts[match] = 1;
    }
  });

  // Return the object of emoji counts
  return counts;
}

// Example usage:
const str = "Hello, I ❤️ JavaScript! 🚀🚀🚀 😊😊😊😊🙂";
countEmojis(str);
console.log(countEmojis(str)); // { "❤️": 1, "🚀": 3 }
