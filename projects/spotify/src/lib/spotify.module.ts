import { NgModule } from '@angular/core';
import { SpotifyComponent } from './spotify.component';
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [SpotifyComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [SpotifyComponent]
})
export class SpotifyModule { }
