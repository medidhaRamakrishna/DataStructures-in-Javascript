var node=function(data){
	this.previous=null;
	this.data=data;
	this.next=null;
}
var doubleLinkedList=function(){
	this.head=null;//first node
	this.tail=null;//last node
	this.length=0;
	}

	/*adding new elements at tail need to maintain previuos and next address of nodes
	head will contain the first node and tail will contains the last node*/
doubleLinkedList.prototype.add=function(data){
	var newNode=new node(data);
	var temp=this.tail;
	
	if(!this.length){
		this.head=newNode;
		this.tail=newNode;
	}else{
		temp.next=newNode;
		newNode.previous=temp;
		this.tail=newNode;
	}
	this.length++;
	return newNode;
}
//Search at position
doubleLinkedList.prototype.searchAtNode=function(position){
var temp=this.head;	
var length=this.length;
var count=1;
if(position>length||length<1||position<1){
	throw new Error("non-existent node in this list")
}
while(temp){
	if(count==position){
		return temp.data;
	}
	count++;
	temp=temp.next;
}
throw new Error("non-existent node in this list")
}
//search using data
doubleLinkedList.prototype.search=function(data){
	var temp=this.head;
	var length=this.length;
if(length<1){
	throw new Error("non-existent node in this list");
}
while(temp){
	if(temp.data==data){
		return temp;
	}
	temp=temp.next;
}
	
}

//remove from double linked list based on data
doubleLinkedList.prototype.remove=function(data){
	var temp=this.head;
	var prev_temp=null;
	var temp2=null;
	var deletedNode;
	debugger;
	if(this.length<1){
		throw new Error("list is empty");
	}
	
	while(temp){
//delete node at head or tail		
		if(this.head.data==data||this.tail.data==data){
			if( this.length==1){
			deletedNode=this.head;
			this.head=null;
			this.tail=null;
			this.length=0;
			}else if(this.head.data==data){
						deletedNode=this.head;
						this.head=this.head.next;
						this.head.previous=null;
						this.length--;
					}else{
						deletedNode=this.tail;
						this.tail=this.tail.previous;
						this.tail.next=null;
						this.length--;
					}
			return deletedNode;
		}else if(temp.data==data){
//delete node in the middle			
				deletedNode=temp;
				prev_temp.next=temp.next;
				temp2=temp.next;
				temp2.previous=prev_temp;
				this.length--;
				temp=null;
				return deletedNode;
				
			}
		prev_temp=temp;			
		temp=temp.next;
	}
}

//delete based on position
doubleLinkedList.prototype.removeNodeAt=function(position){
	debugger;
	var deletedNode=null;
	var count=1;
	var pre_Node=null;
	var next_Node=null;
	var temp=this.head;
	//case-1:check for length 
	if(this.length<1||this.position<1||this.length<position){
		throw new Error("non-existent node in the list");
	}
//case-2:check for head node deletion
	if(position==1){
		deletedNode=this.head;
		this.head=this.head.next;
//2nd node exist then
		if(this.head){
			this.head.previous=null;
		}else{
//2nd node doesn't exist then			
			this.tail=null;
			
					}
		this.length--;
		return deletedNode;
	}else if(position==this.length){//case-3:check for tail node deletion
		deletedNode=this.tail;
		this.tail=this.tail.previous;
		this.tail.next=null;
		this.length--;
		return deletedNode;
	}
	while(temp){
		if(count==position){
		deletedNode=temp;		
		pre_Node=temp.previous;
		pre_Node.next=temp.next;
		next_Node=temp.next;
		next_Node.previuos=pre_Node;
		this.length--;
		temp=null;
		return deletedNode;
			
		}
		temp=temp.next;
		count++;
		
	}
	throw new Error("non-existent node in the list");
}

//display data of linked list
doubleLinkedList.prototype.print=function(){
	var temp=this.head;
	var index=1;
	while(temp){
		console.log(index+') '+temp.data);
		temp=temp.next;
		index++;
	}
}