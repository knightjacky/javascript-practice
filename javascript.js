// two sum problem
// [2,7,11,15], 9
// [3,2,4], 6
// [3,3], 6
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
var twoSum = function(nums, target) {
    const result = []
    for(let i =0; i < nums.length; i++){
        for(let j=i + 1; j< nums.length; j++){
            if(nums[i]+nums[j] === target){
                result.push(nums[i], nums[j])
            }
        }
    }
    return result
};
// Find Duplicates in Array 
// Input:  [1,2,3,2,4,3]
// Output: [2,3]
function findDuplicates(nums) {
    const seen = new Set();
    const duplicates = new Set();
    for (const num of nums) {
      if (seen.has(num)) {
        duplicates.add(num);
      } else {
        seen.add(num);
      }
    }
    return [...duplicates];
}
// Check if string is a valid email.
// 👉 Skills: regex, validation
function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
// Reverse Words in a String
// Input: "" a good   example ""
// Output: "example good a"
function reverseWords(str) {
    return str.trim().split(/\s+/).reverse().join(' ');
}
// Valid Palindrome
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Input: s = "race a car"
// Output: false
function isPalindrome(s) {
    const cleaned = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807
function addTwoNumbers(l1, l2) {
    const num1 = Number(l1.reverse().join(''));
    const num2 = Number(l2.reverse().join(''));
    const result = ([num1 + num2]).toString().split('').map(Number).reverse();
    return result;
}
// Find the maximum number in an array
// [1,2,3,4,5]
// [1,2,3,8,9,10,4,5,6,7,4,5,6,7,8,9,10]
function maxNumber(nums) {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
}
// Remove duplicates from an array
function removeDuplicates(array) {
    const newarray = [...new Set(array)];
    return newarray;
}
// Find the second largest number in an array
function secondLargestNumber(nums) {
    const max = maxNumber(nums);
    const newnums = nums.filter(num => num !== max);
    return maxNumber(newnums);
}
// Find the second smallest number in an array
function secondSmallestNumber(nums) {
    const min = minNumber(nums);
    const newnums = nums.filter(num => num !== min);
    return minNumber(newnums);
}
// Find the second largest number in an array
//[1, 2, 3, 4, 5, 10, 10, 9, 9] => 9
// [1, 1, 1] => null
// [1, 2] => 1
function findSecondLargest(arr) {
    const unique = [...new Set(arr)].sort((a, b) => a - b);
    if (unique.length < 2) return null;
    return unique[unique.length - 2];
}

function secondLargestNumber(nums) {
    const max = Math.max(...nums);
    const set = new Set(nums);
    set.delete(max);
    const arr = [...set].sort((a, b) => b - a);
    if (arr.length === 0) return null;
    return arr[0];
}
// Flatten a nested array
function flattenArray(arr) {
    return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
}
function flattenArray(arr) {
    const arr = new Flat(arr);
    return arr.flat(Infinity);
}
// Rotate an array by k steps
// Input:  nums = [1, 2, 3, 4, 5, 6, 7], k = 3
// Output: [5, 6, 7, 1, 2, 3, 4]
function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n;
    return [...arr.slice( -k ), ...arr.slice(0, n -k)];
}
// "racecar" → cleaned: "racecar" → reversed: "racecar" → true ✅
// "hello" → cleaned: "hello" → reversed: "olleh" → false ✅
function isPalindrome(str) {
    const newstr = str.split('').reverse().join('');
    return newstr === str;
}
// Count the occurrence of each character
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }
function countCharacterOccurrences(str) {
    return str.split('').reduce((count, char) => {
        count[char] = (count[char] || 0) + 1;
        return count;
    }, {});
}
function countCharacterOccurrences(str) {
    const count = {};
    for (const char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    return count;
}
//////////////////////review this function//////////////////////
// Find the longest word in a sentence
function findLongestWord(str) {
    return str.split(' ').reduce((longest, word) =>
        word.length > longest.length ? word : longest
    , '');
} 
function findLongestWord(str) {
    const words = str.split(' ');
    let longest = '';
    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
// FizzBuzz
// Print 1 to n, but:
//   divisible by 3 → "Fizz"
//   divisible by 5 → "Buzz"
//   divisible by both → "FizzBuzz"
// fizzBuzz(15) → [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]
function fizzBuzz(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) result.push('FizzBuzz');
        else if (i % 3 === 0) result.push('Fizz');
        else if (i % 5 === 0) result.push('Buzz');
        else result.push(i);
    }
    return result;
}
// Capitalize First Letter of Each Word
function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
// Find Missing Number
// input: ar   r = [1, 2, 4, 5], 
// output: 3
function findMissingNumber(arr) {
    const n = arr.length + 1; // Since one number is missing
    const expected = (n * (n + 1)) / 2; // Sum of first n natural numbers
    const actual = arr.reduce((sum, num) => sum + num, 0); // Sum of given array
    return expected - actual; // The difference is the missing number
}
// Check if a number is prime
//   console.log(isPrime(7));  // true
//   console.log(isPrime(10)); // false
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}
//////////////////////review this function//////////////////////
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
// Sort objects by property.
// Input:[{ age: 30 }, { age: 20 }]
// Output:[{ age: 20 }, { age: 30 }]
function sortByAge(arr) {
  return [...arr].sort((a, b) => a[key] - b[key]);
}

