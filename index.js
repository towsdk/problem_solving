// class Dpulicates{
//      findDuplicates(arr){
//         // duplicates = [1, 1, 2, 2]
//         arr.sort()
//         let duplicates = []
//         for(let i=0; i < arr.length; i++){
//             if(arr[i] == arr[i+1]){
//                 duplicates.push(arr[i], arr[i + 1])
//             }
//         }
//         return duplicates
//     }
// }

// let res = new Dpulicates()
// let ans = res.findDuplicates([1, 2, 1, 3, 4, 2])
// console.log(ans);
// console.log(arr);

// 983. Minimum cost for tickets 
// hints for dp(dynamic programming) -> Minimum, maximum or number of ways 
1. // 1-day pass sold for costs[0] dollars
1. // 7-day pass sold for costs[1] dollars
1. // 30-day pass sold for costs[2] dollars 

// Input days = [1, 4, 6, 7, 8, 20], const = [2, 7, 15]

// class MinimumCost{
//     minCost(days, costs) {
        
//     }
// }

// 394. Target Sum 
// setTimeout(() => {
//     console.log("Settime out");
// }, 3000);
// setInterval(() => {
//     console.log("set Interval");
// }, 1000);

// class TargetSum{
//     constructor(target){
//         this.target = target

//     }
//     targetSum(nums){
//         let output = 0;
//         for(let i = 0; i < nums.length; i++){
//             let sum = - nums[i]
//             for(let j = 1; j < nums.length; j++){
//                 sum = sum + nums[j]
//             }
//             if(sum == this.target){
//                 output = output + 1;
//             }
//         }
//         return output;
//     }

// }

// let tgs = new TargetSum(3);
// let ans = tgs.targetSum([1,1,1,1,1]);
// console.log(ans);

// Find out inflation rate in next 10 years:

// function inflation(amount, rate) {
//     let mainMoney;
//     function year(y){
//         let oneYear = (amount*rate)/100
//         return mainMoney = (amount +  (oneYear*y))
//     }
//     return year(10)
// }

// let ans = inflation(74, 6);
// console.log(ans + " M");



// function recursion(n){
//     let ans;
//     if (n == 1) return 1
//     for(let i = 5; i >0 ; i--){
//         console.log("i: " + i);
//         while (i) {
//             console.log("val of n is: ", n);
//          return ans = n * recursion(n - 1)
         
//         //   5 * 4 * 3 * 2 * 1
//         }
//     }
//     return ans
// }

// let ans = recursion(4)
// console.log(ans);


// function pyramid(n) {

 

//     for(let i=1; i<= n; i++){
  
//       let str = ' '.repeat(n-i);
  
//       let str2 = '*'. repeat(2*i - 1)
  
   
  
//       console.log(str + str2 + str);
        
//     }
  
//   }
  
//   pyramid(5);




// function isRecursion(n){
//     let ans1
//     // let arr = []
//     if (n == 0) return 1
//     // if (n == 2) console.log("2");
//     for(i = 5; i > 0; i--){
//         console.log(n);
//         while (i){
//             // console.log(n);
//              let ans = n * isRecursion(n - 1)
//              return ans1 = ans
//             //6 +  5 + 4 + 3 + 2 + 1 + 1
//         }
//     }
//     return ans1
// }


// console.log(isRecursion(6));


// sliding window technique
// function slidingWindow(numbers){
//       let maxSub = numbers[0]
//       let currentSum = 0

//       for(let n = 0; n < numbers.length; n++){
//          if( currentSum < 0) currentSum = 0
//          currentSum += numbers[n]
//          maxSub = Math.max(maxSub, currentSum)   
//       }
//       return maxSub
// }

// console.log(slidingWindow([-2,1,-3,4,-1,2,1,-5,4]));
            



// 169. Majority Element 
// Majority element > n/2

// function majority_element(nums){
//       let dp = {}
//       let count = 1
//       for(let i=0; i < nums.length; i++){
//             // console.log(nums[i]);
//             if(nums[i] in dp) count += 1
//             dp[nums[i]] = i
//       }
//       return dp
//       return count
// }

// console.log(majority_element([3,2,3,3,3]));


// function majority_element(nums){
//       let res =0, count = 0;
//       for(let i= 0; i < nums.length; i++){
//             if (count == 0) res = nums[i]
//             count += (nums[i] == res ? 1 : -1)
//       }
//       return res 
// }

// console.log(majority_element([3,2,3, 4, 4, 4]));


// let arr = ["apple", "mango", "apple",
//           "orange", "mango", "mango"];

// function removeDuplicates(arr) {
//     return arr.filter((item,
//         index) => arr.indexOf(item) === index);
// }
// console.log(removeDuplicates(arr));

