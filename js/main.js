//JS for : webRes

let p = document.getElementById("photos");
let r = document.getElementById("h2pc");
let i = 0;
let colors = ["green","blue","red","purple"];
let slideImages= ["url(images/bwdottedleaf.jpg","url(images/bwfrtextr.jpg","url(images/bwsn.jpg","url(images/bwsquash2.jpg","url(images/bwsunfrstlef.jpg","url(images/internationalTractor.jpg","url(images/sunormoon.jpg","url(images/slbtsnset2.jpg","url(images/p8.jpg"]
let l = slideImages.length;
let c = Math.floor(Math.random() * l);
let rpics = [];

	function chck(c){
		if (l<rpics.length && pics.includes(c) == false){
			
			r.style.color="white";
					rpics.push(c);
					console.log(c);
					p.style.backgroundImage=slideImages[c];
					
		} else if(i>rpics.length && rpics.includes(c) == true){
			
			c= undefined;
			let c = Math.floor(Math.random() * l);
			return;
		
		}
	};
		
document.addEventListener('click', function(e){

		if(e.target.id == "photos"&& l>rpics.length){
		
			let c = Math.floor(Math.random() * l);
			console.log(c);
			
			if(l>rpics.length && rpics.includes(c) == false){
			
					r.style.color="white";
					rpics.push(c);
					p.style.backgroundImage=slideImages[c];
			
			}else if (l>rpics.length && rpics.includes(c)==true){
				
			let c = Math.floor(Math.random() * l);
				
				chck(c);
				
				rpics.push(c);
	
			};
		} else if (l == rpics.length && rpics.includes(c) == true){
				p.style.opacity=0.2;
				}
				console.log(rpics);
	
		console.log(e.target);
	return;
		//var i=0,timer=setInterval(function(){i++},1000);
});


