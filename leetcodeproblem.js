//1535. Find the Winner of an Array Game

var getWinner = function(arr1, k){

//    for(let i = 0; i < arr1.length; i++){

//    }

    let i = 0
    if(arr1[i] > arr1[i + 1]){
        while( i < arr1.length - 1){
            recursive(arr1[i+1], arr1[i+2])
            i++
        }
        return arr1[i]
    }

    if(arr1[i] < arr1[i+1]){
        while( i < arr1.length - 1){
            recursive(arr1[i], arr1[i+1])
            i++
        }
        return arr1[i]
    }


    console.log(arr1);
}

function recursive(arr1, arr2){
    let temp = arr1
    arr1 = arr2
    arr2 = temp
}



// getWinner([2,1,3,5,4,6,7], 2)

// 1108. Defanging an IP Address
// class IP {
//     constructor(address){
//         this.address = address
//     }

//     defanged(){
//         let ans = ""
//         for(let i = 0; i < this.address.length; i++){
//             if(this.address[i] === "."){
//                 i = "[.]"
//             }
//             ans[i] += this.address[i]
//         }
//         return ans
//     }
// }

// const ip = new IP("1.1.1.1")
// console.log(ip.defanged());

// let string = "1.1.1.1"
// let ans = string.replaceAll(".", "[.]")
// console.log(ans);

// function find(address){
//    let address1 = address.replaceAll(".", "[.]")
//     console.log(address1);
// }

// let ans = find('"1.1.1.1"')
// console.log(ans);

// let x = 1

// console.log(x++);
// console.log(x);

// var finalValue = function (operations){
//     // let ans = []
//     let X = 0
//     for(let i = 0; i < operations.length; i++){
//         if(operations[i] == "X++" || operations[i]=="++X"){
//             X++
//         }
//         if(operations[i]== "X--" || operations[i] == "--X"){
//             X--
//         }
//     }

//     return X
    
// }

// let operands = finalValue(["--X","X++","X++"])
// console.log(operands);

// Valid Boomerang

// function boomerang(points){
//     let x1 = points[1][0] - points[0][0]
//     let x2 = points[2][0] - points[1][0]
//     let y1 = points[1][1] - points[0][1]
//     let y2 = points[2][1] - points[1][1]
//     return ( y1*x2 != y2*x1)
// }

// let points = [[1,1],[2,2], [3,3]]
// let ans = boomerang(points)
// console.log(ans);

// Time complexity 0(1)
// space Complexity 0(1)

// Find words containing character

// function wordcontainingchar(words, x){
//     let ans = []
//     for(let i = 0; i< words.length; i++){
//         for(let j = 0; j < words[i].length ; j++){
//             if(words[i][j] == x){
//                 ans.push(i)
//                 break
//             }
//         }   
//     }
//     return ans
    
// }

// let words = ["leet", "code"]
// let x = "e"
// let ans = wordcontainingchar(words, x)
// console.log(ans);
// Space complexity 0(n)
// Time complexity 0(n^2)

//Check If two string arrays are equivalent
// function twoStringArrays(word1, word2){
//     let ans1 = ""
//     let ans2 = ""
//     for(let i = 0; i < word1.length; i++){
//         ans1 += word1[i]
//     }
//     for(let i = 0; i <word2.length; i++){
//         ans2 += word2[i]
//     }

//     return ans1 == ans2
// }

// let word1 = ["ab", "c"]
// let word2 = ["a", "bc"]
// let ans = twoStringArrays(word1, word2)
// console.log(ans);


// Relative Sort Array

// function relativeSortArray(arr1, arr2){
//     let ans = []
//     let i = 0
//     for(i; i< arr2.length; i++){
//         for(let j = 0; j < arr1.length; j++){
//             if(arr2[i]== arr1[j]){
//                 ans.push(arr1[j])
//                 arr1.splice(j, 1)
//                 j--
//             }
//         }
//     }
//     arr1.sort((a,b) => a - b)
//     return [...ans, ...arr1]
// }
// let arr1 = [2,3,1,3,2,4,6,7,9,2,19];
// let arr2 = [2,1,4,3,9,6]
// let ans = relativeSortArray(arr1, arr2)
// console.log(ans);