// let nums = [5, 5,5, 1,1,1,2,2,3, 4,4,4]
// nums.filter((el, i)=> {
//       console.log(nums.indexOf(el) === i); 
     
// })


// 80. Remove Duplicates from Sorted Array 
// space complexity is - O(1) 

// function removeDuplicates(nums){
//       if(nums.length === 0) return 0
//       let k = 1
//       for(let i = 1; i < nums.length; i++){
//             if(nums[i] !== nums[k - 1]) {
//                   // return true
//                 nums[k] = nums[i]
//             //     console.log(nums[k]);
//                 k++;   
//             }
//             // console.log(k);
//             // return false
//       }
//       return k
// }

// console.log(removeDuplicates([1,1,2]));


// remove Duplicates II from sorted array


// var removeDuplicates = function(nums){
//       let k = 0
//       for(let i = 0; i < nums.length; i++){
//             if(nums[i] === nums[i + 1] && nums[i + 1] === nums[i + 2]){
//                   continue
//             }else{
//                   nums[k] = nums[i]
//                   k++
//             }
//       }
//       return nums
// }

// console.log(removeDuplicates([1,1,2,2,3,3,3,4]));



// 637. Average of Levels in Binary Tree 
// Input: [3,9,20,null, null, 15, 7]
// [3.0000, 14.5000,11.0000]
// First try to make any solution using brute force 
// Every level has to divide it's node number 

// function averageLevels(nums){
//       let res = []
//       for(let i = 0; i < nums.length; i++){
//             let temp = 0
//             if(i = 0) res.push(nums[i])
//             if(i < 0 &&  i >=2){
//                   temp += nums[i] / i
//             }
//             res.push(temp)
            
            
//       }
//       return res
// }
// console.log(averageLevels([3,9,20,null,null, 15,7]));

// #### // Graph Data Structure 
// Depth First Search - Stack
// Breadth First Serach - Queue

// const depthFirstPrint = (graph, source) => {
//       const stack = [source]; 
//       while (stack.length > 0){
//             let current = stack.pop()
//             console.log(current);
//             for (let neighbour of graph[current]){
//                   stack.push(neighbour);
//             }
//             return stack
//       }
      

// }

// const graph = {
//       a: ['c', 'b'],
//       b: ['d'],
//       c: ['e'],
//       d: ['e'],
//       e: [],
//       f: []
// }
// console.log(depthFirstPrint(graph, 'a'));

//###// Recursive version of depth search graph 
// const depthFirstValue =(graph, source)=> {
//       console.log(source);
//       for(let src of graph[source]){
//             depthFirstValue(graph,src)
//       }//a,b,d,f,
// }

// const graph = {
//       a: ['b', 'c'],
//       b: ['d'],
//       c: ['e'],
//       d: ['f'],
//       e: [],
//       f: []
// }
// console.log(depthFirstValue(graph, "a"));


// Graph algorithm Breadth First Algorithm

// const breadthFirstPrint = (graph, source) => {
//       const stack = [source]

//       while(stack.length > 0){
//             const current = stack.pop()
//             console.log(current);

//             for(let neighbour of graph[current]){
//                   stack.push(neighbour);
//             }
//       }
// }

// const graph = {
//       a: ['b', 'c'],
//       b: ['d'],
//       c: ['e'],
//       d: ['f'],
//       e: [],
//       f: []
// }
// console.log(breadthFirstPrint(graph, 'a'));

// const undirectedPath = (edges,nodeA, nodeB) => {
//       const graph = buildGraph(edges)
//       console.log(graph);
// }
// const buildGraph = (edges) => {
//       const graph = {};

//       for(let  edge of edges){
//             const [a,b] = edge
//             if(!(a in graph)) graph[a] = []
//             if(!(b in graph)) graph[b] =[]
//             graph[a].push(b);
//             graph[b].push(a);
//       }

//       return graph;
// }

// const edges = [
//       ['i','j'],
//       ['k','i'],
//       ['m','k'],
//       ['k','t'],
//       ['o','n']
// ]
// undirectedPath(edges);


// 1791. Find Center of Star Graph

// star graph is a graph where there is one center node 
// Hints to solve the problem 
// 2D array ..center has more than one edge
// center is also connected to all other nodes 
// any two edges must have a common node, which is the center

// function starGraph(edges){
      
// }
// let edges = [[1,2],[2,3],[4,2]]
// console.log(starGraph(edges));

// 0: [1,2], 2,
// 1: [2,3], 2,
// 2: [4,2], 2,

