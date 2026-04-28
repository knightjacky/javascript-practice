// You are given a string s that consists of lowercase English letters.

// Return the string obtained by removing all trailing vowels from s.

// The vowels consist of the characters 'a', 'e', 'i', 'o', and 'u'.

 

// Example 1:

// Input: s = "idea"

// Output: "id"

// Explanation:

// Removing "idea", we obtain the string "id".

// Example 2:

// Input: s = "day"

// Output: "day"

// Explanation:

// There are no trailing vowels in the string "day".

// Example 3:

// Input: s = "aeiou"

// Output: ""

// Explanation:

// Removing "aeiou", we obtain the string "".

 

// Constraints:

// 1 <= s.length <= 100
// s consists of only lowercase English letters.
function removeTrailingVowels(s) {
    // const vowels = 'aeiou';
    // let end = s.length - 1;
    
    // while (end >= 0 && vowels.includes(s[end])) {
    //     end--;
    // }
    
    // return s.substring(0, end + 1);

    const vowels = "aeiou";
    let lowerStr = s.toLowerCase();
    for(let end=lowerStr.length-1; end>=0; end--){
        if(vowels.includes(lowerStr[end])){
            lowerStr = lowerStr.slice(end + 1);
        }
        else{
            return lowerStr;
        }
    }
    return '';    
}

// Example usage:
console.log(removeTrailingVowels("idea")); // Output: "id"
console.log(removeTrailingVowels("day"));  // Output: "day"
console.log(removeTrailingVowels("aeiou")); // Output: ""