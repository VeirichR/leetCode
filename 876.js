/**Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 */

// var middleNode = function(head) {
//     let result = (head.slice(Math.floor(head.length / 2), head.length));
    
//     return 
// };
var middleNode = function(head) {
    const result = {};
    let count = 0;
    
    while(head){
        result[count++] = head;
        head = head.next;
    }
    console.log(Math.floor(Object.keys(result).length/2))
    console.log(result[Math.floor(Object.keys(result).length/2)])
    return result[Math.floor(Object.keys(result).length/2)]; 
};

let head = [1,2,3,4,5,6]

console.log(middleNode(head))

/**
 * 1 - pegar o lenght do array
 * 2 - se for impar tem so um middle
 * 3 - se for par tem dois middle
 */