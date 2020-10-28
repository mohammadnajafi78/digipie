import { EvalationDialogComponent } from "./../../../components/evalation-dialog/evalation-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { Component, OnInit } from "@angular/core";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import { ViewportScroller } from "@angular/common";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.scss"],
})
export class MovieDetailComponent implements OnInit {
  slideConfig: SwiperConfigInterface = {
    spaceBetween: 10,
    slidesPerView: 2,
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      720: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1600: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
  };

  constructor(
    private readonly dialog: MatDialog,
    private _vps: ViewportScroller
  ) {}

  ngOnInit(): void {}

  scrollFn(anchor: string): void {
    this._vps.scrollToAnchor(anchor);
  }

  openDialog(title: string, content: string, icon: string): void {
    this.dialog.open(EvalationDialogComponent, {
      width: "500px",
      data: {
        title,
        content,
        icon,
      },
    });
  }
}
