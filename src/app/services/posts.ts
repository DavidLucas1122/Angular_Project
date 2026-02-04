import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = 'https://dog.ceo/api/breed';

  constructor(private http: HttpClient) { }

  getDogsByBreed(breed: string) {
    const url = `${this.apiUrl}/${breed.toLowerCase()}/images`;
    return this.http.get<any>(url);
  }
}