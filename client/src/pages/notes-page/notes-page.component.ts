import { Component, OnInit } from "@angular/core";
import { NotesService } from "src/services/notes.service";

@Component({
  selector: "app-notes-page",
  templateUrl: "./notes-page.component.html",
  styleUrls: ["./notes-page.component.css"],
})
export class NotesPageComponent implements OnInit {
  public notes;

  constructor(private notes_services: NotesService) {}

  ngOnInit(): void {
    this.notes_services.get("/notes").subscribe((data) => (this.notes = data));
  }
}
