import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatePostComponent } from '../create-post/create-post.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-postfeed',
  templateUrl: './postfeed.component.html',
  styleUrls: ['./postfeed.component.css']
})
export class PostfeedComponent {

  constructor(private dialog: MatDialog){}

  onCreatePostClick(){
    this.dialog.open(CreatePostComponent);
  }

  

}
