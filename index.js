const linkedList = ()=>{

    const node = ()=>{


        return {
            nodeValue:null,
            nextNode:null
        };
    }

    return {
        head:node(),
        size:0,
        tail:function(){
            let currentNode= this.head;
                while (currentNode!=null) {
                    if (currentNode.nextNode==null) {
                        return currentNode;
                    
                    }
                    currentNode=currentNode.nextNode;
                }
        },
        append : function(value){
            if(this.head.nodeValue==null){
                let newNode = node();
                newNode.nodeValue=value;
                this.head=newNode;
            }else{
                let currentNode= this.head;
                while (currentNode!=null) {
                    if (currentNode.nextNode==null) {
                        let newNode = node();
                        newNode.nodeValue=value;
                        currentNode.nextNode=newNode;
                        break;
                    }
                    currentNode=currentNode.nextNode;
                }
               
                }
                this.size++;

        },
        prepend : function (value) {
            let newNode = node();
            newNode.nodeValue=value;
            if(this.head.nodeValue==null){
              
                this.head=newNode;
            }
            else{
                newNode.nextNode=this.head;
                this.head=newNode;
            }
            
            this.size++;
            
        },
        pop: function(){
            let currentNode= this.head;
            while (currentNode!=null) {
                if (currentNode.nextNode.nextNode==null) {
                    currentNode.nextNode=null;
                    break;
                }
                currentNode=currentNode.nextNode;
            }
            this.size--;
        },
        at: function(index){
            let currentNode= this.head;
            let i =0;
            while (currentNode!=null) {
                
                if (index==i) {
                    return currentNode;
                }
                i++;
                currentNode=currentNode.nextNode;
            }
        },
        find: function(value){
            let currentNode= this.head;
            let i = 0;
            while (currentNode!=null) {
                
                if (value==currentNode.nodeValue) {
                    return i;
                }
                i++;
                currentNode=currentNode.nextNode;
            }
            return null;
        },toString:function(){
            let currentNode= this.head;
            let string = '';
            while (currentNode!=null) {
               string+=`(${currentNode.nodeValue})->`
                
                currentNode=currentNode.nextNode;
            }
            string+='null';
            console.log(string);
        },
        contains:function(value){

            let currentNode= this.head;
            while (currentNode!=null) {
                
                if (value==currentNode.nodeValue) {
                    return true;
                }
                currentNode=currentNode.nextNode;
            }
            return false;
        },
        insertAt:function(value, index){
            let currentNode= this.head;
            let i = 0;
            let newNode=node();
            newNode.nodeValue=value;
            while (currentNode!=null) {
                if(index==0){
                    this.prepend(value);
                    return;
                }
                else if (index==i+1) {
                    newNode.nextNode=currentNode.nextNode;
                    currentNode.nextNode=newNode ;  
                }
                i++;
                currentNode=currentNode.nextNode;
            }
            this.size++;
        },
        remove:function(index){
            let currentNode= this.head;
            let i = 0;
            while (currentNode!=null) {
                if (index==0) {
                    this.head=currentNode.nextNode;
                    break;
                }
                if (index==i+1) {
                    currentNode.nextNode= currentNode.nextNode.nextNode;
                }
                currentNode=currentNode.nextNode;
                i++;
            }
           this.size--;

        }

    };
}

//Testing

let myList = linkedList();
myList.append("syria");
myList.prepend("jordan");
myList.prepend('japan');
myList.append('korea');
myList.pop();

myList.toString();
myList.insertAt('sudan',0);
myList.remove(2);
console.log();


myList.toString();
console.log(myList.size,myList.at(1),myList.contains("syria"),myList.find("london"),myList.tail());
