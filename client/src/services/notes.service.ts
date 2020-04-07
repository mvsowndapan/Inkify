import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
@Injectable({
  providedIn: "root",
})
export class NotesService {
  constructor(private http: HttpClient) {}
  private URL = environment.server_url;
  get(url: string) {
    return this.http.get(`${this.URL}${url}`);
  }
}
