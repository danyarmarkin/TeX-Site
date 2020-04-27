(function () {

  var QUEUE = MathJax.Hub.queue;  // shorthand for the queue
  var math = null;
              // the element jax for the math output.
  QUEUE.Push(function () {
    math = MathJax.Hub.getAllJax("answer1")[0];
  });
  window.UpdateMath = function (TeX) {
    QUEUE.Push(["Text",math,"\\displaystyle{"+TeX+"}"]);
  }
})();
