import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
var http = require("http");

export const bulkPromo = functions.database.ref('Promotions/To All/{promoId}').onCreate((snapshot, context) => {
    const promoDat = snapshot.val();
    const mess: string = promoDat.Message;
    const phones: Array<any> = [];


    // admin.initializeApp({
    //     credential: admin.credential.applicationDefault(),
    //     databaseURL: 'https://begums-crm.firebaseio.com/'
    // });

    admin.app().database().ref("Users").once("value", itemSnap => {
        itemSnap.forEach(snap => {
            phones.push(snap.val().Phone);
        })



        console.log(phones);
        console.log(mess);

        for (let i = 0; i < phones.length; i++) {
            const urr1 = "/api/sendhttp.php?country=91&sender=BEGUMS&route=4&mobiles="
            const urr2 = "&authkey=248515ASS3bXdTM6iH5bf6582b&message=";
            const phone = phones[i];
            const fU = encodeURI(urr1 + phone + urr2 + mess);
            var options = {
                "method": "GET",
                "hostname": "api.msg91.com",
                "path": fU,
            };
            var req = http.request(options);
            req.end();
        }



        return itemSnap.val();
    }).catch(error => {
        console.error(error);
    })





    return snapshot.val()

});


