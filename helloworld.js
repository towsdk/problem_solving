// function lastStonesWeight(stones){
//     let res = stones[stones.length - 1]
//     for(let i= stones.length - 2; i >= 0 ; i--){
//         if(res > stones[i]){
//             res = Math.abs(res - stones[i])
//         }
//         if(res == stones[i]){
//             res = 0
//         }
//     }
//     return res
// }

class MaxPriorityQueue{
    constructor(){
        let arr1 = new Array()
    }

    enque(element){

    }
}
var lastStonesWeight = function(stones){
    const queue = new MaxPriorityQueue()

    for(let stone of stones) queue.enque(stone)
    while(queue.length > 1){
        let first = queue.dequeue().element
        let second = queue.dequeue().element
        if(first !== second) queue.enqueue(first - second)
    }

    return queue.length === 0 ? 0 : queue.front().element

}

const stones = [2,7,4,1,8,1]
stones.sort()
console.log(stones);
let res = lastStonesWeight(stones)
console.log(res);

