import * as admin from "firebase-admin";

const serviceAccount = require("../../../../api-donations-firebase-adminsdk-3vxqr-8b4162dacc.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const database = admin.firestore();

export { database };
