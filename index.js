
// 9. Palindrome Number

// function palindromeNumber(num){
//     let arr = []
//     for(let i= 0; i < num.length; i++){
//         arr[i] += num[i]
//     }
//     return arr.reverse()
// }

// let x = 13441
// let num = x.toString()
// console.log(palindromeNumber(num))
// 09643717171

// class Palindrome{
//     constructor(x){
//         this.x = x
//     }
//     reverse(){
//         if(this.x < 0){
//             return false
//         }
//         let reverse = 0
//         let y = this.x
//         while(y > 0){
//             let digit = y % 10
//             reverse = reverse * 10 + digit
//             y = Math.floor(y / 10)
//             console.log(y);
//         }

//         console.log(reverse);
//     }
// }

// const palindrome = new Palindrome(121)
// console.log(palindrome.reverse());

// console.log(10 / 5);

// var isPalindrome = function(y) {
//     if(y < 0){
//         return false;
//     }
//     let reversed = 0;
//     let x = y;

//     while(x > 0 ){
//         reversed = reversed * 10 + x % 10;
//         x = Math.floor(x / 10);
//     }

//     console.log(reversed);

//     return reversed === y

// };
// console.log(isPalindrome(121));

//Roman to Integer

// class RomanToInteger{
//     constructor(symbol, value) {
//         this.symbol = symbol
//         this.value = value
//     }

//     change(input){
//         for(let i = 0; i < symbol.length; i++){
//             this.symbol[i] = this.value[i]
//         }
//         return this.value == 90
//     }
// }
// let I = 1
// let IV = 4
// let V = 5
// let IX = 9
// let X = 10
// let XL = 40
// let L = 50
// let XC = 90
// let C = 100
// let CD = 400
// let D = 500
// let CM = 900
// let M = 1000
// let symbol = [I,IV, V, IX, X, XL, L, XC, C, CD, D, CM, M]
// let value = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
// const rti = new RomanToInteger(symbol, value)
// console.log(rti.change("I"));

// class RomanToInteger{
//     constructor(roman)
// }

// const persons = {
//     I :  1,
//     V :  5,
//     X :  10,
//     L :  50,
//     C :  100,
//     D :  500,
//     M :  1000,
// }

// function romanToInteger(input){
//     let result = persons[input.charAt(input.length - 1)]
//     for(let i = input.length - 2; i >= 0; i--){
//         if(persons[input.charAt(i)] < persons[input.charAt(i + 1)]){
//             result -= persons[input.charAt(i)]
//         }else{
//             result += persons[input.charAt(i)]
//         }
//     }
//     return result
// }

// let ans = romanToInteger("ICMI")
// console.log(ans);


// function commonPrefix(strs){
   
//     let strFirst = strs[0]
//     let strEnd = strs[strs.length - 1]
//     let index = 0
//     while(index < strFirst.length){
//         if(strFirst.charAt(index) == strEnd.charAt(index)){
//             index++
//         }else{
//             break
//         }
//     }
//     return index == 0? "": strFirst.substring(0, index)
// }

// let strs = ["flower", "flow", "flight", "flwe"]
// strs.sort()
// console.log(strs);
// let ans = commonPrefix(strs)
// console.log(ans);


/* Find the minHeap of a complete binary tree
It is opposite to maxHeap function
*/

function insertMinHeap(heap, value){
    heap.push(value)
    let index = heap.length - 1
    let parentIndex = Math.floor((index - 1)/ 2)
    while(index > 0 && heap[parentIndex] > heap[index]){
        [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]]
        index = parentIndex
        parentIndex = Math.floor((index - 1)/ 2)
    }
}

const heap = []
const values = [10, 7, 11, 5, 4, 13]
for(const value of values){
    insertMinHeap(heap, value)
    console.log(`Inserted ${value} into ${heap}`);
}
