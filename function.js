

function ans(){
  var x1 = parseInt(document.querySelector("#x1").value);
  var x2 = parseInt(document.querySelector("#x2").value);
  var y1 = parseInt(document.querySelector("#y1").value);
  var y2 = parseInt(document.querySelector("#y2").value);
  var m = 0;
  var b = 0;

  m = (y2-y1)/(x2-x1);
  b = y1 - x1*m;
  if(b==0){
    if(m>1){
    $("#real_m").addClass("m");
    document.querySelector(".m").innerHTML = m;
   }
   if(m == -1){
     $("#info_x").html("<h3>-x</h3>");
   }
   if(m==0){
     $("#info_x").html("<h3>0</h3>");
   }
  }
  if(b<0){
    if(m > 1){
      $("#real_m").addClass("m");
      document.querySelector(".m").innerHTML = m;
    }
    if(m == -1){
      $("#info_x").html("<h3>-x</h3>");
    }
    if(m == 0){
      $("#info_x").html("<h3></h3>");
    }
    $("#real_b").addClass("b");
    document.querySelector(".b").innerHTML = b;
  }
  if(b>0){
    if(m == 1){
      $("#info_x").html("<h3>x+<h3>");
    }
    if(m > 1){
      $("#info_x").html("<h3>x+<h3>");
      $("#real_m").addClass("m");
      document.querySelector(".m").innerHTML = m;
    }
    if(m == -1){
      $("#info_x").html("<h3>-x+</h3>");
    }
    if(m == 0){
      $("#info_x").html("<h3></h3>");
    }
    $("#real_b").addClass("b");
    document.querySelector(".b").innerHTML = b;
  }
  $("#whole_div").removeClass("unready");
  $("#whole_div").addClass("ready");
}


function clr(){
  $("#whole_div").html("<h3 id='whole'>f(x)=<h3 id='real_m'><h3><h3 id='info_x'>x</h3><h3 id='real_b'></h3></h3>");
  $("#whole_div").removeClass("ready");
  $("#whole_div").addClass("unready");
}
