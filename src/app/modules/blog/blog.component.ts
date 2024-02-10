import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
	arrPost: any[] =[
		{'titulo':"",
		'imagen': "",
		'texto': "",
		'fecha': ""}
	]

	newPost: any = {
		'titulo':"",
		'imagen': "",
		'texto': "",
		'fecha': ""
	}

	guardar(){
		if(this.newPost.titulo == "" || this.newPost.imagen == "" || this.newPost.texto == "" || this.newPost.fecha == ""){
		alert("Faltan datos");
		return;
		}

		this.arrPost.push(this.newPost);

		// hay que romper la referencia para que no repita los valores inicializando el objeto vacío
		this.newPost = {
			'titulo':"",
			'imagen': "",
			'texto': "",
			'fecha': ""
		}

	}

	cargarDatos(): string {
		let html = "";
		this.arrPost.forEach((post) => {
			html += `
			<div class="wrapper">
			<div class="blog_item">
				<div class="blog_item_img">
					<img src="${post.imagen}" alt="">
				</div>
				<div class="blog_item_content">
					<h2>${post.titulo}</h2>
					<p>${post.texto}</p>
					<p>${post.fecha}</p>
				</div>
				</div>
				</div>`
		})
		return html;
	}
}
