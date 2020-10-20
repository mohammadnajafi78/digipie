import { VjsComponent } from "./components/vjs/vjs.component";
import { SettingService } from "./services/setting.service";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  declarations: [VjsComponent],
  providers: [SettingService],
  exports: [FormsModule, ReactiveFormsModule, MaterialModule, VjsComponent],
})
export class ShareModule {}
