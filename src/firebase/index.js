import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase'

export const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD2yzXMXx7SOmRIXpGTN6yrP7c31WTiWdU",
    authDomain: "vuejsbeginer.firebaseapp.com",
    databaseURL: "https://vuejsbeginer.firebaseio.com",
    projectId: "vuejsbeginer",
    storageBucket: "vuejsbeginer.appspot.com",
    messagingSenderId: "569812098406",
    appId: "1:569812098406:web:32963692fb835e07"
})

// export const db = firebaseApp.database();