import{Routes} from '@angular/router'
import { HomecomponentComponent } from '../homecomponent/homecomponent.component'
import { THECHOICEComponent } from '../thechoice/thechoice.component'
import { AdvertisementcomponentComponent } from '../advertisementcomponent/advertisementcomponent.component'
import { MastercompComponent } from '../mastercomp/mastercomp.component'
import { OurstoresComponent } from '../ourstores/ourstores.component'
import { ImagecomponentComponent } from '../imagecomponent/imagecomponent.component'
import { HeritageComponentComponent } from '../heritage-component/heritage-component.component'
import { BecomeaDealerComponent } from '../becomea-dealer/becomea-dealer.component'
import { BookTestRideComponentComponent } from '../book-test-ride-component/book-test-ride-component.component'

export const myroute:Routes=[

    {path:'',component:HomecomponentComponent},
    {path:'thechoice',component:THECHOICEComponent},
  // {path:'app-mastercomp',component:MastercompComponent},
    {path:'advertisement',component:AdvertisementcomponentComponent},
    {path:'app-ourstores',component:OurstoresComponent,children:[
      {path:'app-imagecomponent',component:ImagecomponentComponent}]},
    {path:'heritage',component:HeritageComponentComponent},
    {path:'dealer',component:BecomeaDealerComponent},
    {path:'ride',component:BookTestRideComponentComponent}
  ]