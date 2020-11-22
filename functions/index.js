const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Hc4QLIunI5Guc5T31QjU39OM6YKW2hBopEUUqJxblbuGvK7Kr7ABbVddRaxqyos5kcSqLICFsMBVd4j6ZqwQdh700OsIuNY4j"
);

//-API

//-App Config

const app = express();

//-Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

//-API routes
app.get("/", (request, response) => response.status(200).send("Hello User"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved BOOM!!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "rupee",
  });

  //OK- created
  response.status(201).send({
    clientSecret: paymentIntent.clientSecret,
  });
});

//-Listen command

exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/clone-57ea9/us-central1/api
