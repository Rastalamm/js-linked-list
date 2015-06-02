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

    remove : function(){

    },

    insert : function(){

    }
  };
}
