/*
Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

The words in paragraph are case-insensitive and the answer should be returned in lowercase.

Note that words can not contain punctuation symbols.

Example 1:
Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
Output: "ball"
Explanation: 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.

Example 2:
Input: paragraph = "a.", banned = []
Output: "a"

Constraints:
=> 1 <= paragraph.length <= 1000
=> paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
=> 0 <= banned.length <= 100
=> 1 <= banned[i].length <= 10
=> banned[i] consists of only lowercase English letters.
*/

function mostCommonWord(paragraph, banned) {
  let lowerCaseWords = paragraph.toLowerCase().split(/[^a-z]/g);
  let wordCount = {};

  let bannedSet = new Set(banned.map((word) => word.toLowerCase()));

  let maxCount = 0;
  let resultWord = "";

  for (const word of lowerCaseWords) {
    if (word && !bannedSet.has(word)) {
      wordCount[word] = (wordCount[word] || 0) + 1;

      if (wordCount[word] > maxCount) {
        maxCount = wordCount[word];
        resultWord = word;
      }
    }
  }

  return resultWord;
}

const paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
const banned = ["hit"];

console.log(mostCommonWord(paragraph, banned));
