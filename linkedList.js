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

            if(count === num){
              console.log("nextNode here works",nextNode);

              if(current.next === null){

                console.log('nextNode here', nextNode);
                  previous.next = null;
                  tail = previous;
                  console.log('removed', current);
                  return current;


              }
              else{
                previous.next = nextNode;
                return previous;
              }
            }
            else{
              previous = current; //this is what gives previous
              current = current.next;
              nextNode = current.next;// this is what give next
              count++;
            }

          }
        return false;
        }

        console.log('nothign fits');

    },

    insert : function(){

    }
  };
}
