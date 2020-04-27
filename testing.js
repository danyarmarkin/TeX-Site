(function () {

  var QUEUE = MathJax.Hub.queue;  // shorthand for the queue
  var math = null;
              // the element jax for the math output.
  QUEUE.Push(function () {
    math1 = MathJax.Hub.getAllJax("answer1")[0];
    math2 = MathJax.Hub.getAllJax("answer2")[0];
  });
  window.UpdateMath = function (num,TeX) {
    if(num == 1){
      QUEUE.Push(["Text",math1,"\\displaystyle{"+TeX+"}"]);
    }else if(num == 2){
      QUEUE.Push(["Text",math2,"\\displaystyle{"+TeX+"}"]);
    }else if(num == 3){

    }
      
  }
})();
