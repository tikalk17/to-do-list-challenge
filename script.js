var nodeList = document.getElementsByTagName("LI")
var i;
for(i=0; i < nodeList.length; i++){
  var span = document.createElement("SPAN")
  var text = document.createTextNode("\u00D7")
  span.className = "close"
  span.appendChild(text)
  nodeList[i].appendChild(span)
}

var close = document.getElementsByClassName("close")
var i
for (i=0; i< close.length;i++){
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.display ="none"
  }
}

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputlist").value;
  var a = document.createTextNode(inputValue);
  li.appendChild(a);
  if (inputValue === '') {
    alert("Harap masukkan kegiatan anda!");
  } else {
    document.getElementById("daftarlist").appendChild(li);
  }
  document.getElementById("inputlist").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}