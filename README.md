# AngularFcmDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


-----------------------------------
    @author CERNICH LORIS
-----------------------------------

## Firebase tutorial site (@author: Cernich Loris)

Tutorial: https://github.com/angular/angularfire/blob/master/docs/messaging/messaging.md

## How change firebase project

Edit firebase configuration in src/firebase-messaging-sw.js and src/environments/environment.ts

## How send a firebase notification with REST Client

POST https://fcm.googleapis.com/fcm/send

Authorization: key={{server key}}                   // esempio: AAAAMZlKUtc:APA91bElLIB3Hgthryjry3g5-THlrPB1sA-ZwT-H-3KZTa0SND8P4Nd_jwiPir6jncvsoipjjvlrYc1phuvrvZmRgBdffMpiaMCPadqeMJGmMiGcxR5TTdcV17g9W8Fy3Ov

{
	"to" : "{{firebase registration token}}",      // esempio: "cYR0_Yt-i0Gs5JejLUHcqc:APA91bGN-ROaQFkebOKYMW4ewe178X-Chs_3Yl56WbI7KsnZP-IQCnTDDqKYvccTow2VBg7sgWGVMrBmHD96fFQQ4LNmeLgP6NvJ2LMCHhxM-ICocMhFMU-DO4tRw6krRvrYdQckJs5R",

    "notification": {
		"title": "PROVA title",
		"body" : "PROVA body"
	}
}

## NOTE

- browser diversi = token diversi

- se esegui il login e chiudi la scheda o finestra del browser senza fare logout, al login successivo il token restituito sarà lo stesso

- se al momento in cui arriva la notifica il browser è in background verrà visualizzata la notifica del sistema operativo (questo solo se all'avvio sono stati dati i permessi delle notifiche al browser) 