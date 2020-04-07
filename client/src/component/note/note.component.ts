import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-note",
  templateUrl: "./note.component.html",
  styleUrls: ["./note.component.css"],
})
export class NoteComponent implements OnInit {
  @Input() note;
  constructor() {}
  ngOnInit(): void {}
  add_to_favorites(note) {
    console.log(note);
  }
  on_note_click(note) {
    console.log(note);
  }
}
