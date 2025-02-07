/**
 * Longest Valid Parentheses
 * 
 * Description: Given a string containing just the characters '(' and ')', find the length of the longest
 * valid (well-formed) parentheses substring.
 * 
 * for '(()', the longest valid parentheses substring is '()', wich has length = 2. Another example is ')()())', 
 * where the longest valid parentheses substring is '()()', wich has length = 4. 
 */

function validParentheses(s: string) {
  let wellFormedParenteses = 0;
  // convert s to an array of characters
  const arrCharacters = s.split('');
  // iterate over the array following the next logic:
  arrCharacters.forEach((character: string, index: number, array: string[]) => {
      // 1. if the character is '(' verify if the next one is ')''
      if (character === '(') {
          // 2. if yes, increment +1 the wellFormedParenteses variable
          if (array[index + 1] === ')') {
              wellFormedParenteses++;
          }
      }
  })

  // 3. return the wellFormedParenteses number * 2
  return `Well-formed parentheses for ${s} is ${wellFormedParenteses * 2}`;
}

console.log(validParentheses('(()')) // 2
console.log(validParentheses(')()())')) // 4