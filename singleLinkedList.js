var node=function(data){
	this.data=data;
	this.next=null;
}
var singleLinkedList=function(){
	this.head=null;
	this.length=0;
}

//opertaions of single linked list
singleLinkedList.prototype.insertion=function(data){
	var newNode=new node(data);
	debugger;
	//first scenario head is null so no items added
	if(!this.head){
		this.head=newNode;
		this.length++;
		return newNode;
	}else{
		var temp=this.head;
		while(temp.next){
			temp=temp.next;
		}
		temp.next=newNode;
		this.length++;
	}
	return newNode;
	
}

//search for the element in the linkedList
singleLinkedList.prototype.searchNode=function(data){
		debugger;
		if(this.length<1){
		throw  new Error ("non-existent node in this list")
	}
	var temp=this.head;
	if(!temp){
		return null;
	}
	while(temp){
		if(temp.data==data){
			return temp;
		}
		temp=temp.next;
	}
	return null;
}

//serch based on position
singleLinkedList.prototype.searchNodeAt=function(position){
		debugger;
	if(position>this.length || this.length<1||position<1){
		throw  new Error ("non-existent node in this list");
	}
	var temp=this.head;
	var pos=1;
	while(temp){
		if(pos==position){
			return temp.data;
		}
		pos++;
		temp=temp.next;
	}
	return null;
}

//remove item from single Linked list
singleLinkedList.prototype.remove=function(data){
		debugger;
	if(this.length<1){
		throw  new Error ("non-existent node in this list");
	}
	var previousNode=null,nodetoDelete,currentNode=this.head;
	while(currentNode){
		if(currentNode.data==data){
			if(previousNode==null){
				nodetoDelete=this.head;
				this.head=this.head.next;
			}else{
				nodetoDelete=currentNode;
				previousNode.next=currentNode.next;
			}
				this.length--;
				return nodetoDelete;
		}
		previousNode=currentNode;
		currentNode=currentNode.next;
		
	}
	
	throw  new Error ("non-existent node in this list");
}


//remove item from linked list based on position

singleLinkedList.prototype.removeNodeAt=function(position){
	if(position<1 ||this.length<position||this.length<1){
		throw new Error("non-existent node in this list");
	}
	var pos=1;
	var deletedNode,previousNode=null;
	var currentNode=this.head;
	while(currentNode){
		if(position==1){
			deletedNode=this.head;
			this.head=this.head.next;
			this.length--;
			return deletedNode;
		}else if(pos==position){
				deletedNode=currentNode;
				previousNode.next=currentNode.next;
				this.length--;
				return deletedNode;
		}
		previousNode=currentNode;
		currentNode=currentNode.next;
		pos++;	
	}
	throw  new Error ("non-existent node in this list");
}

