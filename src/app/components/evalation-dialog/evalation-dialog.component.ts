import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-dialog",
  templateUrl: "./evalation-dialog.component.html",
  styleUrls: ["./evalation-dialog.component.scss"],
})
export class EvalationDialogComponent implements OnInit {
  title: string;
  content: string;
  icon: string;
  constructor(
    public dialogRef: MatDialogRef<EvalationDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { title: string; content: string; icon: string }
  ) {
    this.title = data.title;
    this.content = data.content;
    this.icon = data.icon;
  }

  ngOnInit(): void {}
}
