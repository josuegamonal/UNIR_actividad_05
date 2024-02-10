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
	arrPost: any[] =[{}]

	newPost: any = {
		'titulo':"",
		'imagen': "",
		'texto': "",
		'fecha': ""
	}

	guardar(){
		this.arrPost.push(this.newPost);
		this.newPost = {
			'titulo':"",
			'imagen': "",
			'texto': "",
			'fecha': ""
		}
		console.log(this.arrPost);

	}

}
