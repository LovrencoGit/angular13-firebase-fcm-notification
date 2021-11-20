/*** https://github.com/angular/angularfire/blob/master/docs/messaging/messaging.md ***/

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebase: { 
    apiKey: "{{tua_apiKey}}",   // esempio: AIzaSyDTaq8pai_7jiu5yqjiiunonoYBalrneKbKUDPfFVI
    authDomain: "{{tuo_progetto}}.firebaseapp.com",
    projectId: "{{tuo_progetto}}",
    storageBucket: "{{tuo_progetto}}.appspot.com",
    appId: "{{tuo_appId}}",     // esempio: 1:123456789012:web:687f4c27e6302771c12345
    measurementId: "{{tuo_measurementId}}", // esempio: G-8KTYZHUKNDSRREDQ
    
    messagingSenderId: "{{tuo_messagingSenderId}}" // esempio: "1234567890123"
}

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
