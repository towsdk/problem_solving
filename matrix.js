// Bismillah-hir-rahmanir-rahmanir

// const matrix = [
//     [0, 1, 2],
//     [0, 2, 8],
//     [3, 9, 2]
// ]

// console.log(matrix[0][2])

// const prompt = require('prompt-sync')();

// var fname = prompt("Enter YOur first name: ")

// var lname = prompt("Enter your last name: ")

// var liton = "hello"

// console.log("Your Full name is:", fname, lname, liton);


// Binary Search Trees Class

// class Node{
//     constructor(val){
//         this.value = val
//         this.left = null
//         this.right = null
//     }
// }

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(val){
        const newNode = new Node(val)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
           if(root.left === null){
            root.left = newNode
           } else{
            this.insertNode(root.left, newNode)
           }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right, newNode)
            }

        }
    }

    search(root, val){
        if(!root){
            return false
        }else{
            if(root.value === val){
                return true
            }else if(val < root.value){
                return this.search(root.left, val)
            }else{
                return this.search(root.right, val)
            }
        }
    }

    /* preorder in binary search trees */

    preOrder(root){
         // 10, 5, 15, 3, 7, 6, 19, 18, 17 36
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        // 10, 5, 15, 3, 7, 6, 16,19, 18, 17, 36
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    levelOrder(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value){
        if(root === null){
            return root
        }

        if(value < root.value){
            root.left = this.deleteNode(root.left, value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right, value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

}


// const bst = new BinarySearchTree()
// console.log("Tree is empty?", bst.isEmpty());

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)

// console.log(bst.root);

// bst.levelOrder()

// bst.delete(10)

// bst.levelOrder()

// console.log(bst.root);

// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));
// bst.levelOrder();

// bst.preOrder(bst.root);

// bst.inOrder(bst.root)


// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 5));
// console.log(bst.search(bst.root, 15));



// Now this is the time for making a hash table 
/*
1. Hash table is look like Object and map
2. But it has own 
3.it's synchronised and has ability to handle multiple threads
 */

class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value){
        let index = this.hash(key)
        // this.table[index] = value
        let bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key, value]]
        }else{
            const sameKeyType = bucket.find(item => item[0] === key)
            if(sameKeyType){
                sameKeyType[1] = value
            }else{
                bucket.push([key, value])
            }
        }
    }

    get(key){
        let index = this.hash(key)
        // return this.table[index]
        let bucket = this.table[index]
        if(bucket){
            let sameKeyType = bucket.find(item => item[0] === key)
           if(sameKeyType){
            return sameKeyType[1]
           }
        }
        return undefined
    }

    remove(key){
        let index = this.hash(key)
        // this.table[index] = undefined
        const bucket = this.table[index]
        if(bucket){
            const sameKeyType = bucket.find(item => item[0] === key)
            if(sameKeyType){
                bucket.splice(bucket.indexOf(sameKeyType), 1)
            }
        }
    }

    display(){
        for(let i=0; i< this.table.length; i++){
          if(this.table[i]){
            console.log(i, this.table[i])
          }
        }
      }
}


// const table = new HashTable(50)

// table.set("name", 76)
// table.set("mane", 6)
// table.set("aged", 25)
// table.display()


// table.set("mane", 'world')
// table.set("amne", "gk")
// table.display()
// console.log(table.get("age"));

