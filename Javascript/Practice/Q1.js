/**
 * Create a Class that represents a Queue
 * 
 *  - Quene obeys "F.I.F.O."rules (First in, First out)
 *  - Should have:
 *      + add/enqueue
 *      + Remove/dequeue
 *      + showNext/peek
 */


class Queue{
    constructor(line){
        this.line = line
    }

    enqueue(){
        this.line.push(users)
    }
    
    dequeue(){
        this.line.shift()
    }
    
    showNext(){
        console.log("Next, please" + this.line[0])
    
    }
}