import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ipost } from '../../interfaces/ipost.interface';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
	arrPost: Ipost[] =[
		{titulo:"Noticia 1",
		imagen: "https://picsum.photos/300/300",
		texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum erat sed orci efficitur, nec porttitor eros fermentum. Fusce hendrerit ipsum orci, ac aliquet nisl commodo sed.",
		fecha: "05/02/2024"},
		{titulo:"Noticia 2",
		imagen: "https://picsum.photos/300/300",
		texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum erat sed orci efficitur, nec porttitor eros fermentum. Fusce hendrerit ipsum orci, ac aliquet nisl commodo sed.",
		fecha: "06/02/2024"}
	]

	newPost: Ipost = {
		titulo:"",
		imagen: "",
		texto: "",
		fecha: ""
	}

	guardar(){
		if(this.newPost.titulo == "" || this.newPost.imagen == "" || this.newPost.texto == "" || this.newPost.fecha == ""){
		alert("Por favor, rellena todos los campos");
		return;
		}

		this.arrPost.push(this.newPost);

		// hay que romper la referencia para que no repita los valores inicializando el objeto vacío
		this.newPost = {
			titulo:"",
			imagen: "",
			texto: "",
			fecha: ""
		}

	}

	cargarDatos(): string {
		let html = "";
		this.arrPost.forEach((post: any) => {
			html += `

			<div class="blog_post">
				<div class="blog_item_img">
					<img class="blog_item_img" src="${post.imagen}" alt="">
				</div>
				<div class="blog_item_content">
				<p class="blog_item_fecha">Fecha de publicación ${post.fecha}</p>
				<h2 class="blog_item_titulo">${post.titulo}</h2>
				<p class="blog_item_texto">${post.texto}</p>
				</div>
				</div>
				`
		})
		return html;
	}
}
