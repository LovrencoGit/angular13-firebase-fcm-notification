import { Injectable, NgModule } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { mergeMapTo } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';

import * as moment from 'moment';
import { Notifica } from '../notifiche';

/*** https://github.com/angular/angularfire/blob/master/docs/messaging/messaging.md ***/

@Injectable({
    providedIn: 'root',
})
export class NotificationsService {

    constructor(private afMessaging: AngularFireMessaging) {  
    }


    login() : Promise<string> {
        const promise = new Promise<string>((resolve, reject) => {
            this.afMessaging.requestToken.subscribe(
                (token) => { 
                    console.log('Permission granted! Save to the server!', token);
                    resolve(token!);
                },
                (error) => {
                    console.log('FIREBASE LOGIN ERROR : ', error); 
                    resolve(error);
                } 
            );
        });
        return promise;           
    }
        
        
    logout() : Promise<void> {
        const promise = new Promise<void>((resolve, reject) => {
            this.afMessaging.getToken
                .pipe( mergeMap(token => this.afMessaging.deleteToken(token!)) ).subscribe(
                () => { 
                    console.log('Token deleted!'); 
                    resolve()
                },
                (error) => {
                    console.log('FIREBASE LOGOUT ERROR : ', error); 
                    resolve();
                }
            );

        });
        return promise;           
    }


    listen() : Promise<Notifica>{
        const promise = new Promise<Notifica>((resolve, reject) => {
            this.afMessaging.messages.subscribe(
                (message) => { 
                    console.log('FIREBASE MESSAGE RECEIVED : ', message.notification);
                    let title = message.notification?.title;
                    let body = message.notification?.body;
                    let img = message.notification?.image;
                    let lastNotification = {
                        info: title + ' --- ' + body + " --- " + img,
                        data: moment().format('YYYY-MM-DDTHH:mm:ss.SSSZ')
                    }
                    resolve(lastNotification!);
                },
                (error) => {
                    console.log('FIREBASE MESSAGE RECEIVED ERROR : ', error);
                    resolve(error);
                }
            )
        });
        return promise;
    }

}
  