// const depthFirstGraph = (graph, source) => {
//       const stack = [source]
//       while (stack.length > 0){
//             const current = stack.pop();
//             console.log(current);
//             for(let i of graph[current]){
//                   stack.push(i)
//             }
//             // console.log(stack);
//       }
// }
// const depthFirstPrint = (graph, source) => {
//       console.log(source);
//       for(let neighbour of graph[source]){
//             depthFirstPrint(graph, neighbour)
//       }
// }

// const graph = {
//       a : ['c', 'b'],
//       b: ['d'],
//       c: ['e'],
//       d: ['f'],
//       e: [],
//       f: []
// }

// depthFirstPrint(graph, "a")


// const breadthFirstPrint = (graph, source) => {
//       const queue = [ source ]
//       while(queue.length > 0){
//             let current = queue.shift()
//             console.log(current);
//             for(let neighbour of graph[current]){
//                   queue.push(neighbour)
//             }
//       }

// }

// const breadthFirstPrint = (graph, source) => {
//       const queue = [source];

// }
// // acbedf
// const graph = {
//       a : ['c', 'b'],
//       b: ['d'],
//       c: ['e'],
//       d: ['f'],
//       e: [],
//       f: []
// }
// breadthFirstPrint(graph, "a")


// Has_Path Graph problem solution 
// const hsaPath = (graph, source,dst) => {
//       console.log(source);

//       for(let neighbour of graph[source]){
//             hsaPath(graph, neighbour);
//       }
// }


// const hsaPath = (graph, src, dst) => {
//       // console.log(src);
//       if (src === dst) return true
//       for(let neighbour of graph[src]){
//             if(hsaPath(graph, neighbour, dst) === true){
//                   return true
//             }
//       }
//       return false
// }

// const hsaPath = (graph, src, dst) => {
//       const queue = [src]

//       while (queue.length > 0){
//             const current = queue.shift()

//             if(current === dst) return true
//             for(let neighbour of graph[current]){
//                   queue.push(neighbour)
//                   // console.log(neighbour);
//             }
//       }
//       return false
// }
// const graph = {
//       f : ['g', 'i'],
//       g : ['h'],
//       h : [],
//       i : ['g', 'k'],
//       j : ['i'],
//       k : []
// }
// let x = hsaPath(graph, "f", "k")
// console.log(x);

// const undirectedPath = (edges, src, dst) => {
//       const graph = buildGraph(edges)
//       return hasPath(graph, src, dst, new Set())
// }

// const hasPath = (graph, src, dst, visited) => {
//       if (src === dst) return true
//       if(visited.has(src)) return false

//       visited.add(src)

//       for(let neighbour of graph[src]){
//             if(hasPath(graph, neighbour, dst, visited) === true){
//                   return true
//             }
//       }
//       return false
// }
// const buildGraph = (edges) => {
//       const graph = {}
//       for (let edge of edges){
//             const [a, b] = edge
//             if(!(a in graph)) graph[a] = []
//             if(!(b in graph)) graph[b] = []
//             graph[a].push(b)
//             graph[b].push(a)
//       }
//       // console.log(graph);
//       return graph
// }
// const edges = [
//       ['i','j'],
//       ['k','i'],
//       ['m', 'k'],
//       ['k', 'l'],
//       ['o', 'n']
// ]
// let ans = undirectedPath(edges, 'j', 'm')
// console.log(ans);

// ** COMPONENTS COUNT IN GRAPH ** //
// const connectedComponent = (graph) => {
//       const visited = new Set();
//       let count = 0

//       for(let node in graph){
//             console.log(visited);
//             if(explore(graph, node, visited) === true){
//                   count += 1
//             }
//       }
//       return count 
// }
// const explore = (graph, current, visited) => {
//       if(visited.has(String(current)))  return false

//       visited.add(String(current))
//       for(let neighbour of graph[current]){
//             explore(graph, neighbour, visited)
//       }
//      return true; 
// }

// const graph = {
//       0 : [8,1,5],//first ite:0,8, , !5, true
//       1 : [0], // 1 //2nd ite: skip
//       5 : [0,8],//5, !8 //3rd ite: skip
//       8 : [0,5],//8,0,5, // 4th ite: sikp
//       2 : [3,4], // 5th iter: 2, 3, !4, return true
//       3 : [2,4],// 3,!2, 4, //skip
//       4 : [3,2], // !3, !2,  
// }

// let ans = connectedComponent(graph)
// console.log(ans);


// Find the largest component in Graph


// const largestComponent = (graph) => {
//       const visited = new Set()
//       let longest = 0
//       for(let node in graph){
//             const size = explore(graph, node, visited)
//             if(size > longest) longest = size
//       }
//       console.log('longest',longest);
//       return longest
// }

// const explore = (graph, node, visited) => {
//       if(visited.has(node)) return 0

