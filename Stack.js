function Stack(){
 this.storage={};
 this._size=0;
}
//insertion will start from index 1 to track the actual size
Stack.prototype.push=function(data){
	this._size++;
	this.storage[this._size]=data;
	
}

Stack.prototype.pop=function(){
	if(this._size){
	var data=this.storage[this._size];	
		delete this.storage[this._size];
		this._size--;
		return data;
	}else{
		return null;
	}
}/*
Use a stack's current size to get the most recently added data.
Delete the most recently added data.
Decrement _this._size by one.
Return the most recently deleted data.
*/


var myStack=new Stack();
myStack.push(1);
myStack.push('G');
myStack.pop();
myStack.push(2);
myStack.push('F');
myStack.pop();