import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Notifica } from '../notifiche';
import { NotificationsService } from '../service/notifications.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public token?: String;
  public lastNotifica?: Notifica;
  public notifiche: Array<Notifica> = [];


  constructor(public notificationsService: NotificationsService) {
  }

  ngOnInit(): void {
    this.listenMessages();
  }

  // addNotifica() {
  //   if(this.token !== ''){
  //     let newNotifica: Notifica = {
  //       info: 'ciao',
  //       data: moment().format('YYYY-MM-DDThh:mm:ss.SSSZ')
  //     }
  //     this.notifiche.splice(this.notifiche.length, 1, newNotifica)

  //     this.lastNotifica = newNotifica;
  //   }
  // }

  login() {
    //this.notificationsService.login();
    //this.token = this.notificationsService.firebaseRegistrationToken;
    this.notificationsService.login().then((firebaseRegistrationToken) => {
      this.token = firebaseRegistrationToken;
      console.log("LOGIN ", this.token );
    });
  }

  logout() {
    this.notificationsService.logout().then(() => {
      this.token = undefined;
      this.lastNotifica = undefined;
      this.notifiche = [];
      console.log("LOGOUT ", this.token );
    });
  }

  listenMessages(){
    this.notificationsService.listen().then((notifica) => {
      console.log("MESSAGE ", notifica );
      this.lastNotifica = notifica;
      this.notifiche.splice(this.notifiche.length, 1, notifica);

      this.listenMessages();
    });
  }

}
