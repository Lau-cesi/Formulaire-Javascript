

function CachaCache(event){

let Cache = (event.target).previousElementSibling;
     
  
	if(Cache.getAttribute("type") == "password"){


	 Cache.setAttribute("type","text");
	 Cache.nextElementSibling.setAttribute("src","eyeB.png");

	}else{

	 Cache.setAttribute("type","password");
	  Cache.nextElementSibling.setAttribute("src","eye.jpg");

	}

}



function main(){
let elt = document.querySelector(".Nye");


	elt.addEventListener('click', CachaCache);
}


document.addEventListener("DOMContentLoaded", main);



