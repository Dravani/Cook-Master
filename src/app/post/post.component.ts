import { Component, Input, OnInit } from '@angular/core';
import { PostData } from '../postfeed/postfeed.component';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { MatDialog } from '@angular/material/dialog';
import { ReplyComponent } from '../reply/reply.component';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postData!: PostData;
  creatorName!: string;
  creatorDescription!: string;
  firestore = new FirebaseTSFirestore();
  constructor(private dialog: MatDialog){}


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getCreatorInfo();
  }

  onReplyClick() {
    this.dialog.open(ReplyComponent, {data: this.postData.postId});
  }

  getCreatorInfo() {
    this.firestore.getDocument(
      {
        path: ["Users", this.postData.creatorId],
        onComplete: result => {
          let userDocument = result.data();
          this.creatorName = userDocument?.['publicName'];
          this.creatorDescription = userDocument?.['description'];
        }
      }
    );
  }
  get CreatorName(){
    return this.creatorName;
  }
  get CreatorDes(){
    return this.creatorDescription;
  }


}

;

