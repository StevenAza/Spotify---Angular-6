import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(image: any[]): string {

    if( !image['images'] ) {
      if(image['album']){
      return image['album']['images'][0].url;
     }
    }

    if(image['images'].length > 0 ){
        return image['images'][0].url;
    }
    else{
      return 'assets/default-placeholder.png';
    }
  }

}
