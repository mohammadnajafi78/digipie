import { SettingService } from "./../../services/setting.service";
import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

@Component({
  selector: "app-client-template",
  templateUrl: "./client-template.component.html",
  styleUrls: ["./client-template.component.scss"],
})
export class ClientTemplateComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public settingService: SettingService
  ) {}
}
