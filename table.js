
function Clear(){
  var input = document.getElementById('MathInput');
  input.value="";
  UpdateMath(input.value);
}

function addNewFormula(Formula){
  var el = document.getElementById('MathInput');
  var val = el.value, endIndex, range, doc = el.ownerDocument;
  if(el.focus() == false){
    el.value = el.value + Formula;
  }else if (typeof el.selectionStart == "number"
          && typeof el.selectionEnd == "number") {
      endIndex = el.selectionEnd;
      el.value = val.slice(0, endIndex) + Formula + val.slice(endIndex);
      el.selectionStart = el.selectionEnd = endIndex + Formula.length+(offset?offset:0);
  } else if (doc.selection != "undefined" && doc.selection.createRange) {
      el.focus();
      range = doc.selection.createRange();
      range.collapse(false);
      range.text = Formula;
      range.select();
  }
  //UpdateMath(document.getElementById('MathInput').value);

}
function addEnter(){
  var input = document.getElementById('MathInput');
  input.value+='\\\\'+'\n';
  alert(getCaretPos('buffer'));
  UpdateMath(input.value);
}
function codeExample(num){
  var input = document.getElementById('MathInput');
  if(num == 1){
    input.value='\\dfrac{\\sqrt{x}-2\\cdot\\dfrac{1}{x}}{(x^2+4x-3)\\cdot\\sqrt{x-4}}=\\dfrac{5x^3}{5^{x+2}}';
  }
  if(num == 2){
    input.value='\\sum_{i=1}^{100}i=1+2+3+4+\\dots+98+99+100.';
  }
  if(num == 3){
    input.value='\\left(a+b\\right)^2=a^2+2ab+b^2';
  }
  if(num == 4){
    input.value='\\left(a+b\\right)\\left(a-b\\right)\\not=a^2+b^2';
  }
  if(num == 5){
    input.value='5!=1\\times 2\\times 3\\times 4\\times 5=120.';
  }
  if(num == 6){
    input.value='\\begin{cases} \n x+y=\\sqrt{xy} \\\\ \n x-y = \\sqrt{\\dfrac{x}{y}} \n \\end{cases}';
  }

  UpdateMath(input.value);
}
function typeInTextarea(el, newText) {
  //var el = getElementById('MathInput');
  var start = el.prop("selectionStart");
  var end = el.prop("selectionEnd");
  var text = el.val();
  var before = text.substring(0, start);
  var after = text.substring(end, text.length);
  el.val(before + newText + after); el[0].selectionStart = el[0].selectionEnd = start + newText.length;
  el.focus();
  return false;
  UpdateMath(el.value);
}
function insertTextAtCursor(el, text, offset) {
    var val = el.value, endIndex, range, doc = el.ownerDocument;
    if (typeof el.selectionStart == "number"
            && typeof el.selectionEnd == "number") {
        endIndex = el.selectionEnd;
        el.value = val.slice(0, endIndex) + text + val.slice(endIndex);
        el.selectionStart = el.selectionEnd = endIndex + text.length+(offset?offset:0);
    } else if (doc.selection != "undefined" && doc.selection.createRange) {
        el.focus();
        range = doc.selection.createRange();
        range.collapse(false);
        range.text = text;
        range.select();
    }
}
