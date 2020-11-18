import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-star-rating",
  templateUrl: "./star-rating.component.html",
  styleUrls: ["./star-rating.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class StarRatingComponent implements OnInit {
  // default star rates
  @Input() rating = 1;
  // count of stars
  @Input() starCount = 5;
  // color of styles
  @Input() color = "gold";
  // size of icons
  @Input() size = 24;
  // disable button
  @Input() readonly = false;
  // onChange rating
  @Output() private ratingUpdated = new EventEmitter();

  public ratingArr = [];

  constructor() {}

  ngOnInit(): void {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }
  onClick(rating: number): boolean {
    this.rating = rating;
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index: number): string {
    if (this.rating >= index + 1) {
      return "star";
    } else {
      return "star_border";
    }
  }
}
