import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FooterComponent } from './commun/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './commun/nav/nav.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { HousesComponent } from './pages/houses/houses.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { AboutComponent } from './pages/about/about.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AcceuilComponent } from './pages/ADMIN/acceuil/acceuil.component';
import { ClientComponent } from './pages/ADMIN/client/client.component';
import { DestinationComponent } from './pages/ADMIN/destination/destination.component';
import { OwnersComponent } from './pages/ADMIN/owners/owners.component';
import { HomesComponent } from './pages/ADMIN/homes/homes.component';
import { RoomComponent } from './pages/ADMIN/room/room.component';
import { ProfilComponent } from './pages/Owner/profil/profil.component';
import { CalendarComponent } from './pages/Owner/calendar/calendar.component';
import { ReservationComponent } from './pages/Owner/reservation/reservation.component';
import { RoomdetailsComponent } from './pages/roomdetails/roomdetails.component';
import { HousedetailsComponent } from './pages/housedetails/housedetails.component';
import { MyRoomComponent } from './pages/Owner/my-room/my-room.component';
import { MyHouseComponent } from './pages/Owner/my-house/my-house.component';
import { AddhouseComponent } from './pages/Owner/addhouse/addhouse.component';
import { AddroomComponent } from './pages/Owner/addroom/addroom.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MesreservationComponent } from './pages/mesreservation/mesreservation.component';
import { PiachartComponent } from './pages/ADMIN/piachart/piachart.component';
import { CharttwoComponent } from './pages/ADMIN/charttwo/charttwo.component';
import { ChatComponent } from './pages/chat/chat.component';
import { CommentaireComponent } from './pages/ADMIN/commentaire/commentaire.component';
import { Pia2chartComponent } from './pages/Owner/pia2chart/pia2chart.component';
import { ChartthreeComponent } from './pages/Owner/chartthree/chartthree.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    HomeComponent,
    NavComponent,
    RoomsComponent,
    HousesComponent,
    DestinationsComponent,
    AboutComponent,
    ProfileComponent,
    AcceuilComponent,
    ClientComponent,
    DestinationComponent,
    OwnersComponent,
    HomesComponent,
    RoomComponent,
    ProfilComponent,
    CalendarComponent,
    ReservationComponent,
    RoomdetailsComponent,
    HousedetailsComponent,
    MyRoomComponent,
    MyHouseComponent,
    AddhouseComponent,
    AddroomComponent,
    MesreservationComponent,
    PiachartComponent,
    CharttwoComponent,
    ChatComponent,
    CommentaireComponent,
    Pia2chartComponent,
    ChartthreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
   
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
