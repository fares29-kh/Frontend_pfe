import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CalendarOptions, Calendar, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import jwtDecode from 'jwt-decode';
import { EventCalendar, Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, AfterViewInit {
  @ViewChild('calendarEl') calendarEl!: ElementRef;
  calendar!: Calendar;
  selectedDates: Date[] = []
  userId!: string;
  events: any[] = []
  display: string = "none"
  state!: string
  reservation: any[] = []
  reservationId !: string

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    const decoded_token: any = jwtDecode(this.getCookie("token"));
    this.userId = decoded_token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
    this.getReservation(this.userId);
  }

  getReservation(id: string) {
    this.reservationService.getOwnerReservation(id).subscribe(
      data => {
        this.events = []
        data.forEach((element: any) => {
          let event = new EventCalendar()
          if (element.chambreName) {
            event.title = element.id + "." + element.chambreName
          } else if (element.maisonName) {
            event.title = element.id + "." + element.maisonName
          }
          if (element?.isConfirmed == true) {
            event.title += " (confirmée)"
         
          } else {
            event.title += " (non confirmée)"
          }
          event.start = element.date_debut.split('T')[0]
          let tmp = new Date(element.date_fin.split('T')[0])
          event.end = new Date(tmp.setDate(tmp.getDate() + 1)).toISOString().split('T')[0]
          this.events.push(event)
        });
        this.reservation = data
        this.renderCalendar();
      },
      error => {
        console.error(error);
      }
    );
  }

  ngAfterViewInit() {
    this.renderCalendar();
  }

  renderCalendar() {
    const calendarOptions: CalendarOptions = {
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
      selectable: true,
      timeZone: 'UTC',
      editable: true,
      select: this.onDateSelection.bind(this),
      events: this.events,
      eventClick: this.onEventClick.bind(this)
    };
    this.calendar = new Calendar(this.calendarEl.nativeElement, calendarOptions);
    this.calendar.render();
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  updateReservation() {
    this.reservation.filter(x => {
      if (this.reservationId == x.id) {
        let reservation = new Reservation()
        reservation.chambreId = x.chambreId
        reservation.date_debut = x.date_debut
        reservation.date_fin = x.date_fin
        reservation.maisonId = x.maisonId
        reservation.userId = x.userId
        reservation.id = x.id
        if (x?.isConfirmed == true) {
          reservation.isConfirmed = false
        } else {
          reservation.isConfirmed = true
        }
        this.reservationService.updateReservation(reservation.id, reservation).subscribe(
          data => {
            this.getReservation(this.userId)
            this.onCloseHandled();
          }
        )
      }
    })
  }

  onEventClick(arg: EventClickArg) {
    this.reservationId = arg.event.title.split('.')[0]
    if (arg.event.title.indexOf("non confirmée") != -1) {
      this.state = "confirm"
    } else {
      this.state = "refuse"
    }
    this.openModal()
  }

  isDateSelected(date: Date | null): boolean {
    return this.selectedDates.some(selectedDate =>
      selectedDate.getFullYear() === date?.getFullYear() &&
      selectedDate.getMonth() === date?.getMonth() &&
      selectedDate.getDate() === date?.getDate()
    );
  }

  onDateSelection(info: any) {
    const selectedDate = info.startStr;
  }

  getCookie(name: string): string {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return '';
  }
}
