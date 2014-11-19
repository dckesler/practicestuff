function delegate (child) {
  return function anon(){
    var mathObj = this[child];
    for(var key in this){
      if(this[key] === anon){
        return mathObj[key].apply(mathObj, arguments);
      }
    }
  };
}
 
// DON'T TOUCH ANY CODE BELOW THIS
var obj = {
  math: {
    x: 2,
 
    add: function (y) {
      return this.x + y;
    },
 
    multiply: function (y) {
      return this.x * y;
    }
  },
  add: delegate('math'),
  multiply: delegate('math')
};

//obj.add(1) should return 3
//obj.multiply(3) should return 6