// Now it's time to write linked list data structure

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        if(this.size === 0){
            return "Empty"
        }
    }

    getSize(){
       return this.size
    }

    prepend(value){ //O(1)
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){ // O(n)
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(value, index){       
        if(index < 0 && index > this.size){
            return
        }
        if(index === 0){
            this.prepend(value)
        }else{
            let node = new Node(value)
            let prev = this.head
            for(let i = 0; i < index-1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeNode(index){
        if(index < 0 || index >= this.size){
            return null
        }
        let removeNode
        if(index === 0){
           removeNode = this.head
           this.head = this.head.next
        }else{
            let prev = this.head
            for( let i = 0; i< index - 1; i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }

    removeByValue(value){
        let prev = this.head
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            this.size--
            this.head = prev.next
            return value
        }else{
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                let removeNode
                removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null
        }

        
    }

    search(value){
        if(this.isEmpty()){
            return -1
        }

        let i = 0
        let curr = this.head
        while(curr){
            if(curr.value === value){
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    print(){
        if(this.isEmpty()){
            console.log('list is Empty');
        }else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value + ','}`
                curr = curr.next
            }
            console.log(listValues);
        }
    }
}

// const lList = new LinkedList()
// console.log("List is Empty? ", lList.isEmpty());
// console.log("List size? ", lList.getSize());
// lList.insert(10, 0)
// lList.print()
// lList.insert(20, 1)
// lList.insert(30, 2)
// lList.insert(34, 1)
// lList.print()

// console.log(lList.removeNode(1));
// lList.print()

// console.log(lList.removeByValue(20));
// lList.print()

// console.log(lList.search(30));

// lList.reverse()
// lList.print()


// Graph Datastructure

// First adjacency matrix of a Graph

const matrix = [ // Time complexity O(n)
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
]

// console.log(matrix[0][1]);

// const adjacencyList = { // Time complexity is O(1)
//     'A': ['b'],
//     'B': ['a', 'c'],
//     'C': ['b']
// }

// console.log(adjacencyList['b'])

class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex[vertex1]
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex[vertex2]
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].delete(vertex2) 
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }

        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex, adjacentVertex)
        }
    }

    hasEdge(vertex1, vertex2){
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + " ->" + [...this.adjacencyList[vertex]]);
        }
    }

}

// const grpah = new Graph()
// grpah.addVertex("A")
// grpah.addVertex("B")
// grpah.addVertex("C")


// grpah.addEdge("A", "B")
// grpah.addEdge("B", "C")

// grpah.display()
// console.log(grpah.hasEdge("A", "B"));

// grpah.removeVertex("A")
// grpah.display()


/*
List of things have to learn

1. Priority queue
2. Circular linked lists
3. AVL trees, red black trees and tries
4. Directed acyclic graphs
5. Prim's, Kruskal's and Floyd's algorithms
6. Solve problems that utilize these data structures
*/

// Linear Search . Basic

// class LinearSerach{
//     constructor(array){
//         this.array = array
//     }

//     search1(value){
//         let i = 0
//         for(i = 0; i < this.array.length; i++){
//             if(this.array[i] === value){
//                 return i
//             }
//         }
//         i = -1
//         return i
//     }
// }

// const lsar = new LinearSerach(['60', '3', '2', '5', '9'])

// console.log(lsar.search1('6'));
// Time complexity of linear serach is 0(n) && space complexity in 0(1)

// Binary Search

// class BinarySearch{
//     constructor(array){
//         this.array = array
//     }
//     search(value){
//         this.array.sort((a,b)=> a - b)
//        console.log(this.array.length);
//         let left = 0
//         let right = this.array.length - 1
//         while(left <= right){
//             let mid = Math.floor((left + right) / 2)
//             if(this.array[mid] == value){
//                 return mid
//             }
//             if(this.array[mid] < value){
//                 left = mid + 1
//             }else{
//                 right = mid - 1
//             }
//         }
//         return -1
//     }
// }

// let array = [4, 1, 9, 10, 20, 40, 22, 100, 88, 77]
// const bsa = new BinarySearch(array)
// console.log(bsa.search(77));

// class SelectionSort{
//     constructor(array){
//         this.arry = array
//     }

//     makeSort(){
//         let i, j
//         let tmp_vr
//         let min_index 
//         for(let i = 0; i< this.arry.length - 1; i++){
//             min_index = i
//             for( j = i+1; j< this.arry.length ; j++){
//                 if( this.arry[j] < this.arry[min_index] ){
//                     min_index = j
//                 }
//             }
//             if(min_index !=i){
//                 tmp_vr = this.arry[i]
//                 this.arry[i] = this.arry[min_index]
//                 this.arry[min_index] = tmp_vr
//             }
//         }
//         return this.arry
//     }
// }

// const insrt = new SelectionSort([4, 1, 9, 10, 20, 40, 22, 100, 88, 77, 99])
// console.log(insrt.makeSort());
/* Time complexity is 0(n^2) */
// const arr = [4, 1, 9, 10, 20, 40, 22, 100, 88, 77]
// arr.sort((a,b)=>{ 
// return a -b })
// console.log(arr);

// Bubbl sort time complexity is 0(n^2)

// class BubbleSort{
//     constructor(array){
//         this.array = array
//     }
//     search(){
//         let temp
//         let i, j
//         for(i = 0; i < this.array.length; i++){
//             for(j = 0; j < this.array.length-i-1; j++){
//                 if(this.array[j] > this.array[j+1]){
//                     temp = this.array[j]
//                     this.array[j] = this.array[j+1]
//                     this.array[j+1]= temp
//                 }
//             }
//         }
//        return this.array
//     }
// }

// const bbsrt = new BubbleSort([11, 4, 9, 2])
// console.log(bbsrt.search());


// Insertion Sort Algorithm. Time complexity is 0(n^2)

// class InsertionSort{
//     constructor(array){
//         this.array = array
//     }

//     search(){
//         let i, j, item
//         for(i = 1; i < this.array.length; i++){
//             item = this.array[i]

//             j = i - 1
//             while( j >= 0 && this.array[j] > item){
//                 this.array[j + 1] = this.array[j]
//                 j = j - 1
//             }
//             this.array[j + 1] = item
//         }
//         return this.array

//     }
// }

// const insrt = new InsertionSort([4, 2, 9, 3, 1])
// console.log(insrt.search());

// Heap 

// function heapify(arr1, heap_size, i){
//     var largest = i
//     var l = 2 * i + 1 // var l = left(i)
//     var r = 2 * i + 2 // var r = right(i)

//     if( l < heap_size && arr1[largest] < arr1[l]){
//         largest = l
//     }
//     if(r < heap_size && arr1[largest] < arr1[r]){
//         largest = r
//     }

//     if(largest != i){
//         var swap = arr1[i]
//         arr1[i] = arr1[largest]
//         arr1[largest] = swap

//         heapify(arr1, heap_size, largest)
//     }

// }

// function heapcreate(arr1){
//     let N = arr1.length

//     for(var i = Math.floor( N / 2) - 1; i >= 0; i--){
//         heapify(arr1, N, i)
//     }
// }

// function printArray(arr1){
//     var N = arr1.length
//     var s = ""
//     for(let i = 0; i < N; i++){
//         s += arr1[i]+" -"
//     }
//     console.log(s);
// }

// function heapSort(arr){
//     var N = arr.length
//     for( let i = Math.floor(N / 2) -1; i >= 0; i--){
//         heapify(arr, N, i)
//     }

//     for( let i = N - 1; i > 0; i--){
//         let temp = arr[0]
//         arr[0] = arr[i]
//         arr[i] = temp

//         heapify(arr, i, 0)
//     }
// }
// var arr1 = [12, 11, 13, 5, 6, 7];;

// heapcreate(arr1)
// heapSort(arr1)
// // // console.log(Math.floor(11/2));

// printArray(arr1)
//Heap sort



function heapify(arr1, heap_size, i){
    var largest = i
    var l = 2 * i + 1 // var l = left(i)
    var r = 2 * i + 2 // var r = right(i)

    if( l < heap_size && arr1[largest] < arr1[l]){
        largest = l
    }
    if(r < heap_size && arr1[largest] < arr1[r]){
        largest = r
    }

    if(largest != i){
        var swap = arr1[i]
        arr1[i] = arr1[largest]
        arr1[largest] = swap

        heapify(arr1, heap_size, largest)
    }

}

function heapcreate(arr1){
        let N = arr1.length
    
        for(var i = Math.floor( N / 2) - 1; i >= 0; i--){
            heapify(arr1, N, i)
        }
}

// function extractMax(arr1){
//     let heap_size = arr1.length
//     let maxItem = arr1[0]

//     arr1[0] = arr1[heap_size]

//     heap_size -= 1

//     heapify(arr1, heap_size, 0)

//     return maxItem
// }

function parent(i){
    return parseInt(i-1)/2
}
function insertNode(arr1, node){
    let i, p, t
    let heap_size = arr1.length
    heap_size +=1
    arr1[heap_size] = node
    i = heap_size

    while( i > 0 && arr1[i] > arr1[parent(i)]){
        p = parent(i)

        t = arr1[p]
        arr1[p] = arr1[i]
        arr1[i] = t

        i = p
    }
    return arr1
}
// var arr1 = [3, 7, 99, 23, 100, 29, 33,88, 115, 123]
// // var arr1 = [2, 5, 9]
// heapcreate(arr1)
// // console.log(arr1);
// // console.log(extractMax(arr1));

// console.log(insertNode(arr1, 2));



// How to create max_heap and create a heap

function maxHeapify(arr, size, index){
    let papa = Math.floor((index - 1)/2)
    if(arr[papa] >= 0){
        if(arr[papa] < arr[index]){
            let temp = arr[papa]
            arr[papa] = arr[index]
            arr[index] = temp
            
            maxHeapify(arr, size, parent)
        }
        index --
        maxHeapify(arr, size, index)
    }
    return arr
}

const arr = [2, 3, 9, 23, 90, 21, 33]
let size = arr.length
let index = arr.length - 1
let ans = maxHeapify(arr, size, index)
console.log(ans);
// function printArray(arr, n){
//     for(let i = 0; i < n; i++){
//         console.log(arr[i] + " ");

//         console.log("</br>");
//     }
// }

// printArray(ans, size)