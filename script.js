function checkPalindrome() {
    // Get input string
    const inputString = document.getElementById('inputString').value.toLowerCase();

    // Remove non-alphanumeric characters
    const cleanedString = inputString.replace(/[^a-z0-9]/g, '');

    // Reverse the string
    const reversedString = cleanedString.split('').reverse().join('');

    // Check if the original and reversed strings are equal
    if (cleanedString === reversedString) {
        document.getElementById('result').textContent = 'It is a palindrome!';
    } else {
        document.getElementById('result').textContent = 'It is not a palindrome!';
    }
}