// Fibonacci sequence      
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    const seq = [0, 1];
    for (let i = 2; i < n; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq;
}
//////////////////////review this function//////////////////////
// aeiou vowels checking and counting a: 0, e: 0, i: 0, o: 0, u: 0
function countVowels(str) {
    const vowels = 'aeiou';
    const count = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    for (const char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count[char]++;
        }
    }
    return count;
}  
function countVowels(str) {
  return str.split('').reduce((count, char) => {
    return 'aeiouAEIOU'.includes(char) ? count + 1 : count;
  }, 0);
}
// Algorithm Problems
//   console.log(binarySearch([1, 3, 5, 7, 9], 7)); // 3 (index)
//   console.log(binarySearch([1, 3, 5, 7, 9], 4)); // -1
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid; // Target found, return index
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    return -1; // Target not found
}
// Count the number of words in a string
//  console.log(countWords("Hello! 2334 hello how are you!")); //  hello: 2, how: 1, are: 1, you: 1
function countWords(str) {
    const count = {};
    const words = str.toLowerCase().replace(/[^a-zA-Z]/g, '').split(' ');
    for (const word of words) {
        // count[word] = (count[word] || 0) + 1;
        if (count[word]) {
            count[word]+=1;
        } else {
            count[word] = 1;
        }  
    }
    return count;
}
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
function lengthOfLongestSubstring(str) {
    const seen = new Set();
    const s = str.split('');
    let maxLength = 0;
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }
        seen.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}

var lengthOfLongestSubstring = function(str) {
    const seen = new Set();
    const s = str.split('');
    let maxLength = 0;
    let left = 0;
    for(let right = 0; right < s.length; right++){
        while(seen.has(s[right])){
            seen.delete(s[left])
            left++
        }
        seen.add(s[right]);
        maxLength = Math.max(seen, right-left+1)
    }
    return maxLength
}
// Debounce Function
// Delay function execution until user stops triggering it
// User types: h → he → hel → hell → hello

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Retry a failed API call N times.
// retry(fn, 3)
// 👉 Skills: async/await, error handling
async function retry(fn, retries) {
  let lastError;

  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError;
}
// find Non-repeating Character in a String
// Input: "leetcode"
// Output: "ltcod"
function findNonRepeatingCharacter(str) {
  const charCount = {};
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  const result = [];
  for (const char of str) {
    if (charCount[char] === 1) {
      result.push(char);
    }
  }
  return result;
}
// Merge Two Sorted Arrays
function mergeSortedArrays(arr1, arr2) {
    const merged =[...arr1, ...arr2].sort((a, b) => a - b);
    return merged;
}
// Find Intersection of Two Arrays
// input: arr1 = [1, 2, 2, 3], arr2 = [2, 2, 4]
// output: [2, 2]
function intersection(arr1, arr2) {
    const set2 = new Set(arr2);
    const result = [];
    for (const num of arr1) {
        if (set2.has(num)) {
            result.push(num);
        } 
    }
    return result;
}   
function arrayIntersection(arr1, arr2) {
  const set2 = new Set(arr2);
  return [...new Set(arr1.filter(num => set2.has(num)))];
}
// Longest Substring Without Repeating Characters
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
function lengthOfLongestSubstring(s) {
    const seen = new Set();
    let maxLength = 0;
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }
        seen.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}