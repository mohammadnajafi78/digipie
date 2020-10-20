import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import videojs from "video.js";
@Component({
  selector: "app-vjs",
  templateUrl: "./vjs.component.html",
  styleUrls: ["./vjs.component.scss"],
})
export class VjsComponent implements OnInit {
  @ViewChild("target", { static: true }) target: ElementRef;
  @Input() src: string;
  @Input() poster: string;
  player: videojs.Player;
  constructor() {}

  ngOnInit(): void {
    this.player = videojs(this.target.nativeElement, {
      sources: {
        src: this.src,
        type: "video/mp4",
      },
      poster: this.poster,
      fluid: true,
      height: 500,
      controls: true,
      playbackRates: [0.5, 1, 1.5, 2],
    });
  }
}
