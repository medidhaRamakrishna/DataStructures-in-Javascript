function queue(){
	this.storage={};
	this.front=1;//deletion at front
	this.rear=1;//insertion at rear
}

//get the size
queue.prototype.size=function(){
	return this.rear-this.front;
}

//adding items to queue at the rear 
queue.prototype.enQueue=function(data){
	this.storage[this.rear++]=data;
}
//removing items from queue at front side	
queue.prototype.deQueue=function(){
	var data=this.storage[this.front];
	delete this.storage[this.front];
	if(this.front!==this.rear){
	this.front++;
	}
	return data;
}
	


var myQueue=new queue();
myQueue.enQueue(1);
myQueue.enQueue(2);
myQueue.size();
myQueue.enQueue(3);
myQueue.deQueue();
myQueue.size();
myQueue.enQueue(4);
myQueue.size();
myQueue.enQueue(5);
myQueue.size();
myQueue.deQueue();
myQueue.size();
myQueue.deQueue();
myQueue.size();
myQueue.deQueue();
myQueue.deQueue();
myQueue.deQueue();
myQueue.size();
