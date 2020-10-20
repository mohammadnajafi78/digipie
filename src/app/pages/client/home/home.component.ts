import { BreakpointObserver } from "@angular/cdk/layout";
import { Component, OnInit } from "@angular/core";
import { SettingService } from "src/app/services/setting.service";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  isSmallScreen = false;
  slideIndex: number;
  slideConfig: SwiperConfigInterface = {
    loop: true,
    slidesPerView: 2,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  evaluatorSlide: SwiperConfigInterface = {
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    public settingService: SettingService
  ) {}

  ngOnInit(): void {
    this.isSmallScreen = this.breakpointObserver.isMatched(
      "(max-width: 768px)"
    );
  }
}
