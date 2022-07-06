import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  messages: string[] = [];

  addLog(message: string) {
    this.messages.push(message);
  }
  clearLog() {
    this.messages = [];
  }
  constructor() {}
}
