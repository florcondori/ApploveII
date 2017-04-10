window.addEventListener('load', function(){
	var arrayImagenes=["img-1.jpg","img-2.jpg","img-3.jpg","img-4.jpg",
						"img-5.jpg","img-6.jpg","img-7.jpg","img-10.jpg","img-11"];
	var arrayFigure = document.getElementsByTagName("a");
	console.log(arrayFigure);

		arrayFigure[4].onclick= function(e){
			e.preventDefault();
		console.log(this.nextElementSibling);
this.nextElementSibling.nextElementSibling.classList.add("mostrar-figure");
}
});