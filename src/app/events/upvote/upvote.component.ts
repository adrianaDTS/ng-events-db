import { Component, EventEmitter, Input, Output } from "@angular/core";
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.scss']
})

export class UpVote {
  @Input() count: number;
  @Input() voted: Boolean;

  @Output() vote = new EventEmitter();


  onClick() {
    this.vote.emit({});
  }

  // Icons
  heartIcon = faHeart;
  heartIconSolid = faHeartSolid;
}