//define an observer pattern.
class EventEmitter {
  /* TODO */
  constructor(){
    this.listeners = [];
  }

  on(listenerName, callback){
    var listener = {"name":listenerName, "callback":callback};
    this.listeners.push(listener);
  }
  off(listenerName, callback){
    let index = this.listeners.findIndex(function(i){
      return listenerName ==  i.name && callback == i.callback;
    });
    this.listeners.splice(index,1);
  }
  emit(listenerName, params){
    this.listeners.map((listener)=>{
      if(listener.name == listenerName){
        return listener.callback(params);
      }
    });
  }
}

export default EventEmitter;
