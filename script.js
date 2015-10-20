function doIt(theExpression){
	try{
		var total = eval(theExpression);

	} catch(e){
		if(e instanceof SyntaxError){
			alert("ERROR! ERROR!! ERROR Numbers are required to compute... Error!");
			alert(e);
			return;
		}
	}
	if(total == 42){
		var snd = new Audio("spaceship.m4a");
		snd.play();
		var element = document.getElementById('meaning'),
			left = -500,
			lastFrame = +new Date,
			timer;
			// Move the element right 600px
		timer = setInterval(function(){
			var now = +new Date,
			deltaT = now - lastFrame;
			element.style.left = (left += 15 * deltaT / 16) +"px";
			lastFrame = now;
			//clear the time and stop animation
			if(left > 3000){
				clearInterval(timer);
			}
		}, 16);
	}
	Calc.Input.value = total;
}