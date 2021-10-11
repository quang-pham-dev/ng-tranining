// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    name: 'default',
    firebase: {
        config: {
            apiKey: 'AIzaSyDm42gvMrleyMqeFBie8RDL6Y6YEY4gq5w',
            authDomain: 'courseapp-3cbec.firebaseapp.com',
            databaseURL: 'https://courseapp-3cbec.firebaseio.com',
            projectId: 'courseapp-3cbec',
            storageBucket: 'courseapp-3cbec.appspot.com',
            messagingSenderId: '180836863766',
            appId: '1:180836863766:web:6851bd302ae3ed12beca37'
        },
        actionCodeSettings: {
            url: 'http://localhost:5200/demo',
            handleCodeInApp: true
        }
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
