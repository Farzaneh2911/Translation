const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});
const sgMail = require("@sendgrid/mail");

// Initialize Firebase Admin
admin.initializeApp();
const db = admin.firestore();

// Set SendGrid API Key
sgMail.setApiKey(functions.config().sendgrid.apikey);
exports.helloWorld = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      res.set("Access-Control-Allow-Origin", "*");
      res.set("Access-Control-Allow-Methods", "GET, POST");
      res.set("Access-Control-Allow-Headers", "Content-Type");
      if (req.method === "OPTIONS") {
        res.status(204).send("");
        return;
      }
      const {Email} = req.query;
      if (!Email) {
        throw new Error("Email parameter is required");
      }
      const documentSnapshot = await db.collection("documents")
          .where("email", "==", Email).get();
      if (documentSnapshot.empty) {
        throw new Error("Document not found for the provided email");
      }
      const documentData =documentSnapshot.docs[0].data();
      const htmlContent = `
       <p>Thank you for your order!</p>
       <p><strong>First Name:</strong> ${documentData.firstName}</p>
       <p><strong>Last Name:</strong> ${documentData.lastName}</p>
       <p><strong>Email:</strong> ${documentData.email}</p>
       <p><strong>Phone:</strong> ${documentData.phone}</p>
       <p><strong>Translate From:</strong> ${documentData.translateFrom}</p>
       <p><strong>Translate To:</strong> ${documentData.translateTo}</p>
       <p><strong>Word Count:</strong> ${documentData.wordcount}</p>
       <p><strong>Price:</strong> ${documentData.price}</p>
       <p>You will receive your translation by the specified delivery date.</p>
     `;

      const adminEmail = {
        to: "admin@example.com",
        from: "no-reply@example.com",
        subject: "New Order Received",
        html: htmlContent,
      };

      await sgMail.send(adminEmail);

      const customerEmail = {
        to: Email,
        from: "farhaghighatbin@gmail.com",
        subject: "Order Confirmation",
        html: htmlContent,
      };

      await sgMail.send(customerEmail);

      res.status(200).send("Emails sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send(`Error sending email: ${error.message}`);
    }
  });
});
