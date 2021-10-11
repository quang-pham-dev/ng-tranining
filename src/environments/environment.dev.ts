export const environment = {
    production: false,
    name: 'dev',
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
            url: 'http://localhost:5200/profile/new',
            handleCodeInApp: true
        }
    }
};
