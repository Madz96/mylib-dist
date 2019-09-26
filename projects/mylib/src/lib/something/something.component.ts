import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "mylib-something",
  templateUrl: "./something.component.html",
  styleUrls: ["./something.component.css"]
})
export class SomethingComponent implements OnInit {
  @Input() input;

  constructor() {}

  ngOnInit() {
    console.log(this.input);
  }
}
