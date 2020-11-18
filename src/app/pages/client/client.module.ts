import { EvalationDialogComponent } from "./../../components/evalation-dialog/evalation-dialog.component";
import { FooterComponent } from "./../../components/footer/footer.component";
import { ClientTemplateComponent } from "./../../templates/client-template/client-template.component";
import { HeaderComponent } from "./../../components/header/header.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShareModule } from "src/app/share.module";
import { SwiperModule } from "ngx-swiper-wrapper";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { StarRatingComponent } from "src/app/components/star-rating/star-rating.component";
const routes: Routes = [
  {
    path: "",
    component: ClientTemplateComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "detail", component: MovieDetailComponent },
      { path: "profile", component: ProfileComponent },
    ],
  },
  { path: "login", component: LoginComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    MovieDetailComponent,
    ClientTemplateComponent,
    FooterComponent,
    LoginComponent,
    ProfileComponent,
    EvalationDialogComponent,
    StarRatingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShareModule,
    SwiperModule,
  ],
})
export class ClientModule {}
