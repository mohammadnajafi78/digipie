import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  phoneControl = new FormControl("", [
    Validators.required,
    Validators.pattern(/0?[1-9][0-9]{9}/),
  ]);
  keyControl = new FormControl("", [
    Validators.required,
    Validators.pattern(/[0-9]{6}/),
  ]);
  ageControl = new FormControl("", [
    Validators.required,
    Validators.min(1300),
    Validators.max(1399),
  ]);
  constructor() {}

  ngOnInit(): void {}
}
