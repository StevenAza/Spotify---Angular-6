import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'domsanity'
})
export class DomsanityPipe implements PipeTransform {
  constructor(private dom: DomSanitizer){}
  transform(value: string): any {
    const url = 'https://open.spotify.com/embed?uri='
    return this.dom.bypassSecurityTrustResourceUrl(url+value);
  }

}
