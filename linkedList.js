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
        tail = newNode;
        return head;
      }

    },

    get : function(){

    },

    remove : function(){

    },

    insert : function(){

    }
  };


}