var mem=0;
var curr=0;
var act;
var dec=0;

function add(x,y) {
  return x+y;
}

function substract(x,y) {
  return x-y;
}

function multiply(x,y) {
  return x*y;
}

function divide(x,y) {
  return x/y;
}

function input(x) {
  if (typeof x === 'number') {
    if (dec < 1) {
      curr = (curr*10)+x;
      return curr;
    }
    else if (dec >= 1) {
      console.log(10^dec);
      curr = curr+x/Math.pow(10,dec);
      dec += 1;
      return curr;
    }
  }
  else if (x === '=') {
    dec = 0;
    curr = calc(mem, curr, act);
    return curr;
  }
  else if (x === '.') {
    dec = 1;
    return curr;
  }
  else {
    mem = curr;
    curr = 0;
    dec = 0;
    act = x;
    return act;
  }
}

function reset() {
  curr = 0;
  mem = 0;
}

function calc(x,y,action) {
  switch (action) {
    case '+':
      return add(x,y);
      break;
    case '-':
      return substract(x,y);
      break;
    case '*':
      return multiply(x,y);
      break;
    case '/':
      return divide(x,y);
      break;
    default:
      alert('unknown action');
      break;
  }
}



$(document).ready(function(){

  $("#b1").click(function(){
    curr = input(1);
  });

  $("#b2").click(function(){
    curr = input(2);
  });

  $("#b3").click(function(){
    curr = input(3);
  });

  $("#b4").click(function(){
    curr = input(4);
  });

  $("#b5").click(function(){
    curr = input(5);
  });

  $("#b6").click(function(){
    curr = input(6);
  });

  $("#b7").click(function(){
    curr = input(7);
  });

  $("#b8").click(function(){
    curr = input(8);
  });

  $("#b9").click(function(){
    curr = input(9);
  });

  $("#b0").click(function(){
    curr = input(0);
  });

  $("#br").click(function(){
    curr = input('=');
  });

  $("#bC").click(function(){
    reset();
  });

  $(".button").click(function(){
    var str = curr.toString();
    $(".input").text(curr.toString().substring(0,9));
  });

  $("#ba").click(function(){
    act = input('+');
    $(".input").text(mem.toString().substring(0,9));
  });

  $("#bs").click(function(){
    act = input('-');
    $(".input").text(mem.toString().substring(0,9));
  });

  $("#bm").click(function(){
    act = input('*');
    $(".input").text(mem.toString().substring(0,9));
  });

  $("#bd").click(function(){
    act = input('/');
    $(".input").text(mem.toString().substring(0,9));
  });

  $("#bp").click(function(){
    curr = input('.');
    $(".input").text(curr.toString().substring(0,9));
  });


  

/*  $(".input").append(curr);
    
  console.log(curr);


  $('#b1').on('click', function(){ 
    $('.input').empty();
//    input(1);
    console.log(curr);
    $('.input').append(curr);
    }
    */
})
