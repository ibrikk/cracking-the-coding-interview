function Node(data){
  this.data = data; 
  this.next = null; 
  
  this.append = function(dataToAppend){
    let lastNode = new Node(dataToAppend);
    let node = this; 
    while(node.next !== null){
      node = node.next; 
    }
    
    node.next = lastNode; 
  };
  
  this.print = function(){
    let node = this;
    
    let nodeString = ""; 
    while(node !== null){
      nodeString += node.data + " -> ";
      node = node.next; 
    }
    
    nodeString += null; 
    
    console.log("Singly linked list: "+nodeString); 
  };
  
  this.get = function(data){
    let node = this; 
    
    while(node !== null){
      if(node.data === data){
        return node; 
      }
      node = node.next; 
    }
    return false; 
  };
  
  this.replace = function(data, newNode){
    let node = this; 
    
    while(node !== null){
      if(node.data === data){
        console.log(newNode);
        node = newNode; 
        return true; 
      }
      node = node.next; 
    }
    
    return false; 
  };
}

function deleteNodeInMiddle(node){
  node = node.next; 
  return node; 
}

var node = new Node("a");
node.append("b");
node.append("f");
node.append("g");
node.append("z");
node.append("z");
node.append("f");
node.append("a");
node.append("b");
node.append("b");
node.print(); 

node.replace("g", deleteNodeInMiddle(node.get("g"))); 

node.print(); 