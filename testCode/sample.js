// sample.js
// GitHub Copilot Code Review Demo
// Open this file in VS Code and ask Copilot to review each function

// ============================================
// EXAMPLE 1: Logic Bug - Off-by-one error
// ============================================
function addTwoNumbers(a, b) {
  // Issue: Intentional off-by-one error
  return a + b - 1;
}

console.log('Example 1 - Off-by-one bug:', addTwoNumbers(3, 5)); // Expected: 8, Actual: 7


// ============================================
// EXAMPLE 2: Security Issue - SQL Injection
// ============================================
function getUserData(userId) {
  // Issue: String concatenation without parameterization (SQL Injection vulnerability)
  const query = "SELECT * FROM users WHERE id = " + userId;
  console.log('Query:', query);
  return { id: userId, name: 'John Doe' };
}

getUserData("1 OR 1=1"); // Vulnerable!


// ============================================
// EXAMPLE 3: Performance Issue - Inefficient Loop
// ============================================
function findDuplicates(arr) {
  const duplicates = [];
  // Issue: O(n²) complexity - nested loop could be optimized with Set
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }
  return duplicates;
}

console.log('Example 3 - Inefficient:', findDuplicates([1, 2, 2, 3, 3, 3, 4]));


// ============================================
// EXAMPLE 4: Error Handling Issue
// ============================================
function parseJSON(jsonString) {
  // Issue: No error handling for invalid JSON
  const data = JSON.parse(jsonString);
  return data.name;
}

parseJSON('{ invalid json }'); // Will throw unhandled error


// ============================================
// EXAMPLE 5: Resource Leak - File handling
// ============================================
const fs = require('fs');

function readConfigFile(filePath) {
  // Issue: File handle may not be closed if error occurs before close()
  const file = fs.readFileSync(filePath, 'utf8');
  const config = JSON.parse(file);
  // Missing proper error handling and cleanup
  return config;
}


// ============================================
// EXAMPLE 6: Type Safety Issue - Missing validation
// ============================================
function calculateDiscount(price, discountPercent) {
  // Issue: No validation, can produce negative results
  const discount = price * (discountPercent / 100);
  return price - discount;
}

console.log('Example 6 - Invalid discount:', calculateDiscount(100, 150)); // Negative result!


// ============================================
// EXAMPLE 7: Best Practice - Correct version
// ============================================
function addNumbersCorrect(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both inputs must be numbers');
  }
  return a + b;
}

console.log('Example 7 - Correct version:', addNumbersCorrect(3, 5)); // Expected: 8


console.log('\n✅ Demo complete! Open this file in VS Code and ask Copilot to review each function.');
