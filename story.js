function myfunction(){
  

    var x = document.getElementById("animal").value;
    localStorage.setItem("item1",x);
  
    // console.log(localStorage.getItem("item1"));


    var y = document.getElementById("another2").value;
    localStorage.setItem("item2",y);

    // window.location.href='story.html';

    var z = document.getElementById("moreanimal").value;
    localStorage.setItem("item3",z);


    var m = document.getElementById("alarmed").value;
    localStorage.setItem("item4",m);

    var n = document.getElementById("ing").value;
    localStorage.setItem("item5",n);

    var o = document.getElementById("num").value;
    localStorage.setItem("item6",o);



    if (document.getElementById('male').checked) {
        var p = document.getElementById('male').value;
        localStorage.setItem("item7",p);
      }
      else if(document.getElementById('female').checked)
      {
        var p = document.getElementById('female').value;
        localStorage.setItem("item7",p);
      }
      else{
          var p="Yes"
          localStorage.setItem("item7",p);
      }


      var q = document.getElementById("selection").value;
      localStorage.setItem("item8",q);


      var r = document.getElementById("mquote").value;
      localStorage.setItem("item9",r);


      var s = document.getElementById("txtarea").value;
      localStorage.setItem("item10",s);
     
   
}

function orignalstory(){
    localStorage.setItem("item1","Tiger");
    localStorage.setItem("item2","Lion");
    localStorage.setItem("item3","Yes");
    localStorage.setItem("item4","quicker");
    localStorage.setItem("item5","alarmed");
    localStorage.setItem("item6","dog");
    localStorage.setItem("item7","example")
    localStorage.setItem("item8","running");
    localStorage.setItem("item9","2");
    localStorage.setItem("item10","This is meaning messgae");
 

}





for (var i = 0; i < 8; i++) {

    document.getElementsByClassName("animal1")[i].innerHTML = localStorage.getItem("item1");
}

for (var i = 0; i < 8; i++) {
    document.getElementsByClassName("another_animal1")[i].innerHTML = localStorage.getItem("item2");
}

document.getElementById("moreanimal1").innerHTML = localStorage.getItem("item3");

document.getElementById("alarmed1").innerHTML = localStorage.getItem("item4");

for (var i = 0; i < 3; i++) {
    document.getElementsByClassName("ing1")[i].innerHTML = localStorage.getItem("item5");
}

document.getElementById("num1").innerHTML = localStorage.getItem("item6");

document.getElementById("radiobtn").innerHTML = localStorage.getItem("item7");

document.getElementById("selection1").innerHTML = localStorage.getItem("item8");

document.getElementById("mquote1").innerHTML = localStorage.getItem("item9");

document.getElementById("txtarea1").innerText = localStorage.getItem("item10");





 








