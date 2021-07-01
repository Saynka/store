import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import App from "./App";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY)

const app = (
  <Provider store={store}>
    <BrowserRouter>
      {/* StripeProvider initializes the stripe and passes in the publishable key */}

      <Elements stripe={stripePromise}>
        <App />
      </Elements>

    </BrowserRouter>
  </Provider >
);

ReactDOM.render(app, document.getElementById("root"));
