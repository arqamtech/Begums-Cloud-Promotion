import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';
const http = require("http");

export const bulkPromo = functions.database.ref('Promotions/To All/{promoId}').onCreate((snapshot, context) => {
    const promoDat = snapshot.val();
    const mess: string = promoDat.Message;


    const urr1 = "http://api.msg91.com/api/sendhttp.php?country=91&sender=BEGUMS&route=4&mobiles="
    const phone = "9493726705";
    const urr2 = "&authkey=248515ASS3bXdTM6iH5bf6582b&message=";
    const urr3 = "Janata local2";
    const fU = urr1 + phone + urr2 + urr3;
    const fu1 = encodeURI(fU);
    http.get(fu1);
    console.log(mess);

    // admin.initializeApp({
    //     credential: admin.credential.applicationDefault(),
    //     databaseURL: 'https://begums-crm.firebaseio.com/'
    // });

    // admin.app().database().ref("Users").once("value", itemSnap => {
    //     itemSnap.forEach(snap => {
    //         phones.push(snap.val().Phone);
    //     })



    // console.log(phones);
    // console.log(mess);

    //     const urr1 = "http://api.msg91.com/api/sendhttp.php?country=91&sender=BEGUMS&route=4&mobiles="
    //     const phone = "9493726705";
    //     const urr2 = "&authkey=248515ASS3bXdTM6iH5bf6582b&message=Lenovo";
    //     const urr3 = mess;
    //     const fU = urr1 + phone + urr2 + urr3;
    //     http.get(fU, {
    //         headers: {
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    //         },
    //     })








    return http.get(fu1);


});


