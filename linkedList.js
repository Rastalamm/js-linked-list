/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  var head = null;
  var tail = null;

  return {
    getHead : function(){
      return head;
    },

    getTail : function(){
      return tail;
    },

    add : function(data){
      var newNode = {
        value : data,
        next : null
      };

      if(head === null){
        head = newNode;
        tail = head;
        return head;
      }else{
        tail.next = newNode;
        tail = newNode;
        return head;
      }
    },

    get : function(num){
      var count = 0;
      var current  = head;

        while (current !== null && count <= num){

          if(count === num){
            return current;
          }else{
            current = current.next;
            count++;
          }
        }
       return false;
    },

    remove : function(num){
      var count = 0;
      var current  = head;
      var previous;
      var nextNode;

      if(num === 0 ){
            head = head.next;
            return head;
      }else{

        while (current !== null && count <= num){

          if(count < num){
            if(nextNode === null){
              return false;
              }
            previous = current; //this is what gives previous
            current = current.next;
            nextNode = current.next;// this is what give next
            count++;
          }else{
            if(current.next === null){
              previous.next = null;
              tail = previous;
              return false;
              }
              else{
                previous.next = nextNode;
                return previous.current;
              }
          }
        }
        return false;
        }
    },

    insert : function(value, index){
      var count = 0;
      var current  = head;
      var previous;
      var nextNode;
      var newNode = {
          value : value,
          next : null
      };

        while (current !== null && count <= index){

          if(count === index){

            newNode.next = current;
            previous.next = newNode;
            //newNode.next = current;
            console.log('here is where is ends up');
            return newNode;
          }else{

            previous = current; //this is what gives previous
            current = current.next;
            nextNode = current.next;// this is what give next
            count++;
          }
        }
       return false;
    }
  };
}
