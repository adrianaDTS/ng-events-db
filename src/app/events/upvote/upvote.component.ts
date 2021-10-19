import { Component, EventEmitter, Input, Output } from "@angular/core";
import { faHeart, fas } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.scss']
})

export class UpVote {
  // icons
  heartIcon = faHeart;
  fas = fas;

  @Input() count: number;
  @Input() voted: Boolean;

  @Output() vote = new EventEmitter();


  onClick() {
    this.vote.emit({});
  }
}