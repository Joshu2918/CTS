import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApiMessage {
  id: number;
  roomId: number;
  sender: string;
  text: string;
  time: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatApiService {

  private readonly http = inject(HttpClient);

  getMessages(): Observable<ApiMessage[]> {
  return this.http.get<ApiMessage[]>('http://localhost:3000/messages');
}
}