var input = document.getElementsByClassName("rangeSlider");
var pic = document.querySelector(".picImg");

for (var i = 0; i < input.length; i++) {
  input[i].addEventListener("input",slide);
}


var val1 = 0, val2 = 0, val3 = 100, val4 = 0, val5 = 0, val6 = 100, val7 = 100;
  // invert ,hue-rotate, saturate,   sepia,  grayscale,  contrast,  brightness


function slide(){
  var span = this.parentNode.children[0].children[0];

if (this.id == "invert") {
  this.oninput = function(){
    val1 = this.value;
    span.innerText = val1;
    span.style.left = (val1 * 0.94) + "%";
    pic.style.filter = "invert(" + val1 + "%) hue-rotate(" + val2 + "deg) saturate(" + val3 + "%) sepia(" + val4 + "%) grayscale(" + val5 + "%) contrast(" + val6 + "%) brightness(" + val7 + "%)";
    span.classList.add("display");
  };
}
else if (this.id == "hue-rotate") {
  this.oninput = function(){
    val2 = this.value;
    span.innerText = val2;
    span.style.left = (((100 * val2) / 360) * 0.94) + "%";
    pic.style.filter = "invert(" + val1 + "%) hue-rotate(" + val2 + "deg) saturate(" + val3 + "%) sepia(" + val4 + "%) grayscale(" + val5 + "%) contrast(" + val6 + "%) brightness(" + val7 + "%)";
    span.classList.add("display");
  };
}
else if (this.id == "saturate") {
  this.oninput = function(){
    val3 = this.value;
    span.innerText = val3;
    span.style.left = ((val3 / 10) * 0.94) + "%";
    pic.style.filter = "invert(" + val1 + "%) hue-rotate(" + val2 + "deg) saturate(" + val3 + "%) sepia(" + val4 + "%) grayscale(" + val5 + "%) contrast(" + val6 + "%) brightness(" + val7 + "%)";
    span.classList.add("display");
  };
}
else if (this.id == "sepia") {
  this.oninput = function(){
    val4 = this.value;
    span.innerText = val4;
    span.style.left = (val4 * 0.94) + "%";
    pic.style.filter = "invert(" + val1 + "%) hue-rotate(" + val2 + "deg) saturate(" + val3 + "%) sepia(" + val4 + "%) grayscale(" + val5 + "%) contrast(" + val6 + "%) brightness(" + val7 + "%)";
    span.classList.add("display");
  };
}
else if (this.id == "grayscale") {
  this.oninput = function(){
    val5 = this.value;
    span.innerText = val5;
    span.style.left = (val5 * 0.94) + "%";
        pic.style.filter = "invert(" + val1 + "%) hue-rotate(" + val2 + "deg) saturate(" + val3 + "%) sepia(" + val4 + "%) grayscale(" + val5 + "%) contrast(" + val6 + "%) brightness(" + val7 + "%)";
    span.classList.add("display");
  };
}
else if (this.id == "contrast") {
  this.oninput = function(){
    val6 = this.value;
    span.innerText = val6;
    span.style.left = ((val6 / 10)* 0.94) + "%";
    pic.style.filter = "invert(" + val1 + "%) hue-rotate(" + val2 + "deg) saturate(" + val3 + "%) sepia(" + val4 + "%) grayscale(" + val5 + "%) contrast(" + val6 + "%) brightness(" + val7 + "%)";
    span.classList.add("display");
  };
}
else {
  this.oninput = function(){
    val7 = this.value;
    span.innerText = val7;
    span.style.left = ((val7 / 2)* 0.94) + "%";
    pic.style.filter = "invert(" + val1 + "%) hue-rotate(" + val2 + "deg) saturate(" + val3 + "%) sepia(" + val4 + "%) grayscale(" + val5 + "%) contrast(" + val6 + "%) brightness(" + val7 + "%)";
    span.classList.add("display");
  };
}

  this.onblur = function(){
    span.classList.remove("display");
  };
}












var canvasWidth,canvasHeight;

var file = document.getElementById("file");

file.addEventListener("change",function(){
  if(this.files[0].size > 6291456){
   alert("Upload smaller file sized than 6 MB");
  }
  else {
        var thisFile    = this.files[0];
        var reader  = new FileReader();

        reader.onload = function (e) {
          var image = new Image();
          image.src = e.target.result;
          image.onload = function () {
            canvasWidth = this.width;
            canvasHeight = this.height;
        }}

        reader.onloadend = function () {
          pic.src = reader.result;
          document.getElementById("download").style.pointerEvents = "auto";
        }

        if (thisFile) {
          reader.readAsDataURL(thisFile);
        }
  }
});




var download = document.getElementById("download");

download.addEventListener('click', function(e) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext('2d');
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  ctx.filter = "invert(" + val1 + "%) hue-rotate(" + val2 + "deg) saturate(" + val3 + "%) sepia(" + val4 + "%) grayscale(" + val5 + "%) contrast(" + val6 + "%) brightness(" + val7 + "%)";
  ctx.drawImage(pic,0,0, canvasWidth, canvasHeight);

  const link = document.createElement('a');
  link.download = 'download.png';
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
});
