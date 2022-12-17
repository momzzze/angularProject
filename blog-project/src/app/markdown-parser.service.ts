import { Injectable } from '@angular/core';
import { marked } from 'marked';

@Injectable({
  providedIn: 'root'
})
export class MarkdownParserService {

  constructor() { }

  markdownParser(text: string) {
    const toHTML = text
      .replace(/^### (.*$)/gim, '<h3>$1</h3>') // h3 tag
      .replace(/^## (.*$)/gim, '<h2>$1</h2>') // h2 tag
      .replace(/^# (.*$)/gim, '<h1>$1</h1>') // h1 tag
      .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>') // bold text
      .replace(/\*(.*)\*/gim, '<i>$1</i>'); // italic text
    return toHTML.trim(); // using trim method to remove whitespace
  }
}
