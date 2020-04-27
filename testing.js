(function () {

  var QUEUE = MathJax.Hub.queue;  // shorthand for the queue
  var math = null;
              // the element jax for the math output.
  QUEUE.Push(function () {
    math1 = MathJax.Hub.getAllJax("answer1")[0];
    math2 = MathJax.Hub.getAllJax("answer2")[0];
    math3 = MathJax.Hub.getAllJax("answer3")[0];
    math4 = MathJax.Hub.getAllJax("answer4")[0];
    math5 = MathJax.Hub.getAllJax("answer5")[0];
  });
  window.UpdateMath = function (num,TeX) {
    if(num == 1){
      QUEUE.Push(["Text",math1,"\\displaystyle{"+TeX+"}"]);
    }else if(num == 2){
      QUEUE.Push(["Text",math2,"\\displaystyle{"+TeX+"}"]);
    }else if(num == 3){
      QUEUE.Push(["Text",math3,"\\displaystyle{"+TeX+"}"]);
    }else if(num == 4){
      QUEUE.Push(["Text",math4,"\\displaystyle{"+TeX+"}"]);
    }else if(num == 5){
      QUEUE.Push(["Text",math5,"\\displaystyle{"+TeX+"}"]);
    }
  }
})();
