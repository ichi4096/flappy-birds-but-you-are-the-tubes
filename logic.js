var space=250; //px
var score=0;
var grav=0.3;
var cV=0;
if(Math.floor(Math.random()*2)===0){
	//document.body.style.backgroundImage="url('https://cdn.pixabay.com/photo/2017/10/31/09/47/good-night-2904747__340.jpg')";
}else{
	//document.body.style.backgroundImage="url('https://www.praevention.com/wp-content/uploads/2017/06/sonne.jpg')";
}
function start(){
	var i=0;
	var pos=100;
	for(i=0;i<5;i++){
		var meh=Math.floor(Math.random()*(500-space));
		document.body.innerHTML+='<img src="reverse_tube.png" alt="meh" class="revTube">';
		document.body.innerHTML+='<img src="tube.png" alt="meh" class="tube">';
		document.getElementsByClassName("revTube")[i].style.top=(-500+meh)+"px";
		document.getElementsByClassName("tube")[i].style.top=(meh+space)+"px";
		document.getElementsByClassName("revTube")[i].style.left=pos+"px";
		document.getElementsByClassName("tube")[i].style.left=pos+"px";
		pos+=100;
	}
	setInterval(animate,20);
}
function animate(){
	var i;
	cV+=grav;
	for(i=0;i<5;i++){
		document.getElementsByClassName("tube")[i].style.top=parseInt(document.getElementsByClassName("tube")[i].style.top)+Math.floor(cV)+"px";
		document.getElementsByClassName("revTube")[i].style.top=parseInt(document.getElementsByClassName("revTube")[i].style.top)+Math.floor(cV)+"px";
	}
	var a=-1;
	for(i=0;i<5;i++){
		document.getElementsByClassName("tube")[i].style.left=(parseInt(document.getElementsByClassName("tube")[i].style.left)-1)+"px";
		if(parseInt(document.getElementsByClassName("tube")[i].style.left)<70){
			if(270>parseInt(document.getElementsByClassName("tube")[i].style.top)){
				alert("lost! Score: "+score);
				location.reload();
			}
			a=i;
		}
		document.getElementsByClassName("revTube")[i].style.left=(parseInt(document.getElementsByClassName("revTube")[i].style.left)-1)+"px";
		if(parseInt(document.getElementsByClassName("revTube")[i].style.left)<70){
			if(230-500<parseInt(document.getElementsByClassName("revTube")[i].style.top)){
				alert("lost! Score: "+score);
				location.reload();
			}
		}
		if(a!=-1){
			var meh=Math.floor(Math.random()*(500-space));
			document.getElementsByClassName("revTube")[a].style.top=(-500+meh)+"px";
			document.getElementsByClassName("tube")[a].style.top=(meh+space)+"px";
			document.getElementsByClassName("revTube")[a].style.left="580px";
			document.getElementsByClassName("tube")[a].style.left="580px";
			score++;
			document.getElementById("score").innerHTML="Score: "+score;
			a=-1;
		}
	}
}
document.addEventListener('keydown', function(event) {
   	cV=-5;
});
