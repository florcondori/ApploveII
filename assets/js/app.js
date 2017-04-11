window.addEventListener('load', function(){
	var arrayImagenes=["img-1.jpg","img-2.jpg","img-3.jpg","img-4.jpg",
						"img-5.jpg","img-6.jpg","img-7.jpg","img-10.jpg","img-11.jpg"];
		
	var divContenedorFigure = document.getElementById("contenedor-figures");
	//mostrar las imagenes dentro del section work
	var documentFragment = document.createDocumentFragment();
	arrayImagenes.forEach(function(elem){
		var figure = document.createElement("figure");
		figure.classList.add("box-work");

		var anclaImg = document.createElement("a");
		anclaImg.setAttribute("href","#");
		anclaImg.setAttribute("class","js-ancla-img");
		var img = document.createElement("img");
		img.setAttribute("src","assets/images/"+elem);
		anclaImg.appendChild(img);

		var figcaption = document.createElement("figcaption");
		figcaption.classList.add("text-uppercase");
		figcaption.classList.add("text-figure");
		figcaption.innerHTML = "Nombre de Proyecto";

		figure.appendChild(anclaImg);
		figure.appendChild(figcaption);

		documentFragment.appendChild(figure);
	});
	divContenedorFigure.appendChild(documentFragment);
	//obtener todas los enlaces con la clase "js-ancla-img"
	var arrayFigure = document.getElementsByClassName("js-ancla-img");
	var divMostrarImg = document.getElementById("div-mostrar-img");
	for(var i=0; i<arrayFigure.length; i++){
		arrayFigure[i].onclick = mostrarImagenSeleccionada;
	}
	function mostrarImagenSeleccionada(e){
		e.preventDefault();
		document.body.classList.add("overflow-hidden");					
		divMostrarImg.classList.add("mostrar-figure");
		//obtener la url de la img para crear la etiqueta img
		var urlImg = this.firstChild.getAttribute("src");
		console.log(urlImg);
		var nuevaImg = document.createElement("img");
		nuevaImg.setAttribute("src",urlImg);
		nuevaImg.classList.add("mostrar-img");		
		divMostrarImg.appendChild(nuevaImg);
		//crear el "X" para cerrar la pantalla
		var aspa = document.createElement("a");
		aspa.classList.add("cerrar-img");
		divMostrarImg.appendChild(aspa);

		var siguiente = document.createElement("a");
		siguiente.classList.add("siguiente-img");
		siguiente.style.display = "block";
		divMostrarImg.appendChild(siguiente);
		//Al ser Click a "X" se quitaran todas las clases adquiridas al momento de crearlas
		aspa.addEventListener("click", function(){
			this.parentNode.classList.remove("mostrar-figure");
			this.previousElementSibling.remove("mostrar-img");
			document.body.classList.remove("overflow-hidden");
			this.classList.remove("cerrar-img");
			this.parentNode.removeChild(aspa);
			console.log(this.nextSibling);
			siguiente.style.display="none";
		});

		siguiente.addEventListener("click",function(){
			var src = this.parentNode.firstChild.getAttribute("src");
			var url = src.replace("assets/images/","");
			var index = arrayImagenes.indexOf(url);
			console.log(index);
			if(index == arrayImagenes.length-1){
				index = -1;
			}
			this.parentNode.firstChild.src = "assets/images/"+arrayImagenes[index+1];
		});
	};

});