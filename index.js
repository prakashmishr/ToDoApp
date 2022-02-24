var items = [];
var newTodo = null;

function main() {
  var leftDiv = document.createElement("div");
  var rightDiv = document.createElement("div");
  document.body.appendChild(leftDiv);
  document.body.appendChild(rightDiv);

  leftDiv.setAttribute("id", "leftDiv");
  rightDiv.setAttribute("id", "rightDiv");

  // ==============leftDiv===============
  //leftDiv.innerHTML = "leftDiv";
  //rightDiv.innerHTML='rightDiv';

  var h1 = document.createElement("h1");
  leftDiv.appendChild(h1);
  h1.innerHTML = "ToDo App";

  var p = document.createElement("p");
  leftDiv.appendChild(p);
  p.innerHTML = "Add To your list by typing it in right side";

  // ==============rightDiv===============
  var input = document.createElement("textarea");
  rightDiv.appendChild(input);
  input.setAttribute("id", "input");
  input.setAttribute("placeholder", "Type Here to add item in list");
  input.addEventListener("keydown", inputBox);
}

main();

function inputBox(event) {
  // console.log(event);
  var keyCode = event.code;
  var inp = document.getElementById("input");
  var value = input.value;
  if (newTodo === null) {
    if (keyCode === "Enter" && value != "") {
      //console.log(value);
      event.preventDefault();
      //console.log(input.value);
      var div = document.createElement("div");
      var item = document.createElement("p");
      var read = document.createElement("button");
      var del = document.createElement("button");
      var cross = document.createElement("button");

      div.appendChild(item);
      div.appendChild(read);
      div.appendChild(del);
      div.appendChild(cross);

      //  var inp = document.getElementById('input');
      item.innerHTML = value;
      read.innerHTML = "edit";
      del.innerHTML = "X";
      cross.innerHTML = "done";

      var left = document.getElementById("leftDiv");
      //console.log(left);
      left.appendChild(div);

      div.setAttribute("id", "text-div");
      item.setAttribute("id", "text");
      read.setAttribute("class", "button");
      del.setAttribute("class", "button2");

      del.onclick = fun2;
      function fun2() {
        left.removeChild(div);
        items.pop();
        localStorage.removeItem("items");
      }

      cross.onclick = fun4;
      function fun4() {
        // var done = document.createElement('bold');
        //  item.appendChild(done);
        if (item.id != "strike") {
          item.setAttribute("id", "strike");
          console.log("done");
        } else {
          item.removeAttribute("id", "strike");
        }
      }

      read.addEventListener("click", function (event) {
        console.log(event.target);
        inp.value = item.innerHTML;
        newTodo = item;
        var keyCode = event.code;
      });
      // function fun3() {

      //  // console.log(item.innerHTML);
      //   inp.value=item.innerHTML;
      //   newTodo = item;
      //   console.log(newTodo);
      //   newTodo.innerHTML=inp.value;
      //   //item.innerHTML=value;
      // }

      del.onclick = fun2;
      function fun2() {
        left.removeChild(div);
        items.pop();
        //localStorage.removeItem('this.items');
      }

      items.push(inp.value);
      localStorage.setItem("items", JSON.stringify(items));
      inp.value = "";
    }
  } else if (keyCode === "Enter") {
    newTodo.innerHTML = inp.value;
    console.log("clicked :)");
    console.log(newTodo);
    newTodo = null;
    items.pop();
    localStorage.removeItem("items");
    items.push(inp.value);
    localStorage.setItem("items", JSON.stringify(items));
    inp.value = "";
  }
}

let preItem = localStorage.getItem("items");
if (preItem !== null) {
  items = JSON.parse(preItem);
}

items.forEach(function (data) {
  var div = document.createElement("div");
  var item = document.createElement("p");
  var read = document.createElement("button");
  var del = document.createElement("button");
  var cross = document.createElement("button");

  div.appendChild(item);
  div.appendChild(read);
  div.appendChild(del);
  div.appendChild(cross);

  //    // var inp = document.getElementById('input');
  item.innerHTML = data;
  read.innerHTML = "edit";
  del.innerHTML = "X";
  cross.innerHTML = "done";

  var left = document.getElementById("leftDiv");
  // console.log(left);
  left.appendChild(div);

  div.setAttribute("id", "text-div");
  read.setAttribute("class", "button");
  del.setAttribute("class", "button2");
  // console.log(data);

  del.onclick = fun2;
  function fun2() {
    left.removeChild(div);
    items.pop();
  }

  cross.onclick = fun4;
  function fun4() {
    // var done = document.createElement('bold');
    //  item.appendChild(done);
    if (item.id != "strike") {
      item.setAttribute("id", "strike");
      console.log("done");
    } else {
      item.removeAttribute("id", "strike");
    }
  }

  read.addEventListener("click", function (event) {
    console.log(event.target);
  var inp = document.getElementById("input");
    inp.value = item.innerHTML;
    newTodo = item;
    var keyCode = event.code;
  });
});
