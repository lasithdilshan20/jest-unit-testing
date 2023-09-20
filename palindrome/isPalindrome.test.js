const isPalindrome = require('./isPalindrome');

test('Tacocat is a palindrome', () => {
    expect(isPalindrome('Tacocat')).toBe(true);
});