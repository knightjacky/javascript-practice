let word = "this is a good day"
let array = word.split(" ")
array.forEach(myFunction)
function myFunction(item, index, arr){
    arr[index] =item.charAt(0).toUpperCase()+item.slice(1)
}  //(5) ['This', 'Is', 'A', 'Good', 'Day’]
str.split(" ").map(char=>char.charAt(0).toUpperCase()+char.slice(1)).join(" ")  
let string = array.join(" ") // This Is A Good Day

const newArray = (arr, el) => [...arr, el] // add new elem to array

const concatArr = (arr1, arr2, arr3)=>[...arr1, ...arr2, ...arr3] // merge multi arrays

 const uniqueArr = (arr) =>[...new Set(arr)]     //remove duplicate in array

let min = Math.min(...arr); // find smallest number in the array
  const max = Math.max(...arr) // find largest number in the 
  const maxArr = arr.filter(el => el === max)
  console.log(maxArr.length) // how many time for max number in array

let sortCars = cars.sort((a, b)=>(a.color<b.color)? -1 : (a.color>b.color)? 1 : 0) // sort object

  const shuffleItems = (items) =>{             // random shuffle
    return items
    .map(item => ({sort: Math.random(), value: item}))
    .sort((item1, item2)=>item1.sort - item2.sort)
    .map(a => a.value)
  }

return str.split('').reverse().join(‘')   // reverse the string

return (str.split('').reverse().join(''))===str     // find the string like abba cddc  boob

return parseInt(n.toString().split('').reverse().join('').replace(/[^\w]/g,"")))* Math.sign(n) // reverse number even -51 to -15

const str = n.slice(0,8)+'A'+n.slice(9)  //inster a new letter to string this is A good day
    
mystring = mystring.replace('/r','////////')

var arr2 = ['a', 'b', 'c', 'd', 'e', 'f']
arr = arr2.splice(0, arr2.indexOf('c'));   //arr(2) ['a', 'b']      arr2(4) ['c', 'd', 'e', 'f’]

const numbers = [1, 2, 4, 5];
const index = 2;
const newNumbers = [...numbers.slice(0, index), 3, ...numbers.slice(index)]; // Output: [1, 2, 3, 4, 5]

let count = 0
let quite = "monday is funday"
let val = quite.indexOf("day”)      // count how many day in the string
while(val!== -1){
    count++
    val= quite.indexOf("day", val+1)}

const chars = {}
for(let char of str){ chars[char]= chars[char]+1||1 }
return Object.keys(chars).reduce((a,b)=>chars[a]<chars[b]?b:a)  //maxChar("abcccccccd") === “c"
Let max= 0
Let maxchar = ''
for (let char in chars){            // loop object find maxValue and Key
    if(chars[char] > max){       
        max = chars[char]
        maxChar = char }}

const chunked = []
for(let index=0; index<array.length; index+=size){
    chunked.push(array.slice(index, index+size))}.   // chunk([1,1,2,3,4],2) --> [[1,1],[2,3],[4]]

words.replace(/[^\w]/g,"").toLowerCase().split("").sort().join("")    // remove sepical charactor and covert to lowercase sort the string

const matches = str.match(/[aeiou]/gi)
return matches ? matches.length :0        // vowels checking a e i o u counting 
