import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MastercompComponent } from './mastercomp/mastercomp.component';
import { THECHOICEComponent } from './thechoice/thechoice.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { AdvertisementcomponentComponent } from './advertisementcomponent/advertisementcomponent.component';
import { RouterModule } from '@angular/router';
import { myroute } from './Route/route.config';
import { OurstoresComponent } from './ourstores/ourstores.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { HeritageComponentComponent } from './heritage-component/heritage-component.component';
import { BecomeaDealerComponent } from './becomea-dealer/becomea-dealer.component';
import { BookTestRideComponentComponent } from './book-test-ride-component/book-test-ride-component.component';
// import { CustomModule } from './Route/custome.module';

@NgModule({
  declarations: [
    AppComponent,
    MastercompComponent,
    THECHOICEComponent,
    HomecomponentComponent,
    // CustomModule,
    ImagecomponentComponent,
    OurstoresComponent,
   AdvertisementcomponentComponent,
   HeritageComponentComponent,
   BecomeaDealerComponent,
   BookTestRideComponentComponent,
    
    //ImagecomponentComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(myroute)

  ],
  providers: [],
  bootstrap: [MastercompComponent]
})
export class AppModule { }