//       visited.add(node)
//       let size = 1

//       for(let neighbour of graph[node]){
//             size += explore(graph, neighbour, visited)
//             console.log('size',size);
//       }
//       return size 
// }

// const graph = {
//       0: ['8','1', '5'],
//       1: ['0'],
//       5: ['0','8'],
//       8: ['0', '5'],
//       2: ['3', '4'],
//       3: ['2', '4'],
//       4: ['3', '2']
// }
// largestComponent(graph)



// Shortest Path of Graph
// const shortestPath = (edges, nodeA, nodeB) => {
//     const graph = buildGraph(edges)
//     const visited = new Set([nodeA])

//     const queue = [[nodeA, 0]]

//     while(queue.length > 0){
//         const [node, distance] = queue.shift()

//         if(node === nodeB) return distance
//         for(let neighbour of graph[node]){
//             if(!visited.has(neighbour)){
//                 visited.add(neighbour)
//                 queue.push([neighbour, distance + 1])
//             }
//         }
//     }

//     return -1
// }

// const buildGraph = (edges) => {
//     const graph = {}

//     for(let edge of edges){
//         const [a, b] = edge
//         if(!(a in graph)) graph[a] = []
//         if(!(b in graph)) graph[b] = []
//         graph[a].push(b)
//         graph[b].push(a)
//     }

//     return graph
// }

// const edges = [
//     ['w', 'x'],
//     ['x', 'y'],
//     ['z', 'y'],
//     ['z', 'v'],
//     ['w', 'v']
// ]
// console.log(shortestPath(edges, 'w', 'z'));

// Island Count
// const islandCount = (grid) => {
//     const visited = new Set()
//     let count = 0
//     for(let r = 0; r < grid.length; r += 1){
//         for(let c = 0; c < grid[0].length; c += 1){
//             if(explore(grid, r, c, visited) === true){
//                 count += 1
//             }
//         }
//     }
//     return count
// }
// const explore = (grid, r, c, visited) => {
//     const rowInbounds = 0 <= r && r < grid.length
//     const colInbounds = 0 <= c && c < grid[0].length
//     if(!rowInbounds || !colInbounds) return false

//     if(grid[r][c] === 'w') return false

//     const pos = r + ',' + c
//     if(visited.has(pos)) return false
//     visited.add(pos)

//     explore(grid, r-1,c,visited)
//     explore(grid, r+1,c,visited)
//     explore(grid, r,c+1,visited)
//     explore(grid, r,c-1,visited)

//     return true
// }
// const grid = [
//     ['w', 'L', 'w', 'L', 'L'],
//     ['w', 'L', 'w', 'w', 'L'],
//     ['w', 'w', 'w', 'L', 'w'],
//     ['w', 'w', 'L', 'L', 'w'],
//     ['L', 'w', 'w', 'L', 'L'],
//     ['L', 'L', 'w', 'w', 'w'],
    
// ]
// console.log(islandCount(grid));


// Minimum Island Count Using grid --- Graph Problem

// const minimumIsland = (grid) => {
//     const visited = new Set()

//     let minSize = Infinity;
//     for(let r = 0; r < grid.length; r++){
//         for(let c = 0; c < grid[0].length; c++){
//             const size = exploreSize(grid, r, c, visited);
//             console.log(size);
//             if(size > 0 && size < minSize){
//                 minSize = size;
//             }
//         }
//     }
//     console.log(minSize);
//     return minSize
// }

// const exploreSize = (grid, r, c, visited) => {
//     const rowInbounds = 0 <= r && r < grid.length
//     const colInbounds = 0 <= c && c < grid[0].length
//     if(!rowInbounds || !colInbounds) return 0

//     if(grid[r][c] === 'W') return 0

//     const pos = r + ',' + c
//     if(visited.has(pos)) return 0
//     visited.add(pos)

//     let size = 1
//     size += exploreSize(grid, r - 1, c, visited)
//     size += exploreSize(grid, r+1, c, visited)
//     size += exploreSize(grid, r, c-1, visited)
//     size += exploreSize(grid, r, c+1, visited)
//     return size
// }
// const grid = [
//     ['W', 'L', 'W', 'W', 'W'],
//     ['W', 'L', 'W', 'W', 'W'],
//     ['W', 'W', 'W', 'L', 'W'],
//     ['W', 'W', 'L', 'L', 'W'],
//     ['L', 'W', 'W', 'L', 'L'],
//     ['L', 'L', 'W', 'W', 'W'],
//   ];
  
//   minimumIsland(grid); // -> 2

// Graph Leetcode problem 
// There are two types of Graph. ->Directed..->Undirected
Directed Graph





















































































































