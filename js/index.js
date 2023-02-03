var hoverArea = document.getElementById('foo');
var hoverborder = document.getElementsByClassName("my-class:after");
	var audio = document.getElementById('myAudio');
	hoverArea.onmouseover= function(){
		audio.play();
	}
	hoverArea.onmouseout= function(){
		audio.pause();
	}    
  var element = document.getElementById("foo");
  element.classList.add("my-class");
  