// matrix-similiarity-after-cyclic-shifts

// function printSorted(mat){
//     let ans = []
//     for(let i=0; i < mat.length; i++){
//         for(let j=0; j < mat[i].length; j++){
//             ans.push(mat[i][j])
//         }
//     }
//     return ans
// }
// let mat=[[10, 20, 30, 40],[15, 25, 35, 45],
// [27, 29, 37, 48],[32, 33, 39, 50]];
// let ans = printSorted(mat)
// console.log(ans.sort());

// Last stone weight
// function lastStoneWeight(stones){
//     stones.sort()
//     // return stones
//     let res = stones[stones.length - 1]
//     for(let i = stones.length - 2; i >= 0; i--){
//         if(res > stones[i]){
//             res = Math.abs( res - stones[i])
//         }
//         if(res == stones[i]){
//             res = 0
//         }
//     }
//     return res
// }
// var lastStoneWeight = function(stones){
    
//     while(stones.length >1){
//         stones.sort((a, b) => a - b)
//         if(stones[stones.length-1]-stones[stones.length-2]===0){
//            stones.pop()
//            stones.pop()
//         } else if (stones[stones.length - 1] - stones[stones.length - 2] !== 0){
//            stones[stones.length - 2] = stones[stones.length - 1] - stones[stones.length -2]
//            stones.pop()
//         }
//    }
//   return stones
   
// }
// let stones =[8,10,4]
// let ans = lastStoneWeight(stones)
// console.log(ans);
// function matrixSimliarity(mat, k){
    
// }

// let mat = [[1,2,1,2], [5,5,5,5],[6,3,6,3]]
// let k = 2
// let ans = matrixSimliarity(mat, k)
// console.log(ans);

// Partition Array for Maximum Sum
// function partitionMaximumArray(arr, k){
//     let res =0
//     if(arr.length <= 1){
//         res = arr[0]
//     }else{
//         let a = arr.slice(0,k)
//     let b = arr.slice(k+1,arr.length)
//     let max = a[0]
//     let max2 = b[0]
//     for(let i=0; i < a.length; i++){
//         if(a[i] > max){
//             max = a[i]
//         }
//     }
//     for(let i = 0; i< a.length; i++){
//         a[i] = max
//     }
//     for(let i=0; i < b.length; i++){
//         if(b[i] > max2){
//             max2 = b[i]
//         }
//     }
//     for(let i = 0; i< b.length; i++){
//         b[i] = max2
//     }
//     let ans = [...a,arr[k],...b]
//     for(let i = 0; i < ans.length; i++){
//         res += ans[i]
//     }
//     }
//     return res
// }
// let arr = [1,15,7,9,2,5,10], k = 3
// let ans = partitionMaximumArray(arr, k)
// console.log(ans);
// function maxValue(arr,k){
//     maxValue = arr[0]
//     for(let i=1; i < arr.length; i++){
//         maxValue = Math.max(maxValue, arr[i])
//     }
//     return maxValue
// }
// let arr = [1,15,7,9,2,5,10], k = 3
// let ans = maxValue(arr, k)
// console.log(ans);

// function largestOddNumber(num){
//    for(let i = num.length -1; i >=0; i--){
//     if(parseInt(num.charAt(i)) % 2 !== 0){
//         return num.substring(0, i+1)
//     }
//    }
//    return ''
// }

// let num = "101990"
// let ans = largestOddNumber(num)
// console.log(ans);

// let n = "24"
// console.log(n);


// Constructing String from binary tree





// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             console.log(root.left);
//             console.log(root.right);
//         }
//     }
// }

// let root = [1,2,3,4]
// let bst = new BinarySearchTree();
//  bst.preOrder(1)
//  bst.preOrder(2)
//  bst.preOrder(3)
//  bst.preOrder(4)




