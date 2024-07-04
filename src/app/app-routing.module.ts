import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { HomeComponent } from './pages/home/home.component';
import { HousesComponent } from './pages/houses/houses.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AcceuilComponent } from './pages/ADMIN/acceuil/acceuil.component';
import { ClientComponent } from './pages/ADMIN/client/client.component';
import { DestinationComponent } from './pages/ADMIN/destination/destination.component';
import { OwnersComponent } from './pages/ADMIN/owners/owners.component';
import { HomesComponent } from './pages/ADMIN/homes/homes.component';
import { RoomComponent } from './pages/ADMIN/room/room.component';
import { CalendarComponent } from './pages/Owner/calendar/calendar.component';
import { ReservationComponent } from './pages/Owner/reservation/reservation.component';
import { ProfilComponent } from './pages/Owner/profil/profil.component';
import { RoomdetailsComponent } from './pages/roomdetails/roomdetails.component';
import { MyRoomComponent } from './pages/Owner/my-room/my-room.component';
import { MyHouseComponent } from './pages/Owner/my-house/my-house.component';
import { AddhouseComponent } from './pages/Owner/addhouse/addhouse.component';
import { AddroomComponent } from './pages/Owner/addroom/addroom.component';
import { MesreservationComponent } from './pages/mesreservation/mesreservation.component';
import { HousedetailsComponent } from './pages/housedetails/housedetails.component';
import { ChatComponent } from './pages/chat/chat.component';
import { CommentaireComponent } from './pages/ADMIN/commentaire/commentaire.component';



const routes: Routes = [
  { path: '', component: LoginComponent, },
  { path: 'register', component: SignupComponent, },
  { path: 'Home', component: HomeComponent, },
  { path: '   ', component: RoomsComponent, },
  { path: 'Houses', component: HousesComponent, },
  { path: 'Destinations', component: DestinationsComponent, },
  { path: 'About us', component: AboutComponent, },
  { path: 'MyReservations', component:MesreservationComponent, },
  { path: 'admin', component: AcceuilComponent, },
  { path: 'admin/users', component: ClientComponent, },
  { path: 'admin/destinations', component: DestinationComponent, },
  { path: 'admin/Owners', component: OwnersComponent, },
  { path: 'admin/Romms', component: RoomComponent, },
  { path: 'admin/Homes', component: HomesComponent, },
  { path: 'admin/Destinations', component: DestinationComponent, },
  { path: 'Owner', component: ProfilComponent, },
  { path: 'Owner/calendar', component: CalendarComponent, },
  { path: 'Owner/reservations', component: ReservationComponent, },
  { path: 'Owner/MyRoom', component: MyRoomComponent, },
  { path: 'Owner/MyHouse', component: MyHouseComponent, },
  { path: 'Owner/AddHouse', component: AddhouseComponent, },
  { path: 'Owner/AddRoom', component: AddroomComponent, },
  { path: 'HouseDetails/:id', component: HousedetailsComponent, },
  { path: 'RoomDetails/:id', component: RoomdetailsComponent, },
  { path: 'chat/:id', component: ChatComponent, },
  { path: 'admin/commentaire', component: CommentaireComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
